package com.web.nexacro;

import com.web.nexacro.Utils.BizException;
import com.web.nexacro.service.AuthService;
import com.web.nexacro.service.CommonCodeService;
import com.web.nexacro.service.ProductService;
import com.web.nexacro.service.SupplierService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

// Runs against the configured database (seeded by db/inventory.sql); @Transactional rolls every change back.
@SpringBootTest
@Transactional
class InventoryServiceTests {

    @Autowired
    AuthService authService;

    @Autowired
    CommonCodeService commonCodeService;

    @Autowired
    ProductService productService;

    @Autowired
    SupplierService supplierService;

    private static Map<String, Object> map(Object... keyValues) {
        Map<String, Object> map = new HashMap<>();
        for (int i = 0; i < keyValues.length; i += 2) {
            map.put((String) keyValues[i], keyValues[i + 1]);
        }
        return map;
    }

    @Test
    void commonCodes() {
        List<Map<String, Object>> codes = commonCodeService.select("CATEGORY,RETURN_TYPE");
        assertTrue(codes.stream().allMatch(c -> "CATEGORY".equals(c.get("GROUP")) || "RETURN_TYPE".equals(c.get("GROUP"))));
        assertTrue(codes.stream().anyMatch(c -> "TAKING".equals(c.get("CODE"))));
        assertThrows(BizException.class, () -> commonCodeService.checkCode("CATEGORY", "NOPE", "Category"));
    }

    @Test
    void signupAndLogin() {
        Map<String, Object> user = map("USER_NAME", "Unit Test", "EMAIL", "Unit.Test@Example.com",
                "PASSWORD", "password1", "CONFIRM_PASSWORD", "password1");
        assertTrue(authService.signup(user) > 0);

        BizException duplicate = assertThrows(BizException.class, () -> authService.signup(user));
        assertEquals("This email is already registered.", duplicate.getMessage());

        Map<String, Object> mismatch = new HashMap<>(user);
        mismatch.put("EMAIL", "other@example.com");
        mismatch.put("CONFIRM_PASSWORD", "password2");
        assertEquals("Passwords do not match.", assertThrows(BizException.class, () -> authService.signup(mismatch)).getMessage());

        // email is matched without case
        Map<String, Object> logged = authService.login(map("EMAIL", "unit.test@example.com", "PASSWORD", "password1", "REMEMBER", "Y"));
        assertEquals("Unit Test", logged.get("USER_NAME"));
        assertFalse(logged.containsKey("PASSWORD_HASH"));
        String token = (String) logged.get("TOKEN");
        assertNotNull(token);

        assertEquals(logged.get("USER_ID"), authService.loginWithToken(token).get("USER_ID"));
        authService.logout(token);
        assertThrows(BizException.class, () -> authService.loginWithToken(token));

        assertEquals("Email or password is incorrect.",
                assertThrows(BizException.class, () -> authService.login(map("EMAIL", "unit.test@example.com", "PASSWORD", "wrong-pass"))).getMessage());
    }

    @Test
    void productListPagingAndFilter() {
        Map<String, Object> cond = map("PAGE", "1", "PAGE_SIZE", "10");
        int total = productService.selectCount(cond);
        assertTrue(total >= 30);
        assertEquals(10, productService.selectList(cond).size());

        Map<String, Object> out = map("AVAILABILITY", "OUT", "PAGE_SIZE", "100");
        List<Map<String, Object>> outOfStock = productService.selectList(out);
        assertFalse(outOfStock.isEmpty());
        assertTrue(outOfStock.stream().allMatch(p -> ((Number) p.get("QUANTITY")).intValue() == 0));
        assertEquals(outOfStock.size(), productService.selectCount(out));

        assertEquals(1, productService.selectList(map("KEYWORD", "MAGGI")).size(), "keyword ignores case");
        assertFalse(productService.selectList(cond).get(0).containsKey("IMAGE_DATA"), "list must not carry images");
    }

    @Test
    void summary() {
        Map<String, Object> summary = productService.selectSummary();
        assertTrue(((Number) summary.get("PRODUCT_COUNT")).intValue() >= 30);
        assertTrue(((Number) summary.get("OUT_OF_STOCK")).intValue() >= 1);
    }

    @Test
    void insertProductAndReadDetail() {
        Map<String, Object> row = map("PRODUCT_NAME", "Maggi", "PRODUCT_CODE", "UT-0001", "CATEGORY_CODE", "SNACK",
                "BUYING_PRICE", "99.50", "QUANTITY", "20", "UNIT", "Packets", "EXPIRY_DATE", "20281231",
                "THRESHOLD_VALUE", "5", "IMAGE_DATA", "");
        long id = productService.insert(row, null);

        Map<String, Object> detail = productService.selectDetail(String.valueOf(id));
        assertEquals("UT-0001", detail.get("PRODUCT_CODE"));
        assertEquals("20281231", detail.get("EXPIRY_DATE"));
        assertEquals("IN", detail.get("AVAILABILITY"));
        assertEquals("Snacks", detail.get("CATEGORY_NAME"));
        assertEquals("In-stock", detail.get("AVAILABILITY_NAME"));
        assertEquals("Asha Traders", detail.get("SUPPLIER_NAME"), "supplier is matched by product name");

        List<Map<String, Object>> stock = productService.selectStock(String.valueOf(id));
        assertEquals(1, stock.size());
        assertEquals(20, ((Number) stock.get(0).get("QUANTITY")).intValue());
        List<Map<String, Object>> movement = productService.selectMovement(String.valueOf(id));
        assertEquals("PURCHASE", movement.get(0).get("MOVEMENT_TYPE"));

        BizException duplicate = assertThrows(BizException.class, () -> productService.insert(row, null));
        assertEquals("Product ID UT-0001 already exists.", duplicate.getMessage());

        Map<String, Object> badCategory = new HashMap<>(row);
        badCategory.put("PRODUCT_CODE", "UT-0002");
        badCategory.put("CATEGORY_CODE", "NOPE");
        assertThrows(BizException.class, () -> productService.insert(badCategory, null));

        assertThrows(BizException.class, () -> productService.selectDetail("abc"));
        assertThrows(BizException.class, () -> productService.selectDetail("999999999"));
    }

    @Test
    void supplierInsertAndFilter() {
        long id = supplierService.insert(map("SUPPLIER_NAME", "UT Supplier", "PRODUCT_NAME", "UT Product",
                "CATEGORY_CODE", "DAIRY", "BUYING_PRICE", "10", "CONTACT_NUMBER", "0912345678",
                "EMAIL", "", "RETURN_TYPE", "TAKING", "IMAGE_DATA", ""));
        assertTrue(id > 0);

        List<Map<String, Object>> found = supplierService.selectList(map("KEYWORD", "ut supplier"));
        assertEquals(1, found.size());
        assertEquals("TAKING", found.get(0).get("RETURN_TYPE"));
        assertEquals("Taking Return", found.get(0).get("RETURN_TYPE_NAME"));
        assertTrue(found.get(0).containsKey("EMAIL"), "null columns are kept");

        assertTrue(supplierService.selectList(map("RETURN_TYPE", "NOT_TAKING")).stream()
                .allMatch(s -> "NOT_TAKING".equals(s.get("RETURN_TYPE"))));

        assertThrows(BizException.class, () -> supplierService.insert(map("SUPPLIER_NAME", "X", "PRODUCT_NAME", "Y",
                "CATEGORY_CODE", "DAIRY", "BUYING_PRICE", "10", "CONTACT_NUMBER", "09-123", "RETURN_TYPE", "TAKING")));
    }
}
