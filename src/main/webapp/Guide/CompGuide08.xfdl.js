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
            this.set_titletext("mnu,pmnu,fdl,ful");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,890);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_mnu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "STRING","size" : "256"},{"id" : "caption","type" : "STRING","size" : "256"},{"id" : "level","type" : "STRING","size" : "256"},{"id" : "enable","type" : "STRING","size" : "256"},{"id" : "check","type" : "STRING","size" : "256"},{"id" : "hotkey","type" : "STRING","size" : "256"},{"id" : "icon","type" : "STRING","size" : "256"}]},"Rows" : [{"id" : "1","caption" : "File","level" : "0","enable" : "１"},{"id" : "2","caption" : "New","level" : "1","enable" : "０","check" : "1"},{"id" : "3","caption" : "Open","level" : "1","check" : "","enable" : "１"},{"id" : "4","caption" : "Project","level" : "2","enable" : "０"},{"id" : "5","caption" : "File","level" : "2","enable" : "１"},{"id" : "6","caption" : "Close","level" : "1","enable" : "０"},{"id" : "7","caption" : "Save","level" : "1","enable" : "１"},{"id" : "8","caption" : "Edit","level" : "0","enable" : "０"},{"id" : "9","caption" : "Undo","level" : "1","enable" : "１"},{"id" : "10","caption" : "Redo","level" : "1","enable" : ""},{"id" : "11","caption" : "Cut","level" : "1","hotkey" : "Ctrl + X","icon" : "theme://images/mnu_WF_DataIconCut.png","enable" : ""},{"id" : "12","caption" : "Paste","level" : "1","icon" : "theme://images/mnu_WF_DatasIconPaste.png","enable" : "","hotkey" : "Ctrl + V"},{"id" : "13","caption" : "View","level" : "0","enable" : "","icon" : ""},{"id" : "14","caption" : "Toolbars","level" : "1","enable" : ""},{"id" : "15","caption" : "Standard","level" : "2","enable" : ""},{"id" : "16","caption" : "Boolmark","level" : "2","enable" : ""},{"id" : "17","caption" : "Algin","level" : "2","enable" : ""},{"id" : "18","caption" : "Design","level" : "0","enable" : ""},{"id" : "19","caption" : "Align","level" : "1","enable" : ""},{"id" : "20","caption" : "Space","level" : "1","enable" : ""},{"id" : "21","caption" : "Size","level" : "1","enable" : ""},{"id" : "22","caption" : "Same Width","level" : "2","enable" : ""},{"id" : "23","caption" : "Same Height","level" : "2","enable" : ""},{"id" : "24","caption" : "Position","level" : "1","enable" : ""},{"id" : "25","caption" : "Arrange","level" : "1","enable" : ""}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","0","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Component Guide");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","50","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Menu");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","Static01:0","980","135",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Menu("Menu00","20","Static00:10","685","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_mnu");
            obj.set_captioncolumn("caption");
            obj.set_checkboxcolumn("check");
            obj.set_idcolumn("id");
            obj.set_levelcolumn("level");
            obj.set_hotkeycolumn("hotkey");
            obj.set_iconcolumn("icon");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","Div00:20","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("PopupMenu");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","Static02:0","980","195",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new PopupMenu("pmnu","179","25","110","130",null,null,null,null,null,null,this.Div01.form);
            obj.set_innerdataset("ds_mnu");
            obj.set_captioncolumn("caption");
            obj.set_checkboxcolumn("check");
            obj.set_hotkeycolumn("hotkey");
            obj.set_iconcolumn("icon");
            obj.set_idcolumn("id");
            obj.set_levelcolumn("level");
            obj.set_enablecolumn("enable");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnShow","20","Static00:10","120","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("PopupMenu");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","20","Div01:20","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("FileUpload");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","20","Static03:0","980","185",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static01","500","10","440","30",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("1");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div02.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload01","497","39","375","100",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_enable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new FileUpload("FileUpload00","22","39","375","100",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","20","Div02:20","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("FileDownload");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","20","Static04:0","980","105",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","500","10","440","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload02","500","43","250","28",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("FileDownload");
            obj.set_enable("false");
            this.Div03.addChild(obj.name, obj);

            obj = new FileDownload("FileDownload00","22","43","250","28",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("3");
            obj.set_text("FileDownload");
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
            obj = new Layout("default","",1020,890,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompGuide08.xfdl", function() {
        this.btnShow_onclick = function(obj,e)
        {
        	this.Div01.form.pmnu.trackPopupByComponent(obj, 0, 26);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.Div01.form.btnShow.addEventHandler("onclick",this.btnShow_onclick,this);
        };
        this.loadIncludeScript("CompGuide08.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
