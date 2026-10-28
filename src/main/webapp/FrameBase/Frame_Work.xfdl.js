(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Frame_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1043,695);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_title","5","0",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("FrameBase::Frame_WorkTitle.xfdl");
            obj.set_text("");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","5","div_title:0",null,null,"10","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_text("1028 * 655");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","950","10","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_title
            obj = new Layout("default","",0,0,this.div_title.form,function(p){});
            this.div_title.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_work
            obj = new Layout("default","",0,0,this.div_work.form,function(p){});
            this.div_work.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1043,695,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Work");

                p.div_title.set_taborder("0");
                p.div_title.set_url("FrameBase::Frame_WorkTitle.xfdl");
                p.div_title.set_text("");
                p.div_title.set_background("#ffffff");
                p.div_title.move("5","0",null,"40","10",null);

                p.div_work.set_taborder("1");
                p.div_work.set_background("#ffffff");
                p.div_work.set_text("1028 * 655");
                p.div_work.move("5","div_title:0",null,null,"10","0");

                p.Button00.set_taborder("2");
                p.Button00.set_text("Button00");
                p.Button00.set_visible("false");
                p.Button00.move("950","10","80","20",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Phone_screen","Phone_screen",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","FrameBase::Frame_WorkTitle.xfdl");
        };
        
        // User Script
        this.registerScript("Frame_Work.xfdl", function() {
        this.fv_objApp = nexacro.getApplication();
        this.fv_formId  = "";
        this.fv_menuId  = "";
        this.fv_menuNm  = "";
        this.fv_formUrl = "";

        this.form_onload = function(obj,e)
        {
            var objOwnerFrame = this.getOwnerFrame();
            this.fv_formId  = objOwnerFrame.arguments["formId"];
            this.fv_menuId  = objOwnerFrame.arguments["menuId"];
            this.fv_menuNm  = objOwnerFrame.arguments["menuNm"];
            this.fv_formUrl = objOwnerFrame.arguments["formUrl"];

            this.div_work.url = this.fv_formUrl;
        	this.div_title.form.st_title.text = (objOwnerFrame.arguments["arrArg"]);

            var strAuth = this.fv_objApp.gds_menu.lookup("MENU_ID", this.fv_menuId, "MENU_AUTH");
            if(this.gfn_isNull(strAuth) || strAuth == "N"){
        		this.div_title.height = 0;
            }
        	else{
        		// 공통 버튼 설정
        		this.div_title.form.fn_setAuthBtn(strAuth);
        	}

            this.form_onsize();
        };

        // 화면 활성화 시킬 경우 해당 화면의 Tabpage 선택
        this.form_onactivate = function(obj,e)
        {
            this.fn_tabActivateClose(this.fv_formId, "ACTIVATE");
        };

        // 화면에서 직접 Close 시 Tabpage 제거
        this.form_onclose = function(obj,e)
        {
            //this.fn_tabActivateClose(this.fv_formId, "CLOSE");
        };

        this.fn_tabActivateClose = function(sFormId, sType)
        {
            var objFrame = this.fv_objApp.av_MdiFrame;
        	var nCnt = objFrame.form.tab_mdi.getTabpageCount();
        	for(var i=0; i<nCnt; i++)
        	{
        		if(objFrame.form.tab_mdi.tabpages[i].name == sFormId)
        		{
                    if(sType == "ACTIVATE"){
                        objFrame.form.tab_mdi.tabindex = i;
                    }
                    else if(sType == "CLOSE"){
                        objFrame.form.tab_mdi.removeTabpage(i);
                        var nRow = this.fv_objApp.gds_openForm.findRow("FORM_ID", sFormId);
                        this.fv_objApp.gds_openForm.deleteRow(nRow);
                        if(nCnt == 1){
                            this.fv_objApp.av_VFrameSet1.separatesize = "30,*,0,30";
                        }
                    }
                    return;
        		}
        	}
        }

        this.form_onsize = function(obj,e)
        {
        	this.resetScroll();
        };


        this.Button00_onclick = function(obj,e)
        {
        	trace(this.getOffsetWidth() + " : " + this.getOffsetHeight());
        	trace(this.div_work.getOffsetWidth() + " : " + this.div_work.getOffsetHeight());
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onactivate",this.form_onactivate,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Frame_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
