(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_Grid");
            this.set_titletext("Sample_Grid");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_chk", this);
            obj.set_keystring("");
            obj.set_useclientlayout("true");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_no", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj.set_keystring("");
            obj.set_updatecontrol("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_emp", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","20","90","320","175",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_chk");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("checkbox,!sort,!rowfix,!colfix,!filter,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Emp ID\"/><Cell col=\"1\" text=\"Name\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","Grid00:10","90","320","180",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_no");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("no,!sort,!rowfix,!colfix,!filter,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Emp ID\"/><Cell col=\"1\" text=\"Name\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" displaytype=\"text\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid02","Grid01:10","90","320","180",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_status");
            obj.set_autofittype("col");
            obj.getSetter("griduserproperty").set("status,!sort,!rowfix,!colfix,!filter,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Emp ID\"/><Cell col=\"1\" text=\"Name\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" displaytype=\"text\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:EMP_NAME\" displaytype=\"text\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"65","26","20","38",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_del",null,"65","26","20","16",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","20","285","482","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기본기능 (Multi Sort: Ctrl Key)");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid03","20","315","482","249",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_emp");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Emp ID\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Dept\"/><Cell col=\"3\" text=\"Position\"/><Cell col=\"4\" text=\"Hire Date\"/><Cell col=\"5\" text=\"Salary\"/><Cell col=\"6\" text=\"Gender\"/><Cell col=\"7\" text=\"Married\"/><Cell col=\"8\" text=\"Memo\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid04","518","315","482","249",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_emp");
            obj.getSetter("griduserproperty").set("colfix,rowfix,filter,initial,replace,colhide,export,import,personal,cellcopypaste");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Emp ID\"/><Cell col=\"1\" text=\"Name\"/><Cell col=\"2\" text=\"Dept\"/><Cell col=\"3\" text=\"Position\"/><Cell col=\"4\" text=\"Hire Date\"/><Cell col=\"5\" text=\"Salary\"/><Cell col=\"6\" text=\"Gender\"/><Cell col=\"7\" text=\"Married\"/><Cell col=\"8\" text=\"Memo\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","518","285","97","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("모든기능");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","20","584","180","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("복잡한 그리드");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid05","20","614","980","307",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("ds_emp");
            obj.getSetter("griduserproperty").set("replace,colhide,userheader");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"112\"/><Column size=\"117\"/><Column size=\"91\"/><Column size=\"92\"/><Column size=\"114\"/><Column size=\"107\"/></Columns><Rows><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell colspan=\"3\"/><Cell col=\"3\"/><Cell col=\"4\" colspan=\"2\"/><Cell row=\"1\" text=\"Emp ID\" calendarweekformat=\"bind:EMP_ID\"/><Cell row=\"1\" col=\"1\" text=\"Dept\" calendarweekformat=\"bind:DEPT_CODE\"/><Cell row=\"1\" col=\"2\" text=\"Gender\" calendarweekformat=\"bind:GENDER\"/><Cell row=\"1\" col=\"3\" text=\"Married\" calendarweekformat=\"bind:MARRIED\"/><Cell row=\"1\" col=\"4\" text=\" \" calendarweekformat=\"bind:HIRE_DATE\"/><Cell row=\"1\" col=\"5\" text=\"Salary\" calendarweekformat=\"bind:SALARY\"/><Cell row=\"2\" text=\"Name\" calendarweekformat=\"bind:EMP_NAME\"/><Cell row=\"2\" col=\"1\" text=\"Position\" calendarweekformat=\"bind:POSITION\"/><Cell row=\"2\" col=\"2\" colspan=\"2\"/><Cell row=\"2\" col=\"4\" colspan=\"2\" text=\"Memo\" calendarweekformat=\"bind:MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:DEPT_CODE\" textAlign=\"center\"/><Cell col=\"2\" rowspan=\"2\" text=\"bind:GENDER\" textAlign=\"center\"/><Cell col=\"3\" rowspan=\"2\" text=\"bind:MARRIED\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SALARY\" textAlign=\"center\"/><Cell row=\"1\" text=\"bind:EMP_NAME\" textAlign=\"center\"/><Cell row=\"1\" col=\"1\" text=\"bind:POSITION\" textAlign=\"center\"/><Cell row=\"1\" col=\"4\" colspan=\"2\" text=\"bind:MEMO\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","0","166","60",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("그리드 기능");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","20","60","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00","350","60","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("순번");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00_00_00","680","60","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Row 상태");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Radio("Radio00","623","289","320","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("-1");
            obj.set_columncount("-1");
            var Radio00_innerdataset = new nexacro.NormalDataset("Radio00_innerdataset", obj);
            Radio00_innerdataset._setContents({"ColumnInfo" : {"Column" : [ {"id" : "codecolumn","size" : "256"},{"id" : "datacolumn","size" : "256"}]},"Rows" : [{"codecolumn" : "row","datacolumn" : "row"},{"codecolumn" : "multirow","datacolumn" : "multirow"},{"codecolumn" : "cell","datacolumn" : "cell"},{"codecolumn" : "area","datacolumn" : "area"}]});
            obj.set_innerdataset(Radio00_innerdataset);
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,580,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample_Grid.xfdl", function() {
        /*
            그리드기능
            * 체크박스(checkbox), 순번(no), 상태(status), 정렬(sort),
             행고정(rowfix), 열고정(colfix), 필터(filter),
             찾기/바꾸기(replace), 컬럼숨기기/보이기(colhide)
            엑셀내려받기(export), 엑셀올리기(import),
            그리드개인화(personal), 초기화(initial),
            유저헤더그리드(userheader) , 셀copy & paste(cellcopypaste)기능 제공.

            * 그리드에 아무것도 설정하지 않을 시, [정렬, 행고정, 열고정, 필터, 초기화] 기능을 사용.

            * 기본기능외 다른 기능을 추가 할 경우 그리드에 user property 추가하여 사용.
            ※ 추가방법
            그리드 Properties창에서 마우스 우클릭 --> add properties 를 선택하여 user property를 추가
            --> 사용할 기능을 콤마(,)로 구분하여 나열.
            user property name  : griduserproperty
            user property value : status,no,checkbox,colhide,personal

            * 기본 기능에서 사용하지 않을 기능에는 앞에 느낌표(!)를 붙여 명시.
            예] !rowfix,!sort

            * 그리드 헤더와 로우가 매칭이 되지않는 복잡한 그리드의 경우
            userheader 속성을 사용 하여 필터, 찾기/바꾸기, 소트 등을 이용 가능.
            단 각 헤더정보에 기능을 이용할 바인딩 정보가 매칭되어야 하고
            헤더의 [calendarweekformat] 속성에 해당 기능을 매칭.

            * 체크박스, 순번, 상태, 소트의 기능을 제외한 기능은 마우스 우클릭시 나오는 팝업메뉴에서 제공.
        */

        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };

        // 입력
        this.btn_add_onclick = function(obj,e)
        {
            var nRow = this.ds_status.addRow();
            this.ds_status.setRowType(nRow, Dataset.ROWTYPE_INSERT);
        };
        //삭제
        this.btn_del_onclick = function(obj,e)
        {
        	var nRow = this.ds_status.rowposition;
        	this.ds_status.setRowType(nRow, Dataset.ROWTYPE_DELETE);
        };
        //수정
        this.ds_status_oncolumnchanged = function(obj,e)
        {
        	this.ds_status.setRowType(e.row, Dataset.ROWTYPE_UPDATE);
        };

        this.Radio00_onitemchanged = function(obj,e)
        {
        	this.Grid04.selecttype = e.postvalue;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_del.addEventHandler("onclick",this.btn_del_onclick,this);
            this.Radio00.addEventHandler("onitemchanged",this.Radio00_onitemchanged,this);
            this.ds_chk.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_chk.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_chk.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
            this.ds_no.addEventHandler("cancolumnchange",this.ds_emp_cancolumnchange,this);
            this.ds_no.addEventHandler("onrowsetchanged",this.ds_emp_onrowsetchanged,this);
            this.ds_no.addEventHandler("onrowposchanged",this.ds_emp_onrowposchanged,this);
            this.ds_status.addEventHandler("oncolumnchanged",this.ds_status_oncolumnchanged,this);
        };
        this.loadIncludeScript("Sample_Grid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
