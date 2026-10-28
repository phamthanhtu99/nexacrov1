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
            this.set_titletext("cal, dtrp, pdtrp");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,1280);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00_00","20","0","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Component Guide");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","20","50","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Calendar");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","85","980","370",null,null,null,null,null,null,this);
            obj.set_taborder("4");
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
            obj.set_text("[readonly]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","680","10","160","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("class = cal_WF_Essential");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","240","54","150","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar02","460","54","150","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar03","680","54","150","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_cssclass("cal_WF_Essential");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","18","54","150","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","14","Calendar00:20","252","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("※ Appearance > type = monthonly");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar04","14","Static04:0","200","220",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_type("monthonly");
            obj.set_cssclass("cal_WF_Month");
            obj.set_usetrailingday("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","334","100","204","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("※ Appearance > type = spin");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar05","334","130","150","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_type("spin");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","612","100","280","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("※ Appearance > datepickerchangetype = button");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar06","612","130","200","220",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_type("monthonly");
            obj.set_cssclass("cal_WF_Month");
            obj.set_datepickerchangetype("button");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","20","Div00:20","557","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("DateRangePicker / PopupDateRangePicker");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","Static01_00_00:10","980","740",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","522","10","280","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("※ Appearance >displaytype = time");
            obj.set_cssclass("sta_WF_GDes");
            this.Div01.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker00","18","54","400","300",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            this.Div01.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker01","522","50","400","300",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_displaytype("time");
            this.Div01.addChild(obj.name, obj);

            obj = new Button("btnPdtrp","522","376","161","26",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("4");
            obj.set_text("PopupDateRangePicker");
            this.Div01.addChild(obj.name, obj);

            obj = new PopupDateRangePicker("PopupDateRangePicker00","522","414","400","300",null,null,null,null,null,null,this.Div01.form);
            obj.set_displaytype("datetime");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static02","18","DateRangePicker00:20","435","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("6");
            obj.set_text("※ Appearance >displaytype = datetime");
            obj.set_cssclass("sta_WF_GDes");
            this.Div01.addChild(obj.name, obj);

            obj = new DateRangePicker("DateRangePicker03","18","Static02:10","400","300",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("5");
            obj.set_displaytype("datetime");
            this.Div01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div01.form
            obj = new Layout("default","",0,0,this.Div01.form,function(p){});
            this.Div01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,1280,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompGuide05.xfdl", function() {

        this.btnPdtrp_onclick = function(obj,e)
        {
        	this.Div01.form.PopupDateRangePicker00.trackPopupByComponent("start", obj, 0, obj.height);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div01.form.btnPdtrp.addEventHandler("onclick",this.btnPdtrp_onclick,this);
        };
        this.loadIncludeScript("CompGuide05.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
