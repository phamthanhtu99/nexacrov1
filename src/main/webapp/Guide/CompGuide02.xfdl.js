(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompGuide02");
            this.set_titletext("btn, spn, chk, chks");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,690);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_skill", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "255"},{"id" : "NAME","type" : "string","size" : "255"}]},"Rows" : [{"CODE" : "01","NAME" : "HTML"},{"CODE" : "02","NAME" : "CSS"},{"CODE" : "03","NAME" : "JavaScript"},{"CODE" : "04","NAME" : "JAVA"},{"CODE" : "05","NAME" : "C/C++"},{"CODE" : "06","NAME" : "Python"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","0","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Guide");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","50","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","85",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","400","10","160","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","20","50","60","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Button");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button01","85","50","74","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("Education");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button02","164","50","101","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Nexacro N24");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button03","400","50","65","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Button");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","Div00:10","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Spin");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","Static02:0","980","100",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","210","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","400","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("[readonly]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","780","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("class = edt_WF_Essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Spin("Spin03","780","50","140","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("spn_WF_Essential");
            obj.set_value("123");
            this.Div01.addChild(obj.name, obj);

            obj = new Spin("Spin02","400","50","140","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_value("123");
            this.Div01.addChild(obj.name, obj);

            obj = new Spin("Spin01","210","50","140","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_value("123");
            this.Div01.addChild(obj.name, obj);

            obj = new Spin("Spin00","20","50","140","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_value("123");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","590","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_text("[nulltext]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Spin("Spin04","590","50","140","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_displaynulltext("Null Text");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","20","Div01:10","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("CheckBox");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","20","Static03:0","980","100",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","210","10","160","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","400","10","160","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("[selected]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","590","10","160","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("[disabled][selected]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","210","49","150","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("Check");
            obj.set_enable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox02","400","49","150","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_text("Check");
            obj.set_value("true");
            this.Div02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox03","590","49","80","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_text("Check");
            obj.set_enable("false");
            obj.set_value("true");
            this.Div02.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","20","49","80","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_text("Check");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02_01_00_00","20","Div02:10","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("CheckBoxSet");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","20","Static02_01_00_00:0","980","150",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","400","10","160","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("[selected]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet01","400","50","220","81",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_rowcount("3");
            obj.set_text("HTML,JavaScript,Python");
            obj.set_value("01,03,06");
            obj.set_index("0,2,5");
            this.Div03.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00","20","50","220","81",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_rowcount("3");
            obj.set_text("");
            obj.set_value("");
            this.Div03.addChild(obj.name, obj);
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

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,690,this,function(p){});
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

        };
        this.loadIncludeScript("CompGuide02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
