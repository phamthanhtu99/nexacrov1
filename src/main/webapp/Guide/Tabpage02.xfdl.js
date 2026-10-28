(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Tabpage01");
            this.set_titletext("Academic Ability");
            if (Form == this.constructor)
            {
                this._setFormPosition(1011,272);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grd", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "Column0","type" : "STRING","size" : "256"},{"id" : "Column1","type" : "STRING","size" : "256"},{"id" : "Column2","type" : "STRING","size" : "256"},{"id" : "Column3","type" : "STRING","size" : "256"},{"id" : "Column4","type" : "STRING","size" : "256"}]},"Rows" : [{"Column0" : "19930203","Column1" : "TOBE High School","Column2" : "Natural  Sciences","Column4" : "Seoul","Column3" : "1"},{"Column0" : "20020205","Column1" : "TOBE University","Column4" : "Seoul","Column2" : "Design Course"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("Button00",null,"5","25","25","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"5","25","25","5",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","5.00","35",null,"232","5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grd");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"143\"/><Column size=\"213\"/><Column size=\"194\"/><Column size=\"80\"/><Column size=\"248\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Graduation Date\"/><Cell col=\"1\" text=\"School Name\"/><Cell col=\"2\" text=\"Major\"/><Cell col=\"3\" text=\"Graduation\"/><Cell col=\"4\" text=\"Address\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"4\" text=\"bind:Column4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1011,272,this,function(p){});
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

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Tabpage02.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
