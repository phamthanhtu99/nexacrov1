package com.web.nexacro.Utils;

import java.util.List;
import java.util.Map;

public class DataSetUtils {
    private String id;
    private List<ColumnUtils> columns;
    private List<Map<String,Object>> rows;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<ColumnUtils> getColumns() {
        return columns;
    }

    public void setColumns(List<ColumnUtils> columns) {
        this.columns = columns;
    }

    public List<Map<String, Object>> getRows() {
        return rows;
    }

    public void setRows(List<Map<String, Object>> rows) {
        this.rows = rows;
    }
}
