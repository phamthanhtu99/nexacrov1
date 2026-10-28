(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_connectDb");
            this.set_titletext("Employee Management");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_employee", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMPLOYEE_ID","type" : "STRING","size" : "20"},{"id" : "EMPLOYEE_CODE","type" : "STRING","size" : "20"},{"id" : "FULL_NAME","type" : "STRING","size" : "200"},{"id" : "EMAIL","type" : "STRING","size" : "255"},{"id" : "PHONE_NUMBER","type" : "STRING","size" : "20"},{"id" : "GENDER","type" : "STRING","size" : "1"},{"id" : "BIRTH_DATE","type" : "STRING","size" : "8"},{"id" : "DEPARTMENT","type" : "STRING","size" : "100"},{"id" : "POSITION","type" : "STRING","size" : "100"},{"id" : "SALARY","type" : "STRING","size" : "20"},{"id" : "HIRE_DATE","type" : "STRING","size" : "8"},{"id" : "RESIGN_DATE","type" : "STRING","size" : "8"},{"id" : "STATUS","type" : "STRING","size" : "20"},{"id" : "CREATED_AT","type" : "STRING","size" : "30"},{"id" : "UPDATED_AT","type" : "STRING","size" : "30"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cond", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "KEYWORD","type" : "STRING","size" : "100"},{"id" : "DEPARTMENT","type" : "STRING","size" : "100"},{"id" : "STATUS","type" : "STRING","size" : "20"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_save", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMPLOYEE_ID","type" : "STRING","size" : "20"},{"id" : "EMPLOYEE_CODE","type" : "STRING","size" : "20"},{"id" : "FULL_NAME","type" : "STRING","size" : "200"},{"id" : "EMAIL","type" : "STRING","size" : "255"},{"id" : "PHONE_NUMBER","type" : "STRING","size" : "20"},{"id" : "GENDER","type" : "STRING","size" : "1"},{"id" : "BIRTH_DATE","type" : "STRING","size" : "8"},{"id" : "DEPARTMENT","type" : "STRING","size" : "100"},{"id" : "POSITION","type" : "STRING","size" : "100"},{"id" : "SALARY","type" : "STRING","size" : "20"},{"id" : "HIRE_DATE","type" : "STRING","size" : "8"},{"id" : "RESIGN_DATE","type" : "STRING","size" : "8"},{"id" : "STATUS","type" : "STRING","size" : "20"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "1"},{"id" : "name","type" : "STRING","size" : "10"}]},"Rows" : [{"code" : "M","name" : "Male"},{"code" : "F","name" : "Female"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "20"},{"id" : "name","type" : "STRING","size" : "20"}]},"Rows" : [{"code" : "ACTIVE","name" : "ACTIVE"},{"code" : "INACTIVE","name" : "INACTIVE"},{"code" : "RESIGNED","name" : "RESIGNED"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status_s", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "20"},{"id" : "name","type" : "STRING","size" : "20"}]},"Rows" : [{"code" : "","name" : "All"},{"code" : "ACTIVE","name" : "ACTIVE"},{"code" : "INACTIVE","name" : "INACTIVE"},{"code" : "RESIGNED","name" : "RESIGNED"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20","0","400","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Employee Management - TUPT7");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Static("sta_keyword","20","60","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Keyword");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_keyword","85","60","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dept","305","60","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Department");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept","390","60","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta_status","560","60","50","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Status");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_s_status","615","60","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_status_s");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search","755","60","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Search");
            obj.set_cssclass("btn_WF_FillRed");
            this.addChild(obj.name, obj);

            obj = new Static("sta_count","20","95","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Total: 0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_employee","20","120","740","580",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_employee");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"130\"/><Column size=\"170\"/><Column size=\"90\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Code\"/><Cell col=\"1\" text=\"Full name\"/><Cell col=\"2\" text=\"Email\"/><Cell col=\"3\" text=\"Department\"/><Cell col=\"4\" text=\"Position\"/><Cell col=\"5\" text=\"Salary\"/><Cell col=\"6\" text=\"Hire date\"/></Band><Band id=\"body\"><Cell text=\"bind:EMPLOYEE_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:FULL_NAME\"/><Cell col=\"2\" text=\"bind:EMAIL\"/><Cell col=\"3\" text=\"bind:DEPARTMENT\"/><Cell col=\"4\" text=\"bind:POSITION\"/><Cell col=\"5\" text=\"bind:SALARY\" textAlign=\"right\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:HIRE_DATE\" calendardateformat=\"yyyy-MM-dd\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_code","780","120","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Code *");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_code","895","120","365","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_name","780","160","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Full name *");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","895","160","365","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_maxlength("200");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_email","780","200","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Email *");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email","895","200","365","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_maxlength("255");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_phone","780","240","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Phone");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_phone","895","240","365","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_maxlength("20");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_gender","780","280","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Gender");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_gender","895","280","365","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_gender");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_birth","780","320","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Birth date");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_birth","895","320","365","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_dept","780","360","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Department");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_department","895","360","365","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_position","780","400","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Position");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_position","895","400","365","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_maxlength("100");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_salary","780","440","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Salary");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_salary","895","440","365","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_maxlength("15");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_hire","780","480","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Hire date *");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_hire","895","480","365","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_resign","780","520","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Resign date");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_resign","895","520","365","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_status","780","560","110","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Status");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_status","895","560","365","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            this.addChild(obj.name, obj);

            obj = new Button("btn_new","895","620","110","36",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("New");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","1015","620","110","36",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_FillRed");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete","1135","620","110","36",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_code","value","ds_employee","EMPLOYEE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_name","value","ds_employee","FULL_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_email","value","ds_employee","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_phone","value","ds_employee","PHONE_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cmb_gender","value","ds_employee","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","cal_birth","value","ds_employee","BIRTH_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edt_department","value","ds_employee","DEPARTMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_position","value","ds_employee","POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edt_salary","value","ds_employee","SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cal_hire","value","ds_employee","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","cal_resign","value","ds_employee","RESIGN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","cmb_status","value","ds_employee","STATUS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_connectDb.xfdl", function() {

        /*
         * Employee CRUD screen. Calls Spring Boot endpoints:
         *   POST /employee/select | insert | update | delete
         * The server reads only the FIRST row of the dataset it receives,
         * so save/delete send the one-row dataset ds_save.
         */

        this.fn_getUrl = function(sPath)
        {
        	var sBase = "http://localhost:8080";
        	// served by the same Spring Boot app in a web browser -> same origin
        	if (system.navigatorname != "nexacro") {
        		sBase = window.location.protocol + "//" + window.location.host;
        	}
        	return sBase + "/employee/" + sPath;
        };

        this.Form_onload = function(obj,e)
        {
        	this.fn_search();
        };

        this.fn_search = function()
        {
        	this.ds_cond.clearData();
        	this.ds_cond.addRow();
        	this.ds_cond.setColumn(0, "KEYWORD", this.edt_keyword.value);
        	this.ds_cond.setColumn(0, "DEPARTMENT", this.edt_dept.value);
        	this.ds_cond.setColumn(0, "STATUS", this.cmb_s_status.value);

        	// the server sends no dataset when nothing matches, so clear it first
        	this.ds_employee.clearData();

        	this.transaction("selectEmployee"
        	                ,this.fn_getUrl("select")
        	                ,"ds_cond=ds_cond"
        	                ,"ds_employee=ds_employee"
        	                ,""
        	                ,"fn_callback");
        };

        // copy the current row of ds_employee into the one-row ds_save
        this.fn_fillSave = function(nRow)
        {
        	this.ds_save.clearData();
        	this.ds_save.addRow();
        	for (var i = 0; i < this.ds_save.getColCount(); i++) {
        		var sCol = this.ds_save.getColID(i);
        		this.ds_save.setColumn(0, sCol, this.ds_employee.getColumn(nRow, sCol));
        	}
        };

        this.fn_isEmpty = function(sValue)
        {
        	return sValue == null || String(sValue).trim() == "";
        };

        this.btn_search_onclick = function(obj,e)
        {
        	this.fn_search();
        };

        this.edt_search_onkeydown = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.fn_search();
        	}
        };

        this.btn_new_onclick = function(obj,e)
        {
        	var nRow = this.ds_employee.addRow();
        	this.ds_employee.setColumn(nRow, "STATUS", "ACTIVE");
        	this.ds_employee.set_rowposition(nRow);
        	this.edt_code.setFocus();
        };

        this.btn_save_onclick = function(obj,e)
        {
        	var nRow = this.ds_employee.rowposition;
        	if (nRow < 0) {
        		this.alert("Select an employee or click New.");
        		return;
        	}

        	if (this.fn_isEmpty(this.ds_employee.getColumn(nRow, "EMPLOYEE_CODE"))) {
        		this.alert("Code is required.");
        		this.edt_code.setFocus();
        		return;
        	}
        	if (this.fn_isEmpty(this.ds_employee.getColumn(nRow, "FULL_NAME"))) {
        		this.alert("Full name is required.");
        		this.edt_name.setFocus();
        		return;
        	}
        	if (this.fn_isEmpty(this.ds_employee.getColumn(nRow, "EMAIL"))) {
        		this.alert("Email is required.");
        		this.edt_email.setFocus();
        		return;
        	}
        	if (this.fn_isEmpty(this.ds_employee.getColumn(nRow, "HIRE_DATE"))) {
        		this.alert("Hire date is required.");
        		this.cal_hire.setFocus();
        		return;
        	}

        	this.fn_fillSave(nRow);

        	var bUpdate = !this.fn_isEmpty(this.ds_employee.getColumn(nRow, "EMPLOYEE_ID"));
        	this.transaction(bUpdate ? "updateEmployee" : "insertEmployee"
        	                ,this.fn_getUrl(bUpdate ? "update" : "insert")
        	                ,"ds_employee=ds_save"
        	                ,""
        	                ,""
        	                ,"fn_callback");
        };

        this.btn_delete_onclick = function(obj,e)
        {
        	var nRow = this.ds_employee.rowposition;
        	if (nRow < 0) {
        		return;
        	}

        	// row that was never saved: just drop it from the grid
        	if (this.fn_isEmpty(this.ds_employee.getColumn(nRow, "EMPLOYEE_ID"))) {
        		this.ds_employee.deleteRow(nRow);
        		return;
        	}

        	if (!this.confirm("Delete employee " + this.ds_employee.getColumn(nRow, "FULL_NAME") + "?")) {
        		return;
        	}

        	this.fn_fillSave(nRow);
        	this.transaction("deleteEmployee"
        	                ,this.fn_getUrl("delete")
        	                ,"ds_employee=ds_save"
        	                ,""
        	                ,""
        	                ,"fn_callback");
        };

        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	if (errCd < 0) {
        		this.alert("Error: " + errMsg);
        		return;
        	}

        	switch (svcId) {
        		case "selectEmployee":
        			this.sta_count.set_text("Total: " + this.ds_employee.rowcount);
        			break;
        		case "insertEmployee":
        		case "updateEmployee":
        			this.alert("Saved.");
        			this.fn_search();
        			break;
        		case "deleteEmployee":
        			this.alert("Deleted.");
        			this.fn_search();
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.edt_keyword.addEventHandler("onkeydown",this.edt_search_onkeydown,this);
            this.edt_dept.addEventHandler("onkeydown",this.edt_search_onkeydown,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.btn_new.addEventHandler("onclick",this.btn_new_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
        };
        this.loadIncludeScript("Form_connectDb.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
