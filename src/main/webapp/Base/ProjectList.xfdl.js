(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GridTree");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1670,1080);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_project", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECTP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DES\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TAG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECTP_REOPLVE\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECTP_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_PROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_PERCENT\" type=\"INT\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_status", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">1</Col><Col id=\"STATUS\">CO_HIEU_LUC</Col><Col id=\"STATUS_NM\">Có hiệu lực</Col></Row><Row><Col id=\"ID\">2</Col><Col id=\"STATUS\">DANG_TRIEN_KHAI</Col><Col id=\"STATUS_NM\">Đang triển khai</Col></Row><Row><Col id=\"ID\">3</Col><Col id=\"STATUS\">HUY_BO</Col><Col id=\"STATUS_NM\">Hủy bỏ</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_priority", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"priority\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"priority\">none</Col></Row><Row><Col id=\"id\">2</Col><Col id=\"priority\">low</Col></Row><Row><Col id=\"id\">3</Col><Col id=\"priority\">medium</Col></Row><Row><Col id=\"id\">4</Col><Col id=\"priority\">hight</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_user", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" type=\"INT\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"role\" type=\"STRING\" size=\"256\"/><Column id=\"status\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"id\">1</Col><Col id=\"name\">NamVH7</Col><Col id=\"role\">1</Col><Col id=\"status\">1</Col></Row><Row><Col id=\"id\">2</Col><Col id=\"name\">SaTTL1</Col><Col id=\"role\">1</Col><Col id=\"status\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_project","0","80","1650",null,null,"15",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_project");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,null");
            obj.set_cssclass("grd-project");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"243\"/><Column size=\"76\"/><Column size=\"149\"/><Column size=\"155\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"215\"/><Column size=\"215\"/><Column size=\"215\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"TÊN DỰ ÁN\" textAlign=\"left\" padding=\"0px 0px 0px 10px\" border=\"0px none,0px none,1px solid #E4E3E3\"/><Cell col=\"1\" text=\"%\"/><Cell col=\"2\" text=\"CHỦ SỞ HỮU\"/><Cell col=\"3\" text=\"TRẠNG THÁI\"/><Cell col=\"4\" text=\"TÁC VỤ\"/><Cell col=\"5\" text=\"CÁC CỘT MỐC\"/><Cell col=\"6\" text=\"VẤN ĐỀ\"/><Cell col=\"7\" text=\"NGÀY BẮT ĐẦU\"/><Cell col=\"8\" text=\"NGÀY KẾT THÚC\" displaytype=\"normal\"/><Cell col=\"9\" text=\"ĐÃ HOÀN THÀNH\"/><Cell col=\"10\" text=\"BỐ CỤC\"/></Band><Band id=\"body\"><Cell text=\"bind:PROJECTP_NM\" padding=\"0px 0px 0px 10px\"/><Cell col=\"1\" accessibilityrole=\"progressbar\" displaytype=\"normal\" progressbarsmooth=\"true\" text=\"bind:PROJECT_PERCENT\"/><Cell col=\"2\" text=\"bind:USER_NM\" displaytype=\"normal\" combodataset=\"ds_user\" combodatacol=\"name\" combocodecol=\"id\"/><Cell col=\"3\" text=\"bind:PROJECTP_STATUS\" displaytype=\"combocontrol\" combodataset=\"ds_status\" combocodecol=\"ID\" combodatacol=\"STATUS_NM\" textAlign=\"center\" suppressalign=\"first\" autosizecol=\"none\" autosizerow=\"none\" combobuttonsize=\"0 0\" cssclass=\"expr:PROJECTP_STATUS== &apos;1&apos; ? &quot;info&quot;: PROJECTP_STATUS== &apos;2&apos; ? &quot;inprogress&quot; : &quot;cancel&quot;\" padding=\"10px 10px 10px 15px\"/><Cell col=\"4\" displaytype=\"progressbarcontrol\" cssclass=\"progress-task-bar\" textAlign=\"center\" progressbardirection=\"forward\" progressbarsmooth=\"true\" padding=\"10px 40px\" suppressalign=\"first\" text=\"bind:PROJECT_PROCESS\"/><Cell col=\"5\" displaytype=\"progressbarcontrol\" text=\"bind:PROJECT_PROCESS\" progressbarsmooth=\"true\" padding=\"10px 40px\"/><Cell col=\"6\" text=\"bind:PROJECT_PROCESS\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\" padding=\"10px 40px\"/><Cell col=\"7\" text=\"bind:ST_DT\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" displaytype=\"date\" text=\"bind:ED_DT\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:PROJECT_YN\" edittype=\"checkbox\"/><Cell col=\"10\" text=\"bind:END_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","1","0","1669","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("top-info");
            this.addChild(obj.name, obj);

            obj = new Button("btn_filter","1587","25","20","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn-menu");
            obj.set_background("url(\'imagerc::filter.png\') repeat center center");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_menu","1627","25","20","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_icon("url(\'imagerc::dots.png\')");
            obj.set_cssclass("btn-menu");
            obj.set_background("url(\'imagerc::filter.png\') repeat left top");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("cbx_projects","20","20","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("cbx-project-search");
            obj.set_text("Tất cả dự án");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","150","20","120","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("(Có hiệu lực)");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_add","1470","20","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Dự án mới");
            obj.set_cssclass("btn-add-project");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1670,1080,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ProjectList.xfdl", function() {

        this.btn_add_onclick = function(obj,e)
        {
        	var objChildFrame = new ChildFrame();
        	objChildFrame.init("chf_popup1", 0, 0, 800, 700, null, null, "Base::addProject.xfdl");

        	objChildFrame.set_dragmovetype("all");
        	objChildFrame.set_openalign("center middle");
        	objChildFrame.set_overlaycolor("RGBA(196,196,196,0.5)")

        	objChildFrame.showModal(this.getOwnerFrame()
        						  , null
        						  , this
        						  , "fn_popupCallback");
        };

        this.fn_popupCallback = function(strPopupID, strReturn)
        {
        	if(strReturn == true) {
        		this.getListProject();
        	}
        };

        this.getListProject = function ()
        {

        	 var id = "getListProject";
             var url = "http://localhost:8080/project/mb/selectListGroup";
             var reqDs = "dsInput =dsInput";
             var respDs = "ds_project=ds_project";
             var args = "";
             var callback = "fc_callback";
             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };


        this.fc_callback = function (serviceID, errCD, errMSG)
        {
            if (errCD == -99)
            {
            	this.alert("session timeout!");
        		return;
            }

        	switch(serviceID) {
        	case 'getListProject':

        		break;
        	case "getListGroupPm":
        		break;
        	case "insertGroup":

        	break;
        	case "creatproject":

        	break;
        	default:
        	}
        };

        this.GridTree_onload = function(obj,e)
        {
        	this.getListProject();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.GridTree_onload,this);
            this.grd_project.addEventHandler("onheadclick",this.Grid00_onheadclick,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
        };
        this.loadIncludeScript("ProjectList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
