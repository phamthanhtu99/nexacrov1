package com.web.nexacro.Utils;

import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Transactional
public interface ComCrud {

    List<Map<String,Object>> select(Map map);
    int insert (Map map);

    int update (Map map);

    int delete (Map map);
}
