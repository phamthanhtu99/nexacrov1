package com.web.nexacro.controller;

import com.web.nexacro.Utils.NexacroUtils;
import com.web.nexacro.mapper.CommConnectSql;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Map;

@Controller
@RequestMapping("/task")
public class TaskController {
    @Autowired
    CommConnectSql commConnectSql;
    @PostMapping("/pm/createTask")
    public ModelAndView createProject(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map params = nexacroUtils.getParamDataSet(request);
        Map param = (Map) params.get("ds_cond");
        commConnectSql.insert("insertTask",param);
        modelAndView.addObject("data",nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }
}
