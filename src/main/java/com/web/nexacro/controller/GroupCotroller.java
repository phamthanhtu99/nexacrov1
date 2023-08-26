package com.web.nexacro.controller;

import com.web.nexacro.Utils.NexacroUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/group")
public class GroupCotroller {

    @PostMapping("/pm/createGroup")
    public ModelAndView creteGroup(HttpServletRequest request, ModelAndView modelAndView){
        NexacroUtils nexacroUtils = new NexacroUtils();
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }

    @PostMapping("/mb/selectListGroup")
    public ModelAndView selectListGroup(HttpServletRequest request, ModelAndView modelAndView){
        NexacroUtils nexacroUtils = new NexacroUtils();
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }
}
