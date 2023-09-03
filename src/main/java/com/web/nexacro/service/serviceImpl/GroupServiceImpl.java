package com.web.nexacro.service.serviceImpl;

import com.web.nexacro.mapper.GroupMapper;
import com.web.nexacro.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
@Service
public class GroupServiceImpl implements GroupService {

    @Autowired
    GroupMapper groupMapper;

    @Override
    public List<Map<String, Object>> select(Map map) {

        return groupMapper.select(map);
    }

    @Override
    public int insert(Map map) {
        return groupMapper.insert(map);
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
