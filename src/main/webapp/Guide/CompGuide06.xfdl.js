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
            this.set_titletext("Grid");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,1380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Name","type" : "STRING","size" : "256"},{"id" : "ID","type" : "STRING","size" : "256"},{"id" : "Dept","type" : "STRING","size" : "256"},{"id" : "Memo","type" : "STRING","size" : "256"},{"id" : "Gender","type" : "STRING","size" : "256"},{"id" : "Married","type" : "STRING","size" : "256"},{"id" : "HDate","type" : "STRING","size" : "256"},{"id" : "Salary","type" : "STRING","size" : "256"},{"id" : "Position","type" : "STRING","size" : "256"}]},"Rows" : [{"Name" : "Jane","ID" : "TOBE0701","Dept" : "1","Gender" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Active"},{"Name" : "Anna","ID" : "TOBE0802","Dept" : "2","Gender" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Affectionnate"},{"Name" : "Erin","ID" : "TOBE0903","Dept" : "3","Gender" : "1","Married" : "","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Aggressive"},{"Name" : "Lina","ID" : "TOBE0101","Dept" : "4","Gender" : "1","Married" : "","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Altruistic"},{"Name" : "Jason","ID" : "TOBE0204","Dept" : "5","Gender" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Ambitious"},{"Name" : "Jay","ID" : "TOBE0621","Dept" : "6","Gender" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Arrogant"},{"Name" : "Jane","ID" : "TOBE0701","Dept" : "1","Gender" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Astute"},{"Name" : "Anna","ID" : "TOBE0802","Dept" : "2","Gender" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Attractive"},{"Name" : "Erin","ID" : "TOBE0903","Dept" : "3","Gender" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Avaricious"},{"Name" : "Lina","ID" : "TOBE0101","Dept" : "4","Gender" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Benevolent"},{"Name" : "Jason","ID" : "TOBE0204","Dept" : "5","Gender" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Boastiful"},{"Name" : "Jay","ID" : "TOBE0621","Dept" : "6","Gender" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Bossy"},{"Name" : "Jane","ID" : "TOBE0701","Dept" : "1","Gender" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Brutal"},{"Name" : "Anna","ID" : "TOBE0802","Dept" : "2","Gender" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Candid"},{"Name" : "Erin","ID" : "TOBE0903","Dept" : "3","Gender" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Calm"},{"Name" : "Lina","ID" : "TOBE0101","Dept" : "4","Gender" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Careful"},{"Name" : "Jason","ID" : "TOBE0204","Dept" : "5","Gender" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Careless"},{"Name" : "Jay","ID" : "TOBE0621","Dept" : "6","Gender" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Caring"},{"Name" : "Jane","ID" : "TOBE0701","Dept" : "1","Gender" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Cheerful"},{"Name" : "Anna","ID" : "TOBE0802","Dept" : "2","Gender" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Confident"},{"Name" : "Erin","ID" : "TOBE0903","Dept" : "3","Gender" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Conservative"},{"Name" : "Lina","ID" : "TOBE0101","Dept" : "4","Gender" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Cunning"},{"Name" : "Jason","ID" : "TOBE0204","Dept" : "5","Gender" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Earnest"},{"Name" : "Jay","ID" : "TOBE0621","Dept" : "6","Gender" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Extrovert"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tree", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "data","type" : "STRING","size" : "256"},{"id" : "level","type" : "STRING","size" : "256"}]},"Rows" : [{"data" : "NexacroTheme","level" : "0"},{"data" : "EN","level" : "1"},{"data" : "gray","level" : "2"},{"data" : "blue","level" : "2"},{"data" : "KO","level" : "1"},{"data" : "blue","level" : "2"},{"data" : "gray","level" : "2"},{"data" : "Theme","level" : "0"},{"data" : "blue","level" : "1"},{"data" : "xcss","level" : "2"},{"data" : "images","level" : "2"},{"data" : "image01","level" : "3"},{"data" : "image02","level" : "3"},{"data" : "XCSSResource","level" : "0"},{"data" : "NEDU24","level" : "1"},{"data" : "UserFont","level" : "0"},{"data" : "Resource","level" : "1"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grd02", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"},{"id" : "Column5","type" : "STRING","size" : "256"},{"id" : "Column6","type" : "STRING","size" : "256"},{"id" : "Column7","type" : "STRING","size" : "256"}]},"Rows" : [{"Column6" : "Btn","Column1" : "Edit","Column2" : "AA713","Column7" : "24%"},{"Column6" : "Btn","Column0" : "1","Column7" : "50%"},{},{},{"Column0" : "1"},{},{},{},{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cellCbo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "1","data" : "Planning"},{"code" : "2","data" : "Accounting"},{"code" : "3","data" : "Technocal Support"},{"code" : "4","data" : "Education"},{"code" : "5","data" : "Sales Support"},{"code" : "6","data" : "Quality Control"},{"code" : "7","data" : "Management Assistant"},{"data" : "Human Resource","code" : "8"},{"data" : "Customer Support","code" : "9"},{"data" : "Design","code" : "10"},{"data" : "R&D Planning","code" : "11"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_rdoItem", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Restaurant","type" : "STRING","size" : "256"},{"id" : "Service","type" : "STRING","size" : "256"},{"id" : "Value","type" : "STRING","size" : "256"}]},"Rows" : [{"Restaurant" : "MOM`S TOUCH","Service" : "2","Value" : "3"},{"Restaurant" : "BURGER KING","Service" : "1","Value" : "2"},{"Restaurant" : "KFC","Service" : "1","Value" : "2"},{"Restaurant" : "FRANK BURGER","Service" : "2","Value" : "3"},{"Restaurant" : "POPEYES","Service" : "2","Value" : "1"}]});
this.addChild(obj.name, obj);


            obj = new Dataset("ds_CellmultiCbo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"},{"id" : "readonly","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "1","data" : "apple"},{"code" : "2","data" : "banana"},{"code" : "3","data" : "mangosteen","readonly" : "1"},{"code" : "4","data" : "durian"},{"code" : "5","data" : "cherry"},{"code" : "6","data" : "lime","readonly" : ""},{"code" : "7","data" : "blackberry","readonly" : "1"},{"code" : "8","data" : "coconut"},{"code" : "9","data" : "watermelon"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("grd_multiCbo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"}]},"Rows" : [{}]});
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

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","20","50","935","209",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj.set_showcellselection("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"162\"/><Column size=\"141\"/><Column size=\"141\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"Name\"/><Cell col=\"1\" text=\"ID\"/><Cell col=\"2\" text=\"Memo\"/><Cell col=\"3\" text=\"HDate\"/><Cell col=\"4\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"bind:Name\"/><Cell col=\"1\" text=\"bind:ID\"/><Cell col=\"2\" text=\"bind:Memo\"/><Cell col=\"3\" text=\"bind:HDate\"/><Cell col=\"4\" text=\"bind:Salary\"/></Band><Band id=\"summary\"><Cell text=\"Summary\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","20","Grid00:20","445","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("※ GridCellControl");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid01","20","Static01:10","935","202",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grd02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"44\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"76\"/><Column size=\"80\"/><Column size=\"143\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"Chk\"/><Cell col=\"1\" text=\"Edit\"/><Cell col=\"2\" text=\"MaskEdit\"/><Cell col=\"3\" text=\"Combo\"/><Cell col=\"4\" text=\"Calendar\"/><Cell col=\"5\" text=\"Expand\"/><Cell col=\"6\" text=\"Button\"/><Cell col=\"7\" text=\"Progress\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"editcontrol\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"AA###\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_cellCbo\" combocodecol=\"code\" combodatacol=\"data\"/><Cell col=\"4\" text=\"bind:Column4\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"5\" text=\"bind:Column5\" expandshow=\"show\"/><Cell col=\"6\" text=\"bind:Column6\" displaytype=\"buttoncontrol\" edittype=\"button\"/><Cell col=\"7\" text=\"bind:Column7\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","Grid01:20","145","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("※ Tree");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid02","20","Static02:10","255","674",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_tree");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"245\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"data\"/></Band><Band id=\"body\"><Cell text=\"bind:data\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:level\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","347","Grid01:20","274","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("※ RadioItem");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid03","347","Static03:10","610","232",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_binddataset("ds_rdoItem");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"112\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"Restaurant\"/><Cell col=\"1\" colspan=\"3\" text=\"Service\"/><Cell col=\"4\" colspan=\"3\" text=\"Value\"/><Cell row=\"1\" col=\"1\" text=\"1\"/><Cell row=\"1\" col=\"2\" text=\"2\"/><Cell row=\"1\" col=\"3\" text=\"3\"/><Cell row=\"1\" col=\"4\" text=\"1\"/><Cell row=\"1\" col=\"5\" text=\"2\"/><Cell row=\"1\" col=\"6\" text=\"3\"/></Band><Band id=\"body\"><Cell text=\"bind:Restaurant\"/><Cell col=\"1\" text=\"bind:Service\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"1\"/><Cell col=\"2\" text=\"bind:Service\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" radioitemcodevalue=\"2\"/><Cell col=\"3\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" text=\"bind:Service\" radioitemcodevalue=\"3\"/><Cell col=\"4\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" text=\"bind:Value\" radioitemcodevalue=\"1\"/><Cell col=\"5\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" text=\"bind:Value\" radioitemcodevalue=\"2\"/><Cell col=\"6\" displaytype=\"radioitemcontrol\" edittype=\"radioitem\" text=\"bind:Value\" radioitemcodevalue=\"3\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","347","Grid03:20","530","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("※ MultiComboItem - edittype = text / edittype = count");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid04","347","Static04:10","610","106",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_binddataset("grd_multiCbo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"203\"/><Column size=\"203\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"MultiCombo\"/><Cell row=\"1\" text=\"edittype = text\"/><Cell row=\"1\" col=\"1\" text=\"edittype = count\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" multicombodataset=\"ds_CellmultiCbo\" multicombocodecol=\"code\" multicombodatacol=\"data\" multicombotextseparator=\" / \" multicomboshowselectallcheckbox=\"true\" multicomboreadonlycolumn=\"readonly\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" multicombodataset=\"ds_CellmultiCbo\" multicombocodecol=\"code\" multicombodatacol=\"data\" multicombotextseparator=\" / \" multicomboedittype=\"count\" multicomboshowselectallcheckbox=\"true\" multicomboreadonlycolumn=\"readonly\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","347","Grid04:20","530","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("※ MultiComboItem - edittype = singletag / edittype = multitag");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid05","347","Static05:10","610","216",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_binddataset("grd_multiCbo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"203\"/><Column size=\"203\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"150\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"MultiCombo\"/><Cell row=\"1\" text=\"edittype = singletag\"/><Cell row=\"1\" col=\"1\" text=\"edittype = multitag\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" multicombodataset=\"ds_CellmultiCbo\" multicombocodecol=\"code\" multicombodatacol=\"data\" multicombotextseparator=\" / \" multicomboshowselectallcheckbox=\"true\" multicomboreadonlycolumn=\"readonly\" multicombobuttonsize=\"28\" multicomboedittype=\"singletag\"/><Cell col=\"1\" text=\"bind:Column1\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" multicombodataset=\"ds_CellmultiCbo\" multicombocodecol=\"code\" multicombodatacol=\"data\" multicombotextseparator=\" / \" multicomboedittype=\"multitag\" multicomboshowselectallcheckbox=\"true\" multicomboreadonlycolumn=\"readonly\" multicombobuttonsize=\"28\"/></Band></Format></Formats>");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("CompGuide06.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
