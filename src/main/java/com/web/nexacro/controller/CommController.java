package com.web.nexacro.controller;

import com.web.nexacro.Utils.NexacroUtils;
import com.web.nexacro.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Map;

@Controller
@RequestMapping("/com")
public class CommController {
    @Autowired
    GroupService groupService;

    @PostMapping("/selectListGroup")
    public ModelAndView selectListGroup(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map params = nexacroUtils.getParamDataSet(request);
        Map param = (Map) params.get("ds_cond");

        nexacroUtils.setDataset("ds_group",groupService.select(param));
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }
}
