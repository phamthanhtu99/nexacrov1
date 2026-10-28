(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Popup_SearchDept");
            this.set_titletext("Popup_SearchDept");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "32"},{"id" : "DEPT_NAME","type" : "STRING","size" : "32"}]},"Rows" : [{"DEPT_CODE" : "01","DEPT_NAME" : "Accounting"},{"DEPT_CODE" : "02","DEPT_NAME" : "HR"},{"DEPT_CODE" : "03","DEPT_NAME" : "Sales"},{"DEPT_CODE" : "04","DEPT_NAME" : "Design"},{"DEPT_CODE" : "05","DEPT_NAME" : "Education"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","0","193","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("부서 검색");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","50",null,"291","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"90\"/><Column size=\"185\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Dept Code\"/><Cell col=\"1\" text=\"Dept Name\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","77",null,"70","26",null,"20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("OK");
            obj.set_cssclass("btn_WF_FillRed");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","152",null,"70","26",null,"20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Cancel");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,400,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Popup_SearchDept.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
        	this.fn_getDeptList();
        };


        this.fn_getDeptList = function(obj,e)
        {
        	this.transaction("svcGetDeptList"
        				    ,"SvcUrl::getDeptList.jsp"
        					,""
        					,"ds_dept=out_dept"
        					,""
        					,"fn_callback");
        };

        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	if(errCd < 0){
        		this.alert("Error: " + errMsg);
        	}
        }

        this.fn_ok = function()
        {
        	var sRtn =  this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_CODE") + "|";
        	    sRtn += this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_NAME");
        	this.close(sRtn);
        }

        this.fn_cancel = function(obj,e)
        {
        	this.close();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.fn_ok,this);
            this.btn_ok.addEventHandler("onclick",this.fn_ok,this);
            this.btn_cancel.addEventHandler("onclick",this.fn_cancel,this);
        };
        this.loadIncludeScript("Popup_SearchDept.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
