(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Layout");
            this.set_titletext("Kanban");
            this.set_background("#f0f1f3");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_logout", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "TOKEN","type" : "STRING","size" : "64"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_menu","0","0","230",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("Base::Form_Menu.xfdl");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Div("div_header","230","0",null,"72","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("Base::Form_Header.xfdl");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Div("div_content","230","72",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("Base::Form_Inventory.xfdl");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_menu
            obj = new Layout("default","",0,0,this.div_menu.form,function(p){});
            this.div_menu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_header
            obj = new Layout("default","",0,0,this.div_header.form,function(p){});
            this.div_header.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_content
            obj = new Layout("default","",0,0,this.div_content.form,function(p){});
            this.div_content.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Base::Form_Menu.xfdl");
            this._addPreloadList("fdl","Base::Form_Header.xfdl");
            this._addPreloadList("fdl","Base::Form_Inventory.xfdl");
        };
        
        // User Script
        this.addIncludeScript("Form_Layout.xfdl","Lib::Lib_Comm.xjs");
        this.registerScript("Form_Layout.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_Comm.xjs"); /*include "Lib::Lib_Comm.xjs"*/;

        this.CONST_PLACEHOLDER_URL = "Base::Form_Placeholder.xfdl";
        this.CONST_SEARCH_TIMER    = 1;
        this.CONST_TOKEN_KEY       = "kanban_token";
        this.fv_oMenuUrl = {
        	inventory : "Base::Form_Inventory.xfdl",
        	suppliers : "Base::Form_Suppliers.xfdl"
        };
        this.fv_sMenuTitle = "";
        this.fv_sProductId = "";
        this.fv_sKeyword   = "";

        // Called by Form_Menu: only div_content changes
        this.fn_openMenu = function(sMenuId, sTitle)
        {
        	var sUrl = this.fv_oMenuUrl[sMenuId] || this.CONST_PLACEHOLDER_URL;
        	this.fv_sMenuTitle = sTitle;
        	this.div_header.form.fn_clearSearch();

        	// same url does not reload, so just update the placeholder title
        	if(this.div_content.url == sUrl){
        		if(this.div_content.form.fn_setTitle){
        			this.div_content.form.fn_setTitle(sTitle);
        		}
        		return;
        	}
        	this.div_content.set_url(sUrl);
        };

        // Called by Form_Inventory when a product row is clicked
        this.fn_openProduct = function(sProductId)
        {
        	this.fv_sProductId = sProductId;
        	this.div_header.form.fn_clearSearch();
        	this.div_content.set_url("Base::Form_ProductInfo.xfdl");
        };

        // Called by Form_Header on every key: wait until typing stops before asking the server
        this.fn_search = function(sKeyword)
        {
        	this.fv_sKeyword = sKeyword;
        	this.killTimer(this.CONST_SEARCH_TIMER);
        	this.setTimer(this.CONST_SEARCH_TIMER, 300);
        };

        this.Form_ontimer = function(obj,e)
        {
        	if(e.timerid != this.CONST_SEARCH_TIMER) return;

        	this.killTimer(this.CONST_SEARCH_TIMER);
        	// the current content decides how to search
        	if(this.div_content.form.fn_search){
        		this.div_content.form.fn_search(this.fv_sKeyword);
        	}
        };

        // Log Out Button (Form_Menu)
        this.fn_logout = function()
        {
        	this.gfn_alert("confirm.logout", "", "msgLogout", "fn_callbackMsg");
        };

        this.fn_callbackMsg = function(sPopupId, sReturn)
        {
        	if(sPopupId == "msgLogout"){
        		if(sReturn == true || sReturn == "true"){
        			this.ds_logout.setColumn(0, "TOKEN", nexacro.getEnvironmentVariable("ev_token"));

        		    var sSvcID    = "svcLogout";
        		    var sURL      = "KanbanUrl::auth/logout";
        		    var sInDs     = "ds_login=ds_logout";
        		    var sOutDs    = "";
        		    var sParam    = "";
        		    var sCallBack = "fn_callback";
        			this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        		}
        	}
        };

        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	if(svcId == "svcLogout"){
        		// leave even when the server could not be reached
        		this.gfn_getApplication().gds_user.clearData();
        		nexacro.setEnvironmentVariable("ev_token", "");
        		nexacro.removePrivateProfile(this.CONST_TOKEN_KEY);
        		this.getOwnerFrame().set_formurl("Base::Form_Login.xfdl");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_ontimer,this);
        };
        this.loadIncludeScript("Form_Layout.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
