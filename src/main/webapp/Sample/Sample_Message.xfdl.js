(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_Message");
            this.set_titletext("Sample_Message");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static09","20","60","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Common Message");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","20","90",null,null,"380","19",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("gds_message");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"393\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"MSG_ID\"/><Cell col=\"1\" text=\"MSG_TEXT\"/><Cell col=\"2\" text=\"MSG_TYPE\"/></Band><Band id=\"body\"><Cell text=\"bind:MSG_ID\"/><Cell col=\"1\" text=\"bind:MSG_TEXT\"/><Cell col=\"2\" text=\"bind:MSG_TYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_word",null,"60","66","26","150",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Word");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_alert",null,"60","86","26","470",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Alert");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_word",null,"90","340",null,"20","19",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("gds_word");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"110\"/><Column size=\"110\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"WORD_ID\"/><Cell col=\"1\" text=\"KR\"/><Cell col=\"2\" text=\"EN\"/></Band><Band id=\"body\"><Cell text=\"bind:WORD_ID\"/><Cell col=\"1\" text=\"bind:KR\"/><Cell col=\"2\" text=\"bind:EN\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm",null,"60","86","26","379",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Confirm");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","0","166","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Message");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","660","60","130","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Word Dictionary");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_word2",null,"60","126","26","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("String Resource");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("Sample_Message.xfdl", function() {

        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };

        /*
         * @class 메세지 알림, 확인창 호출
         * AppVariables Datasets gds_message에 메세지 등록 후 사용
         *
         *
         * 메세지 호출
           var sMsgId       = "msg.err.validator.length";   //메세지 ID
           var arrWord      = ["사원번호", "5자리"];      //메세지 치환 될 배열 값 [생략가능]
           var sPopId       = sMsgId;                       //메세지 팝업창 ID [생략가능]
           var sMsgCallback = "fn_msgCallback"              //팝업 콜백 [생략가능, Confirm성 메세지 사용시 필수]
           this.gfn_alert(sMsgId, arrWord);
           this.gfn_alert(sMsgId, arrWord, sPopId, sMsgCallback);

         */

        this.btn_alert_onclick = function(obj,e)
        {
            //{0}의 입력값의 길이는 {1} 이하이어야 합니다.
            this.gfn_alert("msg.err.validator.length", ["사원번호", "5자리"]);
        };

        this.btn_confirm_onclick = function(obj,e)
        {
            //변경된 내역을 저장 하시겠습니까?
           var sMsgId       = "confirm.before.save";
           var arrWord      = "";
           var sPopId       = sMsgId;
           var sMsgCallback = "fn_msgCallback"
           this.gfn_alert(sMsgId, arrWord, sPopId, sMsgCallback);
        };

        this.fn_msgCallback = function(sPopupId, sValue)
        {
            if(sPopupId == "confirm.before.save"){
                if(sValue){
                    //Save Script
                    trace(sPopupId + " : " + sValue);
                }
            }
        }

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	var objApp = nexacro.getApplication();
        	var sMsgId       =  objApp.gds_message.getColumn(e.row, "MSG_ID");
        	var arrWord      = "";
        	var sPopId       = sMsgId;
        	var sMsgCallback = "fn_msgCallback"
        	this.gfn_alert(sMsgId, arrWord, sPopId, sMsgCallback);
        };



        this.btn_word_onclick = function(obj,e)
        {
        	var objDs = this.grd_word.getBindDataset();
        	var sWord = objDs.getColumn(objDs.rowposition, "WORD_ID");
            var sWord = this.gfn_getWord(sWord);
            this.alert(sWord);
        };

        this.btn_word2_onclick = function(obj,e)
        {
        	var sWord = this.fn_getStringResource("employee.management");
        	this.alert(sWord);
        };

        this.fn_getStringResource = function (sWord)
        {
        //	Environment > Property > usestringresource 지정
         	nexacro.loadStringResource("ko");
        	var objApp = this.gfn_getApplication();
        	var sVal = nexacro.getStringResourceValue(sWord);
        	if(this.gfn_isNull(sVal)){
        		sVal = sWord;
        	}
        	return sVal;
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.btn_word.addEventHandler("onclick",this.btn_word_onclick,this);
            this.btn_alert.addEventHandler("onclick",this.btn_alert_onclick,this);
            this.grd_word.addEventHandler("onheadclick",this.grd_list_onheadclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.btn_word2.addEventHandler("onclick",this.btn_word2_onclick,this);
        };
        this.loadIncludeScript("Sample_Message.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
