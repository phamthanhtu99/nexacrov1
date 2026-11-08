package com.web.nexacro;

import com.web.nexacro.Utils.BizException;
import com.web.nexacro.Utils.PasswordUtils;
import com.web.nexacro.Utils.ValidationUtils;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

// Plain unit tests, no Spring context and no database.
class UtilsTests {

    private static Map<String, Object> row(String key, Object value) {
        Map<String, Object> row = new HashMap<>();
        row.put(key, value);
        return row;
    }

    @Test
    void requiredRejectsBlank() {
        BizException e = assertThrows(BizException.class, () -> ValidationUtils.required(row("NAME", "  "), "NAME", "Name"));
        assertEquals("Name is required.", e.getMessage());
        assertThrows(BizException.class, () -> ValidationUtils.required(new HashMap<>(), "NAME", "Name"));
        assertDoesNotThrow(() -> ValidationUtils.required(row("NAME", "Tom"), "NAME", "Name"));
    }

    @Test
    void emailFormat() {
        assertDoesNotThrow(() -> ValidationUtils.email(row("EMAIL", "a@b.co"), "EMAIL", "Email"));
        assertThrows(BizException.class, () -> ValidationUtils.email(row("EMAIL", "a@b"), "EMAIL", "Email"));
        assertThrows(BizException.class, () -> ValidationUtils.email(row("EMAIL", "a b@c.com"), "EMAIL", "Email"));
    }

    @Test
    void numbersAndDates() {
        assertEquals(42, ValidationUtils.digits(row("QTY", "42"), "QTY", "Quantity"));
        assertThrows(BizException.class, () -> ValidationUtils.digits(row("QTY", "-1"), "QTY", "Quantity"));
        assertThrows(BizException.class, () -> ValidationUtils.digits(row("QTY", "1234567890"), "QTY", "Quantity"));
        assertDoesNotThrow(() -> ValidationUtils.decimal(row("PRICE", "12.5"), "PRICE", "Price"));
        assertThrows(BizException.class, () -> ValidationUtils.decimal(row("PRICE", "12.345"), "PRICE", "Price"));
        assertDoesNotThrow(() -> ValidationUtils.date(row("D", "20271231"), "D", "Date"));
        assertThrows(BizException.class, () -> ValidationUtils.date(row("D", "2027-12-31"), "D", "Date"));
    }

    @Test
    void minLengthAndPaging() {
        assertThrows(BizException.class, () -> ValidationUtils.minLength(row("PW", "1234567"), "PW", "Password", 8));
        assertDoesNotThrow(() -> ValidationUtils.minLength(row("PW", "12345678"), "PW", "Password", 8));
        assertEquals(10, ValidationUtils.intOrDefault(row("SIZE", "abc"), "SIZE", 10, 100));
        assertEquals(100, ValidationUtils.intOrDefault(row("SIZE", "500"), "SIZE", 10, 100));
        assertEquals(10, ValidationUtils.intOrDefault(row("SIZE", "0"), "SIZE", 10, 100));
    }

    @Test
    void passwordHash() {
        String hash = PasswordUtils.hash("secret123");
        assertTrue(PasswordUtils.matches("secret123", hash));
        assertFalse(PasswordUtils.matches("secret124", hash));
        assertNotEquals(hash, PasswordUtils.hash("secret123"), "salt makes every hash different");
        assertFalse(PasswordUtils.matches("secret123", "broken"));
        assertNotEquals(PasswordUtils.newToken(), PasswordUtils.newToken());
    }
}
