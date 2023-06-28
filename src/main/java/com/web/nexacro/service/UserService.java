package com.web.nexacro.service;

import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

public interface UserService {
    List<Map<String,Object>> checkLogin(Map map, HttpServletRequest request);
    void updatePoject(Map map);
}
