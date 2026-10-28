package com.web.nexacro.controller;

import com.web.nexacro.Utils.NexacroUtils;
import com.web.nexacro.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    // in : ds_cond (optional: KEYWORD, DEPARTMENT, STATUS, EMPLOYEE_ID)
    // out: ds_employee
    @PostMapping("/select")
    public ModelAndView select(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map params = nexacroUtils.getParamDataSet(request);
        try {
            List<Map<String, Object>> list = employeeService.select((Map) params.get("ds_cond"));
            nexacroUtils.setDataset("ds_employee", list);
            nexacroUtils.setMessOrCode(0, "OK");
        } catch (Exception e) {
            fail(nexacroUtils, e);
        }
        return view(nexacroUtils, modelAndView);
    }

    // in : ds_employee (first row)
    @PostMapping("/insert")
    public ModelAndView insert(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map params = nexacroUtils.getParamDataSet(request);
        try {
            employeeService.insert((Map) params.get("ds_employee"));
            nexacroUtils.setMessOrCode(0, "OK");
        } catch (Exception e) {
            fail(nexacroUtils, e);
        }
        return view(nexacroUtils, modelAndView);
    }

    // in : ds_employee (first row, with EMPLOYEE_ID)
    @PostMapping("/update")
    public ModelAndView update(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map params = nexacroUtils.getParamDataSet(request);
        try {
            int rows = employeeService.update((Map) params.get("ds_employee"));
            if (rows == 0) {
                nexacroUtils.setMessOrCode(-1, "Employee not found");
            } else {
                nexacroUtils.setMessOrCode(0, "OK");
            }
        } catch (Exception e) {
            fail(nexacroUtils, e);
        }
        return view(nexacroUtils, modelAndView);
    }

    // in : ds_employee (first row, EMPLOYEE_ID only is used)
    @PostMapping("/delete")
    public ModelAndView delete(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        NexacroUtils nexacroUtils = new NexacroUtils();
        Map params = nexacroUtils.getParamDataSet(request);
        try {
            int rows = employeeService.delete((Map) params.get("ds_employee"));
            if (rows == 0) {
                nexacroUtils.setMessOrCode(-1, "Employee not found");
            } else {
                nexacroUtils.setMessOrCode(0, "OK");
            }
        } catch (Exception e) {
            fail(nexacroUtils, e);
        }
        return view(nexacroUtils, modelAndView);
    }

    private void fail(NexacroUtils nexacroUtils, Exception e) {
        Throwable cause = e.getCause() != null ? e.getCause() : e;
        String message = String.valueOf(cause.getMessage()).replaceAll("[<>&\"]", " ");
        nexacroUtils.setMessOrCode(-1, message);
    }

    private ModelAndView view(NexacroUtils nexacroUtils, ModelAndView modelAndView) {
        modelAndView.addObject("data", nexacroUtils);
        modelAndView.setViewName("nexacroView");
        return modelAndView;
    }
}
