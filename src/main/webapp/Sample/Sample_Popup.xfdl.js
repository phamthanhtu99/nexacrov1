(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_Popup");
            this.set_titletext("Sample_Popup");
            if (Form == this.constructor)
            {
                this._setFormPosition(1028,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","20","0","166","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("팝업 화면 처리");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_1",null,"60","95","26","913",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("모달");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_2",null,"61","95","26","813",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("모달리스");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1028,630,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample_Popup.xfdl", function() {
        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };

        /*
         * @class 팝업오픈
         * @param {String} sPopupId	- 팝업ID
         * @param {String} sUrl	 - 팝업URL
         * @param {String} [oArg] - 전달값 {key:value, key:value}
         * @param {String} [sPopupCallback] - 팝업콜백
         * @param {Object} [oOption] - 팝업옵션 {key:value, key:value}
         *	                popuptype : 팝업종류(modal, modeless, modalsync, modalwindow) default:modal
         *	                top : 상단 좌표
         *	                left : 좌측 좌표
         *	                width : 넓이
         *	                height : 높이
         *	                layered : 투명 윈도우 default:false
         *	                opacity : 투명도 default:100
         *	                autosize : autosize default:false
         *	                titlebar : 타이틀바 default:false
         *	                title : 타이틀
         *                   var oOption   = {popuptype:"modeless",title:"모달리스 팝업",width:"300",height:"350"};
         */

        //모달
        this.btn_1_onclick = function(obj,e)
        {
            var sPopupId  = "modalPopup";
            var sUrl      = "Sample::Sample_PopupSub.xfdl";
        	var oArg      = {pStr:"Nexacro", pNum:1234, pObj:this.ds_emp};
        	var sCallBack = "fn_popupCallback";
            var oOption   = {title : "모달 팝업"};
        	this.gfn_openPopup(sPopupId, sUrl, oArg, sCallBack, oOption);
        };

        //모달리스
        this.btn_2_onclick = function(obj,e)
        {
            var sPopupId  = "modelessPopup";
            var sUrl      = "Sample::Sample_PopupSub.xfdl";
        	var oArg      = {pStr:"Nexacro", pNum:1234, pObj:this.ds_emp};
        	var sCallBack = "fn_popupCallback";
            var oOption   = {popuptype:"modeless",title:"모달리스 팝업",width:"300",height:"383"};	//350 + 타이틀바 33
        	this.gfn_openPopup(sPopupId, sUrl, oArg, sCallBack, oOption);
        };

        this.fn_popupCallback = function(sPopId, sRtn)
        {
        //     var arrRtn = sRtn.split("|");
        //     trace(arrRtn[0]);
        //     trace(arrRtn[1]);


            var objRtn = JSON.parse(sRtn);

            trace(objRtn.deptcd);
            trace(objRtn.deptnm);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.btn_1.addEventHandler("onclick",this.btn_1_onclick,this);
            this.btn_2.addEventHandler("onclick",this.btn_2_onclick,this);
        };
        this.loadIncludeScript("Sample_Popup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
