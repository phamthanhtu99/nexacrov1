(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Template01");
            this.set_titletext("ListDetailV");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,693);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "1","data" : "All"},{"code" : "2","data" : "Female"},{"code" : "3","data" : "Male"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "1","data" : "Financial Accounting Team"},{"code" : "2","data" : "Human Resource Team"},{"code" : "3","data" : "Marketing Team"},{"code" : "4","data" : "Education Team"},{"code" : "5","data" : "Sales Team"},{"code" : "6","data" : "Presales Team"},{"code" : "7","data" : "Technical Support Team"},{"code" : "8","data" : "Server Support Team"},{"code" : "9","data" : "Mobile Support Team"},{"code" : "10","data" : "Architecture  Team"},{"data" : "Platform Team","code" : "11"},{"data" : "Cloud Team","code" : "12"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_position", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "1","data" : "CEO"},{"code" : "2","data" : "Director"},{"code" : "3","data" : "General Manager"},{"code" : "4","data" : "Manager"},{"code" : "5","data" : "Assistant Manager"},{"code" : "6","data" : "Staff"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Name","type" : "STRING","size" : "256"},{"id" : "ID","type" : "STRING","size" : "256"},{"id" : "Dept","type" : "STRING","size" : "256"},{"id" : "Memo","type" : "STRING","size" : "256"},{"id" : "Gender","type" : "STRING","size" : "256"},{"id" : "Married","type" : "STRING","size" : "256"},{"id" : "WaddingDate","type" : "STRING","size" : "256"},{"id" : "HDate","type" : "STRING","size" : "256"},{"id" : "Salary","type" : "STRING","size" : "256"},{"id" : "Position","type" : "STRING","size" : "256"},{"id" : "Hobby","type" : "STRING","size" : "256"},{"id" : "Skill","type" : "STRING","size" : "256"}]},"Rows" : [{"Name" : "Kate","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200701","Salary" : "50000000","Position" : "1","Memo" : "Active","Hobby" : "1,3","Skill" : "1,3,5","Gender" : "1","WaddingDate" : "19791118"},{"Name" : "Dennis ","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190802","Salary" : "60000000","Position" : "2","Memo" : "Affectionnate","Hobby" : "2,5,6","Skill" : "2,4","Gender" : "2","WaddingDate" : "20010513"},{"Name" : "Max ","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","Married" : "","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Aggressive","Hobby" : "3,5,8,9","Skill" : "3,5,9","Gender" : "2"},{"Name" : "Ted ","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","Married" : "","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Altruistic","Hobby" : "4,5,8","Skill" : "5,10,11","Gender" : "2"},{"Name" : "Adam","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Ambitious","Hobby" : "5,11,12","Skill" : "5,6,9","Gender" : "2"},{"Name" : "Belle","ID" : "TOBE0621","Dept" : "6","Gendar" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Arrogant","Hobby" : "6,8,9","Skill" : "10,11,12","Gender" : "2"},{"Name" : "Lexy","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Astute","Hobby" : "2,4,8","Skill" : "1,2,3","Gender" : "1","WaddingDate" : "20040223"},{"Name" : "Lucy","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Attractive","Hobby" : "13,14","Skill" : "10,13","Gender" : "1","WaddingDate" : "20060123"},{"Name" : "Kein","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Avaricious","Hobby" : "2,6,8","Skill" : "1,3,5","Gender" : "2","WaddingDate" : ""},{"Name" : "Juliana","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Benevolent","Hobby" : "11,12,13","Skill" : "3,6,9","Gender" : "1"},{"Name" : "Kara","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Boastiful","Hobby" : "2,3,5","Skill" : "2,4,8","Gender" : "1"},{"Name" : "Andrew","ID" : "TOBE0621","Dept" : "6","Gendar" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Bossy","Hobby" : "3,5,7,9","Skill" : "2,5,10","Gender" : "2"},{"Name" : "Maria","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Brutal","Hobby" : "1,3,12","Skill" : "2,6,12","Gender" : "1","WaddingDate" : "20101110"},{"Name" : "Eddy","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Candid","Hobby" : "1,5,13","Skill" : "3,4,12","Gender" : "2","WaddingDate" : "20110418"},{"Name" : "Sarah","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Calm","Hobby" : "5,6,8","Skill" : "3,6,9","Gender" : "1"},{"Name" : "Ivy","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Careful","Skill" : "10,11,12,13","Hobby" : "5,7,9,11","Gender" : "1"},{"Name" : "Noel ","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Careless","Skill" : "2,4,10","Hobby" : "2,5,6,15","Gender" : "2"},{"Name" : "Arnold","ID" : "TOBE0621","Dept" : "6","Gendar" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Caring","Skill" : "7,8,9","Hobby" : "8,10,12","Gender" : "2"},{"Name" : "Alex ","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Cheerful","Skill" : "1","Hobby" : "11,13,14","Gender" : "2","WaddingDate" : "20040512"},{"Name" : "John","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Confident","Hobby" : "2,4,8","Skill" : "1,2,3,4,5","Gender" : "2","WaddingDate" : "19580506"},{"Name" : "Steven ","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Conservative","Hobby" : "4,6,8","Skill" : "2,5,7","Gender" : "2"},{"Name" : "Donald ","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Cunning","Hobby" : "5,11,12","Skill" : "8,9,10,11","Gender" : "2"},{"Name" : "Ray ","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Earnest","Hobby" : "9,10,11","Skill" : "1,3,5,7,9","Gender" : "1"},{"Name" : "Young","ID" : "TOBE0713","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Extrovert","Hobby" : "8","Skill" : "12,13","Gender" : "1"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_hobby", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"},{"id" : "readonly","type" : "STRING","size" : "256"}]},"Rows" : [{"data" : "Climbing","code" : "1"},{"data" : "Running","code" : "2"},{"data" : "Cycling","code" : "3"},{"data" : "Swimming","code" : "4","readonly" : "1"},{"data" : "Yoga","code" : "5"},{"data" : "Golf","code" : "6"},{"data" : "Tennis","code" : "7"},{"data" : "Reading ","code" : "8"},{"data" : "Cooking","code" : "9"},{"data" : "Photography","code" : "10"},{"data" : "Painting","code" : "11"},{"data" : "Movie","code" : "12"},{"data" : "Game","code" : "13"},{"data" : "Sleeping","code" : "14","readonly" : "1"},{"data" : "Shopping","code" : "15"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_skill", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"},{"id" : "readonly","type" : "STRING","size" : "256"}]},"Rows" : [{"data" : "HTML","code" : "1"},{"data" : "CSS","code" : "2"},{"data" : "JavaScript","code" : "3"},{"data" : "JAVA","code" : "4"},{"data" : "C/C++","code" : "5"},{"data" : "Python","code" : "6"},{"data" : "PHP","code" : "7"},{"data" : "React","code" : "8"},{"data" : "Vue","code" : "9"},{"data" : "Ruby","code" : "10","readonly" : "1"},{"data" : "Swift","code" : "11"},{"data" : "Kotlin","code" : "12"},{"data" : "SQL","code" : "13"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gender", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "1","data" : "Female"},{"code" : "2","data" : "Male"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","15.00","10","120","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("EMPLOYEES");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_02",null,"10","53","26","15",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Save");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_01",null,"10","63","26","71",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Delete");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"10","73","26","190",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Retrieve");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","50","26","137",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","15","46",null,"44","15",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","8","107","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","107.00","8","90","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","197.00","8","26","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Find");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","223.00","8","175","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","498.00","8","77","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("Gender");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","575.00","8","320","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","15.00","90","216","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Result");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","125",null,"269","15",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_emp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"181\"/><Column size=\"170\"/><Column size=\"131\"/><Column size=\"178\"/><Column size=\"138\"/><Column size=\"210\"/><Column size=\"239\"/><Column size=\"225\"/><Column size=\"194\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"STT\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"NAME ID\"/><Cell col=\"3\" text=\"Name\"/><Cell col=\"4\" text=\"ID\"/><Cell col=\"5\" text=\"Dept.\"/><Cell col=\"6\" text=\"Position\"/><Cell col=\"7\" text=\"SKILL\"/><Cell col=\"8\" text=\"Marital Status\"/><Cell col=\"9\" text=\"Hobby\"/><Cell col=\"10\" text=\"Memo\"/><Cell col=\"11\" text=\"HDate\"/><Cell col=\"12\" text=\"Salary\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"expr:dataset.getRowCount() - currow\"/><Cell col=\"2\" text=\"expr:Name + ID\"/><Cell col=\"3\" text=\"bind:Name\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:ID\" displaytype=\"maskeditcontrol\" edittype=\"mask\" maskedittype=\"string\" maskeditformat=\"AAAA-####\"/><Cell col=\"5\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_dept\" combodatacol=\"data\" combocodecol=\"code\" text=\"bind:Dept\"/><Cell col=\"6\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_position\" combodatacol=\"data\" combocodecol=\"code\" text=\"bind:Position\"/><Cell col=\"7\" text=\"bind:Skill\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" multicombodataset=\"ds_skill\" multicombodatacol=\"data\" multicombocodecol=\"code\"/><Cell col=\"8\" text=\"bind:Married\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"9\" displaytype=\"multicombocontrol\" edittype=\"multicombo\" combodataset=\"ds_hobby\" combodatacol=\"data\" combocodecol=\"code\" text=\"bind:Hobby\" multicombodataset=\"ds_hobby\" multicombodatacol=\"data\" multicombocodecol=\"code\"/><Cell col=\"10\" text=\"bind:Memo\"/><Cell col=\"11\" text=\"bind:HDate\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"12\" text=\"bind:Salary\" displaytype=\"number\"/></Band><Band id=\"summary\"><Cell text=\"expr:dataset.getRowCount()\"/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"Summary\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/><Cell col=\"7\"/><Cell col=\"8\"/><Cell col=\"9\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\" text=\"expr:dataset.getSum(&apos;Salary&apos;)\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","15.00","394","216","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Detail Information");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","15","429","130","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","144","429","209","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","144.00","464","209","36",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","15.00","464","130","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Dept.");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00","144.00","499","546","90",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00","15.00","499","130","90",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Hobby");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","144.00","588","546","90",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_00_00","15.00","588","130","90",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Skill");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01","352.00","429","130","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","481.00","429","209","36",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01","481.00","464","209","36",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01","352.00","464","130","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Gender");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00","818.00","429",null,"36","15",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00","818.00","464",null,"36","15",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00","689.00","464","130","36",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("Marital Status");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00","689.00","429","130","36",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("HDate");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00_00","818.00","499",null,"90","15",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00_01_00_00","818.00","588",null,"90","15",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00_00","689.00","588","130","90",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Position");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_01_00_00","689.00","499","130","90",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Memo");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","149","434","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","486","434","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("msk_WF_Essential");
            obj.set_type("string");
            obj.set_format("AAAA-####");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","823","434","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","149","469","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_innerdataset("ds_dept");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","486","469","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_innerdataset("ds_gender");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            this.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","823.00","469","70","26",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Married");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","823","504","160","80",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new ListBox("ListBox00","823.00","593","160","80",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_innerdataset("ds_position");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            this.addChild(obj.name, obj);

            obj = new CheckBoxSet("CheckBoxSet00_00","149","594","491","80",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_innerdataset("ds_skill");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_readonlycolumn("readonly");
            obj.set_rowcount("3");
            this.addChild(obj.name, obj);

            obj = new MultiCombo("MultiCombo00","152","510","511","75",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_innerdataset("ds_hobby");
            obj.set_datacolumn("data");
            obj.set_codecolumn("code");
            obj.set_text("MultiCombo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,693,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_emp","Name");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","MaskEdit00","value","ds_emp","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Calendar00","value","ds_emp","HDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Combo00","value","ds_emp","Dept");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Radio00","value","ds_emp","Gender");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","CheckBox00","value","ds_emp","Married");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","TextArea00","value","ds_emp","Memo");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","ListBox00","value","ds_emp","Position");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","MultiCombo00","value","ds_emp","Hobby");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","CheckBoxSet00_00","value","ds_emp","Skill");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Template01.xfdl", function() {

        this.CheckBoxSet00_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.CheckBoxSet00_00.addEventHandler("onitemchanged",this.CheckBoxSet00_onitemchanged,this);
        };
        this.loadIncludeScript("Template01.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
