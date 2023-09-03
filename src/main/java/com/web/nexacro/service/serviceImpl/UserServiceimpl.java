package com.web.nexacro.service.serviceImpl;

import com.web.nexacro.Utils.SessionUtils;
import com.web.nexacro.mapper.UserMapper;
import com.web.nexacro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class UserServiceimpl  implements UserService {
    @Autowired
    UserMapper userMapper;
    @Override
    public List<Map<String, Object>> checkLogin(Map map, HttpServletRequest request) {
        boolean lgChk= true;

        List<Map<String, Object>> resultLogin = new ArrayList<>();
        Map<String, Object> resutl = new HashMap<>();

        List<Map<String,Object>> selectlogin = userMapper.SelectRoleLogin(map);

        if (selectlogin.isEmpty()){
            lgChk= false;
            resutl.put("CODE", 1);
            resutl.put("MSQ", "USER NOT EXIT !");
            resultLogin.add(resutl);
            return resultLogin;
        }

        if ("N".equals(selectlogin.get(0).get("PWCHK"))){
            lgChk= false;
            resutl.put("CODE", 2);
            resutl.put("MSQ", "Invalid password !");
            resultLogin.add(resutl);
            return resultLogin;
        }

        resutl.put("CODE", 0);
        resutl.put("MSQ", "Login SUCCESS!");

        resutl.putAll(selectlogin.get(0));
        resultLogin.add(resutl);
        SessionUtils.setSessionValue("USERINFO",selectlogin.get(0));
        return resultLogin;
    }

    @Override
    public void updateUser(Map map) {
        userMapper.insertProject(map);
    }

    @Override
    public List<Map<String, Object>> selectRole(Map map) {
        return  userMapper.selectRole(map);
    }

    @Override
    public List<Map<String, Object>> select(Map map) {
        return null;
    }

    @Override
    public int insert(Map map) {
        return 0;
    }

    @Override
    public int update(Map map) {
        return 0;
    }

    @Override
    public int delete(Map map) {
        return 0;
    }
}
