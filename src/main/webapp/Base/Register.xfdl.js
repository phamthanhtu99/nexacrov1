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
            this.set_borderRadius("12px");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ROLE", this);
            obj._setContents("<ColumnInfo><Column id=\"role_Cd\" type=\"STRING\" size=\"256\"/><Column id=\"role_Nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"role_Cd\">1</Col><Col id=\"role_Nm\">Project Manager</Col></Row><Row><Col id=\"role_Cd\">2</Col><Col id=\"role_Nm\">Team Lead</Col></Row><Row><Col id=\"role_Cd\">3</Col><Col id=\"role_Nm\">Member</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_register", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PWD\" type=\"STRING\" size=\"256\"/><Column id=\"ROLE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","-5","0","101.25%","100.00%",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("linear-gradient(to right top,#5b5b5b 30%,#b3533b) #c4c4c4");
            obj.set_opacity("1");
            obj.set_borderRadius("12px");
            this.addChild(obj.name, obj);

            obj = new Static("login_st","0","0","100.00%","90",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("CREATE ACCOUNT");
            obj.set_textAlign("center");
            obj.set_font("normal 700 24px/normal \"Malgun Gothic\"");
            obj.set_color("darkorange");
            obj.set_letterSpacing("5px");
            obj.set_background("#4c423d");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","66","110","61.19%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::image_custom/User_icon_2.svg.png\') no-repeat left top /contain");
            obj.set_textAlign("center");
            obj.set_wordSpacing("12px");
            obj.set_font("normal 14pt \"Arial\"");
            obj.set_maxlength("15");
            obj.set_borderRadius("10px");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("bt_login","71","287","50.45%","48",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Register");
            obj.set_textAlign("center");
            obj.set_font("normal 700 18px/normal \"Malgun Gothic\"");
            obj.set_letterSpacing("5px");
            obj.set_background("#4c423d");
            obj.set_opacity("0.5");
            obj.set_borderRadius("15px");
            obj.set_color("darkorange");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","67","170","61.19%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_background("url(\'imagerc::image_custom/pw2_icon.png\') no-repeat left center /contain");
            obj.set_font("normal 14pt/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_maxlength("18");
            obj.set_borderRadius("10px");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","66","230","61.19%","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_ROLE");
            obj.set_codecolumn("role_Cd");
            obj.set_datacolumn("role_Nm");
            obj.set_borderRadius("10px");
            obj.set_font("normal 700 18px/normal \"Malgun Gothic\"");
            obj.set_text("Project Manager");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",400,380,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","ds_register","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit00_00","value","ds_register","PWD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Combo00","value","ds_register","ROLE_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Register.xfdl", function() {

        this.Div00_bt_login_onclick = function(obj,e)
        {
        	 var id = "register";
             var url = "http://localhost:8080/insertUser";
             var reqDs = "ds_register=ds_register";
             var respDs = "ds_output=ds_output";
             var args = "";
             var callback = "fc_callback";



             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };

        this.fc_callback = function (serviceID, errCD, errMSG)
        {
        	 if (errCD == 1)
            {
            	this.alert("System error!");
        		return;
            }
        	switch(serviceID) {
        	   case 'register':
        			this.close("Y");
        	   break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.bt_login.addEventHandler("onclick",this.Div00_bt_login_onclick,this);
        };
        this.loadIncludeScript("Register.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
