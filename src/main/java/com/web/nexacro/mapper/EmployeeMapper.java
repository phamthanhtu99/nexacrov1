package com.web.nexacro.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import java.util.List;
import java.util.Map;

@Mapper
public interface EmployeeMapper {

    @Select("<script>"
            + " SELECT E.EMPLOYEE_ID, E.EMPLOYEE_CODE, E.FULL_NAME, E.EMAIL, E.PHONE_NUMBER, E.GENDER"
            + "      , TO_CHAR(E.BIRTH_DATE, 'YYYYMMDD') AS BIRTH_DATE"
            + "      , E.DEPARTMENT, E.POSITION, E.SALARY"
            + "      , TO_CHAR(E.HIRE_DATE, 'YYYYMMDD') AS HIRE_DATE"
            + "      , TO_CHAR(E.RESIGN_DATE, 'YYYYMMDD') AS RESIGN_DATE"
            + "      , E.STATUS"
            + "      , TO_CHAR(E.CREATED_AT, 'YYYY-MM-DD HH24:MI:SS') AS CREATED_AT"
            + "      , TO_CHAR(E.UPDATED_AT, 'YYYY-MM-DD HH24:MI:SS') AS UPDATED_AT"
            + "   FROM EMPLOYEE E"
            + "  WHERE E.IS_DELETED = FALSE"
            + "  <if test=\"EMPLOYEE_ID != null and EMPLOYEE_ID != ''\"> AND E.EMPLOYEE_ID = #{EMPLOYEE_ID} </if>"
            + "  <if test=\"KEYWORD != null and KEYWORD != ''\">"
            + "     AND (LOWER(E.FULL_NAME) LIKE '%' || LOWER(#{KEYWORD}) || '%'"
            + "       OR LOWER(E.EMPLOYEE_CODE) LIKE '%' || LOWER(#{KEYWORD}) || '%'"
            + "       OR LOWER(E.EMAIL) LIKE '%' || LOWER(#{KEYWORD}) || '%')"
            + "  </if>"
            + "  <if test=\"DEPARTMENT != null and DEPARTMENT != ''\"> AND E.DEPARTMENT = #{DEPARTMENT} </if>"
            + "  <if test=\"STATUS != null and STATUS != ''\"> AND E.STATUS = #{STATUS} </if>"
            + "  ORDER BY E.EMPLOYEE_ID"
            + "</script>")
    List<Map<String, Object>> select(Map<String, Object> param);

    @Insert(" INSERT INTO EMPLOYEE (EMPLOYEE_CODE, FULL_NAME, EMAIL, PHONE_NUMBER, GENDER, BIRTH_DATE,"
            + "                      DEPARTMENT, POSITION, SALARY, HIRE_DATE, RESIGN_DATE, STATUS)"
            + " VALUES (#{EMPLOYEE_CODE}, #{FULL_NAME}, #{EMAIL}, #{PHONE_NUMBER}, #{GENDER},"
            + "         CAST(NULLIF(CAST(#{BIRTH_DATE} AS VARCHAR), '') AS DATE),"
            + "         #{DEPARTMENT}, #{POSITION},"
            + "         CAST(NULLIF(CAST(#{SALARY} AS VARCHAR), '') AS NUMERIC),"
            + "         CAST(CAST(#{HIRE_DATE} AS VARCHAR) AS DATE),"
            + "         CAST(NULLIF(CAST(#{RESIGN_DATE} AS VARCHAR), '') AS DATE),"
            + "         COALESCE(NULLIF(CAST(#{STATUS} AS VARCHAR), ''), 'ACTIVE'))")
    int insert(Map<String, Object> param);

    @Update(" UPDATE EMPLOYEE SET"
            + "        EMPLOYEE_CODE = #{EMPLOYEE_CODE}, FULL_NAME = #{FULL_NAME}, EMAIL = #{EMAIL},"
            + "        PHONE_NUMBER = #{PHONE_NUMBER}, GENDER = #{GENDER},"
            + "        BIRTH_DATE = CAST(NULLIF(CAST(#{BIRTH_DATE} AS VARCHAR), '') AS DATE),"
            + "        DEPARTMENT = #{DEPARTMENT}, POSITION = #{POSITION},"
            + "        SALARY = CAST(NULLIF(CAST(#{SALARY} AS VARCHAR), '') AS NUMERIC),"
            + "        HIRE_DATE = CAST(CAST(#{HIRE_DATE} AS VARCHAR) AS DATE),"
            + "        RESIGN_DATE = CAST(NULLIF(CAST(#{RESIGN_DATE} AS VARCHAR), '') AS DATE),"
            + "        STATUS = COALESCE(NULLIF(CAST(#{STATUS} AS VARCHAR), ''), 'ACTIVE'),"
            + "        UPDATED_AT = CURRENT_TIMESTAMP"
            + "  WHERE EMPLOYEE_ID = #{EMPLOYEE_ID} AND IS_DELETED = FALSE")
    int update(Map<String, Object> param);

    // soft delete: keeps the row, hides it from select
    @Update(" UPDATE EMPLOYEE SET IS_DELETED = TRUE, UPDATED_AT = CURRENT_TIMESTAMP"
            + "  WHERE EMPLOYEE_ID = #{EMPLOYEE_ID} AND IS_DELETED = FALSE")
    int delete(Map<String, Object> param);
}
