package com.web.nexacro;

import com.web.nexacro.controller.FileController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.nio.file.Paths;

import static org.junit.jupiter.api.Assertions.assertEquals;

// With app.upload-dir empty the images go to <web app>/uploads, so no machine specific path is needed.
@SpringBootTest(properties = "app.upload-dir=")
class UploadPathTests {

    @Autowired
    FileController fileController;

    @Test
    void emptySettingUsesTheWebAppFolder() {
        assertEquals(Paths.get("src/main/webapp/uploads").toAbsolutePath(), fileController.uploadPath().toAbsolutePath());
    }
}
