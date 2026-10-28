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
            this.set_titletext("pgb,grb,img,div");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","20","0","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Component Guide");
            obj.set_cssclass("sta_WF_GuideTitle1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","20","50","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("ProgressBar");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","Static01:0","980","205",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","500","10","440","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("※ Appearance > smooth = true / class = pgb_WF_Image");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new ProgressBar("Pgb01","20","50","366","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("50%");
            obj.set_smooth("true");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnColor","Pgb01:5","50","80","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("Color");
            this.Div00.addChild(obj.name, obj);

            obj = new ProgressBar("Pgb02","500","50","366","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("50%");
            obj.set_smooth("true");
            obj.set_cssclass("pgb_WF_Image");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnImg","Pgb02:5","50","80","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("Image");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","Pgb01:30","433","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("※ Appearance > smooth = true / class = pgb_WF_Gradient");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new ProgressBar("Pgb03","20","Static02:10","366","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("50%");
            obj.set_smooth("true");
            obj.set_cssclass("pgb_WF_Gradient");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnGra","391","146","80","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("Gradient");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","500","106","425","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("※ Appearance > smooth = false");
            obj.set_cssclass("sta_WF_GDes");
            this.Div00.addChild(obj.name, obj);

            obj = new ProgressBar("Pgb04","500","146","366","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("50%");
            obj.set_min("0");
            obj.set_max("100");
            obj.set_pos("50");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btnBlock","870","146","80","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("Block");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","20","Div00:20","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("GroupBox");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div01","20","Static02:0","980","165",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static01","500","10","440","30",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("1");
            obj.set_text("[disabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div01.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox01","500","50","271","91",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("2");
            obj.set_text("GroupBox00");
            obj.set_enable("false");
            this.Div01.addChild(obj.name, obj);

            obj = new GroupBox("GroupBox00","20","Static00:10","271","91",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("3");
            obj.set_text("GroupBox00");
            this.Div01.addChild(obj.name, obj);

            obj = new Static("Static03","20","Div01:20","97","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("ImageViewer");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div02","20","Static03:0","980","165",null,null,null,null,null,null,this);
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

            obj = new ImageViewer("ImageViewer01","500","50","271","91",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("2");
            obj.set_text("ImageViewer00");
            obj.set_enable("false");
            this.Div02.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","20","50","271","91",null,null,null,null,null,null,this.Div02.form);
            obj.set_taborder("3");
            obj.set_text("ImageViewer00");
            this.Div02.addChild(obj.name, obj);

            obj = new Static("Static04","20","Div02:20","137","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Div / PopupDiv");
            obj.set_cssclass("sta_WF_GuideTitle2");
            this.addChild(obj.name, obj);

            obj = new Div("Div03","20","Static04:0","980","165",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Area");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","20","10","160","30",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("0");
            obj.set_text("[enabled]");
            obj.set_cssclass("sta_WF_GStatus");
            this.Div03.addChild(obj.name, obj);

            obj = new Div("Div00","20","50","271","91",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.Div03.addChild(obj.name, obj);

            obj = new Static("Static01","351","50","420","91",null,null,null,null,null,null,this.Div03.form);
            obj.set_taborder("2");
            obj.set_text("※ Div/PopupDiv 의 일반적인 사용은 Form 을 로드해서 사용하거나\r\n컴포넌트를 직접 정렬하여 사용하는 경우가 대부분이다.\r\n공통 디자인은 설정하지 않으며,\r\n디자인 요소가 필요한 경우에는 Class 로 설정해서 사용한다.");
            obj.set_cssclass("sta_WF_GDes");
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

            //-- Default Layout : this.Div03.form.Div00
            obj = new Layout("default","",0,0,this.Div03.form.Div00.form,function(p){});
            this.Div03.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div03.form
            obj = new Layout("default","",0,0,this.Div03.form,function(p){});
            this.Div03.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1020,970,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CompGuide07.xfdl", function() {

        this.btnColor_onclick = function(obj,e)
        {
        	this.Div00.form.Pgb01.pos = 0;
        	this.setTimer(0,10);
        };

        this.btnImg_onclick = function(obj,e)
        {
        	this.Div00.form.Pgb02.pos = 0;
        	this.setTimer(1,10);
        };

        this.btnGra_onclick = function(obj,e)
        {
        	this.Div00.form.Pgb03.pos = 0;
        	this.setTimer(2,10);
        };

        this.btnBlock_onclick = function(obj,e)
        {
        	this.Div00.form.Pgb04.pos = 0;
        	this.setTimer(3,10);
        };



        this.Form_ontimer = function(obj,e)
        {
        	if (e.timerid == 0 ){
        		if (this.Div00.form.Pgb01.pos == 100 ){
        			this.killTimer(0);
        		}
        		this.Div00.form.Pgb01.stepIt();
        	}
        	else if (e.timerid == 1 ){
        		if (this.Div00.form.Pgb02.pos == 100 ){
        			this.killTimer(1);
        		}
        		this.Div00.form.Pgb02.stepIt();
        	}
            else if (e.timerid == 2 ){
        		if (this.Div00.form.Pgb03.pos == 100 ){
        			this.killTimer(2);
        		}
        		this.Div00.form.Pgb03.stepIt();
        	}
            else if (e.timerid == 3 ){
        		if (this.Div00.form.Pgb04.pos == 100 ){
        			this.killTimer(3);
        		}
        		this.Div00.form.Pgb04.stepIt();
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("ontimer",this.Form_ontimer,this);
            this.Div00.form.btnColor.addEventHandler("onclick",this.btnColor_onclick,this);
            this.Div00.form.btnImg.addEventHandler("onclick",this.btnImg_onclick,this);
            this.Div00.form.btnGra.addEventHandler("onclick",this.btnGra_onclick,this);
            this.Div00.form.btnBlock.addEventHandler("onclick",this.btnBlock_onclick,this);
            this.Div03.form.Static01.addEventHandler("onclick",this.Static05_02_00_00_01_onclick,this);
        };
        this.loadIncludeScript("CompGuide07.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
