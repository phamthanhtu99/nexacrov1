(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Frame_Mdi");
            this.set_titletext("Frame_Mdi");
            if (Form == this.constructor)
            {
                this._setFormPosition(1048,35);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_MDI_Bg");
            obj.set_background("#f4f6fd");
            this.addChild(obj.name, obj);

            obj = new Button("btn_closeAll",null,"8","19","19","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MDI_AllX");
            this.addChild(obj.name, obj);

            obj = new Button("btn_vertical",null,"8","19","19","30",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_Horz");
            this.addChild(obj.name, obj);

            obj = new Button("btn_horizontal",null,"8","19","19","50",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_MDI_Verti");
            this.addChild(obj.name, obj);

            obj = new Button("btn_cascade",null,"8","19","19","70",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_MDI_Min");
            this.addChild(obj.name, obj);

            obj = new Button("btn_maximize",null,"8","19","19","90",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MDI_Max");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_mdi","0","4",null,"31","120",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            obj.set_tabbuttongap("5");
            obj.set_cssclass("tab_MDI_Tab");
            obj.set_tabbuttonstartgap("20");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tab_mdi);
            obj.set_text("Tabpage1");
            this.tab_mdi.addChild(obj.name, obj);

            obj = new Button("btn_closeMenu","0","0","20","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_Close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab_mdi.Tabpage1.form
            obj = new Layout("default","",0,0,this.tab_mdi.Tabpage1.form,function(p){});
            this.tab_mdi.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1048,35,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame_Mdi.xfdl", function() {
        this.fv_objApp = this.gfn_getApplication();

        this.form_onload = function(obj,e)
        {
        	//기본 tabpage delete
        	this.tab_mdi.removeTabpage(0);
        };

        // 탭 추가
        this.fn_addTab = function(sFormId, sMenuNm)
        {
        	this.tab_mdi.insertTabpage(sFormId, -1, "", sMenuNm);
        	this.fv_objApp.av_VFrameSet1.separatesize = "35,0,*,30";
        }

        this.tab_mdi_onchanged = function(obj,e)
        {
        	var sFormID = obj.tabpages[e.postindex].name;

        	trace("tab_mdi_onchanged "  + sFormID);
        	this.fv_objApp.av_WorkFrame[sFormID].form.setFocus();
        	this.fv_objApp.av_VFrameSet1.separatesize = "35,0,*,30";
        };

        this.tab_mdi_onextrabuttonclick = function(obj,e)
        {
        	var sFormID = obj.tabpages[e.index].name;
        	obj.removeTabpage(e.index);
        	this.fv_objApp.av_WorkFrame[sFormID].form.close();

            var nRow = this.fv_objApp.gds_openForm.findRow("FORM_ID", sFormID);
            this.fv_objApp.gds_openForm.deleteRow(nRow);
            if(obj.getTabpageCount() < 1){
                this.fv_objApp.av_VFrameSet1.separatesize = "35,*,0,30";
            }

        };

        this.fn_arrange = function(obj,e)
        {
            var strType = obj.name.replace("btn_", "");
        	var arrObj = this.fv_objApp.av_WorkFrame.all;

        	switch(strType)
        	{
        		case "maximize" :
        			for(var i=0; i<arrObj.length; i++)
        			{
        				this.fv_objApp.av_WorkFrame.frames[i].openstatus = "maximize";
        				this.fv_objApp.av_WorkFrame.frames[i].showtitlebar = false;
        				this.fv_objApp.av_WorkFrame.frames[i].border = "0px none";
        			}
        		break;
        		case "closeAll" :
         			for(var i=arrObj.length-1; i>=0; i--)
        			{
        				trace(arrObj[i].form.name);
         				arrObj[i].form.close();
         				this.tab_mdi.removeTabpage(i);
        			}
                    this.fv_objApp.gds_openForm.clearData();
                    this.fv_objApp.av_VFrameSet1.separatesize = "35,*,0,30";
        		break;
        	    default :
        			for(var i=0; i<arrObj.length; i++)
        			{
        				this.fv_objApp.av_WorkFrame.frames[i].openstatus = "normal";
        				this.fv_objApp.av_WorkFrame.frames[i].showtitlebar = true;
        				this.fv_objApp.av_WorkFrame.frames[i].border = "1px solid #5d6468";
        				this.fv_objApp.av_WorkFrame.frames[i].titlebar.closebutton.enable = false;
        			}
        			this.fv_objApp.av_WorkFrame.arrange(strType);
        	    break;
        	}

        };

        this.btn_home_onclick = function(obj,e)
        {
        	this.fv_objApp.av_VFrameSet1.separatesize = "35,*,0,30";
        };

        this.tab_mdi_onlbuttondown = function(obj,e)
        {
        	if(obj.getTabpageCount() > 0){
                this.fv_objApp.av_VFrameSet1.separatesize = "35,0,*,30";
            }
        };

        this.btn_closeMenu_onclick = function(obj,e)
        {

        	if(obj.cssclass == "btn_MDI_Open"){
        		this.fv_objApp.av_HFrameSet.separatesize = "45,200,*,30";
        		obj.cssclass = "btn_MDI_Close";
        	}
        	else{
        		this.fv_objApp.av_HFrameSet.separatesize = "45,0,*,30";
        		obj.cssclass = "btn_MDI_Open";
        	}

        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.formi_onclose,this);
            this.btn_closeAll.addEventHandler("onclick",this.fn_arrange,this);
            this.btn_vertical.addEventHandler("onclick",this.fn_arrange,this);
            this.btn_horizontal.addEventHandler("onclick",this.fn_arrange,this);
            this.btn_cascade.addEventHandler("onclick",this.fn_arrange,this);
            this.btn_maximize.addEventHandler("onclick",this.fn_arrange,this);
            this.tab_mdi.addEventHandler("onchanged",this.tab_mdi_onchanged,this);
            this.tab_mdi.addEventHandler("onextrabuttonclick",this.tab_mdi_onextrabuttonclick,this);
            this.tab_mdi.addEventHandler("onlbuttondown",this.tab_mdi_onlbuttondown,this);
            this.btn_closeMenu.addEventHandler("onclick",this.btn_closeMenu_onclick,this);
        };
        this.loadIncludeScript("Frame_Mdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
