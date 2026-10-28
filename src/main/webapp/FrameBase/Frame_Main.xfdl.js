(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Frame_Main");
            this.set_titletext("New Form");
            this.set_scrolltype("vertical");
            this.set_scrollbartype("none none");
            this.set_background("#f3f5f6");
            if (Form == this.constructor)
            {
                this._setFormPosition(1043,723);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dev", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "DATE","size" : "256"}]},"Rows" : [{"Column1" : "Basic Course","Column2" : "20250107","Column0" : "theme://images/icon_Close.png"},{"Column1" : "Component Usage Course","Column2" : "20250108","Column0" : "theme://images/icon_Ing.png"},{"Column1" : "Practical Course","Column2" : "20250109","Column0" : "theme://images/icon_Close.png"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_publ", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "DATE","size" : "256"}]},"Rows" : [{"Column1" : "Basic Course","Column2" : "20250114","Column0" : "theme://images/icon_Close.png"},{"Column1" : "Advanced Course","Column2" : "20250115","Column0" : "theme://images/icon_Ing.png"},{"Column1" : "Advanced Course","Column2" : "20250116","Column0" : "theme://images/icon_Close.png"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divAll","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_AllBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","15","0","580","50",null,null,null,null,null,null,this.divAll.form);
            obj.set_taborder("1");
            obj.set_text("GLOBAL IT LEADING COMPANY");
            obj.set_cssclass("sta_WF_MainTitle");
            this.divAll.addChild(obj.name, obj);

            obj = new Static("Static01","15","50",null,"30","130",null,null,null,null,null,this.divAll.form);
            obj.set_taborder("0");
            obj.set_text("Korea\'s leading software company providing the most optimized business UX and AI convergence services     ");
            obj.set_cssclass("sta_WF_MainDes");
            obj.set_fittocontents("height");
            this.divAll.addChild(obj.name, obj);

            obj = new Div("divMarket","609","130","160","92",null,null,null,null,null,null,this.divAll.form);
            obj.set_taborder("2");
            obj.set_text("Div02");
            obj.set_layoutorder("3");
            obj.set_formscrollbartype("none none");
            this.divAll.addChild(obj.name, obj);

            obj = new Static("Static09_00","92","10","17","40",null,null,null,null,null,null,this.divAll.form.divMarket.form);
            obj.set_taborder("0");
            obj.set_text("st");
            obj.set_cssclass("sta_WF_MainTitleSub");
            obj.set_color("#007bff");
            this.divAll.form.divMarket.addChild(obj.name, obj);

            obj = new Static("Static10_00","0","50","160","40",null,null,null,null,null,null,this.divAll.form.divMarket.form);
            obj.set_taborder("1");
            obj.set_text("In Market Share");
            obj.set_cssclass("sta_WF_Share");
            this.divAll.form.divMarket.addChild(obj.name, obj);

            obj = new Static("Static08_00","70","0","20","50",null,null,null,null,null,null,this.divAll.form.divMarket.form);
            obj.set_taborder("2");
            obj.set_text("1");
            obj.set_cssclass("sta_WF_ShareTxt");
            this.divAll.form.divMarket.addChild(obj.name, obj);

            obj = new Div("divBuild","379","130","160","92",null,null,null,null,null,null,this.divAll.form);
            obj.set_taborder("3");
            obj.set_text("Div01");
            obj.set_layoutorder("2");
            obj.set_formscrolltype("none");
            this.divAll.addChild(obj.name, obj);

            obj = new Static("staBuild","30","0","100","50",null,null,null,null,null,null,this.divAll.form.divBuild.form);
            obj.set_taborder("0");
            obj.set_text("7,000");
            obj.set_cssclass("sta_WF_BuildRefTxt");
            this.divAll.form.divBuild.addChild(obj.name, obj);

            obj = new Static("Static06_00","130","0","20","50",null,null,null,null,null,null,this.divAll.form.divBuild.form);
            obj.set_taborder("1");
            obj.set_text("+");
            obj.set_color("#28a745");
            obj.set_cssclass("sta_WF_MainTitleSub");
            this.divAll.form.divBuild.addChild(obj.name, obj);

            obj = new Static("Static07_00","0","50","160","40",null,null,null,null,null,null,this.divAll.form.divBuild.form);
            obj.set_taborder("2");
            obj.set_text("Build Reference");
            obj.set_cssclass("sta_WF_BuildRef");
            this.divAll.form.divBuild.addChild(obj.name, obj);

            obj = new Div("divKey","170","130","139","92",null,null,null,null,null,null,this.divAll.form);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_layoutorder("1");
            this.divAll.addChild(obj.name, obj);

            obj = new Static("staKey","15","0","100","50",null,null,null,null,null,null,this.divAll.form.divKey.form);
            obj.set_taborder("0");
            obj.set_text("2,600");
            obj.set_cssclass("sta_WF_KeyClientTxt");
            this.divAll.form.divKey.addChild(obj.name, obj);

            obj = new Static("Static03_00","115","0","20","50",null,null,null,null,null,null,this.divAll.form.divKey.form);
            obj.set_taborder("1");
            obj.set_text("+");
            obj.set_cssclass("sta_WF_MainTitleSub");
            obj.set_color("#17a2b8");
            this.divAll.form.divKey.addChild(obj.name, obj);

            obj = new Static("Static04_00","0","50","130","40",null,null,null,null,null,null,this.divAll.form.divKey.form);
            obj.set_taborder("2");
            obj.set_text("Key Clients");
            obj.set_cssclass("sta_WF_KeyClient");
            this.divAll.form.divKey.addChild(obj.name, obj);

            obj = new Panel("panAni","15","Static01:20",null,"112","15",null,null,null,null,null,this.divAll.form);
            obj.set_taborder("5");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_horizontalgap("50");
            obj.set_flexmainaxisalign("center");
            obj.set_verticalgap("10");
            obj.set_fittocontents("height");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"divKey\"/><PanelItem id=\"PanelItem01\" componentid=\"divBuild\"/><PanelItem id=\"PanelItem02\" componentid=\"divMarket\"/></Contents>");
            this.divAll.addChild(obj.name, obj);

            obj = new Static("Static02","15","panAni:15","305","30",null,null,null,null,null,null,this.divAll.form);
            obj.set_taborder("6");
            obj.set_text("| TOBESOFT PRODUCT");
            obj.set_cssclass("sta_WF_MainTitleSub");
            this.divAll.addChild(obj.name, obj);

            obj = new Div("divProduct","15","Static02:10",null,"130","15",null,null,null,null,null,this.divAll.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_formscrolltype("both");
            this.divAll.addChild(obj.name, obj);

            obj = new Static("Static00_05","13","310","138","30",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("0");
            obj.set_text("Pro-Series");
            obj.set_font("bold 24px/normal \"Segoe UI\",\"Malgun Gothic\"");
            obj.set_textAlign("center");
            obj.set_letterSpacing("-2px");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Static("Static01_05","24","360","138","50",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("1");
            obj.set_text("development environment provisioning service");
            obj.set_textAlign("center");
            obj.set_wordWrap("english");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Panel("panPro","3","10","150","110",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("2");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_NoticeBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_05\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_05\"/></Contents>");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Static("Static00_04","181","310","138","30",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("3");
            obj.set_text("X-AGENT");
            obj.set_font("bold 24px/normal \"Segoe UI\",\"Malgun Gothic\"");
            obj.set_textAlign("center");
            obj.set_letterSpacing("-2px");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Static("Static01_04","192","360","138","50",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("4");
            obj.set_text("External module integration solution");
            obj.set_textAlign("center");
            obj.set_wordWrap("english");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Panel("panAgent","171","10","150","110",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_NoticeBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_04\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_04\"/></Contents>");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Static("Static00_03","349","310","138","30",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("6");
            obj.set_text("X-PUSH");
            obj.set_font("bold 24px/normal \"Segoe UI\",\"Malgun Gothic\"");
            obj.set_textAlign("center");
            obj.set_letterSpacing("-2px");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Static("Static01_03","360","360","138","50",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("7");
            obj.set_text("Real-time message transmission push solution");
            obj.set_textAlign("center");
            obj.set_wordWrap("english");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Panel("panPush","339","10","150","110",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("8");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_NoticeBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_03\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_03\"/></Contents>");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Static("Static00_02","517","310","138","30",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("9");
            obj.set_text("TobeDevOps");
            obj.set_font("bold 24px/normal \"Segoe UI\",\"Malgun Gothic\"");
            obj.set_textAlign("center");
            obj.set_letterSpacing("-2px");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Static("Static01_02","528","360","138","50",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("10");
            obj.set_text("Beyond DevOps Engineering Solution");
            obj.set_textAlign("center");
            obj.set_wordWrap("english");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Panel("panDev","507","10","150","110",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("11");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_NoticeBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_02\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_02\"/></Contents>");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Static("Static00_01","685","310","138","30",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("12");
            obj.set_text("NEXACRO");
            obj.set_font("bold 24px/normal \"Segoe UI\",\"Malgun Gothic\"");
            obj.set_textAlign("center");
            obj.set_letterSpacing("-2px");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Static("Static01_01","696","360","138","50",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("13");
            obj.set_text("rapid & optimal \r\nUI development platform");
            obj.set_textAlign("center");
            obj.set_wordWrap("english");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Panel("panNexa","675","10","150","110",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("14");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_NoticeBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_01\"/></Contents>");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Static("Static00_00","853","310","138","30",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("15");
            obj.set_text("NexaAssist");
            obj.set_font("bold 24px/normal \"Segoe UI\",\"Malgun Gothic\"");
            obj.set_textAlign("center");
            obj.set_letterSpacing("-2px");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Static("Static01_00","864","360","138","50",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("16");
            obj.set_text("AI-based code recommendation search service");
            obj.set_textAlign("center");
            obj.set_wordWrap("english");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Panel("panAssist","843","10","150","110",null,null,null,null,null,null,this.divAll.form.divProduct.form);
            obj.set_taborder("17");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_NoticeBg");
            obj.set_flexcrossaxisalign("center");
            obj.set_flexmainaxisalign("center");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static00_00\"/><PanelItem id=\"PanelItem01\" componentid=\"Static01_00\"/></Contents>");
            this.divAll.form.divProduct.addChild(obj.name, obj);

            obj = new Static("Static03","15","divProduct:15","305","30",null,null,null,null,null,null,this.divAll.form);
            obj.set_taborder("8");
            obj.set_text("| Nexacro Training Course");
            obj.set_cssclass("sta_WF_MainTitleSub");
            this.divAll.addChild(obj.name, obj);

            obj = new Button("Button00","30","768","150","40",null,null,null,null,null,null,this.divAll.form);
            obj.set_taborder("9");
            obj.set_text("TOBESOFT Homepage");
            obj.set_cssclass("btn_WF_FillGray");
            this.divAll.addChild(obj.name, obj);

            obj = new Button("Button00_00","163","0","150","40",null,null,null,null,null,null,this.divAll.form);
            obj.set_taborder("10");
            obj.set_text("Support Center");
            obj.set_cssclass("btn_WF_FillGray");
            this.divAll.addChild(obj.name, obj);

            obj = new Button("Button00_01","321","0","150","40",null,null,null,null,null,null,this.divAll.form);
            obj.set_taborder("11");
            obj.set_text("Nexacro Community");
            obj.set_cssclass("btn_WF_FillGray");
            this.divAll.addChild(obj.name, obj);

            obj = new Button("Button00_02","479","0","150","40",null,null,null,null,null,null,this.divAll.form);
            obj.set_taborder("12");
            obj.set_text("YouTube Education");
            obj.set_cssclass("btn_WF_FillGray");
            this.divAll.addChild(obj.name, obj);

            obj = new Button("Button00_03","637","0","150","40",null,null,null,null,null,null,this.divAll.form);
            obj.set_taborder("13");
            obj.set_text("Nexacro Manual");
            obj.set_cssclass("btn_WF_FillGray");
            this.divAll.addChild(obj.name, obj);

            obj = new Button("Button00_04","795","0","150","40",null,null,null,null,null,null,this.divAll.form);
            obj.set_taborder("14");
            obj.set_text("Nexacro Deom Site");
            obj.set_cssclass("btn_WF_FillGray");
            this.divAll.addChild(obj.name, obj);

            obj = new Div("divTraining","15","Static03:2",null,"180","15",null,null,null,null,null,this.divAll.form);
            obj.set_taborder("17");
            obj.set_text("Div00");
            obj.set_fittocontents("height");
            obj.set_formscrolltype("both");
            this.divAll.addChild(obj.name, obj);

            obj = new Static("Static00","513","16","172","35",null,null,null,null,null,null,this.divAll.form.divTraining.form);
            obj.set_taborder("1");
            obj.set_text("Publishing");
            obj.set_cssclass("sta_WF_MainTitleSub");
            this.divAll.form.divTraining.addChild(obj.name, obj);

            obj = new Static("Static01","20","16","172","35",null,null,null,null,null,null,this.divAll.form.divTraining.form);
            obj.set_taborder("1");
            obj.set_text("Development");
            obj.set_cssclass("sta_WF_MainTitleSub");
            this.divAll.form.divTraining.addChild(obj.name, obj);

            obj = new Grid("Grid00","10","35","95.57114620213298%","125",null,null,null,null,null,null,this.divAll.form.divTraining.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_WF_Main");
            obj.set_binddataset("ds_dev");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"190\"/><Column size=\"110\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"cell_WF_Right\"/></Band></Format></Formats>");
            this.divAll.form.divTraining.addChild(obj.name, obj);

            obj = new Grid("Grid01","10","35","95.57114620213298%","125",null,null,null,null,null,null,this.divAll.form.divTraining.form);
            obj.set_taborder("3");
            obj.set_cssclass("grd_WF_Main");
            obj.set_binddataset("ds_publ");
            obj.set_layoutorder("1");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"190\"/><Column size=\"110\"/></Columns><Rows><Row size=\"40\"/></Rows><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"imagecontrol\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" cssclass=\"cell_WF_Right\"/></Band></Format></Formats>");
            this.divAll.form.divTraining.addChild(obj.name, obj);

            obj = new Panel("panDevel","10","10","49%","160",null,null,"360",null,null,null,this.divAll.form.divTraining.form);
            obj.set_taborder("4");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_NoticeBg");
            obj.set_spacing("0px 0px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Static01\"/><PanelItem id=\"PanelItem01\" componentid=\"Grid00\"/></Contents>");
            this.divAll.form.divTraining.addChild(obj.name, obj);

            obj = new Panel("panPubl","485","10","48%","160",null,null,"360",null,null,null,this.divAll.form.divTraining.form);
            obj.set_taborder("5");
            obj.set_type("vertical");
            obj.set_cssclass("pan_WF_NoticeBg");
            obj.set_spacing("0px 0px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Grid01\"/><PanelItem id=\"PanelItem01\" componentid=\"Static00\"/></Contents>");
            this.divAll.form.divTraining.addChild(obj.name, obj);

            obj = new Static("Static04","15","divTraining:15","213","30",null,null,null,null,null,null,this.divAll.form);
            obj.set_taborder("15");
            obj.set_text("| Family Site");
            obj.set_cssclass("sta_WF_MainTitleSub");
            this.divAll.addChild(obj.name, obj);

            obj = new Panel("panSite","15","Static04:10",null,"40","15",null,null,null,null,null,this.divAll.form);
            obj.set_taborder("16");
            obj.set_flexwrap("wrap");
            obj.set_horizontalgap("15");
            obj.set_verticalgap("8");
            obj.set_fittocontents("height");
            obj.set_spacing("0px 10px 0px 10px");
            obj._setContents("<Contents><PanelItem id=\"PanelItem00\" componentid=\"Button00\"/><PanelItem id=\"PanelItem01\" componentid=\"Button00_00\"/><PanelItem id=\"PanelItem02\" componentid=\"Button00_01\"/><PanelItem id=\"PanelItem03\" componentid=\"Button00_02\"/><PanelItem id=\"PanelItem04\" componentid=\"Button00_03\"/><PanelItem id=\"PanelItem05\" componentid=\"Button00_04\"/></Contents>");
            this.divAll.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divAll.form.divMarket.form
            obj = new Layout("default","",0,0,this.divAll.form.divMarket.form,function(p){});
            this.divAll.form.divMarket.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAll.form.divBuild.form
            obj = new Layout("default","",0,0,this.divAll.form.divBuild.form,function(p){});
            this.divAll.form.divBuild.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAll.form.divKey.form
            obj = new Layout("default","",0,0,this.divAll.form.divKey.form,function(p){});
            this.divAll.form.divKey.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAll.form.divProduct.form
            obj = new Layout("default","",0,0,this.divAll.form.divProduct.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_horizontalgap("18");
            obj.set_verticalgap("8");
            obj.set_spacing("0px 8px 0px 8px");
            this.divAll.form.divProduct.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAll.form.divTraining.form
            obj = new Layout("default","",0,0,this.divAll.form.divTraining.form,function(p){});
            obj.set_type("horizontal");
            obj.set_flexwrap("wrap");
            obj.set_flexmainaxisalign("start");
            obj.set_flexcrossaxiswrapalign("center");
            obj.set_horizontalgap("28");
            obj.set_spacing("0px 10px 0px 10px");
            obj.set_verticalgap("10");
            this.divAll.form.divTraining.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAll.form
            obj = new Layout("default","",0,0,this.divAll.form,function(p){});
            obj.set_flexwrap("wrap");
            this.divAll.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1043,723,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame_Main.xfdl", function() {

        this.objAni = "";

        this.form_onload = function(obj,e)
        {
        	this.objAni = new nexacro.Animation("Ani00", this);
        	this.addChild(this.objAni.name, this.objAni);

        	this.objAni.easing = "linear";
        	this.objAni.duration = "1000";

            // 초기 값과 최종 값을 설정
            this.objAni.addTarget("AniItem01", this.divAll.form.divKey.form.staKey, "text:2600");
        	this.objAni.addTarget("AniItem02", this.divAll.form.divBuild.form.staBuild, "text:7000");

            // Animation 실행
            this.objAni.play();

        	this.form_onsize();
        };

        this.form_onsize = function(obj,e)
        {
        	if(this.width < 1040){
        		this.divAll.right = 0;
        		this.divAll.bottom = 0;
        		this.divAll.width = null;
        		this.divAll.height = null;
        	}
        	else{
        		this.divAll.right = null;
        		this.divAll.bottom = null;
        		this.divAll.width = 1040;
        		this.divAll.height = 723;
        	}

        	var nLeft = (this.width / 2) - (this.divAll.getOffsetWidth() / 2);
        	var nTop = (this.height / 2) - (this.divAll.getOffsetHeight() / 2);

        	this.divAll.left = nLeft;
        	this.resetScroll();
        };


        this.form_onactivate = function(obj,e)
        {
        trace("form_onactivate ===================================");
            this.objAni.play();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onactivate",this.form_onactivate,this);
            this.divAll.form.Static04.addEventHandler("onclick",this.divAll_Static04_onclick,this);
        };
        this.loadIncludeScript("Frame_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
