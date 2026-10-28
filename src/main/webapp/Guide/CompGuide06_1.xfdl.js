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
            this.set_titletext("Gridcellclass, Expr, Selection");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,1380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("grdCellclass", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "Upload","Column1" : "Download"},{"Column0" : "Upload","Column1" : "Download"},{"Column0" : "Upload","Column1" : "Download"},{"Column0" : "Upload","Column1" : "Download"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Name","type" : "STRING","size" : "256"},{"id" : "ID","type" : "STRING","size" : "256"},{"id" : "Dept","type" : "STRING","size" : "256"},{"id" : "Memo","type" : "STRING","size" : "256"},{"id" : "Gender","type" : "STRING","size" : "256"},{"id" : "Married","type" : "STRING","size" : "256"},{"id" : "HDate","type" : "STRING","size" : "256"},{"id" : "Salary","type" : "STRING","size" : "256"},{"id" : "Position","type" : "STRING","size" : "256"},{"id" : "Hobby","type" : "STRING","size" : "256"},{"id" : "Skill","type" : "STRING","size" : "256"}]},"Rows" : [{"Name" : "Kate","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Active","Hobby" : "1,3","Skill" : "1,3,5","Gender" : "1"},{"Name" : "Dennis ","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Affectionnate","Hobby" : "2,5,6","Skill" : "2,4"},{"Name" : "Max ","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","Married" : "","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Aggressive","Hobby" : "3,5,8,9","Skill" : "3,5,9"},{"Name" : "Ted ","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","Married" : "","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Altruistic","Hobby" : "4,5,8","Skill" : "5,10,11"},{"Name" : "Adam","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Ambitious","Hobby" : "5,11,12","Skill" : "5,6,9"},{"Name" : "Belle","ID" : "TOBE0621","Dept" : "6","Gendar" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Arrogant","Hobby" : "6,8,9","Skill" : "10,11,12"},{"Name" : "Lexy","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Astute","Hobby" : "2,4,8","Skill" : "1,2,3","Gender" : "1"},{"Name" : "Lucy","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Attractive","Hobby" : "13,14","Skill" : "10,13"},{"Name" : "Kein","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Avaricious","Hobby" : "2,6,8","Skill" : "1,3,5"},{"Name" : "Juliana","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Benevolent","Hobby" : "11,12,13","Skill" : "3,6,9","Gender" : "1"},{"Name" : "Kara","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Boastiful","Hobby" : "2,3,5","Skill" : "2,4,8","Gender" : "1"},{"Name" : "Andrew","ID" : "TOBE0621","Dept" : "6","Gendar" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Bossy","Hobby" : "3,5,7,9","Skill" : "2,5,10"},{"Name" : "Maria","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Brutal","Hobby" : "1,3,12","Skill" : "2,6,12","Gender" : "1"},{"Name" : "Eddy","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Candid","Hobby" : "1,5,13","Skill" : "3,4,12"},{"Name" : "Sarah","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Calm","Hobby" : "5,6,8","Skill" : "3,6,9"},{"Name" : "Ivy","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Careful","Skill" : "10,11,12,13","Hobby" : "5,7,9,11","Gender" : "1"},{"Name" : "Noel ","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Careless","Skill" : "2,4,10","Hobby" : "2,5,6,15"},{"Name" : "Arnold","ID" : "TOBE0621","Dept" : "6","Gendar" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Caring","Skill" : "7,8,9","Hobby" : "8,10,12"},{"Name" : "Alex ","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Cheerful","Skill" : "1","Hobby" : "11,13,14"},{"Name" : "John","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Confident","Hobby" : "2,4,8","Skill" : "1,2,3,4,5"},{"Name" : "Steven ","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Conservative","Hobby" : "4,6,8","Skill" : "2,5,7"},{"Name" : "Donald ","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Cunning","Hobby" : "5,11,12","Skill" : "8,9,10,11","Gender" : "1"},{"Name" : "Ray ","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Earnest","Hobby" : "9,10,11","Skill" : "1,3,5,7,9","Gender" : "1"},{"Name" : "Young","ID" : "TOBE0713","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Extrovert","Hobby" : "8","Skill" : "12,13","Gender" : "1"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","0","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Guide");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","50","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Grid");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","85","980","1275",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","50","805","154",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("grdCellclass");
            obj.set_useselcolor("false");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"Button\"/><Cell col=\"2\" colspan=\"2\" text=\"Input\"/><Cell row=\"1\" text=\"Upload\"/><Cell row=\"1\" col=\"1\" text=\"Download\"/><Cell row=\"1\" col=\"2\" text=\"Default\"/><Cell row=\"1\" col=\"3\" text=\"Essential\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"cell_WF_UploadBtn\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"buttoncontrol\" edittype=\"button\" cssclass=\"cell_WF_DnloadBtn\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"editcontrol\" edittype=\"text\" cssclass=\"cell_WF_EdtEssential\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","20","Grid00:20","445","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("※ Expression");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","20","Static01:10","805","180",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"HDate\"/><Cell col=\"3\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:Name\" cssclass=\"expr:Gender == &quot;1&quot; ? &quot;cell_WF_ExprF&quot; : &quot;cell_WF_ExprM&quot;\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:HDate\"/><Cell col=\"3\" text=\"bind:Salary\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","Grid01:20","391","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("※ Action > selecttype - cell / Appearance > showselection - ture");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","445","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("※ GridCellClass");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid02","20","Static02:10","805","150",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_showselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"HDate\"/><Cell col=\"3\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:Name\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:HDate\"/><Cell col=\"3\" text=\"bind:Salary\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","20","Grid02:20","394","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("※ Action > selecttype - row / Appearance > showselection - ture");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid03","20","Static03:10","805","150",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj.set_showselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"HDate\"/><Cell col=\"3\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:Name\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:HDate\"/><Cell col=\"3\" text=\"bind:Salary\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","20","Grid03:20","785","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("※ Appearance > showcellselection - ture             실행하여 cell 선택 시 확인 할 수 있습니다.");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid04","20","Static04:10","805","150",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"HDate\"/><Cell col=\"3\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:Name\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:HDate\"/><Cell col=\"3\" text=\"bind:Salary\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","20","Grid04:20","476","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("※  Appearance > showselection - ture / Appearance > showcellselection - ture");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid05","20","Static05:10","805","120",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj.set_showcellselection("true");
            obj.set_showselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"HDate\"/><Cell col=\"3\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:Name\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:HDate\"/><Cell col=\"3\" text=\"bind:Salary\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,1380,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompGuide06_1.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("CompGuide06_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
