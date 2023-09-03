package com.web.nexacro.service;

import com.web.nexacro.Utils.ComCrud;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

public interface UserService extends ComCrud {
    List<Map<String,Object>> checkLogin(Map map, HttpServletRequest request);
    void updateUser(Map map);
    List<Map<String,Object>>  selectRole(Map map);
}
