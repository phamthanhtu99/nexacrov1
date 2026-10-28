(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CompGuide03");
            this.set_titletext("rdo, lst, cbo, mcbo");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "1","data" : "Item01"},{"code" : "2","data" : "Item02"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_skill", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "string","size" : "255"},{"id" : "NAME","type" : "string","size" : "255"}]},"Rows" : [{"CODE" : "01","NAME" : "HTML"},{"CODE" : "02","NAME" : "CSS"},{"CODE" : "03","NAME" : "JavaScript"},{"CODE" : "04","NAME" : "JAVA"},{"CODE" : "05","NAME" : "C/C++"},{"CODE" : "06","NAME" : "Python"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_00","20","0","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Guide");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","50","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Radio");
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

            obj = new Static("Static01","240","10","160","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","460","10","160","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("[selected]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","680","10","160","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("[disabled][selected]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio01","240","50","140","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio02","460","50","140","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_text("Item01");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio03","680","50","140","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_text("Item01");
            obj.set_value("1");
            obj.set_index("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","20","50","140","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","Div00:10","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("ListBox");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","Static02:0",null,"210","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","240","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","460","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("[selected]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new ListBox("ListBox01","240","50","170","141",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new ListBox("ListBox02","460","50","170","141",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Technocal Support");
            obj.set_value("3");
            obj.set_index("2");
            this.Div01.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","20","50","170","141",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","20","Div00:270","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Combo");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","20","Static02:260",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","240","10","160","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static02","460","10","160","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("[readonly]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static03","680","10","160","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("class = cbo_WF_Essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo01","240","50","170","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_enable("false");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo02","460","50","170","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_readonly("true");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo03","680","50","170","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("cbo_WF_Essential");
            obj.set_text("Combo00");
            this.Div02.addChild(obj.name, obj);

            obj = new Combo("Combo00","20","50","170","26",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_value("");
            obj.set_index("-1");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","20","Div02:10","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("MultiCombo");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","20","Static04:0",null,"270","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","240","10","160","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("type=filter");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static02","460","10","170","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("showselectallcheckbox=true");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static03","680","10","160","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("edittype=count");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo03","680","50","170","26",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_type("filter");
            obj.set_showselectallcheckbox("true");
            obj.set_edittype("count");
            obj.set_text("HTML,JavaScript");
            obj.set_value("01,03");
            obj.set_index("0,2");
            this.Div03.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo02","460","50","170","26",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_type("filter");
            obj.set_showselectallcheckbox("true");
            obj.set_text("HTML,JavaScript");
            obj.set_value("01,03");
            obj.set_index("0,2");
            this.Div03.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo01","240","50","170","26",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_type("filter");
            obj.set_text("HTML,JavaScript");
            obj.set_value("01,03");
            obj.set_index("0,2");
            this.Div03.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","20","50","170","26",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("HTML,JavaScript");
            obj.set_value("01,03");
            obj.set_index("0,2");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static04","20","MultiCombo00:30","285","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("8");
            obj.set_text("edittype=multitag");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static05","460","106","405","20",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("9");
            obj.set_text("edittype=multitag / type=filter");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo05","460","136","405","120",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_showselectallcheckbox("true");
            obj.set_edittype("multitag");
            obj.set_buttonsize("26");
            obj.set_type("filter");
            obj.set_text("HTML,JavaScript");
            obj.set_value("01,03");
            obj.set_index("0,2");
            this.Div03.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo04","20","136","405","120",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_showselectallcheckbox("true");
            obj.set_edittype("multitag");
            obj.set_buttonsize("26");
            obj.set_type("dropdown");
            obj.set_text("HTML,JavaScript");
            obj.set_value("01,03");
            obj.set_index("0,2");
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
            obj = new Layout("default","",1020,920,this,function(p){});
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
            this.Div03.form.Static05.addEventHandler("onclick",this.Static05_01_00_00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("CompGuide03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
