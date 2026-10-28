(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TempGuide01");
            this.set_titletext("CompGuide");
            if (Form == this.constructor)
            {
                this._setFormPosition(1160,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static03_00_01","199.00","29","941","201",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","199.00","0","941","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Style");
            obj.set_cssclass("sta_WF_GTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Component");
            obj.set_cssclass("sta_WF_GTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","29","200","201",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Static");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00","0","295","200","275",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00","199.00","295","941","275",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GArea");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","1073.00","52","5","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","1081.00","60","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("36");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","440.00","316","50","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Add");
            obj.set_cssclass("btn_WF_CRUD");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","940.00","50","130","36",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("DetailLabel");
            obj.set_cssclass("sta_WF_DetailLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","940.00","142","130","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("DetailArea");
            obj.set_cssclass("sta_WF_DetailArea");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","440.00","402","28","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_Find");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","440.00","50","72","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("Title");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_00","440.00","142","64","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("Label");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("Static09_01","440.00","96","72","35",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("subtitle");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Static("Static10","220","50","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("class = <b v=\'true\'>sta_WF_Title</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static11","440.00","204","181","15",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("H 15");
            obj.set_cssclass("sta_WF_GSize");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_04","525.00","50","5","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02","533.00","54","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00","220.00","96","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("class = <b v=\'true\'>sta_WF_SubTitle</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_01","220.00","142","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("class = <b v=\'true\'>sta_WF_Label</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_02","220.00","198","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("class = <b v=\'true\'>sta_WF_GSize</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_04_00","525.00","96","5","35",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02_00","533.00","104","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("35");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02_00_00","533.00","146","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_04_00_00","525.00","142","5","26",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_03","680.00","50","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("class = <b v=\'true\'>sta_WF_DetailLabel</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_00_00","680.00","142","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("class = <b v=\'true\'>sta_WF_DetailArea</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_05","940.00","91","130","9",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03","994","95","22","18",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("130");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_01_00","199.00","229","941","67",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_01","0","229","200","67",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Edit / MaskEdit");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","440.00","250","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("edt_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","940.00","250","160","26",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("msk_WF_Essential");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_02_00","220.00","250","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("class = <b v=\'true\'>edt_WF_Essential</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_02_00_00","680.00","250","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("class = <b v=\'true\'>msk_WF_Essential</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_02_00_01","220.00","316","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("class = <b v=\'true\'>btn_WF_CRUD</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_02_00_01_00","220.00","402","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("class = <b v=\'true\'>btn_WF_Find</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02_01","498.00","320","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_04_01","493.00","316","5","26",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02_01_00","610.00","254","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_04_01_00","602.00","250","5","26",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_04_01_00_00","471.00","402","5","26",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02_01_00_00","476.00","405","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_06","1073.00","142","5","36",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_04","1086.00","148","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_text("36");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00","446.00","439","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_05_00","440.00","433","26","9",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static02_00_00","0","569","200","67",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("Div");
            obj.set_cssclass("sta_WF_GLabel");
            this.addChild(obj.name, obj);

            obj = new Static("Static03_00_02","199.00","569","941","67",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_GArea");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_02_00_01_00_00","220.00","590","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("class = <b v=\'true\'>div_WF_Search</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","440","590","197","30",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","780.00","326","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("Button02_00","810.00","326","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","440.00","478","75","26",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_text("ADD");
            obj.set_cssclass("btn_WF_AddPhoto");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_04_01_00_00_00","522.00","478","5","26",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02_01_00_00_00","531.00","482","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_text("26");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00_00","470.00","509","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("75");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_05_00_00","440.00","507","75","9",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_02_00_01_00_01","220.00","478","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("class = <b v=\'true\'>btn_WF_AddPhoto</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_02_00_01_00_02","810.00","369","200","26",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("class = <b v=\'true\'>btn_WF_Delete</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static10_02_00_01_00_03","675.00","369","119","26",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("class = <b v=\'true\'>btn_WF_Add</b>");
            obj.set_usedecorate("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00_01","785.00","360","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("25");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_05_00_01","780.00","355","25","9",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_04_01_00_00_01","770.00","326","5","25",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_GLineV");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_02_01_00_00_01","753.00","331","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_text("25");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_05_00_00_00","440.00","345","50","9",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00_02","439.00","354","182","18",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_text("width는 fittocontents 사용");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_05_00_01_00","804.00","325","5","9",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00_01_00","802.00","310","15","18",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_text("5");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static07_03_00_02_00","440.00","174","182","18",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_text("width는 fittocontents 사용");
            obj.set_cssclass("sta_WF_GTxt");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_05_00_00_00_00","440.00","167","64","9",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_GLineH");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1160,650,this,function(p){});
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
        this.loadIncludeScript("Template_CompGuide.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
