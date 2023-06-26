package com.web.nexacro.controller;

import com.nexacro.java.xapi.data.DataSet;
import com.web.nexacro.Utils.NexacroUtils;
import com.web.nexacro.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
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
        NexacroUtils nexacroUtils = new NexacroUtils();
        nexacroUtils.setDataset("ds_main",userMapper.SelectRoleLogin(null));
        modelAndView.setViewName("nexacroView");
        modelAndView.addObject("data",nexacroUtils);
       return modelAndView;
    }

    @PostMapping("/search")
    public ModelAndView search(HttpServletRequest request,ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map param = nexacroUtils.getParamDataSet(request);

        Map input1 = (Map) param.get("dsInput");

        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }
}
