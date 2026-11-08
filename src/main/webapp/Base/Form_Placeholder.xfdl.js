(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Placeholder");
            this.set_titletext("Placeholder");
            this.set_background("#f0f1f3");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,648);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_bg","24","16",null,null,"24","16",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","30","500","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_color("#383e49");
            obj.set_font("600 18px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_message","40","70","500","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("This screen is not available yet.");
            obj.set_color("#667085");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,648,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Placeholder.xfdl", function() {

        this.fn_setTitle = function(sTitle)
        {
        	this.sta_title.set_text(sTitle);
        };

        this.Form_onload = function(obj,e)
        {
        	this.fn_setTitle(this.parent.parent.fv_sMenuTitle);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
        };
        this.loadIncludeScript("Form_Placeholder.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
