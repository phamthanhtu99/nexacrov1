package com.web.nexacro.controller;

import com.web.nexacro.Utils.ValidationUtils;
import com.web.nexacro.service.CommonCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@Controller
@RequestMapping("/common")
public class CommonController extends BaseNexacroController {

    @Autowired
    CommonCodeService commonCodeService;

    // in : ds_cond (GROUP_CODES: "CATEGORY,RETURN_TYPE", empty for every group)
    // out: ds_code (GROUP, GROUP_NAME, CODE, CODE_NAME)
    @PostMapping("/code")
    public ModelAndView code(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) ->
                out.setDataset("ds_code", commonCodeService.select(ValidationUtils.text(row(in, "ds_cond"), "GROUP_CODES"))));
    }
}
