(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("grid");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1010,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rdo", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "data","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "1","data" : "All"},{"code" : "2","data" : "Female"},{"code" : "3","data" : "Male"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","46",null,"44","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            obj.set_background("darkgray");
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

            obj = new Radio("Radio00","575.00","8","280","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_rdo");
            obj.set_codecolumn("code");
            obj.set_datacolumn("data");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1010,720,this,function(p){});
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
        this.loadIncludeScript("grid.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
