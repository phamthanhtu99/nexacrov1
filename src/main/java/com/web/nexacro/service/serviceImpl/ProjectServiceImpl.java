package com.web.nexacro.service.serviceImpl;


import com.web.nexacro.mapper.CommConnectSql;
import com.web.nexacro.mapper.ProjectMapper;
import com.web.nexacro.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    ProjectMapper projectMapper;

    @Autowired
    CommConnectSql commConnectSql;

    @Override
    public List<Map<String, Object>> select(Map map) {
        return commConnectSql.selectList("selectProject",map);
    }

    @Override
    public int insert(Map map) {
        return projectMapper.insert(map);
    }

    @Override
    public int update(Map map) {
        return 0;
    }

    @Override
    public int delete(Map map) {
        return 0;
    }
}
