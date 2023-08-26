package com.web.nexacro.mapper;


import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public class UserMapper extends CommConnectSql {

    public List<Map<String,Object>> SelectRoleLogin(Map param){
        List<Map<String,Object>> result = selectList("selectLogin",param);
        return result;
    }

    public int insertProject(Map map){
        return  insert("insertUser",map);
    }

}
