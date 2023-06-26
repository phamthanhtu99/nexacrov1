package com.web.nexacro.mapper;

import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Component
@Transactional
public class CommConnectSql {
    @Autowired
    SqlSessionFactory sqlSessionFactory;

    public SqlSession sqlSessions() {
        return sqlSessionFactory.openSession();
    }

    public List<Map<String, Object>> selectOne(String sql, Map param) {
        return sqlSessionFactory.openSession().selectOne(sql, param);
    }

    public List<Map<String, Object>> selectOne(String sql) {
        return sqlSessionFactory.openSession().selectOne(sql);
    }

    public List<Map<String, Object>> selectList(String sql) {
        return sqlSessionFactory.openSession().selectList(sql);
    }

    public List<Map<String, Object>> selectList(String sql, Map param) {
        return sqlSessionFactory.openSession().selectList(sql, param);
    }
}
