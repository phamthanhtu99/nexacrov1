package com.web.nexacro.service.serviceImpl;

import com.web.nexacro.Utils.SessionUtils;
import com.web.nexacro.mapper.UserMapper;
import com.web.nexacro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceimpl implements UserService {
    @Autowired
    UserMapper userMapper;
    @Override
    public List<Map<String, Object>> checkLogin(Map map, HttpServletRequest request) {
        List<Map<String, Object>> resultLogin = new ArrayList<>();
        Map<String, Object> resutl = new HashMap<>();

        List<Map<String,Object>> selectlogin = userMapper.SelectRoleLogin(map);

        if (selectlogin.size() ==0 || selectlogin.isEmpty()){
            resutl.put("CODE", 1);
            return resultLogin;
        }

        if ("N".equals(selectlogin.get(0).get("PWCHK"))){
            resutl.put("CODE", 2);
            return resultLogin;
        }
        resutl.put("CODE", 0);
        resultLogin.add(resutl);
        SessionUtils.setSessionValue("USERINFO",selectlogin.get(0));
        return resultLogin;
    }
}
