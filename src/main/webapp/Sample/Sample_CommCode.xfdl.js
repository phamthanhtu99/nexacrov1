(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_CommCode");
            this.set_titletext("Sample_CommCode");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pos", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GROUP","type" : "STRING","size" : "256"},{"id" : "GROUP_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "CODE_NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_area", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GROUP","type" : "STRING","size" : "256"},{"id" : "GROUP_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "CODE_NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GROUP","type" : "STRING","size" : "256"},{"id" : "GROUP_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "CODE_NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hobby", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GROUP","type" : "STRING","size" : "256"},{"id" : "GROUP_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "CODE_NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_list","20","90","430",null,null,"26",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gds_comCode");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"98\"/><Column size=\"60\"/><Column size=\"134\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"GROUP\"/><Cell col=\"1\" text=\"GROUP_NAME\"/><Cell col=\"2\" text=\"CODE\"/><Cell col=\"3\" text=\"CODE_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:GROUP\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:GROUP_NAME\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:CODE\"/><Cell col=\"3\" text=\"bind:CODE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","490","120","247","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_pos");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","490","371","281","165",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_hobby");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"CODE\"/><Cell col=\"1\" text=\"CODE_NAME\"/></Band><Band id=\"body\"><Cell text=\"bind:CODE\"/><Cell col=\"1\" text=\"bind:CODE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","490","341","270","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취미코드(C060) First \"사용자지정\"");
            obj.set_cssclass("sta_WF_Title4");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","831","64","121","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Get - Dataset ID");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","490","90","230","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("직급코드(C010) / Default");
            obj.set_cssclass("sta_WF_Title4");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","490","166","230","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("재직상태코드(C020) / First \"전체\"");
            obj.set_cssclass("sta_WF_Title4");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","957","64","54","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("reset");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","490","196","247","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_status");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_rowcount("1");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","490","272","247","49",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","10","10","150","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_area");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn00","680","64","146","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Get - Component ID");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","490","242","240","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("지역코드(C040) / First \"선택하세요\"");
            obj.set_cssclass("sta_WF_Title4");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","0","166","60",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("공통코드");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","60","230","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Code List - gds_comCode");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","490","60","230","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Get Code");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample_CommCode.xfdl", function() {

        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };

        /*
            공통코드 - AppVariables Datasets gds_comCode에서 코드그룹에 맞는 코드값 가져오기

            배열에 조회할 공통코드 정보를 추가 후 함수를 호출
                codeGroup : 공통코드 그룹코드
                obj       : 공통코드 적용할 comp or dataset
                first     : 첫번째 row에 추가할 값
                            0: 전체(ALL) 표현 - 코드값은 "ALL"
                            1: 선택하세요 표현 - 코드값은 ""
                            2: 사용자 지정 코드/명을 ":" 구분자로 지정

            this.gfn_searchCommonCode(arrCode, sCallBack) 함수로 공통코드를 조회할 수 있음
            공통코드 조회 후 sCallBack 함수가 호출

            서비스 통신 없이 Global Dataset 정보로 이용하여 공통함수 가져오는 경우
            this.gfn_getCommonCode(arrCode) 함수 호출

        */

        this.Button00_onclick = function(obj,e)
        {
            var arrCode = new Array();
        	arrCode.push({codeGroup:"C010", obj:this.ds_pos});
        	arrCode.push({codeGroup:"C020", obj:this.ds_status, first:"0"});
        	arrCode.push({codeGroup:"C040", obj:this.ds_area  , first:"1"});
        	arrCode.push({codeGroup:"C060", obj:this.ds_hobby , first:"2:AAA:NEXACRO"});
            this.gfn_getCommonCode(arrCode);
        };

        this.btn00_onclick = function(obj,e)
        {
        	var arrCode = new Array();
        	arrCode.push({codeGroup:"C010", obj:this.Combo00});
        	arrCode.push({codeGroup:"C020", obj:this.Radio00           , first:"0"});
        	arrCode.push({codeGroup:"C040", obj:this.Div00.form.Combo00, first:"1"});
        	arrCode.push({codeGroup:"C060", obj:this.ds_hobby          , first:"2:AAA:NEXACRO"});
            this.gfn_getCommonCode(arrCode);
        };

        this.fn_callback = function()
        {
            this.alert("fn_callback");
        }


        this.Button01_onclick = function(obj,e)
        {
        	this.Combo00.index = -1;
        	this.Radio00.index = -1;
        	this.Div00.form.Combo00.index = -1;

            this.ds_pos.clear();
            this.ds_status.clear();
            this.ds_area.clear();
            this.ds_hobby.clear();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.grd_list.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("Sample_CommCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
