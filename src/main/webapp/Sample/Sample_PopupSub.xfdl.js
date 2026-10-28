(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_PopupSub");
            this.set_titletext("Sample_PopupSub");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(300,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "string","size" : "255"},{"id" : "DEPT_NAME","type" : "string","size" : "255"},{"id" : "DEPT_EMP","type" : "string","size" : "255"}]},"Rows" : [{"DEPT_CODE" : "10","DEPT_NAME" : "Accounting Team","DEPT_EMP" : "Kate"},{"DEPT_CODE" : "20","DEPT_NAME" : "Finances Team","DEPT_EMP" : "Dennis"},{"DEPT_CODE" : "30","DEPT_NAME" : "Human Resource Team","DEPT_EMP" : "Adam"},{"DEPT_CODE" : "40","DEPT_NAME" : "Support Team","DEPT_EMP" : "Jackson"},{"DEPT_CODE" : "50","DEPT_NAME" : "Sales Team","DEPT_EMP" : "Belle"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","20",null,"262","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_dept");
            obj.set_autofittype("col");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"부서코드\"/><Cell col=\"1\" text=\"부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","153","302","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok","87","302","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",300,350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample_PopupSub.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
            var paramStr = this.getOwnerFrame().pStr;
            var paramNum = this.getOwnerFrame().pNum;
            var paramObj = this.getOwnerFrame().pObj;

            trace(paramStr + " : " + paramNum + " : " + paramObj);
        };

        this.btn_ok_onclick = function(obj,e)
        {
            var sCode = this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_CODE");
            var sName = this.ds_dept.getColumn(this.ds_dept.rowposition, "DEPT_NAME");

        	var objRtn = { deptcd : sCode,
        			       deptnm : sName };

        	this.close(JSON.stringify(objRtn));
        };

        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.grd_list.addEventHandler("oncelldblclick",this.fn_ok,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
        };
        this.loadIncludeScript("Sample_PopupSub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
