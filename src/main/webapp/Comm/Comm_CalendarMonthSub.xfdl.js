(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_CalendarMonthSub");
            this.set_titletext("월 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(174,215);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_bg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_MonthBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","10","45","48","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","btn01:5","45","48","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","116","45","48","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","10","86","48","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn05","63","86","48","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn06","116","86","48","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn07","10","127","48","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn08","63","127","48","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn09","116","127","48","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn10","10","168","48","36",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn11","63","168","48","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("11");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Button("btn12","116","168","48","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("12");
            obj.set_cssclass("btn_WF_CalMonth");
            this.addChild(obj.name, obj);

            obj = new Static("sta_year","0","10",null,"26","0",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("9999");
            obj.set_cssclass("sta_WF_Cal");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prev","10","14","21","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_CalMonthPrev");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next",null,"14","21","18","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_CalMonthNext");
            this.addChild(obj.name, obj);

            obj = new Spin("spn_year","53","10","75","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_visible("false");
            obj.set_type("noneditable");
            obj.set_min("1900");
            obj.set_max("2900");
            obj.set_value("2900");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",174,215,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comm_CalendarMonthSub.xfdl", function() {
        /**
        *  @MenuPath    Comm > Comm_CalendarMonthSub (공통 월달력 Popup Div link 사용)
        *  @FileName 	Comm_CalendarMonthSub.xfdl
        *  @CreateDate 	2025.04.01
        *  @Desction    월달력, 년도 수정 가능
        */


        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	var sDate = this.parent.calObj.value;

            if(this.gfn_isNull(sDate)) sDate = this.gfn_getDate(); // 오늘 날자 세팅
            this.sta_year.text = (sDate.substr(0,4));
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description   월달력 popDiv컴포넌트 닫기
        */
        this.pdvCal_btnPdvCancle_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };

        /**
        * @description   이전 년도 버튼 클릭
        */
        this.pdvCal_btn_prev_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber(this.sta_year.text);
        	this.sta_year.text = (sDate - 1 );

        };

        /**
        * @description  다음년도 버튼 클릭
        */
        this.pdvCal_btn_next_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber(this.sta_year.text);
        	this.sta_year.text = (sDate + 1 );
        };

        /**
        * @description  월 버튼 클릭
        */
        this.pdvCal_btn1_onclick = function(obj,e)
        {
        	var rtn = this.sta_year.text + obj.name.substr(3);  //btn01, btn02...
        	this.parent.calObj.value = rtn;
        	this.parent.closePopup();
        };
        this.sta_year_onclick = function(obj,e)
        {
            this.spn_year.value = obj.text;
        	obj.visible = false;
            this.spn_year.visible = true;
        };

        this.spn_year_onchanged = function(obj,e)
        {
            this.sta_year.text = e.postvalue;
        	obj.visible = false;
            this.sta_year.visible = true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn01.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn02.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn03.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn04.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn05.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn06.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn07.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn08.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn09.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn10.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn11.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.btn12.addEventHandler("onclick",this.pdvCal_btn1_onclick,this);
            this.sta_year.addEventHandler("onclick",this.sta_year_onclick,this);
            this.btn_prev.addEventHandler("onclick",this.pdvCal_btn_prev_onclick,this);
            this.btn_next.addEventHandler("onclick",this.pdvCal_btn_next_onclick,this);
            this.spn_year.addEventHandler("onchanged",this.spn_year_onchanged,this);
            this.spn_year.addEventHandler("onkillfocus",this.spn_year_onkillfocus,this);
        };
        this.loadIncludeScript("Comm_CalendarMonthSub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
