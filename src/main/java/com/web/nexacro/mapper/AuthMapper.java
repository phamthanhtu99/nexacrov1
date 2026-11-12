package com.web.nexacro.mapper;

import org.apache.ibatis.annotations.Mapper;

import java.util.Map;

/** SQL: src/main/resources/mapper/AuthMapper.xml */
@Mapper
public interface AuthMapper {

    Map<String, Object> selectByEmail(Map<String, Object> param);

    Map<String, Object> selectByToken(Map<String, Object> param);

    Map<String, Object> selectById(Map<String, Object> param);

    int countEmailOfOthers(Map<String, Object> param);

    int updateUser(Map<String, Object> param);

    /** Puts the new USER_ID into param. */
    int insertUser(Map<String, Object> param);

    int updateLastLogin(Map<String, Object> param);

    int insertToken(Map<String, Object> param);

    /** Deletes expired tokens, inserts TOKEN and updates the login time in one statement. */
    int saveLogin(Map<String, Object> param);

    int deleteToken(Map<String, Object> param);

    int deleteExpiredTokens();
}
