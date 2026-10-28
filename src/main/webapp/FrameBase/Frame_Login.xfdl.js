(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Frame_Login");
            this.set_titletext("Login");
            if (Form == this.constructor)
            {
                this._setFormPosition(1048,693);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0","50%","50%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Position Base");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_login","Static00:-193","Static00:-305","386","450",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_cssclass("txtf_LOGIN_ID");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","119.00","20","150","40",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LOGIN_Logo");
            this.div_login.addChild(obj.name, obj);

            obj = new TextField("txtf_id","68.00","140","250","80",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("1");
            obj.set_labeltext("USER ID");
            obj.set_labelfloatingfixed("true");
            obj.set_cssclass("txtf_LOGIN_ID");
            obj.set_useleadingbutton("true");
            obj.set_helpertext("아이디를 입력하세요.");
            this.div_login.addChild(obj.name, obj);

            obj = new TextField("txtf_pw","68.00","250","250","80",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("2");
            obj.set_cssclass("txtf_LOGIN_PW");
            obj.set_labeltext("PASSWORD");
            obj.set_labelfloatingfixed("true");
            obj.set_useleadingbutton("true");
            obj.set_helpertext("비밀번호를 입력하세요.");
            this.div_login.addChild(obj.name, obj);

            obj = new Button("btn_login","69","389","250","40",null,null,null,null,null,null,this.div_login.form);
            obj.set_taborder("3");
            obj.set_text("LOGIN");
            obj.set_cssclass("btn_LOGIN_Login");
            this.div_login.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_login.form
            obj = new Layout("default","",0,0,this.div_login.form,function(p){});
            this.div_login.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1048,693,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame_Login.xfdl", function() {
        /************************************************************************************************
         * Form Variable
         ************************************************************************************************/
        this.fv_objApp 	     = nexacro.getApplication();

        /************************************************************************************************
         * Form Event
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {

        };


        /************************************************************************************************
         * Login Button
         ************************************************************************************************/
        this.div_login_btn_login_onclick = function(obj,e)
        {
        	var sId = this.div_login.form.txtf_id.value;
        	var sPw = this.div_login.form.txtf_pw.value;

        	if(this.gfn_isNull(sId)){
        		this.div_login.form.txtf_id.usehelpertext = true;
        		this.div_login.form.txtf_id.helpertext = this.gfn_getMessage("msg.err.validator.required", ["ID"]);
        		this.div_login.form.txtf_id.setFocus();
        		return;
        	}

        	if(this.gfn_isNull(sPw)){
        		this.div_login.form.txtf_pw.usehelpertext = true;
        		this.div_login.form.txtf_pw.helpertext = this.gfn_getMessage("msg.err.validator.required", ["Password"]);
        		this.div_login.form.txtf_pw.setFocus();
        		return;
        	}

        	this.fn_login(sId, sPw);
        };

        /************************************************************************************************
         * Login
         ************************************************************************************************/
        this.fn_login = function(pId, pPw)
        {
        /*
            var strId    = "svcLogin";
        	var strUrl   = "SvcUrl::sys_selectLoginData.xml";
        	var inData   = "";
        	var outData  = "gds_menu=gds_menu";
        	var strArg   = "paramId=" + nexacro.wrapQuote(pId) + " paramPw=" + nexacro.wrapQuote(pPw);
        	var callBack = "fn_callback";
        	this.gfn_transaction(strId, strUrl, inData, outData, strArg, callBack);
        */
        	this.fn_callback("svcLogin", 0, "SUCC");
        }

        this.fn_callback = function(svcId, errCd, errMsg)
        {
            if(svcId == "svcLogin"){
        		this.fn_setFrame();
            }
        }

        /************************************************************************************************
         * Set MainFrame
         ************************************************************************************************/
        this.fn_setFrame = function()
        {
            //Login Frame Size 0
        	this.fv_objApp.av_VFrameSet.separatesize = "0,50,*";

            //Env Variable
        	nexacro.setEnvironmentVariable("ev_userId"  , this.fv_objApp.gds_user.getColumn(0,"USER_ID"));
        	nexacro.setEnvironmentVariable("ev_userName", this.fv_objApp.gds_user.getColumn(0,"USER_NAME"));

            //상위 메뉴 선택 상태
        	this.fv_objApp.av_TopFrame.form.fn_setTopMenu();
        	this.fv_objApp.av_LeftFrame.form.fn_changeMenu(this.fv_objApp.gds_menu.getColumn(0, "MENU_ID"));
        	this.fv_objApp.av_MainFrame.formurl = "FrameBase::Frame_Main.xfdl";
        };

        this.TextField_oninput = function(obj,e)
        {
        		obj.usehelpertext = false;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.div_login.form.txtf_id.addEventHandler("oninput",this.TextField_oninput,this);
            this.div_login.form.txtf_pw.addEventHandler("oninput",this.TextField_oninput,this);
            this.div_login.form.btn_login.addEventHandler("onclick",this.div_login_btn_login_onclick,this);
        };
        this.loadIncludeScript("Frame_Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
