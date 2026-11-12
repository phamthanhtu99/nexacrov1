(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Header");
            this.set_titletext("Header");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,72);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_user",null,"16","240","40","122",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cursor("pointer");
            obj.set_tooltiptext("My profile");
            obj.set_textAlign("right");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_search","24","16","280","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_displaynulltext("Search product, supplier, order");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #f0f1f3");
            obj.set_padding("0px 12px 0px 40px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_search","36","26","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_image("url(\'imagerc::kanban/ic_search.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_bell",null,"26","20","20","84",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_image("url(\'imagerc::kanban/ic_bell.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_avatar",null,"16","40","40","30",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cursor("pointer");
            obj.set_tooltiptext("My profile");
            obj.set_image("url(\'imagerc::kanban/img_avatar.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,72,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Header.xfdl","Lib::Lib_Comm.xjs");
        this.registerScript("Form_Header.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_Comm.xjs"); /*include "Lib::Lib_Comm.xjs"*/;

        this.Form_onload = function(obj,e)
        {
        	var objUser = nexacro.getApplication().gds_user;
        	this.sta_user.set_text(objUser.rowcount > 0 ? objUser.getColumn(0, "USER_NAME") : "");
        };

        this.fn_clearSearch = function()
        {
        	this.edt_search.set_value("");
        };

        // user name / avatar -> My Profile popup
        this.fn_profile_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("popProfile", 0, 0, 440, 476);
        	objChild.formurl = "Base::Form_Profile.xfdl";
        	objChild.openalign = "center middle";
        	objChild.dragmovetype = "all";
        	objChild.overlaycolor = "RGBA(0, 0, 0, 0.2)";
        	objChild.set_showtitlebar(false);

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callbackPopup");
        };

        this.fn_callbackPopup = function(sPopupId, sReturn)
        {
        	if(sReturn == undefined){
        		sReturn = "";
        	}

        	if(sPopupId == "popProfile"){
        		if(sReturn.length > 0){
        			var arrRtn = sReturn.split("|");
        			var objUser = this.gfn_getApplication().gds_user;
        			objUser.setColumn(0, "USER_NAME", arrRtn[0]);
        			objUser.setColumn(0, "E_MAIL"   , arrRtn[1]);
        			this.sta_user.set_text(arrRtn[0]);
        			this.gfn_alert("msg.kanban.profile.updated");
        		}
        	}
        };

        this.edt_search_oninput = function(obj,e)
        {
        	this.parent.parent.fn_search(obj.text);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.sta_user.addEventHandler("onclick",this.fn_profile_onclick,this);
            this.edt_search.addEventHandler("oninput",this.edt_search_oninput,this);
            this.img_avatar.addEventHandler("onclick",this.fn_profile_onclick,this);
        };
        this.loadIncludeScript("Form_Header.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
