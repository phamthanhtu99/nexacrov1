(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Register");
            this.set_titletext("Create an account");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_user", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "USER_NAME","type" : "STRING","size" : "100"},{"id" : "EMAIL","type" : "STRING","size" : "255"},{"id" : "PASSWORD","type" : "STRING","size" : "100"},{"id" : "CONFIRM_PASSWORD","type" : "STRING","size" : "100"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_base","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_brand","0","0","50%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_center","0","0","50%","50%",null,null,null,null,null,null,this.div_brand.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            this.div_brand.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo","sta_center:-130","sta_center:-170","260","260",null,null,null,null,null,null,this.div_brand.form);
            obj.set_taborder("1");
            obj.set_image("url(\'imagerc::kanban_logo.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_background("transparent");
            this.div_brand.addChild(obj.name, obj);

            obj = new Static("sta_brand","sta_center:-130","sta_center:95","260","60",null,null,null,null,null,null,this.div_brand.form);
            obj.set_taborder("2");
            obj.set_text("KANBAN");
            obj.set_textAlign("center");
            obj.set_color("#1e9ad6");
            obj.set_font("bold 40px \"Segoe UI\"");
            this.div_brand.addChild(obj.name, obj);

            obj = new Div("div_register","sta_base:90","sta_base:-300","380","600",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo_small","166","0","48","48",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("9");
            obj.set_image("url(\'imagerc::kanban_logo.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_background("transparent");
            this.div_register.addChild(obj.name, obj);

            obj = new Static("sta_title","0","62","380","40",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("10");
            obj.set_text("Create an account");
            obj.set_textAlign("center");
            obj.set_color("#101828");
            obj.set_font("600 26px \"Segoe UI\"");
            this.div_register.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","106","380","24",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("11");
            obj.set_text("Start your 30-day free trial.");
            obj.set_textAlign("center");
            obj.set_color("#667085");
            obj.set_font("14px \"Segoe UI\"");
            this.div_register.addChild(obj.name, obj);

            obj = new Static("sta_name","0","146","380","20",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("12");
            obj.set_text("Name*");
            obj.set_color("#344054");
            obj.set_font("13px \"Segoe UI\"");
            this.div_register.addChild(obj.name, obj);

            obj = new Edit("edt_name","0","170","380","42",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("0");
            obj.set_maxlength("200");
            obj.set_displaynulltext("Enter your name");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 14px");
            obj.set_font("14px \"Segoe UI\"");
            this.div_register.addChild(obj.name, obj);

            obj = new Static("sta_email","0","234","380","20",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("14");
            obj.set_text("Email*");
            obj.set_color("#344054");
            obj.set_font("13px \"Segoe UI\"");
            this.div_register.addChild(obj.name, obj);

            obj = new Edit("edt_email","0","258","380","42",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("1");
            obj.set_maxlength("255");
            obj.set_displaynulltext("Enter your email");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 14px");
            obj.set_font("14px \"Segoe UI\"");
            this.div_register.addChild(obj.name, obj);

            obj = new Static("sta_password","0","322","380","20",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("16");
            obj.set_text("Password*");
            obj.set_color("#344054");
            obj.set_font("13px \"Segoe UI\"");
            this.div_register.addChild(obj.name, obj);

            obj = new Edit("edt_password","0","346","380","42",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("2");
            obj.set_password("true");
            obj.set_displaynulltext("Create a password");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 14px");
            obj.set_font("14px \"Segoe UI\"");
            this.div_register.addChild(obj.name, obj);

            obj = new Static("sta_password_hint","0","389","380","20",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("17");
            obj.set_text("Must be at least 8 characters.");
            obj.set_color("#667085");
            obj.set_font("12px \"Segoe UI\"");
            this.div_register.addChild(obj.name, obj);

            obj = new Static("sta_confirm","0","412","380","20",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("20");
            obj.set_text("Confirm password*");
            obj.set_color("#344054");
            obj.set_font("13px \"Segoe UI\"");
            this.div_register.addChild(obj.name, obj);

            obj = new Edit("edt_confirm","0","436","380","42",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_displaynulltext("Enter the password again");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 14px");
            obj.set_font("14px \"Segoe UI\"");
            this.div_register.addChild(obj.name, obj);

            obj = new Button("btn_start","0","508","380","44",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("4");
            obj.set_text("Get started");
            obj.set_background("#1a5fd9");
            obj.set_color("#ffffff");
            obj.set_borderRadius("8px");
            obj.set_border("0px none");
            obj.set_font("600 15px \"Segoe UI\"");
            this.div_register.addChild(obj.name, obj);

            obj = new Static("sta_account","70","568","175","24",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("18");
            obj.set_text("Already have an account?");
            obj.set_textAlign("right");
            obj.set_color("#667085");
            obj.set_font("13px \"Segoe UI\"");
            this.div_register.addChild(obj.name, obj);

            obj = new Static("sta_login","250","568","60","24",null,null,null,null,null,null,this.div_register.form);
            obj.set_taborder("5");
            obj.set_text("Log in");
            obj.set_color("#1a5fd9");
            obj.set_font("600 13px \"Segoe UI\"");
            obj.set_cursor("pointer");
            this.div_register.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_brand.form
            obj = new Layout("default","",0,0,this.div_brand.form,function(p){});
            this.div_brand.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_register.form
            obj = new Layout("default","",0,0,this.div_register.form,function(p){});
            this.div_register.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("bind_name","div_register.form.edt_name","value","ds_user","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_email","div_register.form.edt_email","value","ds_user","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_password","div_register.form.edt_password","value","ds_user","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_confirm","div_register.form.edt_confirm","value","ds_user","CONFIRM_PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Register.xfdl","Lib::Lib_Comm.xjs");
        this.registerScript("Form_Register.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_Comm.xjs"); /*include "Lib::Lib_Comm.xjs"*/;

        // Get started Button
        this.div_register_btn_start_onclick = function(obj,e)
        {
        	this.gfn_clearValidation(this.ds_user);
        	this.gfn_setValidation(this.ds_user, "USER_NAME"       , "Name"                     , "required");
        	this.gfn_setValidation(this.ds_user, "EMAIL"           , "Email"                    , "required,isemail");
        	this.gfn_setValidation(this.ds_user, "PASSWORD"        , "Password"                 , "required,minlength:8");
        	this.gfn_setValidation(this.ds_user, "CONFIRM_PASSWORD", "Confirm password,Password", "required,equalto:PASSWORD");
        	if(this.gfn_validation(this.ds_user, "A") == false) return;

        	// the server also checks that the email is not registered yet
            var sSvcID    = "svcSignup";
            var sURL      = "KanbanUrl::auth/signup";
            var sInDs     = "ds_user=ds_user";
            var sOutDs    = "";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	if(errCd < 0){
        		this.gfn_alert("msg.err.validator", [errMsg]);
        		return;
        	}

        	if(svcId == "svcSignup"){
        		this.gfn_alert("msg.kanban.signup.success", "", "msgSignup", "fn_callbackMsg");
        	}
        };

        this.fn_callbackMsg = function(sPopupId, sReturn)
        {
        	if(sPopupId == "msgSignup"){
        		this.getOwnerFrame().set_formurl("Base::Form_Login.xfdl");
        	}
        };

        this.div_register_edt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_register_btn_start_onclick(this.div_register.form.btn_start, e);
        	}
        };

        // Log in Link
        this.div_register_sta_login_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Base::Form_Login.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.div_register.form.edt_name.addEventHandler("onkeydown",this.div_register_edt_onkeydown,this);
            this.div_register.form.edt_email.addEventHandler("onkeydown",this.div_register_edt_onkeydown,this);
            this.div_register.form.edt_password.addEventHandler("onkeydown",this.div_register_edt_onkeydown,this);
            this.div_register.form.edt_confirm.addEventHandler("onkeydown",this.div_register_edt_onkeydown,this);
            this.div_register.form.btn_start.addEventHandler("onclick",this.div_register_btn_start_onclick,this);
            this.div_register.form.sta_login.addEventHandler("onclick",this.div_register_sta_login_onclick,this);
        };
        this.loadIncludeScript("Form_Register.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
