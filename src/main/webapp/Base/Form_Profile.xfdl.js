(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Profile");
            this.set_titletext("My Profile");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,476);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_profile", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "USER_NAME","type" : "STRING","size" : "100"},{"id" : "EMAIL","type" : "STRING","size" : "255"},{"id" : "CURRENT_PASSWORD","type" : "STRING","size" : "100"},{"id" : "NEW_PASSWORD","type" : "STRING","size" : "100"},{"id" : "CONFIRM_PASSWORD","type" : "STRING","size" : "100"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_user", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","24","16","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("My Profile");
            obj.set_color("#383e49");
            obj.set_font("600 20px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_line_top","0","60",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#f0f1f3");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_name","24","80","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Name");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","160","80","256","38",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_maxlength("100");
            obj.set_displaynulltext("Enter your name");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_email","24","134","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Email");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_email","160","134","256","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maxlength("255");
            obj.set_displaynulltext("Enter your email");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_password","24","192","300","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Change password");
            obj.set_color("#383e49");
            obj.set_font("600 15px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_password_hint","24","214","392","20",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Leave these empty to keep the current password.");
            obj.set_color("#858d9d");
            obj.set_font("12px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_current","24","240","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Current password");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_current","160","240","256","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_password("true");
            obj.set_displaynulltext("Current password");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_new","24","294","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("New password");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_new","160","294","256","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_displaynulltext("At least 8 characters");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_confirm","24","348","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Confirm password");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_confirm","160","348","256","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_password("true");
            obj.set_displaynulltext("Enter the new password again");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_line_bottom","0","406",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_background("#f0f1f3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cancel","216","420","88","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Cancel");
            obj.set_background("#ffffff");
            obj.set_color("#5d6679");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","312","420","104","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Save");
            obj.set_background("#1a5fd9");
            obj.set_color("#ffffff");
            obj.set_borderRadius("8px");
            obj.set_border("0px none");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",440,476,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("bind_name","edt_name","value","ds_profile","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_email","edt_email","value","ds_profile","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_current","edt_current","value","ds_profile","CURRENT_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_new","edt_new","value","ds_profile","NEW_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_confirm","edt_confirm","value","ds_profile","CONFIRM_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Profile.xfdl","Lib::Lib_Comm.xjs");
        this.registerScript("Form_Profile.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_Comm.xjs"); /*include "Lib::Lib_Comm.xjs"*/;

        this.Form_onload = function(obj,e)
        {
        	this.fn_searchProfile();
        	this.edt_name.setFocus();
        };

        // the logged in user (the server takes the user from the session)
        this.fn_searchProfile = function()
        {
            var sSvcID    = "svcProfile";
            var sURL      = "KanbanUrl::auth/profile";
            var sInDs     = "";
            var sOutDs    = "ds_user=ds_user";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	if(errCd < 0){
        		this.btn_save.set_enable(true);
        		this.gfn_alert("msg.err.validator", [errMsg]);
        		return;
        	}

        	if(svcId == "svcProfile"){
        		this.ds_profile.setColumn(0, "USER_NAME", this.ds_user.getColumn(0, "USER_NAME"));
        		this.ds_profile.setColumn(0, "EMAIL"    , this.ds_user.getColumn(0, "EMAIL"));
        	}
        	else if(svcId == "svcUpdateProfile"){
        		// "name|email" like the sample popups
        		this.close(this.ds_user.getColumn(0, "USER_NAME") + "|" + this.ds_user.getColumn(0, "EMAIL"));
        	}
        };

        // Save Button
        this.btn_save_onclick = function(obj,e)
        {
        	this.gfn_clearValidation(this.ds_profile);
        	this.gfn_setValidation(this.ds_profile, "USER_NAME", "Name" , "required");
        	this.gfn_setValidation(this.ds_profile, "EMAIL"    , "Email", "required,isemail");
        	// the password rules only when a new password is typed
        	if(!this.gfn_isNull(this.ds_profile.getColumn(0, "NEW_PASSWORD"))){
        		this.gfn_setValidation(this.ds_profile, "CURRENT_PASSWORD", "Current password"            , "required");
        		this.gfn_setValidation(this.ds_profile, "NEW_PASSWORD"    , "New password"                , "required,minlength:8");
        		this.gfn_setValidation(this.ds_profile, "CONFIRM_PASSWORD", "Confirm password,New password", "required,equalto:NEW_PASSWORD");
        	}
        	if(this.gfn_validation(this.ds_profile, "A") == false) return;

        	this.btn_save.set_enable(false);

            var sSvcID    = "svcUpdateProfile";
            var sURL      = "KanbanUrl::auth/updateProfile";
            var sInDs     = "ds_profile=ds_profile";
            var sOutDs    = "ds_user=ds_user";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        // Cancel Button
        this.btn_cancel_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_cancel.addEventHandler("onclick",this.btn_cancel_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
        };
        this.loadIncludeScript("Form_Profile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
