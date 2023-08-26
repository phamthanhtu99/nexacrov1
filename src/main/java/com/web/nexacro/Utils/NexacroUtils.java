package com.web.nexacro.Utils;


import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.HttpPlatformRequest;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class NexacroUtils {

    private List<DataSetUtils> dataSets = null;
    private int code = 0;
    private String message = "success";
    private  DataSetList dataSetList;

    public void setMessOrCode(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        String mess ="System error!";
        if(code  == 2){
            mess = "Not Have Access!";
        }else if (code == -99){
            mess = "session timeout!";
        }
        this.code = code;
        this.message = mess;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public NexacroUtils() {
        dataSets = new ArrayList<>();

    }

    public void setDataset(String ds_name, List<Map<String, Object>> list) {
        if(!list.isEmpty()){
            DataSetUtils dataSetUtils = new DataSetUtils();
            dataSetUtils.setId(ds_name);
            dataSetUtils.setRows(list);
            dataSetUtils.setColumns(getColumn(list));
            this.dataSets.add(dataSetUtils);
        }

    }

    public List<DataSetUtils> getDataSets() {
        return dataSets;
    }

    public void setDataSets(List<DataSetUtils> dataSets) {
        this.dataSets = dataSets;
    }

    //create column in dataset
    public  List<ColumnUtils> getColumn(List<Map<String, Object>> list) {
        List<ColumnUtils> columnUtilsList = null;
        if (list != null){
            List<Map<String,Object>> mapList = list;
            columnUtilsList =  columnUtils(mapList.get(0));
        }
        return columnUtilsList;
    }

    private List<ColumnUtils> columnUtils(Map<String,Object> column){
        List<ColumnUtils> columnUtilsList = new ArrayList<>();
        for (String key: column.keySet()) {
            ColumnUtils columnUtils= new ColumnUtils();
            columnUtils.setId(key);
            columnUtils.setType("STRING");
            columnUtils.setSize("255");
            columnUtilsList.add(columnUtils);
        }
        return columnUtilsList;
    }

    public static DataSetList getRequestData(HttpServletRequest request) throws IOException {
        InputStream inputStream = request.getInputStream();
        try {
            HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(inputStream);

            // receive data
            httpPlatformRequest.receiveData();
            PlatformData data = httpPlatformRequest.getData();
            return data.getDataSetList();
        } catch (Exception e) {
            return null;
        }finally {
            inputStream.close();
        }
    }

    public Map<String,Object> getParamDataSet(HttpServletRequest request) throws IOException {
        Map<String,Object>  param = new HashMap<>();
        DataSetList dataSetList = getRequestData(request);

        for (int i = 0; i < dataSetList.size(); i++) {
            DataSet dataSet = dataSetList.get(i);
            if(dataSet != null){
                Map<String, String> row = dataSet.getRowToMap(0);
                param.put(dataSet.getName(),dataSet.getRowToMap(0));
            }
        }

        return param;
    }

}
