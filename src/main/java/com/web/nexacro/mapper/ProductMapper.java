package com.web.nexacro.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/** SQL: src/main/resources/mapper/ProductMapper.xml */
@Mapper
public interface ProductMapper {

    List<Map<String, Object>> selectList(Map<String, Object> param);

    int selectCount(Map<String, Object> param);

    List<Map<String, Object>> selectExport(Map<String, Object> param);

    Map<String, Object> selectSummary();

    Map<String, Object> selectDetail(Map<String, Object> param);

    List<Map<String, Object>> selectStock(Map<String, Object> param);

    List<Map<String, Object>> selectMovement(Map<String, Object> param);

    int countByCode(Map<String, Object> param);

    int update(Map<String, Object> param);

    /** Puts the new PRODUCT_ID into param. */
    int insert(Map<String, Object> param);

    int insertStock(Map<String, Object> param);

    int insertMovement(Map<String, Object> param);
}
