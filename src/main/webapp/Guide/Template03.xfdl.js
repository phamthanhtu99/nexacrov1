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
            this.set_titletext("Tab");
            if (Form == this.constructor)
            {
                this._setFormPosition(1043,693);
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
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Name","type" : "STRING","size" : "256"},{"id" : "ID","type" : "STRING","size" : "256"},{"id" : "Dept","type" : "STRING","size" : "256"},{"id" : "Memo","type" : "STRING","size" : "256"},{"id" : "Gender","type" : "STRING","size" : "256"},{"id" : "Married","type" : "STRING","size" : "256"},{"id" : "HDate","type" : "STRING","size" : "256"},{"id" : "Salary","type" : "STRING","size" : "256"},{"id" : "Position","type" : "STRING","size" : "256"},{"id" : "Hobby","type" : "STRING","size" : "256"},{"id" : "Skill","type" : "STRING","size" : "256"}]},"Rows" : [{"Name" : "Kate","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200701","Salary" : "50000000","Position" : "1","Memo" : "Active","Hobby" : "1,3","Skill" : "1,3,5","Gender" : "1"},{"Name" : "Dennis ","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190802","Salary" : "60000000","Position" : "2","Memo" : "Affectionnate","Hobby" : "2,5,6","Skill" : "2,4","Gender" : "2"},{"Name" : "Max ","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","Married" : "","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Aggressive","Hobby" : "3,5,8,9","Skill" : "3,5,9","Gender" : "2"},{"Name" : "Ted ","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","Married" : "","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Altruistic","Hobby" : "4,5,8","Skill" : "5,10,11","Gender" : "2"},{"Name" : "Adam","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Ambitious","Hobby" : "5,11,12","Skill" : "5,6,9","Gender" : "2"},{"Name" : "Belle","ID" : "TOBE0621","Dept" : "6","Gendar" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Arrogant","Hobby" : "6,8,9","Skill" : "10,11,12","Gender" : "2"},{"Name" : "Lexy","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Astute","Hobby" : "2,4,8","Skill" : "1,2,3","Gender" : "1"},{"Name" : "Lucy","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Attractive","Hobby" : "13,14","Skill" : "10,13","Gender" : "1"},{"Name" : "Kein","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Avaricious","Hobby" : "2,6,8","Skill" : "1,3,5","Gender" : "2"},{"Name" : "Juliana","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Benevolent","Hobby" : "11,12,13","Skill" : "3,6,9","Gender" : "1"},{"Name" : "Kara","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Boastiful","Hobby" : "2,3,5","Skill" : "2,4,8","Gender" : "1"},{"Name" : "Andrew","ID" : "TOBE0621","Dept" : "6","Gendar" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Bossy","Hobby" : "3,5,7,9","Skill" : "2,5,10","Gender" : "2"},{"Name" : "Maria","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Brutal","Hobby" : "1,3,12","Skill" : "2,6,12","Gender" : "1"},{"Name" : "Eddy","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Candid","Hobby" : "1,5,13","Skill" : "3,4,12","Gender" : "2"},{"Name" : "Sarah","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Calm","Hobby" : "5,6,8","Skill" : "3,6,9","Gender" : "1"},{"Name" : "Ivy","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Careful","Skill" : "10,11,12,13","Hobby" : "5,7,9,11","Gender" : "1"},{"Name" : "Noel ","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Careless","Skill" : "2,4,10","Hobby" : "2,5,6,15","Gender" : "2"},{"Name" : "Arnold","ID" : "TOBE0621","Dept" : "6","Gendar" : "2","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Caring","Skill" : "7,8,9","Hobby" : "8,10,12","Gender" : "2"},{"Name" : "Alex ","ID" : "TOBE0701","Dept" : "1","Gendar" : "1","Married" : "1","HDate" : "20200201","Salary" : "50000000","Position" : "1","Memo" : "Cheerful","Skill" : "1","Hobby" : "11,13,14","Gender" : "2"},{"Name" : "John","ID" : "TOBE0802","Dept" : "2","Gendar" : "1","Married" : "1","HDate" : "20190201","Salary" : "60000000","Position" : "2","Memo" : "Confident","Hobby" : "2,4,8","Skill" : "1,2,3,4,5","Gender" : "2"},{"Name" : "Steven ","ID" : "TOBE0903","Dept" : "3","Gendar" : "1","HDate" : "20200201","Salary" : "70000000","Position" : "3","Memo" : "Conservative","Hobby" : "4,6,8","Skill" : "2,5,7","Gender" : "2"},{"Name" : "Donald ","ID" : "TOBE0101","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "4","Memo" : "Cunning","Hobby" : "5,11,12","Skill" : "8,9,10,11","Gender" : "2"},{"Name" : "Ray ","ID" : "TOBE0204","Dept" : "5","Gendar" : "2","HDate" : "20200201","Salary" : "70000000","Position" : "5","Memo" : "Earnest","Hobby" : "9,10,11","Skill" : "1,3,5,7,9","Gender" : "1"},{"Name" : "Young","ID" : "TOBE0713","Dept" : "4","Gendar" : "1","HDate" : "20200201","Salary" : "40000000","Position" : "6","Memo" : "Extrovert","Hobby" : "8","Skill" : "12,13","Gender" : "1"}]});
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

            obj = new Button("Button00",null,"10","73","26","124",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Retrieve");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"10","50","26","71",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","15","46",null,"44","15",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","8","159","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("Search Classification");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","389.00","8","139","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Search Condition");
            obj.set_cssclass("sta_WF_Label");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","159","8","150","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","691","8","26","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Find");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","541","8","150","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","15.00","90","216","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Basic Information    ");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","15.00","336","216","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Detail Information ");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_02","15.00","125","149","211",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02","163.00","125","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03","287.00","125","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00","451.00","125","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Name");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00","575.00","125","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00_00","739.00","125","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Name(English)");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_00","863.00","125",null,"36","15",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_01","163.00","160","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Company");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_01","287.00","160","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00_01","451.00","160","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Department");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_01","575.00","160","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00_00_00","739.00","160","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("Position");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_00_00","863.00","160",null,"36","15",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_02","163.00","195","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("Employment Date");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_02","287.00","195","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00_02","451.00","195","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("Work State");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_02","575.00","195","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00_00_01","739.00","195","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Resignation Date");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_00_01","863.00","195",null,"36","15",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_03","163.00","230","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Bank");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_03","287.00","230","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00_03","451.00","230","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Account");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_03","575.00","230","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00_00_02","739.00","230","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("Account Holder");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_00_02","863.00","230",null,"36","15",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_04","163.00","265","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("Cell Phone");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_04","287.00","265","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00_04","451.00","265","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("Telephone(Home)");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_04","575.00","265","165","36",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_00_00_03","739.00","265","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("Telephone(Comp)");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_00_00_03","863.00","265",null,"36","15",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_02_05","163.00","300","125","36",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("E-Mail");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_03_05","287.00","300",null,"36","15",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","21.00","131","137","159",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("ImageViewer00");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","52.00","300","75","26",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_WF_AddPhoto");
            obj.set_text("ADD");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio01","581.00","200","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Radio01_innerdataset = new nexacro.NormalDataset("Radio01_innerdataset", obj);
            Radio01_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "1","datacolumn" : "Work"},{"codecolumn" : "2","datacolumn" : "Resign"}]});
            obj.set_innerdataset(Radio01_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","15","371",null,"307","15",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_tabindex("0");
            obj.set_tabbuttongap("2");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("Personal Data");
            obj.set_url("Guide::Tabpage01.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.Tab00);
            obj.set_text("Academic Ability");
            obj.set_url("Guide::Tabpage02.xfdl");
            this.Tab00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","293","130","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","293","165","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","293","200","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","293","235","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","293","270","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","293","305","439","26",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","581","130","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","581","165","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit02","581","235","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit03","581","270","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","869","130","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","869","165","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_text("Combo01");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","869","200","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","869","235","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit04","869","270","150","26",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage1
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage2
            obj = new Layout("default","",0,0,this.Tab00.Tabpage2.form,function(p){});
            this.Tab00.Tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1043,693,this,function(p){});
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
            this._addPreloadList("fdl","Guide::Tabpage01.xfdl");
            this._addPreloadList("fdl","Guide::Tabpage02.xfdl");
        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static03_02_00_02.addEventHandler("onclick",this.Static03_02_00_02_onclick,this);
        };
        this.loadIncludeScript("Template03.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
