(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_Transaction");
            this.set_titletext("Sample_Transaction");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "DEPT_CODE","type" : "STRING","size" : "10"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "10"},{"id" : "PHONE_NO","type" : "STRING","size" : "10"},{"id" : "EMAIL","type" : "STRING","size" : "10"},{"id" : "STATUS","type" : "STRING","size" : "10"},{"id" : "MEMO","type" : "STRING","size" : "256"},{"id" : "CHK","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_ID" : "TS0123","EMP_NAME" : "Maria Kim","DEPT_CODE" : "KR2010","POSITION" : "06","HIRE_DATE" : "20101003","GENDER" : "M","PHONE_NO" : "01723641258","EMAIL" : "mariakim@tobe.com","STATUS" : "1"},{"EMP_ID" : "TS0105","EMP_NAME" : "John Park","DEPT_CODE" : "KR2010","POSITION" : "04","HIRE_DATE" : "20051011","GENDER" : "F","PHONE_NO" : "01774212521","EMAIL" : "johnpark@tobe.com","STATUS" : "1"},{"EMP_ID" : "TS0815","EMP_NAME" : "Henry Hong","DEPT_CODE" : "KR2010","POSITION" : "05","HIRE_DATE" : "20070206","GENDER" : "M","PHONE_NO" : "01755669913","EMAIL" : "henryhong@tobe.com","STATUS" : "9"},{"EMP_ID" : "TS0717","EMP_NAME" : "Serry Park","DEPT_CODE" : "KR2010","POSITION" : "05","HIRE_DATE" : "20090512","GENDER" : "F","PHONE_NO" : "01758998487","EMAIL" : "serrypark@tobe.com","STATUS" : "1"},{"EMP_ID" : "TS1001","EMP_NAME" : "Dennis An","DEPT_CODE" : "KR2020","POSITION" : "06","HIRE_DATE" : "20010109","GENDER" : "M","PHONE_NO" : "01752563217","EMAIL" : "dennisan@tobe.com","STATUS" : "9"},{"EMP_ID" : "TS1225","EMP_NAME" : "Jackson Yu","DEPT_CODE" : "KR2020","POSITION" : "07","HIRE_DATE" : "20160202","GENDER" : "F","PHONE_NO" : "01726532234","EMAIL" : "jacksonyu@tobe.com","STATUS" : "1"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pos", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "32"},{"id" : "CODE_NAME","type" : "string","size" : "32"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_appoint", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_ID","type" : "STRING","size" : "256"},{"id" : "APPOINT_DATE","type" : "DATE","size" : "256"},{"id" : "APPOINT_TYPE","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"},{"id" : "START_DATE","type" : "DATE","size" : "256"}]},"Rows" : [{"EMP_ID" : "TS0123","APPOINT_DATE" : "20101003","START_DATE" : "20101003","MEMO" : "입사"},{"EMP_ID" : "TS0105","APPOINT_DATE" : "20051011","START_DATE" : "20051011","MEMO" : "입사"},{"EMP_ID" : "TS0815","APPOINT_DATE" : "20070206","START_DATE" : "20070206","MEMO" : "입사"},{"EMP_ID" : "TS0717","APPOINT_DATE" : "20090512","START_DATE" : "20090512","MEMO" : "입사"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "32"},{"id" : "CODE_NAME","type" : "string","size" : "32"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DEPT_CODE","type" : "STRING","size" : "32"},{"id" : "DEPT_NAME","type" : "STRING","size" : "32"}]},"Rows" : [{"DEPT_CODE" : "01","DEPT_NAME" : "Accounting"},{"DEPT_CODE" : "02","DEPT_NAME" : "HR"},{"DEPT_CODE" : "03","DEPT_NAME" : "Sales"},{"DEPT_CODE" : "04","DEPT_NAME" : "Design"},{"DEPT_CODE" : "05","DEPT_NAME" : "Education"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_service", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "svcid","type" : "STRING","size" : "256"},{"id" : "url","type" : "STRING","size" : "256"},{"id" : "inds","type" : "STRING","size" : "256"},{"id" : "outds","type" : "STRING","size" : "256"},{"id" : "param","type" : "STRING","size" : "256"},{"id" : "callback","type" : "STRING","size" : "256"},{"id" : "sync","type" : "STRING","size" : "256"}]},"Rows" : [{"svcid" : "svcGetCode","url" : "getCode.jsp","outds" : "ds_pos=out_pos ds_status=out_status\"","callback" : "fn_callback"},{"svcid" : "svcGetEmpList","url" : "getEmpList.jsp","outds" : "ds_emp=out_emp","callback" : "fn_callback"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","10","50",null,"78","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to","676","42","130","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rdo_status","102","8","314","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_innerdataset("ds_status");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Calendar("cal_from","520","42","130","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","650","42","26","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","418","42","102","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","222","42","76","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dept","298","42","120","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","26","42","76","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","102","42","120","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","0","8","102","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","10","0","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사원정보관리");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","12","div_search:0","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사원목록");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_emp","10","Static03:0",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"66\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"76\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"160\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"Status\"/><Cell col=\"2\" text=\"Name\"/><Cell col=\"3\" text=\"ID\"/><Cell col=\"4\" text=\"Department\"/><Cell col=\"5\" text=\"Position\"/><Cell col=\"6\" text=\"Hire Date\"/><Cell col=\"7\" text=\"Phone No\"/><Cell col=\"8\" text=\"E-Mail\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:STATUS\" expr=\"(STATUS == &quot;1&quot; ? &quot;재직&quot; : (STATUS == &quot;2&quot; ? &quot;휴직&quot; : &quot;퇴직&quot;))\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:EMP_NAME\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"3\" text=\"bind:EMP_ID\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:DEPT_NAME\"/><Cell col=\"5\" text=\"bind:POSITION\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\" edittype=\"combo\" displaytype=\"combotext\"/><Cell col=\"6\" text=\"bind:HIRE_DATE\" displaytype=\"date\" edittype=\"date\"/><Cell col=\"7\" text=\"bind:PHONE_NO\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"8\" text=\"bind:EMAIL\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","60","26","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillTeal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"10","60","26","75",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillTeal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","60","26","140",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("입력");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillTeal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","60","26","205",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillTeal");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,630,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample_Transaction.xfdl", function() {

        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);

        	// 코드 데이터 가져오기 - 직급, 재직상태
            var sSvcID    = "svcGetCode";
            var sURL      = "SvcUrl::getCode.jsp";
            var sInDs     = "";
            var sOutDs    = "ds_pos=out_pos ds_status=out_status";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        };

        // Retrieve Button
        this.btn_search_onclick = function(obj,e)
        {
        	// 사원정보 가져오기
            var sSvcID    = "svcGetEmpList";
            var sURL      = "SvcUrl::getEmpList.jsp";
            var sInDs     = "";
            var sOutDs    = "ds_emp=out_emp";
            var sParam    = "pStatus="    + this.div_search.form.rdo_status.value
        	              + " pName="     + nexacro.wrapQuote(this.div_search.form.edt_name.value)
        				  + " pDept="     + nexacro.wrapQuote(this.div_search.form.edt_dept.value)
        				  + " pDateFrom=" + this.div_search.form.cal_from.value
        				  + " pDateTo="   + this.div_search.form.cal_to.value;
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        /*
            var objParam = { sSvcID    : "svcGetEmpList",
                             sURL      : "SvcUrl::getEmpList.jsp",
                             sInDs     : "",
                             sOutDs    : "ds_emp=out_emp",
                             sParam    : "",
                             sCallBack : "fn_callback" };

        	this.gfn_transaction(objParam);

        */

        /* Dataset 이용 (ds_service)

        	this.gfn_transaction("svcGetEmpList");

        */

        };

        // Add Button
        this.btn_add_onclick = function(obj,e)
        {
        	var nRow = this.ds_emp.addRow();
        };

        // Delete Button
        this.btn_del_onclick = function(obj,e)
        {
        	this.ds_emp.deleteRow(this.ds_emp.rowposition);
        };

        // Save Button
        this.btn_save_onclick = function(obj,e)
        {
        	if(this.gfn_dsIsUpdated(this.ds_emp) == false) {
        		this.gfn_alert("msg.save.nochange");
        		return;
        	}

            this.gfn_clearValidation(this.ds_emp);
            this.gfn_setValidation(this.ds_emp, "EMP_NAME", "성명"  , "required");
            this.gfn_setValidation(this.ds_emp, "EMP_ID"  , "아이디", "required,length:5");
          	if(this.gfn_validation(this.ds_emp, "U") == false) return;

            var sSvcID    = "svcSave";
            var sURL      = "SvcUrl::saveEmp.jsp";
            var sInDs     = "in_emp=ds_emp:u";
            var sOutDs    = "";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);

        };

        this.fn_callback = function(svcID, errCD, errMSG)
        {
            if(svcID == "svcSave"){
        		this.gfn_alert("msg.save.success");
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_search.form.cal_to.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.div_search.form.rdo_status.addEventHandler("onitemchanged",this.div_search_rdo_status_onitemchanged,this);
            this.div_search.form.cal_from.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.grd_emp.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
            this.grd_emp.addEventHandler("oncellclick",this.grd_emp_oncellclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_del_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
        };
        this.loadIncludeScript("Sample_Transaction.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
