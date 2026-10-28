(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_Alert");
            this.set_titletext("알림창");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_msg","0","20","360","125",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("txt_POP_Message");
            obj.set_value("해당 row의 위치를 이동하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ok",null,null,"70","34","15","9",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Static("sta_icon","15","40","50","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_Info");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",360,200,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comm_Alert.xfdl", function() {


        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        	var sContents = this.getOwnerFrame().paramContents;
        	var sIcon = this.getOwnerFrame().paramMsgIcon;
        	this.fn_msgSet(sContents, sIcon);
        };

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 메세지설정
        */
        this.fn_msgSet = function (sMsgContent, sIcon)
        {
        	this.txt_msg.value = sMsgContent;

        	switch(sIcon){
        		case "ERR":
        			this.sta_icon.cssclass = "sta_POP_Error";
        			this.btn_ok.cssclass = "btn_WF_FillRed";
        			break;
        		case "WAN":
        			this.sta_icon.cssclass = "sta_POP_Warning";
        			this.btn_ok.cssclass = "btn_WF_FillYellow";
        			break;
        	}
        	this.btn_ok.setFocus();
        };


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description OK버튼이벤트
        */
        this.btn_ok_onclick = function(obj,e)
        {
        	this.close(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_ok.addEventHandler("onclick",this.btn_ok_onclick,this);
        };
        this.loadIncludeScript("Comm_Alert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
