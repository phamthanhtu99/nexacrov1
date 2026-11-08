package com.web.nexacro.service.serviceImpl;

import com.web.nexacro.Utils.ValidationUtils;
import com.web.nexacro.mapper.SupplierMapper;
import com.web.nexacro.service.CommonCodeService;
import com.web.nexacro.service.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SupplierServiceImpl implements SupplierService {

    @Autowired
    SupplierMapper supplierMapper;

    @Autowired
    CommonCodeService commonCodeService;

    @Override
    public List<Map<String, Object>> selectList(Map<String, Object> cond) {
        Map<String, Object> param = new HashMap<>();
        param.put("KEYWORD", ValidationUtils.text(cond, "KEYWORD"));
        param.put("CATEGORY", ValidationUtils.text(cond, "CATEGORY"));
        param.put("RETURN_TYPE", ValidationUtils.text(cond, "RETURN_TYPE"));
        return supplierMapper.selectList(param);
    }

    @Override
    @Transactional
    public long insert(Map<String, Object> row) {
        ValidationUtils.required(row, "SUPPLIER_NAME", "Supplier name");
        ValidationUtils.maxLength(row, "SUPPLIER_NAME", "Supplier name", 100);
        ValidationUtils.required(row, "PRODUCT_NAME", "Product");
        ValidationUtils.maxLength(row, "PRODUCT_NAME", "Product", 100);
        ValidationUtils.required(row, "CATEGORY_CODE", "Category");
        commonCodeService.checkCode("CATEGORY", ValidationUtils.text(row, "CATEGORY_CODE"), "Category");
        ValidationUtils.decimal(row, "BUYING_PRICE", "Buying price");
        ValidationUtils.phone(row, "CONTACT_NUMBER", "Contact number");
        if (!ValidationUtils.isEmpty(row, "EMAIL")) {
            ValidationUtils.email(row, "EMAIL", "Email");
        }
        ValidationUtils.required(row, "RETURN_TYPE", "Type");
        commonCodeService.checkCode("RETURN_TYPE", ValidationUtils.text(row, "RETURN_TYPE"), "Type");
        ValidationUtils.imagePath(row, "IMAGE_DATA", "Image");

        Map<String, Object> supplier = new HashMap<>();
        for (String key : new String[]{"SUPPLIER_NAME", "PRODUCT_NAME", "CATEGORY_CODE", "BUYING_PRICE",
                "CONTACT_NUMBER", "EMAIL", "RETURN_TYPE", "IMAGE_DATA"}) {
            supplier.put(key, ValidationUtils.text(row, key));
        }
        supplierMapper.insert(supplier);
        return ((Number) supplier.get("SUPPLIER_ID")).longValue();
    }
}
