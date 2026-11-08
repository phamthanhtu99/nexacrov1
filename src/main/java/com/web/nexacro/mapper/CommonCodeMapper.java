package com.web.nexacro.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

/** SQL: src/main/resources/mapper/CommonCodeMapper.xml */
@Mapper
public interface CommonCodeMapper {

    /** groups: "CATEGORY,RETURN_TYPE", empty for every group */
    List<Map<String, Object>> select(@Param("groups") String groups);

    int exists(@Param("group") String group, @Param("code") String code);
}
