package com.web.nexacro.Utils;

import java.util.Map;
import java.util.regex.Pattern;

/**
 * Common server side validation. Nexacro sends every value as a string,
 * so the checks work on the raw dataset map and throw BizException with
 * the message that the client shows.
 */
public final class ValidationUtils {

    private static final Pattern EMAIL = Pattern.compile("^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$");
    private static final Pattern DIGITS = Pattern.compile("^\\d+$");
    private static final Pattern DECIMAL = Pattern.compile("^\\d+(\\.\\d{1,2})?$");
    private static final Pattern YYYYMMDD = Pattern.compile("^\\d{8}$");
    private static final Pattern IMAGE_PATH = Pattern.compile(
            "^file/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\\.(png|jpg|gif)$");

    private ValidationUtils() {
    }

    public static String text(Map<String, Object> row, String key) {
        Object value = row == null ? null : row.get(key);
        return value == null ? "" : String.valueOf(value).trim();
    }

    public static boolean isEmpty(Map<String, Object> row, String key) {
        return text(row, key).isEmpty();
    }

    public static void required(Map<String, Object> row, String key, String label) {
        if (isEmpty(row, key)) {
            throw new BizException(label + " is required.");
        }
    }

    public static void email(Map<String, Object> row, String key, String label) {
        required(row, key, label);
        if (!EMAIL.matcher(text(row, key)).matches()) {
            throw new BizException(label + " is invalid.");
        }
    }

    public static void minLength(Map<String, Object> row, String key, String label, int min) {
        required(row, key, label);
        if (text(row, key).length() < min) {
            throw new BizException(label + " must be at least " + min + " characters.");
        }
    }

    public static void maxLength(Map<String, Object> row, String key, String label, int max) {
        if (text(row, key).length() > max) {
            throw new BizException(label + " must be " + max + " characters or fewer.");
        }
    }

    public static int digits(Map<String, Object> row, String key, String label) {
        required(row, key, label);
        String value = text(row, key);
        if (!DIGITS.matcher(value).matches() || value.length() > 9) {
            throw new BizException(label + " must be a whole number.");
        }
        return Integer.parseInt(value);
    }

    /** Optional image: empty, or a path returned by /file/upload ("file/<uuid>.png"). */
    public static void imagePath(Map<String, Object> row, String key, String label) {
        String value = text(row, key);
        if (!value.isEmpty() && !IMAGE_PATH.matcher(value).matches()) {
            throw new BizException(label + " is invalid. Please upload it again.");
        }
    }

    public static void phone(Map<String, Object> row, String key, String label) {
        required(row, key, label);
        String value = text(row, key);
        if (!DIGITS.matcher(value).matches() || value.length() < 9 || value.length() > 15) {
            throw new BizException(label + " must be 9 to 15 digits.");
        }
    }

    public static void decimal(Map<String, Object> row, String key, String label) {
        required(row, key, label);
        if (!DECIMAL.matcher(text(row, key)).matches()) {
            throw new BizException(label + " must be a number.");
        }
    }

    public static void date(Map<String, Object> row, String key, String label) {
        required(row, key, label);
        if (!YYYYMMDD.matcher(text(row, key)).matches()) {
            throw new BizException(label + " is not a valid date.");
        }
    }

    public static void oneOf(Map<String, Object> row, String key, String label, String... allowed) {
        required(row, key, label);
        String value = text(row, key);
        for (String a : allowed) {
            if (a.equals(value)) {
                return;
            }
        }
        throw new BizException(label + " is invalid.");
    }

    /** Page number / size from the request, with defaults and an upper bound for the size. */
    public static int intOrDefault(Map<String, Object> row, String key, int defaultValue, int max) {
        String value = text(row, key);
        if (!DIGITS.matcher(value).matches() || value.length() > 6) {
            return defaultValue;
        }
        int number = Integer.parseInt(value);
        return number < 1 ? defaultValue : Math.min(number, max);
    }
}
