(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Frame_Left");
            this.set_titletext("Frame_Left");
            this.set_cssclass("frm_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(200,728);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_GROUP","type" : "STRING","size" : "256"},{"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NAME","type" : "STRING","size" : "256"},{"id" : "LEVEL","type" : "STRING","size" : "256"},{"id" : "FORM_URL","type" : "STRING","size" : "256"},{"id" : "ENABLE","type" : "STRING","size" : "256"},{"id" : "MENU_AUTH","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_GROUP" : "10","MENU_ID" : "1001","MENU_NAME" : "템플릿","LEVEL" : "0","ENABLE" : "1"},{"MENU_GROUP" : "10","MENU_ID" : "1002","MENU_NAME" : "컴포넌트","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "10","MENU_ID" : "1003","MENU_NAME" : "공통 가이드","LEVEL" : "2","FORM_URL" : "Guide::Guide_Comp01.xfdl","ENABLE" : "1","MENU_AUTH" : "111111"},{"MENU_GROUP" : "10","MENU_ID" : "1004","MENU_NAME" : "버튼 가이드","LEVEL" : "2","FORM_URL" : "Guide::Guide_Comp02.xfdl","ENABLE" : "1","MENU_AUTH" : "100100"},{"MENU_GROUP" : "10","MENU_ID" : "1005","MENU_NAME" : "그리드 가이드","LEVEL" : "2","FORM_URL" : "Guide::Guide_Comp03.xfdl","ENABLE" : "1","MENU_AUTH" : "010101"},{"MENU_GROUP" : "10","MENU_ID" : "1006","MENU_NAME" : "조회영역","LEVEL" : "2","FORM_URL" : "Guide::Guide_Comp04.xfdl","ENABLE" : "1","MENU_AUTH" : "001001"},{"MENU_GROUP" : "10","MENU_ID" : "1007","MENU_NAME" : "상세영역","LEVEL" : "2","FORM_URL" : "Guide::Guide_Comp05.xfdl","ENABLE" : "1","MENU_AUTH" : "111111"},{"MENU_GROUP" : "10","MENU_ID" : "1008","MENU_NAME" : "화면 템플릿","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "10","MENU_ID" : "1009","MENU_NAME" : "템플릿1","LEVEL" : "2","FORM_URL" : "Guide::Guide_Form01.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "10","MENU_ID" : "1010","MENU_NAME" : "템플릿2","LEVEL" : "2","FORM_URL" : "Guide::Guide_Form02.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "10","MENU_ID" : "1011","MENU_NAME" : "템플릿3","LEVEL" : "2","FORM_URL" : "Guide::Guide_Form03.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "10","MENU_ID" : "1012","MENU_NAME" : "템플릿4","LEVEL" : "2","FORM_URL" : "Guide::Guide_Form04.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "10","MENU_ID" : "1013","MENU_NAME" : "템플릿5","LEVEL" : "2","FORM_URL" : "Guide::Guide_Form05.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "10","MENU_ID" : "1014","MENU_NAME" : "템플릿6","LEVEL" : "2","FORM_URL" : "Guide::Guide_Form06.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "10","MENU_ID" : "1015","MENU_NAME" : "템플릿7","LEVEL" : "2","FORM_URL" : "Guide::Guide_Form07.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "20","MENU_ID" : "2001","MENU_NAME" : "샘플","LEVEL" : "0","ENABLE" : "1"},{"MENU_GROUP" : "20","MENU_ID" : "2002","MENU_NAME" : "셈플1","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "20","MENU_ID" : "2003","MENU_NAME" : "Calendar","LEVEL" : "2","FORM_URL" : "Sample::Sample_Calendar.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "20","MENU_ID" : "2004","MENU_NAME" : "Grid","LEVEL" : "2","FORM_URL" : "Sample::Sample_Grid.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "20","MENU_ID" : "2005","MENU_NAME" : "Message","LEVEL" : "2","FORM_URL" : "Sample::Sample_Message.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "20","MENU_ID" : "2006","MENU_NAME" : "MultiCombo","LEVEL" : "2","FORM_URL" : "Sample::Sample_MultiCombo.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "20","MENU_ID" : "2007","MENU_NAME" : "샘플2","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "20","MENU_ID" : "2008","MENU_NAME" : "Popup","LEVEL" : "2","FORM_URL" : "Sample::Sample_Popup.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "20","MENU_ID" : "2009","MENU_NAME" : "Script","LEVEL" : "2","FORM_URL" : "Sample::Sample_Script.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "20","MENU_ID" : "2010","MENU_NAME" : "Validation","LEVEL" : "2","FORM_URL" : "Sample::Sample_Validation.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "20","MENU_ID" : "2011","MENU_NAME" : "샘플3","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "20","MENU_ID" : "2012","MENU_NAME" : "트랜잭션","LEVEL" : "2","FORM_URL" : "Sample::Sample_Transaction.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "20","MENU_ID" : "2013","MENU_NAME" : "트랜잭션(Spring)","LEVEL" : "2","FORM_URL" : "Sample::Sample_TransactionSpring.xfdl","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3001","MENU_NAME" : "전자결재","LEVEL" : "0","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3002","MENU_NAME" : "결재양식","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3003","MENU_NAME" : "결재요청문서","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3004","MENU_NAME" : "임시보관문서","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3005","MENU_NAME" : "결재문서","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3006","MENU_NAME" : "미결함","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3007","MENU_NAME" : "기결함","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3008","MENU_NAME" : "수신참조함","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3009","MENU_NAME" : "반려함","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3010","MENU_NAME" : "결재설정","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3011","MENU_NAME" : "결재라인설정","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "40","MENU_ID" : "4001","MENU_NAME" : "전자우편","LEVEL" : "0","ENABLE" : "1"},{"MENU_GROUP" : "40","MENU_ID" : "4002","MENU_NAME" : "전체편지함","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "40","MENU_ID" : "4003","MENU_NAME" : "받은편지함","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "40","MENU_ID" : "4004","MENU_NAME" : "보낸편지함","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "40","MENU_ID" : "4005","MENU_NAME" : "임시보관함","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "40","MENU_ID" : "4006","MENU_NAME" : "지운편지함","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5001","MENU_NAME" : "일정관리","LEVEL" : "0","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5002","MENU_NAME" : "개인일정","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5003","MENU_NAME" : "일정","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5004","MENU_NAME" : "메모","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5005","MENU_NAME" : "할일","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5006","MENU_NAME" : "공유일정","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5007","MENU_NAME" : "통합일정검색","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5008","MENU_NAME" : "주간일정","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5009","MENU_NAME" : "월간일정","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5010","MENU_NAME" : "업무보고","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5011","MENU_NAME" : "업무보고작성","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5012","MENU_NAME" : "업무보고확인","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5013","MENU_NAME" : "업무보고참조","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5014","MENU_NAME" : "주간업무보고","LEVEL" : "2","ENABLE" : "1"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("0px none,1px solid #e3e4e9,0px none,0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_menu","0","10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_menu");
            obj.set_treeinitstatus("expand,null");
            obj.set_treeusecheckbox("false");
            obj.set_cssclass("grd_LF_Tree");
            obj.set_treeuseline("false");
            obj.set_treeuseimage("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"191\"/></Columns><Rows><Row size=\"29\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEVEL\" cssclass=\"expr:comp.isTreeLeafRow(currow) == true ? &quot;grd_LF_TreeCell&quot; : &quot;&quot;\"/></Band></Format><Format id=\"mymenu\"><Columns><Column size=\"20\"/><Column size=\"182\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"즐겨찾기\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" text=\"bind:MENU_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",200,728,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Frame_Left");
                p.set_cssclass("frm_Bg");

                p.Static00.set_taborder("1");
                p.Static00.set_border("0px none,1px solid #e3e4e9,0px none,0px none");
                p.Static00.move("0","0",null,null,"0","0");

                p.grd_menu.set_taborder("0");
                p.grd_menu.set_binddataset("ds_menu");
                p.grd_menu.set_treeinitstatus("expand,null");
                p.grd_menu.set_treeusecheckbox("false");
                p.grd_menu.set_cssclass("grd_LF_Tree");
                p.grd_menu.set_treeuseline("false");
                p.grd_menu.set_treeuseimage("false");
                p.grd_menu.set_autofittype("col");
                p.grd_menu.move("0","10",null,null,"0","0");
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_screen","Phone_screen",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame_Left.xfdl", function() {
        this.fv_objApp = nexacro.getApplication();

        this.form_onload = function(obj,e)
        {
        	 this.fn_changeMenu(this.fv_objApp.gds_menu.getColumn(0, "MENU_ID"));
        };

        // 상단 Top메뉴 변경시 하위메뉴 변경
        this.fn_changeMenu = function(sTopMenuId)
        {
        	this.fv_objApp.gds_menu.enableevent = false;
        	this.ds_menu.enableevent = false;
        	var sExpr = "MENU_GROUP == '" + sTopMenuId.substr(0,2) + "' && LEVEL != '0'";
        	this.fv_objApp.gds_menu.filter(sExpr);
        	this.ds_menu.copyData(this.fv_objApp.gds_menu, true);
        	this.fv_objApp.gds_menu.filter("");
        	this.fv_objApp.gds_menu.enableevent = true;
        	this.ds_menu.enableevent = true;
        };


        this.grd_menu_oncelldblclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
            //var arrArg = [];
            var arrArg = this.grd_menu.getTreePath(e.row).replace("."," > ");

        	this.gfn_openForm(objDs, e.row, arrArg);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grd_menu.addEventHandler("oncelldblclick",this.grd_menu_oncelldblclick,this);
        };
        this.loadIncludeScript("Frame_Left.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
