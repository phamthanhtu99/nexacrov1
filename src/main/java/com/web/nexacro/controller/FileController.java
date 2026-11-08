package com.web.nexacro.controller;

import com.web.nexacro.Utils.NexacroUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.CacheControl;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletContext;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.TimeUnit;
import java.util.regex.Pattern;

/**
 * Image upload for the product / supplier popups (Nexacro FileUpTransfer, works in the
 * browser and in Nexacro Runtime). The file is stored in uploadPath() with a random
 * name; the database keeps the path "file/<name>" that GET /file/<name> serves.
 */
@Controller
@RequestMapping("/file")
public class FileController {

    private static final Logger log = LoggerFactory.getLogger(FileController.class);

    static final long MAX_IMAGE_BYTES = 5L * 1024 * 1024;
    /** stored names are always "<uuid>.<png|jpg|gif>" */
    public static final Pattern STORED_NAME = Pattern.compile("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\\.(png|jpg|gif)$");

    /** empty: the uploads folder inside the running web app (see uploadPath) */
    @Value("${app.upload-dir:}")
    String uploadDir;

    @Autowired
    ServletContext servletContext;

    /**
     * Folder of the images, without a machine specific path:
     * app.upload-dir when it is set, otherwise <web app>/uploads
     * (src/main/webapp/uploads when run from the project, webapps/ROOT/uploads on Tomcat).
     */
    public Path uploadPath() {
        if (uploadDir != null && !uploadDir.trim().isEmpty()) {
            return Paths.get(uploadDir.trim()).toAbsolutePath();
        }
        String realPath = servletContext.getRealPath("/uploads");
        // a WAR run without unpacking has no real path: fall back to the user home
        return realPath != null ? Paths.get(realPath) : Paths.get(System.getProperty("user.home"), "kanban-uploads");
    }

    // in : multipart file (first file of the request)
    // out: ds_file (FILE_PATH)
    @PostMapping("/upload")
    public ModelAndView upload(MultipartHttpServletRequest request, ModelAndView modelAndView) {
        NexacroUtils out = new NexacroUtils();
        try {
            Iterator<String> names = request.getFileNames();
            MultipartFile file = names.hasNext() ? request.getFile(names.next()) : null;
            String error = check(file);
            if (error != null) {
                out.setMessOrCode(BaseNexacroController.BIZ_ERROR, error);
            } else {
                String extension = imageExtension(file.getBytes());
                String storedName = UUID.randomUUID() + "." + extension;
                Path dir = uploadPath();
                Files.createDirectories(dir);
                file.transferTo(dir.resolve(storedName).toAbsolutePath());

                Map<String, Object> row = new HashMap<>();
                row.put("FILE_PATH", "file/" + storedName);
                out.setDataset("ds_file", Collections.singletonList(row));
                out.setMessOrCode(0, "OK");
            }
        } catch (IOException e) {
            log.error("Image upload failed", e);
            out.setMessOrCode(-1, "Could not save the image.");
        }
        modelAndView.addObject("data", out);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }

    private static String check(MultipartFile file) throws IOException {
        if (file == null || file.isEmpty()) {
            return "Please choose an image.";
        }
        if (file.getSize() > MAX_IMAGE_BYTES) {
            return "Image must be 5 MB or smaller.";
        }
        if (imageExtension(file.getBytes()) == null) {
            return "Please choose a PNG, JPG or GIF image.";
        }
        return null;
    }

    /** Extension from the first bytes of the file, null when it is not a PNG, JPG or GIF. */
    static String imageExtension(byte[] bytes) {
        if (bytes.length >= 8 && (bytes[0] & 0xFF) == 0x89 && bytes[1] == 'P' && bytes[2] == 'N' && bytes[3] == 'G') {
            return "png";
        }
        if (bytes.length >= 3 && (bytes[0] & 0xFF) == 0xFF && (bytes[1] & 0xFF) == 0xD8 && (bytes[2] & 0xFF) == 0xFF) {
            return "jpg";
        }
        if (bytes.length >= 6 && bytes[0] == 'G' && bytes[1] == 'I' && bytes[2] == 'F' && bytes[3] == '8') {
            return "gif";
        }
        return null;
    }

    // the names are random, so the images can be served without a session
    // (Nexacro ImageViewer does not always send the session cookie)
    @GetMapping("/{name:.+}")
    public ResponseEntity<byte[]> image(@PathVariable String name) throws IOException {
        if (!STORED_NAME.matcher(name).matches()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        Path path = uploadPath().resolve(name);
        if (!Files.isRegularFile(path)) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        MediaType type = name.endsWith(".png") ? MediaType.IMAGE_PNG
                : name.endsWith(".gif") ? MediaType.IMAGE_GIF : MediaType.IMAGE_JPEG;
        // a stored file never changes, so the browser may cache it for a long time
        return ResponseEntity.ok().contentType(type)
                .cacheControl(CacheControl.maxAge(30, TimeUnit.DAYS))
                .body(Files.readAllBytes(path));
    }
}
