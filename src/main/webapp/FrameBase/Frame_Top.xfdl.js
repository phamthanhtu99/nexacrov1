(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Frame_Top");
            this.set_titletext("Frame_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,50);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_menu", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","0","0","45","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_TF_LogoIcon");
            obj.set_background("#475a9e");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","61","17","138","17",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'theme::theme_edu/images/sta_TF_NexacroN.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Div("div_top","274","5","742",null,null,"5",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("sta_deptNm",null,"7","162","15","92",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("tobesoft education JiYoung");
            obj.set_cssclass("sta_TF_Welcome");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout",null,"7","77","15","6",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("로그아웃");
            obj.set_cssclass("btn_TF_Logout");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_top.form
            obj = new Layout("default","",0,0,this.div_top.form,function(p){});
            this.div_top.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1278,50,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Frame_Top");

                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_TF_Bg");
                p.Static00.move("0","0",null,"50","0",null);

                p.Button01.set_taborder("1");
                p.Button01.set_cssclass("btn_TF_LogoIcon");
                p.Button01.set_background("#475a9e");
                p.Button01.move("0","0","45","50",null,null);

                p.ImageViewer00.set_taborder("2");
                p.ImageViewer00.set_image("url(\'theme::theme_edu/images/sta_TF_NexacroN.png\')");
                p.ImageViewer00.set_stretch("fixaspectratio");
                p.ImageViewer00.set_border("0px none");
                p.ImageViewer00.move("61","17","138","17",null,null);

                p.div_top.set_taborder("3");
                p.div_top.move("274","5","742",null,null,"5");

                p.sta_deptNm.set_taborder("4");
                p.sta_deptNm.set_text("tobesoft education JiYoung");
                p.sta_deptNm.set_cssclass("sta_TF_Welcome");
                p.sta_deptNm.set_usedecorate("true");
                p.sta_deptNm.move(null,"7","162","15","92",null);

                p.btn_logout.set_taborder("5");
                p.btn_logout.set_text("로그아웃");
                p.btn_logout.set_cssclass("btn_TF_Logout");
                p.btn_logout.move(null,"7","77","15","6",null);
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
        this.registerScript("Frame_Top.xfdl", function() {
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fv_objApp = nexacro.getApplication();
        this.fv_prefix = "TOP_";

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {

        };


        /* Top Menu Set */
        this.fn_setTopMenu = function ()
        {
            this.fv_objApp.gds_menu.filter("LEVEL == '0'");
            this.ds_menu.copyData(this.fv_objApp.gds_menu, true);
            this.fv_objApp.gds_menu.filter("");
        	trace(this.ds_menu.saveXML());

        	var objBtn, objTextSize;
        	var nGap = 50;
        	var nLeft = 0, nTop = 0, nWidth = 100, nHeight = "100%";

        	for(var i=0; i<this.ds_menu.rowcount; i++){
        		var sId   = this.ds_menu.getColumn(i, "MENU_ID");
        		var sName = this.ds_menu.getColumn(i, "MENU_NAME");
        		var sImg  = this.ds_menu.getColumn(i, "MENU_IMG");

        		objBtn = new Button(this.fv_prefix + sId, nLeft, nTop, nWidth, nHeight);
        		this.div_top.addChild(objBtn.name, objBtn);
        		objBtn.text = sName;
        		objBtn.fittocontents = "width"

        		objBtn.menuid = sId;	//user variable
        		objBtn.cssclass = "btn_TF_Menu";
        		objBtn.setEventHandler("onclick", this.fn_menuClick, this);
        		objBtn.show();

        		nLeft += (objBtn.getOffsetWidth() + nGap);

        		if(i == 0){
        			this.objfocusMenu = objBtn;
        			objBtn.setSelectStatus(true);
        			this.fn_menuClick(objBtn);
        		}
        	}
        };

        this.objfocusMenu = "";
        this.fn_menuClick = function (obj, e)
        {
            //메뉴 클릭시 선택된 모양으로 적용
            if(obj.id.substr(0,4) == "TOP_"){
                if(this.objfocusMenu.id != obj.id){
                    this.objfocusMenu.setSelectStatus(false);
                    obj.setSelectStatus(true);
                    this.objfocusMenu = obj;
        			this.fv_objApp.av_LeftFrame.form.fn_changeMenu(obj.menuid);
                };
            }
        };



        this.btn_logout_onclick = function(obj,e)
        {
        	if(system.navigatorname == "nexacro")
        	{
        		var sMsgId = "confirm.logout";
        		var arrArg = "";
        		var sPopId = sMsgId;
        		var sMsgCallback = "fn_msgCallback";

        		// 변경된 내역을 저장 하시겠습니까?
        		this.gfn_alert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}
        	else
        	{
        		window.top.location.reload(true);
        	}
        };

        this.fn_msgCallback = function (strId, strVal)
        {
        	if(strId == "confirm.logout"){
        		if(strVal)
        		{
        		    this.fv_objApp.exit();
        		}
        	}
        };

        this.st_logo_onclick = function(obj,e)
        {
            this.fv_objApp.av_VFrameSet1.separatesize = "32,*,0,30";
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_logout.addEventHandler("onclick",this.btn_logout_onclick,this);
        };
        this.loadIncludeScript("Frame_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
