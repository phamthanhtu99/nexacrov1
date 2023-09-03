package com.web.nexacro.mapper;

import com.web.nexacro.Utils.ComCrud;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
@Component
public class GroupMapper extends CommConnectSql implements ComCrud {
    @Override
    public List<Map<String, Object>> select(Map map) {
        return selectList("selectGroup",map);
    }

    @Override
    public int insert(Map map) {
        return insert("insertProject",map);
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
