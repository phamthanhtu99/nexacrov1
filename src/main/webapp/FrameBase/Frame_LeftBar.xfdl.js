(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Menu");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(45,728);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LF_MnuBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","8","161","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Quick");
            obj.set_cssclass("sta_LF_MnuTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btn_menu","10","10","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_Bookmark");
            this.addChild(obj.name, obj);

            obj = new Button("btn_home","10","49","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LF_Home");
            this.addChild(obj.name, obj);

            obj = new Button("btn_find","10","88","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_LF_Search");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","-50","10","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_cssclass("btn_LF_Mnu");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","3","150",null,"1","3",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_LF_Line");
            this.addChild(obj.name, obj);

            obj = new Button("btn_quick1","12","196","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_LF_Quick");
            obj.set_text("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_quick2","12","230","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_LF_Quick");
            obj.set_text("2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_quick3","12","264","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_LF_Quick");
            obj.set_text("3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_quick4","12","298","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_LF_Quick");
            obj.set_text("4");
            this.addChild(obj.name, obj);

            obj = new Button("btn_quick5","12","332","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_LF_Quick");
            obj.set_text("5");
            this.addChild(obj.name, obj);

            obj = new Button("btn_quick6","12","366","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_LF_Quick");
            obj.set_text("6");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","10",null,"24","24",null,"60",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("btn_LF_Setting");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","10",null,"24","24",null,"30",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("btn_LF_Logout");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",45,728,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame_LeftBar.xfdl", function() {
        this.fv_objApp = nexacro.getApplication();

        this.btn_menu_onclick = function(obj,e)
        {
        	if(obj.cssclass == "btn_LF_Bookmark"){
        		this.fv_objApp.av_LeftFrame.form.grd_menu.formatid = "mymenu";
        		this.fv_objApp.av_LeftFrame.form.grd_menu.binddataset = "gds_myMenu";
        		obj.cssclass = "btn_LF_Mnu";
        	}
        	else{
        		this.fv_objApp.av_LeftFrame.form.grd_menu.formatid = "default";
        		this.fv_objApp.av_LeftFrame.form.grd_menu.binddataset = "ds_menu";
        		obj.cssclass = "btn_LF_Bookmark";
        	}
        };

        this.btn_home_onclick = function(obj,e)
        {
        	this.fv_objApp.av_VFrameSet1.separatesize = ("35,*,0,30");
        	this.fv_objApp.av_MainFrame.setFocus();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_menu.addEventHandler("onclick",this.btn_menu_onclick,this);
            this.btn_home.addEventHandler("onclick",this.btn_home_onclick,this);
        };
        this.loadIncludeScript("Frame_LeftBar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
