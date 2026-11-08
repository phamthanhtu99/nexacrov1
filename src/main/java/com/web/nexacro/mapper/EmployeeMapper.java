package com.web.nexacro.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/** SQL: src/main/resources/mapper/EmployeeMapper.xml */
@Mapper
public interface EmployeeMapper {

    List<Map<String, Object>> select(Map<String, Object> param);

    int insert(Map<String, Object> param);

    int update(Map<String, Object> param);

    // soft delete: keeps the row, hides it from select
    int delete(Map<String, Object> param);
}
