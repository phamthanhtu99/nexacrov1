(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Tabpage01");
            this.set_titletext("Personal Data");
            if (Form == this.constructor)
            {
                this._setFormPosition(1011,272);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03_02","5.00","5","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Social Security Number");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03","169.00","5","185","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00","5.00","178","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Career Day");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00","169.00","178","185","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_02","353.00","5","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Birthday");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_02","517.00","5",null,"36","5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_03","5.00","40","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Marital Status");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03","169.00","40","185","36",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","523","10","155","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","703","10","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "Solar"},{"codecolumn" : "2","datacolumn" : "Lunar"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","175","10","155","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_type("string");
            obj.set_format("######-#{######}");
            obj.set_value("9007131294561");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","175","48","150","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Married");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_00","517.00","40","185","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_03_00","353.00","40","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Wedding Date");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_00_00","865.00","40",null,"36","5",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_03_00_00","701.00","40","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Military Service");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","523","45","155","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox01","871","48","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Been in military");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_01","169.00","75",null,"69","5",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_03_01","5.00","75","165","69",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("Address");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00_00","5.00","143","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Final Academic Degree");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_00","169.00","143","185","36",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","175","81","155","26",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","335","81","84","26",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Post Code");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","175.00","112","365","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","545.00","112","455","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","175","148","155","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_00_00","517.00","143","185","36",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_01","517.00","178","185","36",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00_01","353.00","178","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Development Grading");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00_00_00","353.00","143","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Career Date");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03_00_00_00","865.00","143",null,"71","5",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_03_00_00_00","701.00","143","165","71",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Memo");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","871","149","129","59",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","523","148","155","26",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","175","183","155","26",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","523","183","155","26",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1011,272,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
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
        this.loadIncludeScript("Tabpage01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
