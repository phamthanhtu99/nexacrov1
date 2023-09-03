package com.web.nexacro.mapper;


import com.web.nexacro.Utils.ComCrud;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class UserMapper extends CommConnectSql implements ComCrud {

    public List<Map<String,Object>> SelectRoleLogin(Map param){
        List<Map<String,Object>> result = selectList("selectLogin",param);
        return result;
    }

    public List<Map<String,Object>> selectRole(Map param){
        List<Map<String,Object>> result = selectList("selectUserPm",param);
        return result;
    }
    public int insertProject(Map map){
        return  insert("insertUser",map);
    }

    @Override
    public List<Map<String, Object>> select(Map map) {
        return null;
    }

    @Override
    public int insert(Map map) {
        return 0;
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
