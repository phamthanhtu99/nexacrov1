(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_Script");
            this.set_titletext("Sample_Script");
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
            
            // UI Components Initialize
            obj = new Div("div_search","10","50",null,"78","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_status","102","8","314","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_innerdataset("ds_status");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","418","42","102","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static02","222","42","76","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_dept","298","42","120","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static03","26","42","76","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_name","102","42","120","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","0","8","102","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_range","520","42","310","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_url("Comm::Comm_DateRange.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05",null,"div_search:0","97","35","451",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Div("div_detail",null,"Static05:0","538","180","10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","95","8","160","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("0");
            this.div_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","365","76","160","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("2");
            var div_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("div_detail_form_rdo_gender_innerdataset", obj);
            div_detail_form_rdo_gender_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "M","datacolumn" : "Male"},{"codecolumn" : "W","datacolumn" : "Female"}]});
            obj.set_innerdataset(div_detail_form_rdo_gender_innerdataset);
            this.div_detail.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","365","110","160","60",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("2");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static00","20","8","70","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_Title4");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static01","20","76","70","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("4");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_Title4");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02","295","42","70","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("5");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_Title4");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static03","295","76","70","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("6");
            obj.set_text("성별");
            obj.set_cssclass("sta_WF_Title4");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static04","295","8","70","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("7");
            obj.set_text("사원번호");
            obj.set_cssclass("sta_WF_Title4");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static05","295","110","70","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("8");
            obj.set_text("비고사항");
            obj.set_cssclass("sta_WF_Title4");
            this.div_detail.addChild(obj.name, obj);

            obj = new Calendar("cal_hire_date","95","76","160","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("9");
            this.div_detail.addChild(obj.name, obj);

            obj = new MaskEdit("msk_id","365","8","160","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("10");
            obj.set_type("string");
            obj.set_format("AA-###");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static06","20","42","70","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("11");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Title4");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static07","20","144","70","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("12");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_Title4");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static08","20","110","70","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("13");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_Title4");
            this.div_detail.addChild(obj.name, obj);

            obj = new Combo("cbo_position","365","42","160","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("14");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_innerdataset("ds_pos");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_phone_no","95","110","160","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("15");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_email","95","144","160","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("16");
            this.div_detail.addChild(obj.name, obj);

            obj = new Edit("edt_dept","95","42","160","26",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("17");
            this.div_detail.addChild(obj.name, obj);

            obj = new Button("btn_popupDept","232","47","16","16",null,null,null,null,null,null,this.div_detail.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_Find");
            this.div_detail.addChild(obj.name, obj);

            obj = new Static("Static02",null,"div_detail:0","97","35","451",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","0","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사원정보관리");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","12","div_search:0","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("사원목록");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_emp","10","Static03:0",null,null,"558","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"사원번호\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:DEPT_NAME\"/><Cell col=\"2\" text=\"bind:EMP_NAME\"/><Cell col=\"3\" text=\"bind:EMP_ID\"/><Cell col=\"4\" text=\"bind:POSITION\" displaytype=\"combotext\" combodataset=\"ds_pos\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\"/><Cell col=\"5\" text=\"bind:STATUS\" combodataset=\"ds_status\" combocodecol=\"CODE\" combodatacol=\"CODE_NAME\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"10","60","26","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("저장");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillTeal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"10","60","26","75",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("삭제");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillTeal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"10","60","26","140",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("입력");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillTeal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"10","60","26","205",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillTeal");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_detail",null,"Static02:0","537",null,"10","10",null,null,"244",null,this);
            obj.set_taborder("7");
            obj.set_tabindex("0");
            obj.set_tabbuttonwidth("100");
            obj.set_tabbuttongap("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_detail);
            obj.set_text("발령사항");
            this.tab_detail.addChild(obj.name, obj);

            obj = new Grid("grd_appoint","10","10",null,null,"10","10",null,null,null,null,this.tab_detail.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_appoint");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"135\"/><Column size=\"78\"/><Column size=\"167\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"발령일자\"/><Cell col=\"2\" text=\"발령구분\"/><Cell col=\"3\" text=\"발령내용\"/><Cell col=\"4\" text=\"시행일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:APPOINT_DATE\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:APPOINT_TYPE_NAME\"/><Cell col=\"3\" text=\"bind:MEMO\"/><Cell col=\"4\" text=\"bind:START_DATE\" displaytype=\"date\"/></Band></Format></Formats>");
            this.tab_detail.Tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_detail);
            obj.set_text("학력사항");
            this.tab_detail.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage3",this.tab_detail);
            obj.set_text("경력사항");
            this.tab_detail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form.div_range
            obj = new Layout("default","",0,0,this.div_search.form.div_range.form,function(p){});
            this.div_search.form.div_range.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_detail.form
            obj = new Layout("default","",0,0,this.div_detail.form,function(p){});
            this.div_detail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_detail.Tabpage1.form
            obj = new Layout("default","",0,0,this.tab_detail.Tabpage1.form,function(p){});
            this.tab_detail.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_detail.Tabpage2
            obj = new Layout("default","",0,0,this.tab_detail.Tabpage2.form,function(p){});
            this.tab_detail.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_detail.Tabpage3.form
            obj = new Layout("default","",0,0,this.tab_detail.Tabpage3.form,function(p){});
            this.tab_detail.Tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,630,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_detail.form.msk_id","value","ds_emp","EMP_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_detail.form.edt_name","value","ds_emp","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_detail.form.edt_dept","value","ds_emp","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_detail.form.cal_hire_date","value","ds_emp","HIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_detail.form.rdo_gender","value","ds_emp","GENDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_detail.form.edt_phone_no","value","ds_emp","PHONE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_detail.form.edt_email","value","ds_emp","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_detail.form.txt_memo","value","ds_emp","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_detail.form.cbo_position","value","ds_emp","POSITION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Comm::Comm_DateRange.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Sample_Script.xfdl","Lib::Lib_Util.xjs");
        this.registerScript("Sample_Script.xfdl", function() {
        /**
         *  교육 샘플 프로젝트
         *  @MenuPath	Sample > script 표준
         *  @FileName	Sample_Script.xfdl
         *  @Creator	education
         *  @CreateDate	2025.04.01
         *  @Desction   스크립트 표준 및 주석 표준 정의
         ************** 소스 수정 이력 ***********************************************
         *  date          	Modifier                Description
         *******************************************************************************
         *  2025.04.01     	education 	            최초 생성
         *******************************************************************************
         */

        /************************************************************************
         * include 영역
         ************************************************************************/
        this.executeIncludeScript("Lib::Lib_Util.xjs"); /*include "Lib::Lib_Util.xjs"*/


        /************************************************************************
         * Form 변수 선언 영역
         ************************************************************************/
        this.fv_user = "nexacro";


        /************************************************************************
         * Form Event 영역
         ************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
         */
        this.Form_onload = function(obj,e)
        {
            this.gfn_formOnLoad(this);
            this.fn_init();
        };

        /************************************************************************
         * Callback 처리 영역
         ************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
         */
        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	if(svcId == "svcSaveEmp"){
        		this.gfn_alert("msg.save.success");
        	}
        }

        /**
         * @description Popup CallBack 함수(선택)
         */
        this.fn_callbackPopup = function(sPopupId, sReturn)
        {
        	if(sReturn == undefined){
        		sReturn = "";
        	}
        	if(sPopupId == "popupDept"){
        		if(sReturn.length > 0){
        			var arrRtn = sReturn.split("|");
        			this.ds_emp.setColumn(this.ds_emp.rowposition, "DEPT_CODE", arrRtn[0]);
        			this.ds_emp.setColumn(this.ds_emp.rowposition, "DEPT_NAME", arrRtn[1]);
        		}
        	}
        }

        /**
         * @description Message Popup CallBack 함수(선택)
         */
        this.fn_callbackMsg = function(sPopupId, sReturn)
        {
        	if(sPopupId == "msgDelete"){
        		if(sReturn){
        			this.ds_emp.deleteRow(this.ds_emp.rowposition);
        		}
        	}
        }


        /************************************************************************
         * CRUD, 서비스 호출 영역
         ************************************************************************/
        /**
         * @description 공통코드 조회
         */
        this.fn_getCommCode = function()
        {
        }

        /**
         * @description 조회
         */
        this.btn_search_onclick = function(obj,e)
        {
            var sSvcID    = "svcGetEmpList";
            var sURL      = "SvcUrl::getEmpList.jsp";
            var sInDs     = "";
            var sOutDs    = "ds_emp=out_emp";
            var sParam    = "pStatus="    + this.div_search.form.rdo_status.value
        	              + " pName="     + nexacro.wrapQuote(this.div_search.form.edt_name.value)
        				  + " pDept="     + nexacro.wrapQuote(this.div_search.form.edt_dept.value)
        				  + " pDateFrom=" + this.div_search.form.div_range.form.fn_getFromDate()
        				  + " pDateTo="   + this.div_search.form.div_range.form.fn_getToDate();
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        /**
         * @description 상세정보 조회
         */
        this.fn_getAppoint = function()
        {
            var sEmpID = this.ds_emp.getColumn(this.ds_emp.rowposition, "EMP_ID");
            var sSvcID    = "svcGetDetail";
            var sURL      = "SvcUrl::getEmpAppoint.jsp";
            var sInDs     = "";
            var sOutDs    = "ds_appoint=out_appoint";
            var sParam    = "pEmpID='" + sEmpID + "'";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        }

        /**
         * @description 입력
         */
        this.btn_add_onclick = function(obj,e)
        {
        	var nRow = this.ds_emp.addRow();
        	this.div_detail.form.edt_name.setFocus();
        	this.ds_emp.setColumn(nRow, "HIRE_DATE", this.gfn_getDate());
        };

        /**
         * @description 삭제
         */
         this.btn_delete_onclick = function(obj,e)
        {
        	var sMsgId       = "confirm.before.delete";
        	var arrArg       = "";
        	var sPopId       = "msgDelete";
        	var sMsgCallback = "fn_callbackMsg"
        	this.gfn_alert(sMsgId, arrArg, sPopId, sMsgCallback);
        };

        /**
         * @description 저장
         */
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

            var sSvcID    = "svcSaveEmp";
            var sURL      = "SvcUrl::saveEmp.jsp";
            var sInDs     = "in_emp=ds_emp:u";
            var sOutDs    = "";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };


        /************************************************************************
         * 사용자 함수 영역
         ************************************************************************/
        /**
         * @description 사용자 함수
         */
        this.fn_init = function()
        {
        	this.div_search.form.div_range.form.fn_setFromDate(this.gfn_getFirstDate());
        	this.div_search.form.div_range.form.fn_setToDate(this.gfn_getDate());

        	var arrCode = new Array();
        	arrCode.push({codeGroup:"C010", obj:this.div_detail.form.cbo_position});
        	arrCode.push({codeGroup:"C020", obj:this.div_search.form.rdo_status, first:"0"});
            this.gfn_getCommonCode(arrCode);

        }

        /************************************************************************
         * Component 별 Event 스크립트 영역
         ************************************************************************/
        /**
         * @description 조회조건 영역 부서팝업 호출
         */
        this.div_detail_btn_popupDept_onclick = function(obj,e)
        {
            var sPopupId  = "popupDept";
            var sUrl      = "Form::Popup_SearchDept.xfdl";
        	var oArg      = {};
        	var sCallBack = "fn_callbackPopup";
            var oOption   = {title : "부서 검색"};
        	this.gfn_openPopup(sPopupId, sUrl, oArg, sCallBack, oOption);

        };

        /**
         * @description 상세 정보 조회
         */

        this.ds_emp_onrowposchanged = function(obj,e)
        {
        	this.fn_getAppoint();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.div_search.form.rdo_status.addEventHandler("onitemchanged",this.div_search_rdo_status_onitemchanged,this);
            this.div_detail.form.edt_name.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.rdo_gender.addEventHandler("onitemchanged",this.div_detail_rdo_gender_onitemchanged,this);
            this.div_detail.form.Static00.addEventHandler("onclick",this.div_detail_Static10_onclick,this);
            this.div_detail.form.Static05.addEventHandler("onclick",this.Div00_Static05_onclick,this);
            this.div_detail.form.Static07.addEventHandler("onclick",this.div_detail00_Static16_00_onclick,this);
            this.div_detail.form.edt_phone_no.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.edt_email.addEventHandler("canchange",this.div_detail_edt_name_canchange,this);
            this.div_detail.form.btn_popupDept.addEventHandler("onclick",this.div_detail_btn_popupDept_onclick,this);
            this.grd_emp.addEventHandler("onheadclick",this.grd_emp_onheadclick,this);
            this.grd_emp.addEventHandler("oncellclick",this.grd_emp_oncellclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.btn_delete.addEventHandler("onclick",this.btn_delete_onclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_search.addEventHandler("onclick",this.btn_search_onclick,this);
            this.tab_detail.Tabpage1.form.grd_appoint.addEventHandler("onheadclick",this.tab_detail_Tabpage1_grd_appoint_onheadclick,this);
            this.ds_emp.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
            this.ds_emp.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
        };
        this.loadIncludeScript("Sample_Script.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
