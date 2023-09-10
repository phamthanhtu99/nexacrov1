(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Login");
            this.set_titletext("New Form");
            this.set_background("linear-gradient(to right top,#1e1e1e 50%,#b47b59) #2d2d2d");
            if (Form == this.constructor)
            {
                this._setFormPosition(520,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInput", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_LOGIN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_LOGIN\"/><Col id=\"USER_PW\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_output", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MSQ\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("login_st","0","0","100.00%","90",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("LOGIN FORM");
            obj.set_textAlign("center");
            obj.set_font("normal 700 24px/normal \"Malgun Gothic\"");
            obj.set_color("darkorange");
            obj.set_letterSpacing("5px");
            obj.set_background("#4c423d");
            this.addChild(obj.name, obj);

            obj = new Edit("user_nm","80","110","75.00%","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::image_custom/User_icon_2.svg.png\') no-repeat left top /contain");
            obj.set_textAlign("center");
            obj.set_wordSpacing("12px");
            obj.set_font("normal 14pt \"Arial\"");
            obj.set_maxlength("15");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("bt_login","200","296","23.08%","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Login");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("5px");
            obj.set_background("#4c423d");
            obj.set_opacity("0.5");
            obj.set_borderRadius("15px");
            obj.set_color("darkorange");
            this.addChild(obj.name, obj);

            obj = new Edit("user_pw","80","180","75.00%","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::image_custom/pw2_icon.png\') no-repeat left center /contain");
            obj.set_textAlign("center");
            obj.set_wordSpacing("12px");
            obj.set_font("normal 14pt \"Arial\"");
            obj.set_maxlength("15");
            obj.set_borderRadius("10px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","297","233","143","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Register");
            obj.set_font("normal 15px/normal \"Arial\"");
            obj.set_color("chartreuse");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",520,380,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","user_nm","value","dsInput","USER_LOGIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","user_pw","value","dsInput","USER_PW");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Login.xfdl", function() {

        this.Div00_bt_login_onclick = function(obj,e)
        {
        	this.dsInput.setColumn(0,"USER_LOGIN",this.user_nm.value);
        	this.dsInput.setColumn(0,"USER_PW",this.user_pw.value);
            var id = "login";
             var url = "http://localhost:8080/login";
             var reqDs = "dsInput =dsInput";
             var respDs = "ds_output=ds_output";
             var args = "";
             var callback = "fc_callback";



             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };

        this.fc_callback = function (serviceID, errCD, errMSG)
        {
        	switch(serviceID) {
        	case 'login':
        		var code = this.ds_output.getColumn(0,"CODE");
        		var msg = this.ds_output.getColumn(0,"MSQ");
        	    switch(code) {
        	    case '0':
        			_application.gl_user.copyData(this.ds_output,false);
        			this.close();
        	    	break;
        	    case '2':
        		    alert(msg)
        	    	break;
        		case '1':
        		    alert(msg)
        		    break;
        	    default:
        	    }
        		break;
        	default:
        	}
        };
        this.Static00_onclick = function(obj,e)
        {
        	this.close("R");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.bt_login.addEventHandler("onclick",this.Div00_bt_login_onclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
        };
        this.loadIncludeScript("Login.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
