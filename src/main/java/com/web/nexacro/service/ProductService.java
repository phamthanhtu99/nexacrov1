package com.web.nexacro.service;

import java.util.List;
import java.util.Map;

public interface ProductService {

    /** One page of products. in: KEYWORD, CATEGORY, AVAILABILITY, PAGE, PAGE_SIZE. */
    List<Map<String, Object>> selectList(Map<String, Object> cond);

    int selectCount(Map<String, Object> cond);

    List<Map<String, Object>> selectExport(Map<String, Object> cond);

    Map<String, Object> selectSummary();

    /** Product with its supplier, or BizException when it does not exist. */
    Map<String, Object> selectDetail(String productId);

    List<Map<String, Object>> selectStock(String productId);

    List<Map<String, Object>> selectMovement(String productId);

    /** Updates the product information (not the quantity, that comes from stock movements). */
    void update(Map<String, Object> row);

    /** Inserts the product, its main warehouse stock and the opening purchase. Returns PRODUCT_ID. */
    long insert(Map<String, Object> row, Object userId);
}
