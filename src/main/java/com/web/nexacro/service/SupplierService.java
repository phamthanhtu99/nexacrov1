package com.web.nexacro.service;

import java.util.List;
import java.util.Map;

public interface SupplierService {

    /** in: KEYWORD, CATEGORY, RETURN_TYPE (all optional). */
    List<Map<String, Object>> selectList(Map<String, Object> cond);

    /** Returns the new SUPPLIER_ID. */
    long insert(Map<String, Object> row);
}
