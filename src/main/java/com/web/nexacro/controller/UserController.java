package com.web.nexacro.controller;


import com.web.nexacro.Utils.NexacroUtils;
import com.web.nexacro.Utils.SessionUtils;
import com.web.nexacro.mapper.UserMapper;
import com.web.nexacro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class UserController {
    @Autowired
    UserService userService;


    @PostMapping("/login")
    public ModelAndView search(HttpServletRequest request,ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map param = nexacroUtils.getParamDataSet(request);
        Map input1 = (Map) param.get("dsInput");

        nexacroUtils.setDataset("ds_output",userService.checkLogin(input1,request));
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }

    @GetMapping("/notification/{code}")
    public ModelAndView login(HttpServletRequest request,ModelAndView modelAndView,@PathVariable int code) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        nexacroUtils.setCode(code);
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }

    @PostMapping("/insertUser")
    public ModelAndView insertProject(HttpServletRequest request,ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        //Map params = nexacroUtils.getParamDataSet(request);
       // Map param = (Map) params.get("ds_insert");

        Map param = new HashMap();
        param.put("USER_NM","TU1");
        param.put("PWD","123123");
        param.put("PHONE","0366925447");
        param.put("ADDRESS","QN");
        param.put("ROLE_ID","2");
        userService.updateUser(param);

        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }

    @PostMapping("/logout")
    public ModelAndView logout(HttpServletRequest request,ModelAndView modelAndView){
        NexacroUtils nexacroUtils = new NexacroUtils();
        //Map params = nexacroUtils.getParamDataSet(request);
        // Map param = (Map) params.get("ds_insert");

        SessionUtils.removeSession(null);
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }

    @PostMapping("/com/selectRole")
    public ModelAndView selectRole(HttpServletRequest request,ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map params = nexacroUtils.getParamDataSet(request);
        Map param = (Map) params.get("ds_cond");

        nexacroUtils.setDataset("ds_owner",userService.selectRole(param));
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }

}
