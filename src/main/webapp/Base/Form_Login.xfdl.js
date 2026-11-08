(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Login");
            this.set_titletext("Log in");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_login", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMAIL","type" : "STRING","size" : "255"},{"id" : "PASSWORD","type" : "STRING","size" : "100"},{"id" : "REMEMBER","type" : "STRING","size" : "1"},{"id" : "TOKEN","type" : "STRING","size" : "64"}]},"Rows" : [{"REMEMBER" : "N"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_user", this);
            obj._setContents({});
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

            obj = new Div("div_login","sta_base:90","sta_base:-265","380","530",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_logo_small","166","0","48","48",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("9");
            obj.set_image("url(\'imagerc::kanban_logo.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_background("transparent");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_title","0","62","380","40",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("10");
            obj.set_text("Log in to your account");
            obj.set_textAlign("center");
            obj.set_color("#101828");
            obj.set_font("600 26px \"Segoe UI\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_subtitle","0","106","380","24",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("11");
            obj.set_text("Welcome back! Please enter your details.");
            obj.set_textAlign("center");
            obj.set_color("#667085");
            obj.set_font("14px \"Segoe UI\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_email","0","156","380","20",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("12");
            obj.set_text("Email");
            obj.set_color("#344054");
            obj.set_font("13px \"Segoe UI\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_email","0","180","380","42",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_maxlength("255");
            obj.set_displaynulltext("Enter your email");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 14px");
            obj.set_font("14px \"Segoe UI\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_password","0","244","380","20",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("14");
            obj.set_text("Password");
            obj.set_color("#344054");
            obj.set_font("13px \"Segoe UI\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Edit("edt_password","0","268","380","42",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_password("true");
            obj.set_displaynulltext("Enter your password");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 14px");
            obj.set_font("14px \"Segoe UI\"");
            this.div_login.addChild(obj.name, obj);

            obj = new CheckBox("chk_remember","0","336","200","24",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_text("Remember for 30 days");
            obj.set_color("#344054");
            obj.set_font("13px \"Segoe UI\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_forgot","240","336","140","24",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("3");
            obj.set_text("Forgot password");
            obj.set_textAlign("right");
            obj.set_color("#1a5fd9");
            obj.set_font("600 13px \"Segoe UI\"");
            obj.set_cursor("pointer");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_signin","0","376","380","44",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("4");
            obj.set_text("Sign in");
            obj.set_background("#1a5fd9");
            obj.set_color("#ffffff");
            obj.set_borderRadius("8px");
            obj.set_border("0px none");
            obj.set_font("600 15px \"Segoe UI\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_noaccount","70","436","160","24",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("16");
            obj.set_text("Don\'t have an account?");
            obj.set_textAlign("right");
            obj.set_color("#667085");
            obj.set_font("13px \"Segoe UI\"");
            this.div_login.addChild(obj.name, obj);

            obj = new Static("sta_signup","235","436","70","24",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("5");
            obj.set_text("Sign up");
            obj.set_color("#1a5fd9");
            obj.set_font("600 13px \"Segoe UI\"");
            obj.set_cursor("pointer");
            this.div_login.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_brand.form
            obj = new Layout("default","",0,0,this.div_brand.form,function(p){});
            this.div_brand.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_login.form
            obj = new Layout("default","",0,0,this.div_login.form,function(p){});
            this.div_login.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("bind_email","div_login.form.edt_email","value","ds_login","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_password","div_login.form.edt_password","value","ds_login","PASSWORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_remember","div_login.form.chk_remember","value","ds_login","REMEMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_Login.xfdl","Lib::Lib_Comm.xjs");
        this.registerScript("Form_Login.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_Comm.xjs"); /*include "Lib::Lib_Comm.xjs"*/;

        this.CONST_TOKEN_KEY = "kanban_token";

        this.Form_onload = function(obj,e)
        {
        	// token saved by "Remember for 30 days" -> log in without the password
        	var sToken = nexacro.getPrivateProfile(this.CONST_TOKEN_KEY);
        	if(this.gfn_isNull(sToken)) return;

        	this.ds_login.setColumn(0, "TOKEN", sToken);

            var sSvcID    = "svcTokenLogin";
            var sURL      = "KanbanUrl::auth/tokenLogin";
            var sInDs     = "ds_login=ds_login";
            var sOutDs    = "ds_user=ds_user";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        // Sign in Button
        this.div_login_btn_signin_onclick = function(obj,e)
        {
        	this.gfn_clearValidation(this.ds_login);
        	this.gfn_setValidation(this.ds_login, "EMAIL"   , "Email"   , "required,isemail");
        	this.gfn_setValidation(this.ds_login, "PASSWORD", "Password", "required");
        	if(this.gfn_validation(this.ds_login, "A") == false) return;

            var sSvcID    = "svcLogin";
            var sURL      = "KanbanUrl::auth/login";
            var sInDs     = "ds_login=ds_login";
            var sOutDs    = "ds_user=ds_user";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	if(errCd < 0){
        		// the saved token is no longer valid: stay here and let the user type the password
        		if(svcId == "svcTokenLogin"){
        			nexacro.removePrivateProfile(this.CONST_TOKEN_KEY);
        			return;
        		}
        		this.gfn_alert("msg.err.validator", [errMsg]);
        		return;
        	}

        	if(svcId == "svcLogin" || svcId == "svcTokenLogin"){
        		this.fn_setUser(svcId == "svcTokenLogin" || this.ds_login.getColumn(0, "REMEMBER") == "Y");
        		this.getOwnerFrame().set_formurl("Base::Form_Layout.xfdl");
        	}
        };

        // keeps the user in gds_user and the token in ev_token (and in the private profile for "Remember me")
        this.fn_setUser = function(bRemember)
        {
        	var objUser = this.gfn_getApplication().gds_user;
        	objUser.clearData();
        	var nRow = objUser.addRow();
        	objUser.setColumn(nRow, "USER_ID"  , this.ds_user.getColumn(0, "USER_ID"));
        	objUser.setColumn(nRow, "USER_NAME", this.ds_user.getColumn(0, "USER_NAME"));
        	objUser.setColumn(nRow, "E_MAIL"   , this.ds_user.getColumn(0, "EMAIL"));

        	var sToken = this.ds_user.getColumn(0, "TOKEN");
        	nexacro.setEnvironmentVariable("ev_token", sToken);
        	if(bRemember){
        		nexacro.setPrivateProfile(this.CONST_TOKEN_KEY, sToken);
        	}
        	else{
        		nexacro.removePrivateProfile(this.CONST_TOKEN_KEY);
        	}
        };

        this.div_login_edt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.div_login_btn_signin_onclick(this.div_login.form.btn_signin, e);
        	}
        };

        // Forgot password Link
        this.div_login_sta_forgot_onclick = function(obj,e)
        {
        	this.gfn_alert("msg.kanban.notready", ["Password reset"]);
        };

        // Sign up Link
        this.div_login_sta_signup_onclick = function(obj,e)
        {
        	this.getOwnerFrame().set_formurl("Base::Form_Register.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.div_login.form.edt_email.addEventHandler("onkeydown",this.div_login_edt_onkeydown,this);
            this.div_login.form.edt_password.addEventHandler("onkeydown",this.div_login_edt_onkeydown,this);
            this.div_login.form.sta_forgot.addEventHandler("onclick",this.div_login_sta_forgot_onclick,this);
            this.div_login.form.btn_signin.addEventHandler("onclick",this.div_login_btn_signin_onclick,this);
            this.div_login.form.sta_signup.addEventHandler("onclick",this.div_login_sta_signup_onclick,this);
        };
        this.loadIncludeScript("Form_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
