package com.web.nexacro.service;

import java.util.List;
import java.util.Map;

public interface SupplierService {

    /** in: KEYWORD, CATEGORY, RETURN_TYPE (all optional). */
    List<Map<String, Object>> selectList(Map<String, Object> cond);

    /** Supplier with its image, or BizException when it does not exist. */
    Map<String, Object> selectDetail(String supplierId);

    void update(Map<String, Object> row);

    /** Returns the new SUPPLIER_ID. */
    long insert(Map<String, Object> row);
}
