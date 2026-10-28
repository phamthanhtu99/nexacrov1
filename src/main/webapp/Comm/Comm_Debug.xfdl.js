(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmDebug");
            this.set_titletext("디버깅");
            this.set_background("#fce8aa");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dataset", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "PATH","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gDS", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "PATH","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_grid", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "PATH","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_gridDataset", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_components", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "PATH","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_properties", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "VALUE","type" : "STRING","size" : "256"},{"id" : "FUNCTION","type" : "STRING","size" : "256"},{"id" : "COLOR","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_variableType", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "LOCAL","NAME" : "Local"},{"CODE" : "GLOBAL","NAME" : "Global"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_variable", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "VALUE","type" : "STRING","size" : "256"},{"id" : "TYPE","type" : "STRING","size" : "256"},{"id" : "LVL","type" : "INT","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_datasetView", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "NAME","type" : "STRING","size" : "256"},{"id" : "VALUE","type" : "STRING","size" : "256"},{"id" : "TYPE","type" : "STRING","size" : "256"},{"id" : "LVL","type" : "INT","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_component","10","97",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tabpage1",this.tab_component);
            obj.set_text("Dataset");
            this.tab_component.addChild(obj.name, obj);

            obj = new Grid("grd_dataset","10","10",null,null,"10","10",null,null,null,null,this.tab_component.tabpage1.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_gridDataset");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats/>");
            this.tab_component.tabpage1.addChild(obj.name, obj);

            obj = new Tabpage("tabpage2",this.tab_component);
            obj.set_text("SaveXML");
            this.tab_component.addChild(obj.name, obj);

            obj = new TextArea("txt_saveXML","1","5",null,null,"1","5",null,null,null,null,this.tab_component.tabpage2.form);
            obj.set_taborder("0");
            this.tab_component.tabpage2.addChild(obj.name, obj);

            obj = new Tabpage("tabpage3",this.tab_component);
            obj.set_text("Dataset To Grid");
            this.tab_component.addChild(obj.name, obj);

            obj = new TextArea("txt_setGrid","1","5",null,null,"1","5",null,null,null,null,this.tab_component.tabpage3.form);
            obj.set_taborder("0");
            this.tab_component.tabpage3.addChild(obj.name, obj);

            obj = new Tabpage("tabpage4",this.tab_component);
            obj.set_text("Grid Format");
            this.tab_component.addChild(obj.name, obj);

            obj = new TextArea("txt_gridFormat","1","5",null,null,"1","5",null,null,null,null,this.tab_component.tabpage4.form);
            obj.set_taborder("0");
            this.tab_component.tabpage4.addChild(obj.name, obj);

            obj = new Tabpage("tabpage5",this.tab_component);
            obj.set_text("Components");
            this.tab_component.addChild(obj.name, obj);

            obj = new Grid("grd_properties","10","10","350",null,null,"10",null,null,null,null,this.tab_component.tabpage5.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_properties");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"186\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Properties Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;\" text=\"bind:NAME\"/><Cell col=\"1\" style=\"align:left;\" text=\"bind:VALUE\"/></Band></Format></Formats>");
            this.tab_component.tabpage5.addChild(obj.name, obj);

            obj = new Tabpage("tabpage6",this.tab_component);
            obj.set_text("Variable");
            this.tab_component.addChild(obj.name, obj);

            obj = new Grid("grd_variable","10","50",null,null,"10","10",null,null,null,null,this.tab_component.tabpage6.form);
            obj.set_taborder("0");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("ds_variable");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_selecttype("area");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"340\"/><Column size=\"926\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Variable Name\"/><Cell col=\"1\" text=\"Value\"/></Band><Band id=\"body\"><Cell style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:NAME\"/><Cell col=\"1\" edittype=\"normal\" style=\"align:left;color:BIND(COLOR);color2:BIND(COLOR);\" text=\"bind:VALUE\"/></Band></Format></Formats>");
            this.tab_component.tabpage6.addChild(obj.name, obj);

            obj = new Combo("cbo_variable","115","10","105","30",null,null,null,null,null,null,this.tab_component.tabpage6.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_variableType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("Local");
            obj.set_value("LOCAL");
            obj.set_index("0");
            this.tab_component.tabpage6.addChild(obj.name, obj);

            obj = new Static("Static00","10","10","105","30",null,null,null,null,null,null,this.tab_component.tabpage6.form);
            obj.set_text("Variable Type");
            obj.set_taborder("2");
            this.tab_component.tabpage6.addChild(obj.name, obj);

            obj = new Tabpage("tabpage7",this.tab_component);
            obj.set_text("Run Script");
            this.tab_component.addChild(obj.name, obj);

            obj = new TextArea("txt_script","10","10",null,null,"119","49",null,null,null,null,this.tab_component.tabpage7.form);
            obj.set_taborder("0");
            obj.set_value("//alert(this.opener.divWork.form.dsList.saveXML());");
            this.tab_component.tabpage7.addChild(obj.name, obj);

            obj = new Button("btn_runScript",null,"10","100","65","10",null,null,null,null,null,this.tab_component.tabpage7.form);
            obj.set_taborder("1");
            obj.set_text("Run Script");
            this.tab_component.tabpage7.addChild(obj.name, obj);

            obj = new TextArea("txt_result","10",null,null,"40","118","10",null,null,null,null,this.tab_component.tabpage7.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.tab_component.tabpage7.addChild(obj.name, obj);

            obj = new Div("div_search","10","10","780","78",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","8","100","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("Local");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_dataset","115","8","140","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_dataset");
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("essential");
            obj.set_displayrowcount("25");
            obj.set_type("filterlike");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static00","475","8","100","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("Grid");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static05","10","42","100","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("Global");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_gDS","115","42","140","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_gDS");
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_cssclass("essential");
            obj.set_displayrowcount("25");
            obj.set_type("filterlike");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_localFilter","260","8","78","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("필터해제");
            obj.getSetter("uWord").set("popup.cancel");
            obj.set_cssclass("btn_WF_Detail");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_globalFilter","260","42","78","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("필터해제");
            obj.getSetter("uWord").set("popup.cancel");
            obj.set_cssclass("btn_WF_Detail");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static01","475","42","100","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("Component");
            obj.getSetter("leftbase").set("");
            obj.getSetter("topbase").set("");
            obj.getSetter("bottombase").set("");
            obj.getSetter("rightbase").set("");
            obj.getSetter("widthbase").set("");
            obj.getSetter("heightbase").set("");
            obj.set_cssclass("sta_WF_SearchLabel");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_local","343","8","127","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_global","343","42","127","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_grid","580","8","140","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_grid");
            obj.set_datacolumn("NAME");
            obj.set_codecolumn("PATH");
            obj.set_displayrowcount("25");
            obj.set_text("Combo00");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cbo_components","580","42","140","26",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_components");
            obj.set_codecolumn("PATH");
            obj.set_datacolumn("NAME");
            obj.set_displayrowcount("25");
            this.div_search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab_component.tabpage1.form
            obj = new Layout("default","",0,0,this.tab_component.tabpage1.form,function(p){});
            this.tab_component.tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_component.tabpage2.form
            obj = new Layout("default","",0,0,this.tab_component.tabpage2.form,function(p){});
            this.tab_component.tabpage2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_component.tabpage3.form
            obj = new Layout("default","",0,0,this.tab_component.tabpage3.form,function(p){});
            this.tab_component.tabpage3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_component.tabpage4.form
            obj = new Layout("default","",0,0,this.tab_component.tabpage4.form,function(p){});
            this.tab_component.tabpage4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_component.tabpage5.form
            obj = new Layout("default","",0,0,this.tab_component.tabpage5.form,function(p){});
            this.tab_component.tabpage5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_component.tabpage6.form
            obj = new Layout("default","",0,0,this.tab_component.tabpage6.form,function(p){});
            this.tab_component.tabpage6.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_component.tabpage7.form
            obj = new Layout("default","",0,0,this.tab_component.tabpage7.form,function(p){});
            this.tab_component.tabpage7.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comm_Debug.xfdl", function() {

        /************************************************************************************************
         * include 선언부
         ************************************************************************************************/

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fv_currentCombo = "cbo_dataset"; // 현재선택이 로컬데이터셋인지 / GDS인지의 구분처리
        this.objApp 		= this.gfn_getApplication();

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        this.form_onload = function(obj,e)
        {

        	// Form Load 시 공통 기능 처리
        	this.gfn_formOnLoad(this); //초기화[필수]

            // 로컬 데이터셋을 가져온다.
        	this.fn_saveDatasetList(this.opener);
        	this.div_search.form.cbo_dataset.set_index(0);
        	this.fn_makeDatasetGrid();

        	// 글로벌 데이터셋을 가져온다.
        	this.fn_saveGDSList();
        	this.ds_gDS.set_keystring("S:NAME");

            // 화면의 GRID의 목록을 가져온다.
        	this.fn_saveGridList(this.opener);
        	this.div_search.form.cbo_grid.set_index(0);

            // 화면의 컴포넌트의 목록을 가져온다.
        	this.fn_saveComponetsList(this.opener);
        	this.div_search.form.cbo_components.set_index(0);

        	// 화면에서 사용되는 변수목록을 가져온다.
        	this.ds_variable.clearData();
        	this.fn_saveVariableList(this.opener);

        	// 글로벌 변수 목록을 가져온다.
        	this.fn_saveGlobalVariableList();
        	this.ds_variable.set_keystring("S:LVL+NAME");
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/


        /************************************************************************************************
         * CRUD 및 TRANSACTION 서비스 호출 처리
         ************************************************************************************************/


        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
         * @description 데이터셋의 목록을 찾아 저장한다.
        */
        this.fn_saveDatasetList = function(targetObj, fullpath)
        {
        	//trace("=============== fnSaveDatasetList targetObj.name : " + targetObj.name + " / fullpath : " + fullpath);
            var datasetlist = targetObj.objects;
            for(var i=0;i<datasetlist.length;i++)
            {
        		if( datasetlist[i]+"" == "[object Dataset]" )
        		{
                    var nRow = this.ds_dataset.addRow();
                    this.ds_dataset.setColumn(nRow, "NAME", datasetlist[i].id);

                    if( this.gfn_isNull(fullpath) )
                    {
                        this.ds_dataset.setColumn(nRow, "PATH", datasetlist[i].id);
                    }
                    else
                    {
                        // div_work.form. 으로 나오는 걸 잘라낸다.
                        var displayname = nexacro.replaceAll(fullpath+"."+datasetlist[i].id, "div_work.form.", "");
                        this.ds_dataset.setColumn(nRow, "NAME", displayname);
        				//this.ds_dataset.setColumn(nRow, "NAME", fullpath+"."+datasetlist[i].id);
                        this.ds_dataset.setColumn(nRow, "PATH", fullpath+"."+datasetlist[i].id);
                    }
                }
            }

            var objList = targetObj.components;
            var sObjType;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";
        		//trace("=== sObjType : " + sObjType + " / name : " + objList[i].name);
                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfn_isNull(fullpath) )
                        this.fn_saveDatasetList(objList[i].form, objList[i].id+".form");
                    else
                        this.fn_saveDatasetList(objList[i].form, fullpath+"."+objList[i].id+".form");
                }
                // Tab
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].tabpages;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfn_isNull(fullpath) )
                            this.fn_saveDatasetList(tabPageList[j].form, objList[i].id+tabPageList[j].id+".form");
                        else
                            this.fn_saveDatasetList(tabPageList[j].form, fullpath+"."+objList[i].id+tabPageList[j].id+".form");
                    }
                }
            }
        };

        /**
         * @description 화면의 그리드목록을 저장한다.
        */
        this.fn_saveGridList = function(targetObj, fullpath)
        {
        	//trace("=============== fnSaveGridList targetObj.name : " + targetObj.name + " / fullpath : " + fullpath);
            var sObjType;

            var objList = targetObj.components;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

        		if( objList[i]+"" == "[object Grid]" )
        		{
                    var nRow = this.ds_grid.addRow();

        			// div_work.form. 으로 나오는 걸 잘라낸다.
        			var displayname = "";
        			if (this.gfn_isNull(fullpath)) {
        				displayname = nexacro.replaceAll(objList[i].name, "div_work.form.", "");
        			}
        			else {
        				displayname = nexacro.replaceAll(fullpath+"."+objList[i].name, "div_work.form.", "");
        			}

        			this.ds_grid.setColumn(nRow, "NAME", displayname);
                    //this.ds_grid.setColumn(nRow, "NAME", objList[i].name);

                    if( this.gfn_isNull(fullpath) )
                        this.ds_grid.setColumn(nRow, "PATH", objList[i].name);
                    else
                        this.ds_grid.setColumn(nRow, "PATH", fullpath+"."+objList[i].name);
                }

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfn_isNull(fullpath) )
                        this.fn_saveGridList(objList[i].form, objList[i].name+".form");
                    else
                        this.fn_saveGridList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // Tab
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].tabpages;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfn_isNull(fullpath) )
                            this.fn_saveGridList(tabPageList[j].form, objList[i].name+tabPageList[j].name+".form");
                        else
                            this.fn_saveGridList(tabPageList[j].form, fullpath+"."+objList[i].name+tabPageList[j].name+".form");
                    }
                }
            }
        };

        /**
         * @description 화면의 모든 Object를 저장한다.
        */
        this.fn_saveComponetsList = function(targetObj, fullpath)
        {
        	trace("=============== fnSaveComponetsList targetObj.name : " + targetObj.name);
            var sObjType;
            var objList = targetObj.components;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";
                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfn_isNull(fullpath) )
                        this.fn_saveComponetsList(objList[i].form, objList[i].name+".form");
                    else
                        this.fn_saveComponetsList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // Tab
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].tabpages;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfn_isNull(fullpath) )
                            this.fn_saveComponetsList(tabPageList[j].form, objList[i].name+tabPageList[j].name+".form");
                        else
                            this.fn_saveComponetsList(tabPageList[j].form, fullpath+"."+objList[i].name+tabPageList[j].name+".form");
                    }
                }
                else
                {
        			// div_work.form. 으로 나오는 걸 잘라낸다.
        			trace(objList[i].name + " : " + fullpath);
        			if (!this.gfn_isNull(fullpath)) {
        	            var nRow = this.ds_components.addRow();
        				var displayname = nexacro.replaceAll(fullpath+"."+objList[i].name, "div_work.form.", "");
        				this.ds_components.setColumn(nRow, "NAME", displayname);
        				//this.ds_components.setColumn(nRow, "NAME", objList[i].name);

        				if( this.gfn_isNull(fullpath) )
        					this.ds_components.setColumn(nRow, "PATH", objList[i].name);
        				else
        					this.ds_components.setColumn(nRow, "PATH", fullpath+"."+objList[i].name);
        			}
                }
            }
        	trace(this.ds_components.saveXML());
        };

        /**
         * @description 글로벌 데이터셋 목록을 만든다.
        */
        this.fn_saveGDSList = function()
        {
        	var applicationobj = this.objApp.all;
            for (var i=0;i<applicationobj.length;i++)
            {
        		if (applicationobj[i]+"" == "[object Dataset]")
        		{
        		    try
        		    {
                        if (applicationobj[i].id.indexOf(".") == -1)
                        {
                            var nRow = this.ds_gDS.addRow();
                            this.ds_gDS.setColumn(nRow, "NAME", applicationobj[i].id);
                            this.ds_gDS.setColumn(nRow, "PATH", applicationobj[i].id);
                        }
                    }
                    catch (e)
                    {
        				trace(">>>> e Message" + e);
                    }
        		}
            }
        };

        /**
         * @description Dataset을 GRID에 표시한다.
        */
        this.fn_makeDatasetGrid = function()
        {
            var dataset;

            if( this.fv_currentCombo == "cbo_dataset" )
            {
                if( this.div_search.form.cbo_dataset.index == -1 ) return;

                dataset = eval("this.opener."+this.div_search.form.cbo_dataset.value);
            }
            else
            {
                if( this.div_search.form.cbo_gDS.index == -1 ) return;

        		dataset = this.objApp[this.div_search.form.cbo_gDS.text];
            }
        	this.ds_datasetView.assign(dataset);

            // 데이터셋의 정보가 존재하지 않으면
            if( dataset.getColCount() < 1 )
            {
                var formats = "";
                formats += '<Formats>\n';
                formats += '<Format id="default">\n';
                formats += '<Columns></Columns>\n';
                formats += '<Rows><Row size="24" band="head" /><Row size="24" /></Rows>\n';
                formats += '<Band id="head"></Band>\n';
                formats += '<Band id="body"></Band>\n';
                formats += '</Format>\n';
                formats += '</Formats>';

                this.tab_component.tabpage1.form.Grid00.set_formats(formats);
                return;
            }

            var columns = '    <Column size="30" />\n';
            var head    = '    <Cell col="0" text=""/>\n';
            //var body    = '    <Cell col="0" displaytype="image" text="expr:(dataset.getRowType(currow)==2)?\'theme://images/sta_n.png\':(dataset.getRowType(currow)==4)?\'theme://images/sta_u.png\':(dataset.getRowType(currow)==8)?\'theme://images/sta_d.png\':\'default\'"/>\n';
        	var body    = '    <Cell col="0" displaytype="normal" text="expr:(dataset.getRowType(currow)==2)?\'I\':(dataset.getRowType(currow)==4)?\'M\':(dataset.getRowType(currow)==8)?\'\':\'\'"/>\n';

            for(var i=0;i<dataset.getColCount();i++)
            {
                var columinfo = dataset.getColumnInfo(i);
                var columname = "";
                var columsize = "";
                var columtype = "";

                try
                {
                     columname = columinfo.name;
                     columsize = parseInt(columinfo.size);
                     columtype = columinfo.type.toUpperCase();
                }
                catch(e)
                {
                     columname = "undefined";
                     columsize = 50;
                     columtype = "STRING";
                }

                //Sonar Qube Unused local variables should be removed 조치 JBC 2016-09-20
                //var columwidth= 100;
                var align     = "";

                if( columtype == "STRING" )
                {
                    columsize = columsize*9;

                    if( columsize < columname.length*9 )
                    {
                        columsize = columname.length*9;
                    }

                    if( columsize > 200 )
                        columns += '    <Column size="200" />\n';
                    else
                        columns += '    <Column size="'+columsize+'" />\n';

                    align = 'style="align:left;"';
                }
                else if( columtype == "INT" )
                {
                    columns += '<Column size="80" />\n';
                    align = 'style="align:right;"';
                }
                else if( columtype == "FLOAT" )
                {
                    columns += '<Column size="80" />\n';
                    align = 'style="align:right;"';
                }
                else if( columtype == "DATE" )
                {
                    columns += '<Column size="88" />\n';
                    align = 'style="align:center;"';
                }
                else if( columtype == "TIME" )
                {
                    columns += '<Column size="88" />\n';
                    align = 'style="align:center;"';
                }
                else if( columtype == "DATETIME" )
                {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:center;"';
                }
                else if( columtype == "BIGDECIMAL" )
                {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:right;"';
                }
                else
                {
                    columns += '<Column size="120" />\n';
                    align = 'style="align:left;"';
                }

                head += '    <Cell col="'+(i+1)+'" text="'+columname+'"/>\n';
                body += '    <Cell col="'+(i+1)+'" '+align+' text="bind:'+columname+'" displaytype="normal" edittype="normal"/>\n';
            }

            var formats = "";
            formats += '<Formats>\n';
            formats += '<Format id="default">\n';
            formats += '<Columns>\n'+columns.substring(0,columns.length-1)+'\n</Columns>\n';
            formats += '<Rows>\n    <Row size="32" band="head" />\n    <Row size="32" />\n</Rows>\n';
            formats += '<Band id="head">\n'+head.substring(0,head.length-1)+'\n</Band>\n';
            formats += '<Band id="body">\n'+body.substring(0,body.length-1)+'\n</Band>\n';
            formats += '</Format>\n';
            formats += '</Formats>';

            this.tab_component.tabpage1.form.grd_dataset.set_binddataset(this.ds_datasetView);
            this.tab_component.tabpage1.form.grd_dataset.set_formats(formats);

        };

        /**
         * @description 데이터셋의 내용을 XML로 표시한다.
        */
        this.fn_makeDatasetXml = function()
        {
            var dataset;

            if( this.fv_currentCombo == "cbo_dataset" )
            {
                if( this.div_search.form.cbo_dataset.index == -1 ) return;

                dataset = eval("this.opener."+this.div_search.form.cbo_dataset.value);
            }
            else
            {
                if( this.div_search.form.cbo_gDS.index == -1 ) return;

        		dataset = this.objApp[this.div_search.form.cbo_gDS.text];
            }

            var text = nexacro.replaceAll(dataset.saveXML(), '<Dataset id="'+dataset.id+'">', '');
            text = nexacro.replaceAll(text, '</Dataset>', '');
            this.tab_component.tabpage2.form.txt_saveXML.set_value(text);
        };

        /**
         * @description 데이터셋을 GRID로 자동생성해준다
        */
        this.fn_makeDatasetGridFormat = function()
        {
            this.tab_component.tabpage3.form.txt_setGrid.set_value(this.tab_component.tabpage1.form.grd_dataset.formats);
        };

        /**
         * @description 화면의 그리드의 포맷을 가져온다.
        */
        this.fn_makeGridFormats = function()
        {
            if( this.div_search.form.cbo_grid.index == -1 ) return;

            var targetgrid = eval("this.opener."+this.div_search.form.cbo_grid.value);

            var formats = nexacro.replaceAll(targetgrid.formats, "><", ">\n<");
            formats = nexacro.replaceAll(formats, "<Column ", "    <Column ");
            formats = nexacro.replaceAll(formats, "<Cell ", "    <Cell ");
            formats = nexacro.replaceAll(formats, "<Row ", "    <Row ");

            // 리사이징한 그리드의 현재 컬럼 사이즈를 계산한다.
            var newcolumn = "";
            for(var i=0;i<targetgrid.getCellCount("Body");i++)
            {
                newcolumn += '    <Column size="'+targetgrid.getRealColSize(i, true)+'"/>\n';
            }
            formats = formats.split("<Columns>")[0]+"<Columns>\n"+newcolumn +"</Columns>"+formats.split("</Columns>")[1];

            this.tab_component.tabpage4.form.txt_gridFormat.set_value(formats);
            this.tab_component.set_tabindex(3);
        };

        /**
         * @description 컴포넌트의 모든속성을 디스플레이한다
        */
        this.fn_makeCompoentsData = function()
        {
            if( this.div_search.form.cbo_components.index == -1 ) return;

            var targetobj = eval("this.opener."+this.div_search.form.cbo_components.value);

            this.ds_properties.clearData();
            this.ds_properties.set_enableevent(false);
            for(var name in targetobj)
            {
                var value = targetobj[name]+"";

                if( name[0] == "_" ) continue;
                if( value == "[object Object]" ) continue;
                if( value.substring(0, 8) == "function" ) continue;
                if( value.substring(0, 7) == "control" ) continue;

                if( this.gfn_isNull(value) )
                {
                    var nrow = this.ds_properties.addRow();
                    this.ds_properties.setColumn(nrow, "NAME", name);
                    this.ds_properties.setColumn(nrow, "VALUE", "");
                }
                else
                {
                    // 이벤트에 대한 처리
                    if( value.indexOf("[object") != -1 )
                    {
                        if( value.indexOf("EventListener") != -1 )
                        {
                            var eventhandler = targetobj.getEventHandler(name, 0);

                            if( !this.gfn_isNull(eventhandler) )
                            {
                                var nrow = this.ds_properties.addRow();
                                this.ds_properties.setColumn(nrow, "NAME",    name);
                                this.ds_properties.setColumn(nrow, "VALUE",   "function");
                                this.ds_properties.setColumn(nrow, "FUNCTION", eventhandler);
                                this.ds_properties.setColumn(nrow, "COLOR",    "red");
                            }
                        }
                    }
                    else
                    {
                        var nrow = this.ds_properties.addRow();
                        this.ds_properties.setColumn(nrow, "NAME",    name);
                        this.ds_properties.setColumn(nrow, "VALUE", value);
                    }
                }
            }
            this.ds_properties.set_enableevent(true);
            this.ds_properties.set_rowposition(0);
        };

        /**
         * @description 화면에서 사용되는 모든 변수를 찾아 데이터셋에 저장한다.
        */
        this.fn_saveVariableList = function(targetObj, fullpath)
        {
        	//trace("================ fnSaveVariableList targetObj : " + targetObj.name);

        	sObjType = targetObj +"";

            // 해당 OBJECT의 전역변수를 찾아낸다.
            this.ds_variable.set_enableevent(false);
            for(var name in targetObj)
            {
        		// 폼 변수는 fv로 Naming Rule 정의
        		var sVariName = name.substr(0,2).toUpperCase();
                if (sVariName == "FV")
                {
                    // 제외처리대상변수명
                    var value = targetObj[name]+"";
                    if( value.indexOf("[object") != -1 ) continue;
                    if( value.substring(0, 8) == "function" ) continue;
        			if( !targetObj.hasOwnProperty(name)) continue;

        			// div_work.form. 으로 나오는 걸 잘라낸다. // && (fullpath+"."+name).indexOf("div_work.form.") > -1
        			if( !this.gfn_isNull(fullpath))
        			{
        				var nRow = this.ds_variable.addRow();
        				var displayname = nexacro.replaceAll(fullpath+"."+name, "div_work.form.", "");
        				this.ds_variable.setColumn(nRow, "NAME",  displayname);
        				//this.ds_variable.setColumn(nRow, "NAME",  name);
        				this.ds_variable.setColumn(nRow, "VALUE", value);
        				this.ds_variable.setColumn(nRow, "TYPE",  "LOCAL");
        				this.ds_variable.setColumn(nRow, "LVL",   name.split(".").length);
        			}
                }
            }
        	this.ds_variable.set_enableevent(true);

            // 해당 폼의 하위 OBJECT에 대한 변수도 같이 찾아온다.
            var sObjType;
            var objList = targetObj.components;
            for(var i=0;i<objList.length;i++)
            {
                sObjType = objList[i]+"";

                // Div
                if( sObjType == "[object Div]" )
                {
                    if( this.gfn_isNull(fullpath) )
                        this.fn_saveVariableList(objList[i].form, objList[i].name+".form");
                    else
                        this.fn_saveVariableList(objList[i].form, fullpath+"."+objList[i].name+".form");
                }
                // Tab
                else if( sObjType == "[object Tab]" )
                {
                    var tabPageList = objList[i].tabpages;
                    for(var j=0;j<tabPageList.length;j++)
                    {
                        if( this.gfn_isNull(fullpath) )
                            this.fn_saveVariableList(tabPageList[j].form, objList[i].name+tabPageList[j].name+".form");
                        else
                            this.fn_saveVariableList(tabPageList[j].form, fullpath+"."+objList[i].name+tabPageList[j].name+".form");
                    }
                }
            }
        };

        /**
         * @description 글로벌 변수를 찾아 데이터셋에 저장한다.
        */
        this.fn_saveGlobalVariableList = function()
        {
        	var targetObj = this.objApp;

        	sObjType = targetObj +"";

            // 해당 OBJECT의 전역변수를 찾아낸다.
            this.ds_variable.set_enableevent(false);
            for(var name in targetObj)
            {
                // 글로벌 변수는 gv로 Naming Rule 정의
        		var sVariName = name.substr(0,2).toUpperCase();
                if( sVariName == "GV")
                {
                    // 제외처리대상변수명
                    var value = targetObj[name]+"";
                    if( value.indexOf("[object") != -1 ) continue;
                    if( value.substring(0, 8) == "function" ) continue;
        			if( !targetObj.hasOwnProperty(name)) continue;

        			// 글로벌 변수는 하나만이 존재하기 때문에..
        			if( this.ds_variable.findRow("NAME", name) == -1 )
        			{
        				var nRow = this.ds_variable.addRow();
        				this.ds_variable.setColumn(nRow, "NAME",  name);
        				this.ds_variable.setColumn(nRow, "VALUE", value);
        				this.ds_variable.setColumn(nRow, "TYPE",  "GLOBAL");
        				this.ds_variable.setColumn(nRow, "LVL",   0);
        			}
                }
            }
        	this.ds_variable.set_enableevent(true);
        };

        /**
         * @description 화면에서 사용되는 모든 변수를 보여준다.
        */
        this.fn_makeVariableList = function()
        {
            this.ds_variable.filter("TYPE == '"+this.tab_component.tabpage6.form.cbo_variable.value+"'");
            this.ds_variable.set_rowposition(0);
        };

        /**
         * @description 문장을 스크립트로 실행한다.
        */
        this.fn_execScript = function(obj,  e)
        {
            try
            {
        	    var result = eval(this.tab_component.tabpage7.form.txt_script.text);

        	    if( this.gfn_isNull(result) ) result = "";

        	    this.tab_component.tabpage7.form.txt_result.set_value("★★★ 성공 : "+result);
        	}
        	catch(ex)
        	{
        	    this.tab_component.tabpage7.form.txt_result.set_value("＠＠＠ 실패 : "+ex);
        	}
        };

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description 선택한 TAB에 대한 처리를 한다.
        */
        this.tab_component_onchanged = function(obj, e)
        {
        	var tabindex = this.tab_component.tabindex;

        	switch(tabindex)
        	{
        	    case 0: this.fn_makeDatasetGrid();           break;
        	    case 1: this.fn_makeDatasetXml();            break;
        	    case 2: this.fn_makeDatasetGridFormat();	 break;
        	    case 3: this.fn_makeGridFormats();           break;
        	    case 4: this.fn_makeCompoentsData();	     break;
        	    case 5: this.fn_makeVariableList();          break;
        	    default : break;
        	}
        };

        /**
         * @description 로컬 데이터셋의 내용을 보여준다.
        */
        this.cbo_dataset_onitemchanged = function(obj, e)
        {
            this.fv_currentCombo = obj.name;
            this.div_search.form.edt_local.set_value(obj.text);
        	this.div_search.form.edt_global.set_value("");
            this.tab_component.set_tabindex(0);
            this.tab_component_onchanged();
        };

        /**
         * @description 글로벌 데이터셋의 내용을 보여준다.
        */
        this.cbo_gDS_onitemchanged = function(obj, e)
        {
            this.fv_currentCombo = obj.name;
            this.div_search.form.edt_global.set_value(obj.value);
        	this.div_search.form.edt_local.set_value("");
            this.tab_component.set_tabindex(0);
            this.tab_component_onchanged();
        };

        /**
         * @description 컴포넌트의 모든 속성을 디스플레이한다.
        */
        this.cbo_components_onitemchanged = function(obj, e)
        {
            this.tab_component.set_tabindex(4);
            this.tab_component_onchanged();
        };

        /**
         * @description 변수의 형식을 선택한 타입으로 필터링한다.
        */
        this.tab_component_tabpage6_cbo_variable_onitemchanged = function(obj, e)
        {
            this.ds_variable.filter("TYPE == '"+this.tab_component.tabpage6.form.cbo_variable.value+"'");
            this.ds_variable.set_rowposition(0);
        };

        /**
         * @description 로컬 데이터셋 바로 찾기 기능
        */
        this.edt_local_onkeydown = function(obj, e)
        {
            if( e.keycode == 13 )
            {
        	    var nrow = this.ds_dataset.findRow("NAME", obj.value);
        	    if( nrow != -1 )
        	    {

        	        fv_currentCombo = "local";
                    this.div_search.form.cbo_dataset.set_index(nrow);
                    this.fn_makeDatasetGrid();
                    this.cbo_dataset_onitemchanged(this.cbo_dataset);
                }
        	}
        };

        /**
         * @description 글로벌 데이터셋 바로 찾기 기능
        */
        this.edt_global_onkeydown = function(obj, e)
        {
            if( e.keycode == 13 )
            {
        	    var nrow = this.ds_gDS.findRow("NAME", obj.value);
        	    if( nrow != -1 )
        	    {
        	        fv_currentCombo = "global";
                    this.div_search.form.cbo_gDS.set_index(nrow);
                    this.div_search.form.cbo_gDS_onitemchanged(this.div_search.form.cbo_gDS);
                    //this.fnMakeDatasetGrid();
        	    }
        	}
        };


        /**
         * @description 컴포넌트의 textvalue 값을 클립보드에 복사한다.
        */
        this.combo_onkeydown = function(obj,e)
        {
        	system.clearClipboard();
        	system.setClipboard("CF_TEXT", obj.text);
        };

        /**
         * @description 로컬 데이터셋 필터 초기화
        */
        this.btn_localFilter_onclick = function(obj,e)
        {
            var dataset = eval("this.opener."+ this.div_search.form.cbo_dataset.value);
            dataset.filter("");
        };
        /**
         * @description 글로벌 데이타셋 필터 초기화
        */
        this.btn_globalFilter_onclick = function(obj,e)
        {
        	var dataset = this.objApp[this.div_search.form.cbo_gDS.text];
            dataset.filter("");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.tab_component.addEventHandler("onchanged",this.tab_component_onchanged,this);
            this.tab_component.tabpage6.form.cbo_variable.addEventHandler("onitemchanged",this.tab_component_tabpage6_cbo_variable_onitemchanged,this);
            this.tab_component.tabpage7.form.btn_runScript.addEventHandler("onclick",this.fn_execScript,this);
            this.div_search.form.cbo_dataset.addEventHandler("onitemchanged",this.cbo_dataset_onitemchanged,this);
            this.div_search.form.cbo_dataset.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.div_search.form.cbo_gDS.addEventHandler("onitemchanged",this.cbo_gDS_onitemchanged,this);
            this.div_search.form.cbo_gDS.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.div_search.form.btn_localFilter.addEventHandler("onclick",this.btn_localFilter_onclick,this);
            this.div_search.form.btn_globalFilter.addEventHandler("onclick",this.btn_globalFilter_onclick,this);
            this.div_search.form.edt_local.addEventHandler("onkeydown",this.edt_local_onkeydown,this);
            this.div_search.form.edt_global.addEventHandler("onkeydown",this.edt_global_onkeydown,this);
            this.div_search.form.cbo_grid.addEventHandler("onitemchanged",this.fn_makeGridFormats,this);
            this.div_search.form.cbo_grid.addEventHandler("onkeydown",this.combo_onkeydown,this);
            this.div_search.form.cbo_components.addEventHandler("onitemchanged",this.cbo_components_onitemchanged,this);
            this.div_search.form.cbo_components.addEventHandler("onkeydown",this.combo_onkeydown,this);
        };
        this.loadIncludeScript("Comm_Debug.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
