package com.web.nexacro.service.serviceImpl;

import com.web.nexacro.mapper.EmployeeMapper;
import com.web.nexacro.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeMapper employeeMapper;

    @Override
    public List<Map<String, Object>> select(Map map) {
        return employeeMapper.select(map == null ? new HashMap<>() : map);
    }

    @Override
    public int insert(Map map) {
        return employeeMapper.insert(map);
    }

    @Override
    public int update(Map map) {
        return employeeMapper.update(map);
    }

    @Override
    public int delete(Map map) {
        return employeeMapper.delete(map);
    }
}
