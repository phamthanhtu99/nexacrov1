(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompGuide09");
            this.set_titletext("txtf,mtxtf, dtf");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,1310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","0","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Guide");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","50","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TextField");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","85","980","400",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","480","10","160","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new TextField("TextField01","480","44","250","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_helpertext("Hepler Text");
            obj.set_labeltext("Label Text");
            obj.set_enable("false");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            this.Div00.addChild(obj.name, obj);

            obj = new TextField("TextField00","20","40","250","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_helpertext("Hepler Text");
            obj.set_labeltext("Label Text");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","472","150","276","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("※ Action > displaynulltext = Null Text");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new TextField("TextField03","472","180","250","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_helpertext("Hepler Text");
            obj.set_displaynulltext("Null Text");
            obj.set_labeltext("Label Text");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            this.Div00.addChild(obj.name, obj);

            obj = new TextField("TextField02","22","180","250","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_helpertext("Hepler Text");
            obj.set_prefixtext("http://");
            obj.set_labeltext("Label Text");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","22","TextField02:30","312","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("※ Misc. > usetrailingbutton = true(invalid)");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","472","280","298","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("※ Misc. > usetrailingbutton = true(valid)");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new TextField("TextField05","472","310","250","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_helpertext("Hepler Text");
            obj.set_labeltext("Label Text");
            obj.set_inputtype("email");
            obj.set_value("a@to.com");
            obj.set_usetrailingbutton("true");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            this.Div00.addChild(obj.name, obj);

            obj = new TextField("TextField04","22","Static04:0","250","70",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_helpertext("Hepler Text");
            obj.set_labeltext("Label Text");
            obj.set_inputtype("email");
            obj.set_value("wdrfsf");
            obj.set_usetrailingbutton("true");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","22","TextField00:30","275","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("※ Action > prefixtext =http://");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","Div00:20","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("MultiLineTextField");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","Static02:0","980","270",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","480","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField01","470","40","250","199",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_value("MultiLineTextFieldMultiLineTextFieldMultiLineTextFieldMultiLineTextFieldMultiLineTextFieldMultiLineTextFieldMultiLineTextField");
            obj.set_helpertext("Hepler Text");
            obj.set_labeltext("Label");
            obj.set_enable("false");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            this.Div01.addChild(obj.name, obj);

            obj = new MultiLineTextField("MultiLineTextField00","20","40","250","199",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_value("MultiLineTextFieldMultiLineTextFieldMultiLineTextFieldMultiLineTextFieldMultiLineTextFieldMultiLineTextFieldMultiLineTextField");
            obj.set_helpertext("Hepler Text");
            obj.set_labeltext("Label");
            obj.set_usehelpertext("true");
            obj.set_usecharcount("true");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","20","Div01:20","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("DateField");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","20","Static03:0","980","430",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","480","10","160","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new DateField("DateField00","20","Static00:0","250","80",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("11");
            obj.set_helpertext("Hepler Text");
            obj.set_labeltext("Label Text");
            obj.set_usehelpertext("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","20","DateField00:30","355","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("※ Action > value(invalid)");
            obj.set_cssclass("sta_WF_GDes");
            this.Div02.addChild(obj.name, obj);

            obj = new DateField("DateField02","20","Static02:0","250","80",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_helpertext("헬퍼 TEXT");
            obj.set_labeltext("Label Text");
            obj.set_value("한글");
            obj.set_usehelpertext("true");
            this.Div02.addChild(obj.name, obj);

            obj = new DateField("DateField01","480","40","250","80",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_helpertext("Hepler Text");
            obj.set_labeltext("Label Text");
            obj.set_inputtype("datetime");
            obj.set_enable("false");
            obj.set_usehelpertext("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","480","150","355","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("※ Action > value(valid)");
            obj.set_cssclass("sta_WF_GDes");
            this.Div02.addChild(obj.name, obj);

            obj = new DateField("DateField03","480","180","250","80",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_helpertext("Hepler Text");
            obj.set_labeltext("Label Text");
            obj.set_value("20240701");
            obj.set_usehelpertext("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","20","DateField02:30","355","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_text("※ Misc. > inputtype = time");
            obj.set_cssclass("sta_WF_GDes");
            this.Div02.addChild(obj.name, obj);

            obj = new DateField("DateField04","20","Static04:0","250","80",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_helpertext("Hepler Text");
            obj.set_labeltext("Label Text");
            obj.set_inputtype("time");
            obj.set_usehelpertext("true");
            this.Div02.addChild(obj.name, obj);

            obj = new DateField("DateField05","480","320","250","80",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_helpertext("Hepler Text");
            obj.set_labeltext("Label Text");
            obj.set_inputtype("datetime");
            obj.set_usehelpertext("true");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static05","480","290","355","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("10");
            obj.set_text("※ Misc. > inputtype = datetime");
            obj.set_cssclass("sta_WF_GDes");
            this.Div02.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div02.form
            obj = new Layout("default","",0,0,this.Div02.form,function(p){});
            this.Div02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,1310,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_ontimer,this);
        };
        this.loadIncludeScript("CompGuide09.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
