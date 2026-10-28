(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompGuide01");
            this.set_titletext("sta, edt, msk, txt");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,750);
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
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","Static01:0",null,"120","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","20","50","245","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("13px Malgun Gothic\r\n가나다라마바사아자차카타파하\r\n1234567890");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","536","50","245","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("13px Malgun Gothic\r\n가나다라마바사아자차카타파하\r\n1234567890");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","536","10","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","Div00:10","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Edit");
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

            obj = new Edit("Edit00","20","50","140","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_value("Nexacro N24");
            obj.set_text("Nexacro N24");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","210","50","140","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            obj.set_value("Nexacro N24");
            obj.set_text("Nexacro N24");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","210","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","400","50","140","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_value("Nexacro N24");
            obj.set_text("Nexacro N24");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","400","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_text("[readonly]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","590","50","140","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_displaynulltext("TOBESOFT");
            obj.set_text("");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","590","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("7");
            obj.set_text("[nulltext]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","780","50","140","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("8");
            obj.set_cssclass("edt_WF_Essential");
            obj.set_value("Nexacro N24");
            obj.set_text("Nexacro N24");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static05","163","50","5","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_GLineV");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static07","174","50","15","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("10");
            obj.set_text("26");
            obj.set_cssclass("sta_WF_GTxt");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static04","780","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("11");
            obj.set_text("class = edt_WF_Essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","20","Div01:10","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("MaskEdit");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","20","Static03:0","980","100",null,null,null,null,null,null,this);
            obj.set_taborder("6");
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
            obj.set_text("[readonly]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","590","10","160","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("[invalidtext]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","780","10","160","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_text("class = msk_WF_Essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","20","50","140","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_value("1357900");
            obj.set_format("#,#");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00","210","50","140","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_value("1357900");
            obj.set_format("#,#");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00","400","50","140","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_value("1357900");
            obj.set_format("#,#");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00","590","50","140","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("8");
            obj.set_type("string");
            obj.set_format("AAAA-####");
            obj.set_value("1357900");
            this.Div02.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00_00_00_00_00","780","50","140","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("9");
            obj.set_cssclass("msk_WF_Essential");
            obj.set_value("1357900");
            obj.set_format("#,#");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","20","Div02:10","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("TextArea");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","20","Static04:0","980","190",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div01");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","210","10","160","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","400","10","160","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("[readonly]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","590","10","160","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("[nulltext]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","780","10","160","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_text("class = txt_WF_Essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","20","50","160","120",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_value("Digital transformation is the incorporation of computer-based technologies into an organization\'s products, processes and strategies.");
            this.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea02","400","50","160","120",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_value("Digital transformation is the incorporation of computer-based technologies into an organization\'s products, processes and strategies.");
            this.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea01","210","49","160","120",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_enable("false");
            obj.set_value("Digital transformation is the incorporation of computer-based technologies into an organization\'s products, processes and strategies.");
            this.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea03","590","49","160","120",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_displaynulltext("REAL OSMU ");
            this.Div03.addChild(obj.name, obj);

            obj = new TextArea("TextArea04","780","49","160","120",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_cssclass("txt_WF_Essential");
            obj.set_value("Digital transformation is the incorporation of computer-based technologies into an organization\'s products, processes and strategies.");
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
            obj = new Layout("default","",1020,750,this,function(p){});
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
        this.loadIncludeScript("CompGuide01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
