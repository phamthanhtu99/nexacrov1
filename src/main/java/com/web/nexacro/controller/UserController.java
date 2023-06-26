package com.web.nexacro.controller;

import com.nexacro.java.xapi.data.DataSet;
import com.web.nexacro.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;
import java.util.Map;

@Controller
public class UserController {
    @Autowired
    UserMapper userMapper;


    @GetMapping("/login1")
    public List<Map<String, Object>> test(@RequestParam Map map) {
        return userMapper.SelectRoleLogin(map);
    }

    @GetMapping("/test")
    public  ModelAndView nexacro(ModelAndView modelAndView){
       modelAndView.setViewName("test");

       return modelAndView;
    }
}
