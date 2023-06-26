package com.web.nexacro.Utils;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexacro.java.xapi.data.DataSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

@Component
public class NexacroUtils {
    private List<Map<String, Object>> list;

    private Map<String, Object> map;

    private DataSetUtils dataSetUtils;

    private ColumnUtils column;


    public Map<String, Object> getMap() {
        return map;
    }

    public void setMap(Map<String, Object> map) {
        this.map = map;
    }

    public List<Map<String, Object>> getList() {
        return list;
    }

    public void setList(List<Map<String, Object>> list) {
        this.list = list;
    }

    public  List<ColumnUtils> getColumn() {
        List<ColumnUtils> columnUtilsList = null;
        if (!this.list.isEmpty()){
            List<Map<String,Object>> mapList = this.list;
            columnUtilsList =  columnUtils(mapList.get(0));
        }else {
            Map<String,Object> map = this.map;
            columnUtilsList = columnUtils(map);
        }
        return columnUtilsList;
    }

    public List<ColumnUtils> columnUtils(Map<String,Object> column){
        List<ColumnUtils> columnUtilsList = new ArrayList<>();
        ObjectMapper objectMapper = new ObjectMapper();
        for (String key: column.keySet()) {
            ColumnUtils columnUtils= new ColumnUtils();
            columnUtils.setId(key);
            columnUtils.setType("STRING");
            columnUtils.setSize("255");
            columnUtilsList.add(columnUtils);
        }
        return columnUtilsList;
    }


    public List<Map<String,Object>> setData(){
        return null;
    }


    public static void main(String[] args) {
        Map<String,Object> s = new HashMap<>();
        s.put("USER","Tu");
        s.put("PW","Tu");
        List<Map<String,Object>> maps = new ArrayList<>();
        maps.add(s);


        NexacroUtils nexacroUtils = new NexacroUtils();
        nexacroUtils.setList(maps);

        nexacroUtils.getColumn();
    }
}
