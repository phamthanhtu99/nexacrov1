package com.web.nexacro.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/** SQL: src/main/resources/mapper/SupplierMapper.xml */
@Mapper
public interface SupplierMapper {

    List<Map<String, Object>> selectList(Map<String, Object> param);

    /** Puts the new SUPPLIER_ID into param. */
    int insert(Map<String, Object> param);
}
