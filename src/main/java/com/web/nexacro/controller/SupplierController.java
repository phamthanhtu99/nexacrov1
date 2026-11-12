package com.web.nexacro.controller;

import com.web.nexacro.Utils.ValidationUtils;
import com.web.nexacro.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("/supplier")
public class SupplierController extends BaseNexacroController {

    @Autowired
    SupplierService supplierService;

    // in : ds_cond (KEYWORD, CATEGORY, RETURN_TYPE)
    // out: ds_supplier
    @PostMapping("/list")
    public ModelAndView list(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) ->
                out.setDataset("ds_supplier", supplierService.selectList(row(in, "ds_cond"))));
    }

    // in : ds_cond (SUPPLIER_ID)
    // out: ds_supplier (one row with the image)
    @PostMapping("/detail")
    public ModelAndView detail(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) -> out.setDataset("ds_supplier",
                Collections.singletonList(supplierService.selectDetail(ValidationUtils.text(row(in, "ds_cond"), "SUPPLIER_ID")))));
    }

    // in : ds_supplier (first row, with SUPPLIER_ID)
    @PostMapping("/update")
    public ModelAndView update(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) -> supplierService.update(row(in, "ds_supplier")));
    }

    // in : ds_supplier (first row)
    // out: ds_result (SUPPLIER_ID)
    @PostMapping("/insert")
    public ModelAndView insert(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) -> {
            Map<String, Object> result = new HashMap<>();
            result.put("SUPPLIER_ID", supplierService.insert(row(in, "ds_supplier")));
            out.setDataset("ds_result", Collections.singletonList(result));
        });
    }
}
