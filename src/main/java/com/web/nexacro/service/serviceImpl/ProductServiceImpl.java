package com.web.nexacro.service.serviceImpl;

import com.web.nexacro.Utils.BizException;
import com.web.nexacro.Utils.ValidationUtils;
import com.web.nexacro.mapper.ProductMapper;
import com.web.nexacro.service.CommonCodeService;
import com.web.nexacro.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProductServiceImpl implements ProductService {

    static final int DEFAULT_PAGE_SIZE = 10;
    static final int MAX_PAGE_SIZE = 100;
    static final String MAIN_WAREHOUSE = "Main Warehouse";

    @Autowired
    ProductMapper productMapper;

    @Autowired
    CommonCodeService commonCodeService;

    private Map<String, Object> condition(Map<String, Object> cond) {
        Map<String, Object> param = new HashMap<>();
        param.put("KEYWORD", ValidationUtils.text(cond, "KEYWORD"));
        param.put("CATEGORY", ValidationUtils.text(cond, "CATEGORY"));
        param.put("AVAILABILITY", ValidationUtils.text(cond, "AVAILABILITY"));
        int pageSize = ValidationUtils.intOrDefault(cond, "PAGE_SIZE", DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE);
        int page = ValidationUtils.intOrDefault(cond, "PAGE", 1, 100000);
        param.put("PAGE_SIZE", pageSize);
        param.put("OFFSET", (page - 1) * pageSize);
        return param;
    }

    @Override
    public List<Map<String, Object>> selectList(Map<String, Object> cond) {
        return productMapper.selectList(condition(cond));
    }

    @Override
    public int selectCount(Map<String, Object> cond) {
        return productMapper.selectCount(condition(cond));
    }

    @Override
    public List<Map<String, Object>> selectExport(Map<String, Object> cond) {
        return productMapper.selectExport(condition(cond));
    }

    @Override
    public Map<String, Object> selectSummary() {
        return productMapper.selectSummary();
    }

    private Map<String, Object> idParam(String productId) {
        if (productId == null || !productId.matches("\\d{1,18}")) {
            throw new BizException("Product is not found.");
        }
        Map<String, Object> param = new HashMap<>();
        param.put("PRODUCT_ID", productId);
        return param;
    }

    @Override
    public Map<String, Object> selectDetail(String productId) {
        Map<String, Object> product = productMapper.selectDetail(idParam(productId));
        if (product == null) {
            throw new BizException("Product is not found.");
        }
        return product;
    }

    @Override
    public List<Map<String, Object>> selectStock(String productId) {
        return productMapper.selectStock(idParam(productId));
    }

    @Override
    public List<Map<String, Object>> selectMovement(String productId) {
        return productMapper.selectMovement(idParam(productId));
    }

    @Override
    @Transactional
    public long insert(Map<String, Object> row, Object userId) {
        ValidationUtils.required(row, "PRODUCT_NAME", "Product name");
        ValidationUtils.maxLength(row, "PRODUCT_NAME", "Product name", 100);
        ValidationUtils.required(row, "PRODUCT_CODE", "Product ID");
        ValidationUtils.maxLength(row, "PRODUCT_CODE", "Product ID", 30);
        ValidationUtils.required(row, "CATEGORY_CODE", "Category");
        commonCodeService.checkCode("CATEGORY", ValidationUtils.text(row, "CATEGORY_CODE"), "Category");
        ValidationUtils.decimal(row, "BUYING_PRICE", "Buying price");
        int quantity = ValidationUtils.digits(row, "QUANTITY", "Quantity");
        ValidationUtils.required(row, "UNIT", "Unit");
        ValidationUtils.maxLength(row, "UNIT", "Unit", 20);
        ValidationUtils.date(row, "EXPIRY_DATE", "Expiry date");
        ValidationUtils.digits(row, "THRESHOLD_VALUE", "Threshold value");
        ValidationUtils.imagePath(row, "IMAGE_DATA", "Image");

        Map<String, Object> product = new HashMap<>();
        for (String key : new String[]{"PRODUCT_NAME", "PRODUCT_CODE", "CATEGORY_CODE", "BUYING_PRICE", "QUANTITY",
                "UNIT", "EXPIRY_DATE", "THRESHOLD_VALUE", "IMAGE_DATA"}) {
            product.put(key, ValidationUtils.text(row, key));
        }
        if (productMapper.countByCode(product) > 0) {
            throw new BizException("Product ID " + product.get("PRODUCT_CODE") + " already exists.");
        }
        productMapper.insert(product);
        Object productId = product.get("PRODUCT_ID");

        Map<String, Object> stock = new HashMap<>();
        stock.put("PRODUCT_ID", String.valueOf(productId));
        stock.put("LOCATION_NAME", MAIN_WAREHOUSE);
        stock.put("QUANTITY", quantity);
        productMapper.insertStock(stock);

        Map<String, Object> movement = new HashMap<>();
        movement.put("PRODUCT_ID", String.valueOf(productId));
        movement.put("MOVEMENT_TYPE", "PURCHASE");
        movement.put("QUANTITY", quantity);
        movement.put("UNIT_PRICE", product.get("BUYING_PRICE"));
        movement.put("NOTE", "Opening stock");
        movement.put("USER_ID", userId == null ? "" : String.valueOf(userId));
        productMapper.insertMovement(movement);

        return ((Number) productId).longValue();
    }
}
