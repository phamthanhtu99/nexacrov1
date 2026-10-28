(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_DateRange");
            this.set_titletext("Comm_DateRange");
            if (Form == this.constructor)
            {
                this._setFormPosition(280,26);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_date", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "DATE_FR","type" : "STRING","size" : "256"},{"id" : "DATE_TO","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Calendar("cal_from","0","0","46.43%","26",null,null,"130",null,null,null,this);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_popuptype("none");
            obj.set_value("20220101");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","cal_from:5","0","10","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to","Static00:5","0","46.43%","26",null,null,"130",null,null,null,this);
            obj.set_taborder("0");
            obj.set_popuptype("none");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_value("20220215");
            this.addChild(obj.name, obj);

            obj = new PopupDateRangePicker("pdrp_dateRange","0","50","530","230",null,null,null,null,null,null,this);
            obj.set_useclosebutton("true");
            obj.set_displaytype("date");
            obj.set_closebuttontext("OK");
            obj.set_displaymonthcount("3");
            obj.set_useheadline("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",280,26,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comm_DateRange.xfdl", function() {
        /**
        *  @MenuPath    Comm > Comm_CalendarRange (공통 기간달력)
        *  @FileName 	Comm_CalendarRange.xfdl
        *  @Creator 	Education
        *  @CreateDate 	2025.04.01
        *  @Desction    기간달력
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2025.04.01     	Education 	               최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);//초기화[필수]
        	this.fn_init(); //달력초기화
        };
        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 달력초기화
        */
        this.fn_init = function()
        {
        	//요구사항에 따라 오늘날짜 3개월 등등 지정
        	this.cal_from.value = this.gfn_getFirstDate();	// FROM 달력 셋팅
        	this.cal_to.value = this.gfn_getDate();			// TO 달력 셋팅
        };

        /**
        * @description from 일자 갖고오기
        */
        this.fn_getFromDate = function ()
        {
        	var sDate = this.cal_from.value;
        	return sDate;
        };

        /**
        * @description to 일자 갖고오기
        */
        this.fn_getToDate = function ()
        {
        	var sDate = this.cal_to.value;
        	return sDate;
        };

        /**
        * @description from일자 세팅하기
        */
        this.fn_setFromDate = function (sDate)
        {
        	this.cal_from.value = sDate;
        };

        /**
        * @description to일자 세팅하기
        */
        this.fn_setToDate = function (sDate)
        {
        	this.cal_to.value = sDate;
        };

        /**
        * @description enable true/false세팅
        */
        this.fn_setEnable = function (bValue)
        {
        	this.cal_from.enable = bValue;
        	this.cal_to.enable = bValue;
        };

        /**
        * @description readonly true/false세팅
        */
        this.fn_setReadonly = function (bValue)
        {
        	this.cal_from.readonly = bValue;
        	this.cal_to.readonly = bValue;
        };

        /**
        * @description Essential true/false세팅
        */
        this.fn_setEssential  = function (bValue)
        {
        	//CSS Essential 클래스설정
        	if(bValue){
                this.cal_from.cssclass = "cal_WF_Essential";
                this.cal_to.cssclass = "cal_WF_Essential";
        	}
            else{
                this.cal_from.cssclass = "";
                this.cal_to.cssclass = "";
        	}
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description Calendar_ondropdown 이벤트 시 PopupDateRangePicker컴포넌트 띄우기
        */
        this.cal_from_ondropdown = function(obj,e)
        {
        	this.pdrp_dateRange.startdate = this.cal_from.value;
        	this.pdrp_dateRange.enddate   = this.cal_to.value
        	this.pdrp_dateRange.trackPopupByComponent("start", this.cal_from, 0, obj.height);
        };

        /**
        * @description 기간 PopupDateRangePicker컴포넌트 "CLOSE" 버튼 클릭
        */
        this.pdrp_dateRange_onlbuttonup = function(obj,e)
        {
        	trace(e.fromreferenceobject + " : " + e.fromreferenceobject.name);

        	if(e.fromreferenceobject.name == "closebutton"){
        		this.cal_from.value = obj.startdate;
        		this.cal_to.value = obj.enddate;
        		this.fn_callback(obj.startdat, obj.enddate);
        	}

        };

        this.fn_callback = function(sFromValue, sToValue)
        {
        	var sCallback = this.parent.callbackfunc;
        	if (!this.gfn_isNull(sCallback)) {
        		try {
        			var svcId = this.parent.name;
        			this.lookupFunc(sCallback).call(svcId, sFromValue, sToValue);
        		} catch(e) {
        			//trace("함수 실행시 오류가 발생했습니다.");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cal_from.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.cal_to.addEventHandler("ondropdown",this.cal_from_ondropdown,this);
            this.pdrp_dateRange.addEventHandler("oncloseup",this.pdrp_dateRange_oncloseup,this);
            this.pdrp_dateRange.addEventHandler("ondayclick",this.pdrp_dateRange_ondayclick,this);
            this.pdrp_dateRange.addEventHandler("onlbuttondown",this.pdrp_dateRange_onlbuttondown,this);
            this.pdrp_dateRange.addEventHandler("onlbuttonup",this.pdrp_dateRange_onlbuttonup,this);
        };
        this.loadIncludeScript("Comm_DateRange.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
