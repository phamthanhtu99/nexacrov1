package com.web.nexacro.service;

import java.util.Map;

public interface AuthService {

    /** in: USER_NAME, EMAIL, PASSWORD, CONFIRM_PASSWORD. Returns the new USER_ID. */
    long signup(Map<String, Object> row);

    /** in: EMAIL, PASSWORD, REMEMBER (Y/N). Returns USER_ID, USER_NAME, EMAIL, TOKEN. */
    Map<String, Object> login(Map<String, Object> row);

    /** in: TOKEN saved by "Remember for 30 days". Returns the same user columns as login. */
    Map<String, Object> loginWithToken(String token);

    void logout(String token);

    /** USER_ID, USER_NAME, EMAIL of a user. */
    Map<String, Object> selectProfile(Object userId);

    /**
     * in: USER_NAME, EMAIL, and to change the password CURRENT_PASSWORD, NEW_PASSWORD, CONFIRM_PASSWORD.
     * Returns the updated USER_ID, USER_NAME, EMAIL.
     */
    Map<String, Object> updateProfile(Object userId, Map<String, Object> row);
}
