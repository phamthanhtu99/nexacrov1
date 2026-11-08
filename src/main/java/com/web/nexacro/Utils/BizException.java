package com.web.nexacro.Utils;

/**
 * A business rule failed (invalid input, duplicate key, ...).
 * The message is shown to the user as is, so keep it short and readable.
 */
public class BizException extends RuntimeException {

    public BizException(String message) {
        super(message);
    }
}
