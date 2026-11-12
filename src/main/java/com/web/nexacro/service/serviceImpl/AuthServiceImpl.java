package com.web.nexacro.service.serviceImpl;

import com.web.nexacro.Utils.BizException;
import com.web.nexacro.Utils.PasswordUtils;
import com.web.nexacro.Utils.ValidationUtils;
import com.web.nexacro.mapper.AuthMapper;
import com.web.nexacro.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.Map;

@Service
public class AuthServiceImpl implements AuthService {

    static final int REMEMBER_DAYS = 30;
    static final int SESSION_DAYS = 1;

    @Autowired
    AuthMapper authMapper;

    @Override
    @Transactional
    public long signup(Map<String, Object> row) {
        ValidationUtils.required(row, "USER_NAME", "Name");
        ValidationUtils.maxLength(row, "USER_NAME", "Name", 100);
        ValidationUtils.email(row, "EMAIL", "Email");
        ValidationUtils.maxLength(row, "EMAIL", "Email", 255);
        ValidationUtils.minLength(row, "PASSWORD", "Password", 8);
        if (!ValidationUtils.text(row, "PASSWORD").equals(ValidationUtils.text(row, "CONFIRM_PASSWORD"))) {
            throw new BizException("Passwords do not match.");
        }

        Map<String, Object> user = new HashMap<>();
        user.put("USER_NAME", ValidationUtils.text(row, "USER_NAME"));
        user.put("EMAIL", ValidationUtils.text(row, "EMAIL"));
        if (authMapper.selectByEmail(user) != null) {
            throw new BizException("This email is already registered.");
        }
        user.put("PASSWORD_HASH", PasswordUtils.hash(ValidationUtils.text(row, "PASSWORD")));
        authMapper.insertUser(user);
        return ((Number) user.get("USER_ID")).longValue();
    }

    @Override
    @Transactional
    public Map<String, Object> login(Map<String, Object> row) {
        ValidationUtils.email(row, "EMAIL", "Email");
        ValidationUtils.required(row, "PASSWORD", "Password");

        Map<String, Object> user = authMapper.selectByEmail(row);
        // same message for an unknown email and a wrong password
        if (user == null || !PasswordUtils.matches(ValidationUtils.text(row, "PASSWORD"), (String) user.get("PASSWORD_HASH"))) {
            throw new BizException("Email or password is incorrect.");
        }
        // a copy: MyBatis keeps the selected map in its session cache
        user = new HashMap<>(user);
        user.remove("PASSWORD_HASH");

        boolean remember = "Y".equals(ValidationUtils.text(row, "REMEMBER"));
        Map<String, Object> token = new HashMap<>();
        token.put("TOKEN", PasswordUtils.newToken());
        token.put("USER_ID", String.valueOf(user.get("USER_ID")));
        token.put("DAYS", remember ? REMEMBER_DAYS : SESSION_DAYS);
        authMapper.saveLogin(token);

        user.put("TOKEN", token.get("TOKEN"));
        return user;
    }

    @Override
    @Transactional
    public Map<String, Object> loginWithToken(String token) {
        Map<String, Object> param = new HashMap<>();
        param.put("TOKEN", token);
        Map<String, Object> user = token == null || token.isEmpty() ? null : authMapper.selectByToken(param);
        if (user == null) {
            throw new BizException("Your saved login has expired. Please log in again.");
        }
        param.put("USER_ID", String.valueOf(user.get("USER_ID")));
        authMapper.updateLastLogin(param);
        user.put("TOKEN", token);
        return user;
    }

    @Override
    public void logout(String token) {
        if (token != null && !token.isEmpty()) {
            Map<String, Object> param = new HashMap<>();
            param.put("TOKEN", token);
            authMapper.deleteToken(param);
        }
    }

    private Map<String, Object> selectUser(Object userId) {
        if (userId == null) {
            throw new BizException("Please log in again.");
        }
        Map<String, Object> param = new HashMap<>();
        param.put("USER_ID", String.valueOf(userId));
        Map<String, Object> user = authMapper.selectById(param);
        if (user == null) {
            throw new BizException("User is not found.");
        }
        return user;
    }

    @Override
    public Map<String, Object> selectProfile(Object userId) {
        // a copy: MyBatis keeps the selected map in its session cache
        Map<String, Object> user = new HashMap<>(selectUser(userId));
        user.remove("PASSWORD_HASH");
        return user;
    }

    @Override
    @Transactional
    public Map<String, Object> updateProfile(Object userId, Map<String, Object> row) {
        Map<String, Object> user = selectUser(userId);
        ValidationUtils.required(row, "USER_NAME", "Name");
        ValidationUtils.maxLength(row, "USER_NAME", "Name", 100);
        ValidationUtils.email(row, "EMAIL", "Email");
        ValidationUtils.maxLength(row, "EMAIL", "Email", 255);

        Map<String, Object> param = new HashMap<>();
        param.put("USER_ID", String.valueOf(userId));
        param.put("USER_NAME", ValidationUtils.text(row, "USER_NAME"));
        param.put("EMAIL", ValidationUtils.text(row, "EMAIL"));
        if (authMapper.countEmailOfOthers(param) > 0) {
            throw new BizException("This email is already registered.");
        }

        // the password is changed only when a new one is typed, and only with the current one
        if (!ValidationUtils.isEmpty(row, "NEW_PASSWORD")) {
            ValidationUtils.required(row, "CURRENT_PASSWORD", "Current password");
            if (!PasswordUtils.matches(ValidationUtils.text(row, "CURRENT_PASSWORD"), (String) user.get("PASSWORD_HASH"))) {
                throw new BizException("Current password is incorrect.");
            }
            ValidationUtils.minLength(row, "NEW_PASSWORD", "New password", 8);
            if (!ValidationUtils.text(row, "NEW_PASSWORD").equals(ValidationUtils.text(row, "CONFIRM_PASSWORD"))) {
                throw new BizException("Passwords do not match.");
            }
            param.put("PASSWORD_HASH", PasswordUtils.hash(ValidationUtils.text(row, "NEW_PASSWORD")));
        }
        authMapper.updateUser(param);
        return selectProfile(userId);
    }
}
