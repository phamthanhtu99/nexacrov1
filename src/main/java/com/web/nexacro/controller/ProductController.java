package com.web.nexacro.controller;

import com.web.nexacro.Utils.SessionUtils;
import com.web.nexacro.Utils.ValidationUtils;
import com.web.nexacro.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/product")
public class ProductController extends BaseNexacroController {

    private static final String[] EXPORT_COLUMNS = {"PRODUCT_CODE", "PRODUCT_NAME", "CATEGORY_CODE", "BUYING_PRICE",
            "QUANTITY", "UNIT", "EXPIRY_DATE", "THRESHOLD_VALUE", "AVAILABILITY"};

    @Autowired
    ProductService productService;

    // in : ds_cond (KEYWORD, CATEGORY, AVAILABILITY, PAGE, PAGE_SIZE)
    // out: ds_product (one page), ds_page (TOTAL_COUNT)
    @PostMapping("/list")
    public ModelAndView list(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) -> {
            Map<String, Object> cond = row(in, "ds_cond");
            List<Map<String, Object>> rows = productService.selectList(cond);
            out.setDataset("ds_product", rows);
            Map<String, Object> page = new HashMap<>();
            // every row carries TOTAL_COUNT; an empty page (after the last one) needs the count query
            page.put("TOTAL_COUNT", rows.isEmpty() ? productService.selectCount(cond) : rows.get(0).get("TOTAL_COUNT"));
            out.setDataset("ds_page", Collections.singletonList(page));
        });
    }

    // out: ds_summary (dashboard metrics of the inventory screen)
    // GET too: Nexacro sends a transaction without input datasets and arguments as GET
    @RequestMapping(value = "/summary", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView summary(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) ->
                out.setDataset("ds_summary", Collections.singletonList(productService.selectSummary())));
    }

    // in : ds_cond (PRODUCT_ID)
    // out: ds_product (one row with supplier columns), ds_stock, ds_movement
    @PostMapping("/detail")
    public ModelAndView detail(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) -> {
            String productId = ValidationUtils.text(row(in, "ds_cond"), "PRODUCT_ID");
            out.setDataset("ds_product", Collections.singletonList(productService.selectDetail(productId)));
            out.setDataset("ds_stock", productService.selectStock(productId));
            out.setDataset("ds_movement", productService.selectMovement(productId));
        });
    }

    // in : ds_product (first row)
    // out: ds_result (PRODUCT_ID)
    @PostMapping("/insert")
    public ModelAndView insert(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) -> {
            Map<?, ?> user = (Map<?, ?>) SessionUtils.getSession(AuthController.SESSION_USER);
            long productId = productService.insert(row(in, "ds_product"), user == null ? null : user.get("USER_ID"));
            Map<String, Object> result = new HashMap<>();
            result.put("PRODUCT_ID", productId);
            out.setDataset("ds_result", Collections.singletonList(result));
        });
    }

    // in : ds_product (first row, with PRODUCT_ID); the quantity is not changed
    @PostMapping("/update")
    public ModelAndView update(HttpServletRequest request, ModelAndView modelAndView) throws IOException {
        return execute(request, modelAndView, (in, out) -> productService.update(row(in, "ds_product")));
    }

    // "Download all": every product that matches the current search, as CSV for Excel
    @GetMapping("/export")
    public void export(@RequestParam(defaultValue = "") String KEYWORD,
                       @RequestParam(defaultValue = "") String CATEGORY,
                       @RequestParam(defaultValue = "") String AVAILABILITY,
                       HttpServletResponse response) throws IOException {
        Map<String, Object> cond = new HashMap<>();
        cond.put("KEYWORD", KEYWORD);
        cond.put("CATEGORY", CATEGORY);
        cond.put("AVAILABILITY", AVAILABILITY);
        List<Map<String, Object>> rows = productService.selectExport(cond);

        response.setContentType("text/csv; charset=UTF-8");
        response.setHeader("Content-Disposition", "attachment; filename=\"products.csv\"");
        response.setCharacterEncoding(StandardCharsets.UTF_8.name());
        PrintWriter writer = response.getWriter();
        writer.write('﻿'); // BOM so Excel reads UTF-8
        writer.println(String.join(",", EXPORT_COLUMNS));
        for (Map<String, Object> r : rows) {
            StringBuilder line = new StringBuilder();
            for (int i = 0; i < EXPORT_COLUMNS.length; i++) {
                if (i > 0) {
                    line.append(',');
                }
                line.append(csv(r.get(EXPORT_COLUMNS[i])));
            }
            writer.println(line);
        }
        writer.flush();
    }

    static String csv(Object value) {
        String text = value == null ? "" : String.valueOf(value);
        // a leading = + - @ would run as a formula in Excel
        if (!text.isEmpty() && "=+-@".indexOf(text.charAt(0)) >= 0) {
            text = "'" + text;
        }
        if (text.contains(",") || text.contains("\"") || text.contains("\n")) {
            text = "\"" + text.replace("\"", "\"\"") + "\"";
        }
        return text;
    }
}
