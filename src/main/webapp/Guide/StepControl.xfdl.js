(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("StepControl");
            this.set_titletext("Step");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,693);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01","15.00","10","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("약관동의");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","10","50","460","80",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Agree");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","10.00","50","460","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_positionstep("1");
            obj.set_cssclass("sta_WF_Info");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","15.00","10","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("회원정보 입력");
            obj.set_cssclass("sta_WF_Title");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","10.00","50","460","80",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_positionstep("2");
            obj.set_cssclass("sta_WF_Finish");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","15.00","10","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("회원가입 확인");
            obj.set_cssclass("sta_WF_Title");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","10.00","590","440","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("약관에 동의합니다.");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","10.00","150","460","425",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_value("(주)투비소프트 회원 이용약관\n\n[ 제 1 장 ] 총 칙\n\n제 1 조 목 적\n이 약관은 (주)투비소프트 (이하 \"회사\"라고 칭함) 가 제공하는 투비소프트 \n웹사이트 상의 서비스를 이용하는 회원(이하 \"회원\"이라 칭함) 들의 \n이용조건 및 절차에 관한 사항과 기타 필요한 사항을 규정하기 위한 것입니다.\n\n제 2 조 약관의 효력과 변경\n이 약관은 (주) 투비소프트의 회원으로 가입할 때 제공되며, 이에 동의하고 \n회원에 가입하시는 순간부터 효력을 발생합니다. \n회사는 회사의 사정 변경이나 영업상 중요한 사유가 발생하면 약관을 변경 \n할 수 있으며, 변경된 약관은 회사의 웹페이지에 변경에 관한 통지가 \n게시되는 순간부터 효력을 발생합니다.\n\n제 3 조 약관 외 준칙\n본 약관에 정하는 범위 이외의 이용자와 회사의 권리, 의무 및 책임사항에 \n관해서는 전기통신 사업법, 정보통신망 이용촉진 및 정보보호 등에 관한 \n법률 및 기타 관련 법령의 규정에 따릅니다.\n\n[ 제 2 장 ] 회원가입\n\n제 1 조 이용약관의 성립\n이용약관은 회원이 이용약관에 동의한 후 이에 대해 회사가 이용을 승낙함에 의해 성립됩니다. 회원으로 가입하여 서비스를 이용하고자 하는 희망자는 \n회사에서 요청하는 개인 신상정보를 제공해야 합니다.\n\n제 2 조 기재사항의 변경\n회원은 이용신청 시 기재한 사항에 변동이 생길 경우, 온라인을 이용하여 \n내용의 변경을 신청하여야 합니다.");
            obj.set_scrolltype("both");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","158.00","633","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_AgreeCancel");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","243.00","633","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_AgreeSave");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","10.00","150","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("회원 ID<fc v=\"#ff0000\">＊</fc>");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","163.00","225","155","155",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_positionstep("2");
            obj.set_cssclass("sta_WF_Welcome");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_00","185.00","400","110","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("회원가입 완료");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","120.00","436","240","43",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("홍길동님의\r\n회원가입이 완료되었습니다.");
            obj.set_positionstep("2");
            obj.set_cssclass("sta_WF_FinishGuide");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogin","115.00","623","250","40",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("LOGIN");
            obj.set_cssclass("btn_LOGIN_Login");
            obj.set_positionstep("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_01","10.00","201","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("성명<fc v=\"#ff0000\">＊</fc>");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01","158.00","633","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("취소");
            obj.set_cssclass("btn_WF_AgreeCancel");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00","243.00","633","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_AgreeSave");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_01_00","10.00","252","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("비밀번호<fc v=\"#ff0000\">＊</fc>");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_01_01","10.00","303","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("비밀번호확인<fc v=\"#ff0000\">＊</fc>");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_01_00_00","10.00","354","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("이메일<fc v=\"#ff0000\">＊</fc>");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","140","150","190","26",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","140","201","330","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","140","252","330","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_positionstep("1");
            obj.set_displaynulltext("6~12자리 영문, 숫자 특수문자조합");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","140","303","330","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_positionstep("1");
            obj.set_displaynulltext("6~12자리 영문, 숫자 특수문자조합");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","140","354","330","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_positionstep("1");
            obj.set_displaynulltext("example@example.co.kr");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_01_00_00_00","10.00","405","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("휴대전화번호<fc v=\"#ff0000\">＊</fc>");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_01_00_00_01","10.00","456","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","140","456","330","26",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05_00","140.00","558","330","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_01_00_00_01_00","10.00","558","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01_01_00_00_00_00","10.00","507","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("소속/부서");
            obj.set_cssclass("sta_WF_Label");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit06","140","405","330","26",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_positionstep("1");
            obj.set_displaynulltext("숫자만 입력하세요.");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","335","150","135","26",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("아이디 중복확인");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit07","140","507","330","26",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,693,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            obj.set_stepcount("3");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("StepControl.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.TextArea00.addEventHandler("onchanged",this.TextArea00_onchanged,this);
            this.Static02_01.addEventHandler("onclick",this.Static02_01_onclick,this);
            this.Static02_01_00.addEventHandler("onclick",this.Static02_01_onclick,this);
            this.btnLogin.addEventHandler("onclick",this.btnLogin_onclick,this);
            this.Static02_01_01.addEventHandler("onclick",this.Static02_01_onclick,this);
            this.Static02_01_01_00.addEventHandler("onclick",this.Static02_01_onclick,this);
            this.Static02_01_01_01.addEventHandler("onclick",this.Static02_01_onclick,this);
            this.Static02_01_01_00_00.addEventHandler("onclick",this.Static02_01_onclick,this);
            this.Static02_01_01_00_00_00.addEventHandler("onclick",this.Static02_01_onclick,this);
            this.Static02_01_01_00_00_01.addEventHandler("onclick",this.Static02_01_onclick,this);
            this.Static02_01_01_00_00_01_00.addEventHandler("onclick",this.Static02_01_onclick,this);
            this.Static02_01_01_00_00_00_00.addEventHandler("onclick",this.Static02_01_onclick,this);
        };
        this.loadIncludeScript("StepControl.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
