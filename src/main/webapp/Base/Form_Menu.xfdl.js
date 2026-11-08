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
            this.set_titletext("Menu");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(230,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("img_logo","28","16","40","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_image("url(\'imagerc::kanban_logo.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Static("sta_logo","74","16","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("KANBAN");
            obj.set_color("#1e9ad6");
            obj.set_font("bold 16px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_dashboard","16","86","198","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Dashboard");
            obj.set_icon("url(\'imagerc::kanban/ic_dashboard.png\')");
            obj.set_textAlign("left");
            obj.set_textPadding("0px 0px 0px 12px");
            obj.set_padding("0px 12px");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#5d6679");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_inventory","16","134","198","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Inventory");
            obj.set_icon("url(\'imagerc::kanban/ic_inventory.png\')");
            obj.set_textAlign("left");
            obj.set_textPadding("0px 0px 0px 12px");
            obj.set_padding("0px 12px");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#5d6679");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_reports","16","182","198","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Reports");
            obj.set_icon("url(\'imagerc::kanban/ic_reports.png\')");
            obj.set_textAlign("left");
            obj.set_textPadding("0px 0px 0px 12px");
            obj.set_padding("0px 12px");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#5d6679");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_suppliers","16","230","198","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Suppliers");
            obj.set_icon("url(\'imagerc::kanban/ic_suppliers.png\')");
            obj.set_textAlign("left");
            obj.set_textPadding("0px 0px 0px 12px");
            obj.set_padding("0px 12px");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#5d6679");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_orders","16","278","198","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Orders");
            obj.set_icon("url(\'imagerc::kanban/ic_orders.png\')");
            obj.set_textAlign("left");
            obj.set_textPadding("0px 0px 0px 12px");
            obj.set_padding("0px 12px");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#5d6679");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_store","16","326","198","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Manage Store");
            obj.set_icon("url(\'imagerc::kanban/ic_store.png\')");
            obj.set_textAlign("left");
            obj.set_textPadding("0px 0px 0px 12px");
            obj.set_padding("0px 12px");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#5d6679");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_settings","16",null,"198","40",null,"64",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Settings");
            obj.set_icon("url(\'imagerc::kanban/ic_settings.png\')");
            obj.set_textAlign("left");
            obj.set_textPadding("0px 0px 0px 12px");
            obj.set_padding("0px 12px");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#5d6679");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_logout","16",null,"198","40",null,"16",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Log Out");
            obj.set_icon("url(\'imagerc::kanban/ic_logout.png\')");
            obj.set_textAlign("left");
            obj.set_textPadding("0px 0px 0px 12px");
            obj.set_padding("0px 12px");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#5d6679");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",230,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Menu.xfdl", function() {

        this.fv_oActive = null;

        this.fn_setActive = function(objBtn)
        {
        	if (this.fv_oActive) {
        		this.fn_setButtonStyle(this.fv_oActive, false);
        	}
        	this.fn_setButtonStyle(objBtn, true);
        	this.fv_oActive = objBtn;
        };

        this.fn_setButtonStyle = function(objBtn, bActive)
        {
        	var sMenuId = objBtn.name.replace("btn_", "");
        	objBtn.set_icon("url('imagerc::kanban/ic_" + sMenuId + (bActive ? "_on" : "") + ".png')");
        	objBtn.set_color(bActive ? "#1a5fd9" : "#5d6679");
        	objBtn.set_font((bActive ? "600 " : "") + "14px \"Segoe UI\"");
        };

        this.Form_onload = function(obj,e)
        {
        	this.fn_setActive(this.btn_inventory);
        };

        this.btn_menu_onclick = function(obj,e)
        {
        	// no early return for the active menu: Inventory must also leave the product detail screen
        	if (obj != this.fv_oActive) {
        		this.fn_setActive(obj);
        	}
        	this.parent.parent.fn_openMenu(obj.name.replace("btn_", ""), obj.text);
        };

        this.btn_logout_onclick = function(obj,e)
        {
        	this.parent.parent.fn_logout();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_dashboard.addEventHandler("onclick",this.btn_menu_onclick,this);
            this.btn_inventory.addEventHandler("onclick",this.btn_menu_onclick,this);
            this.btn_reports.addEventHandler("onclick",this.btn_menu_onclick,this);
            this.btn_suppliers.addEventHandler("onclick",this.btn_menu_onclick,this);
            this.btn_orders.addEventHandler("onclick",this.btn_menu_onclick,this);
            this.btn_store.addEventHandler("onclick",this.btn_menu_onclick,this);
            this.btn_settings.addEventHandler("onclick",this.btn_menu_onclick,this);
            this.btn_logout.addEventHandler("onclick",this.btn_logout_onclick,this);
        };
        this.loadIncludeScript("Form_Menu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
