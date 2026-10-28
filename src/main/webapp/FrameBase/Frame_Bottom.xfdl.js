(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Bottom");
            this.set_titletext("Form_Bottom");
            if (Form == this.constructor)
            {
                this._setFormPosition(1048,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta_msg","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_usedecorate("true");
            obj.set_text("해당 화면의 loading 시간은 0.05 Sec 입니다.");
            obj.set_visible("true");
            obj.set_textAlign("right");
            obj.set_background("#f4f6fd");
            obj.set_padding("0px 10px 0px 0px");
            obj.set_border("1px solid #d3dce1,0px none,0px none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1048,30,this,function(p){});
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
        this.loadIncludeScript("Frame_Bottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
