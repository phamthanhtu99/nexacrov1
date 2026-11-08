package com.web.nexacro;

import com.web.nexacro.Utils.BizException;
import com.web.nexacro.Utils.NexacroUtils;
import com.web.nexacro.controller.AuthController;
import com.web.nexacro.service.ProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

// Image upload through FileController; files go to target/test-uploads.
@SpringBootTest(properties = "app.upload-dir=target/test-uploads")
@AutoConfigureMockMvc
@Transactional
class FileControllerTests {

    private static final byte[] PNG = {(byte) 0x89, 'P', 'N', 'G', 0x0D, 0x0A, 0x1A, 0x0A, 0, 0, 0, 0};

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ProductService productService;

    private static MockHttpSession loggedIn() {
        MockHttpSession session = new MockHttpSession();
        Map<String, Object> user = new HashMap<>();
        user.put("USER_ID", 1L);
        session.setAttribute(AuthController.SESSION_USER, user);
        return session;
    }

    private static NexacroUtils data(MvcResult result) {
        return (NexacroUtils) result.getModelAndView().getModel().get("data");
    }

    @Test
    void uploadImageAndReadItBack() throws Exception {
        MvcResult result = mockMvc.perform(multipart("/file/upload")
                .file(new MockMultipartFile("photo.png", "photo.png", "image/png", PNG)).session(loggedIn())).andReturn();
        NexacroUtils data = data(result);
        assertEquals(0, data.getCode(), data.getMessage());
        String path = (String) data.getDataSets().get(0).getRows().get(0).get("FILE_PATH");
        assertTrue(path.matches("file/[0-9a-f-]{36}\\.png"), path);

        mockMvc.perform(get("/" + path)).andExpect(status().isOk())
                .andExpect(header().string("Content-Type", "image/png"));

        // the stored path is accepted by the product insert
        Map<String, Object> row = new HashMap<>();
        row.put("PRODUCT_NAME", "Image Test");
        row.put("PRODUCT_CODE", "UT-IMG-1");
        row.put("CATEGORY_CODE", "SNACK");
        row.put("BUYING_PRICE", "10");
        row.put("QUANTITY", "1");
        row.put("UNIT", "Box");
        row.put("EXPIRY_DATE", "20281231");
        row.put("THRESHOLD_VALUE", "1");
        row.put("IMAGE_DATA", path);
        long id = productService.insert(row, null);
        assertEquals(path, productService.selectDetail(String.valueOf(id)).get("IMAGE_DATA"));

        // anything else is rejected
        row.put("PRODUCT_CODE", "UT-IMG-2");
        row.put("IMAGE_DATA", "http://evil.example/x.png");
        assertThrows(BizException.class, () -> productService.insert(row, null));
    }

    @Test
    void rejectsFakeOrLargeImages() throws Exception {
        MvcResult fake = mockMvc.perform(multipart("/file/upload")
                .file(new MockMultipartFile("photo.png", "photo.png", "image/png", "not an image".getBytes())).session(loggedIn())).andReturn();
        assertEquals(-2, data(fake).getCode());
        assertEquals("Please choose a PNG, JPG or GIF image.", data(fake).getMessage());

        byte[] big = new byte[5 * 1024 * 1024 + 1];
        System.arraycopy(PNG, 0, big, 0, PNG.length);
        MvcResult large = mockMvc.perform(multipart("/file/upload")
                .file(new MockMultipartFile("big.png", "big.png", "image/png", big)).session(loggedIn())).andReturn();
        assertEquals("Image must be 5 MB or smaller.", data(large).getMessage());
    }

    @Test
    void uploadNeedsLoginAndNamesAreChecked() throws Exception {
        String body = mockMvc.perform(multipart("/file/upload")
                .file(new MockMultipartFile("photo.png", "photo.png", "image/png", PNG))).andReturn().getResponse().getContentAsString();
        assertTrue(body.contains(">-99<"), body);

        mockMvc.perform(get("/file/..%2Fapplication.properties")).andExpect(status().isNotFound());
        mockMvc.perform(get("/file/00000000-0000-0000-0000-000000000000.png")).andExpect(status().isNotFound());
    }
}
