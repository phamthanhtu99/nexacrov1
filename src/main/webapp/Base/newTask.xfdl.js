(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("newTask");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(580,910);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_project", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECTP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DES\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_userProject", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cond", this);
            obj._setContents("<ColumnInfo><Column id=\"TASK_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TB_OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"ED_DT\" type=\"STRING\" size=\"256\"/><Column id=\"DES\" type=\"STRING\" size=\"256\"/><Column id=\"TASK_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RESOLVE_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TAG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRJORITY\" type=\"STRING\" size=\"256\"/><Column id=\"BILL\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TASK_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ST_DT\" type=\"STRING\" size=\"256\"/><Column id=\"TASK_NM_SUB\" type=\"STRING\" size=\"256\"/><Column id=\"TAG\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECTP_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0","580","900",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_font("normal 18pt/normal \"normal/normal\"");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","20","110","540","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","0",null,"100.00%","34",null,"0",null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","92","18",null,null,null,null,null,null,this.Div00.form.Div00.form);
            obj.set_taborder("1");
            obj.set_text("Tên Tác Vụ");
            obj.set_font("normal 16px/normal \"Arial\"");
            this.Div00.form.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","20","15","540","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","52","0","14","15",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("2");
            obj.set_text("*");
            obj.set_textAlign("left");
            obj.set_color("red");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","58","18",null,null,null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("Dự Án");
            obj.set_font("normal 16px/normal \"Arial\"");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","0",null,"100%","34",null,"0",null,null,null,null,this.Div00.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_project");
            obj.set_codecolumn("PROJECT_ID");
            obj.set_datacolumn("PROJECTP_NM");
            obj.set_displaynulltext("Chọn dự án");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.form.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01","20","205","540","170",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","126","18",null,null,null,null,null,null,this.Div00.form.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("Thêm Mô Tả");
            obj.set_font("normal 16px/normal \"Arial\"");
            this.Div00.form.Div00_01.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","0",null,"100%","144",null,"0",null,null,null,null,this.Div00.form.Div00_01.form);
            obj.set_taborder("0");
            this.Div00.form.Div00_01.addChild(obj.name, obj);

            obj = new Div("Div00_0111","20","850","540","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","2","3","88","34",null,null,null,null,null,null,this.Div00.form.Div00_0111.form);
            obj.set_taborder("3");
            obj.set_text("Thêm");
            obj.set_cssclass("btnAdd");
            this.Div00.form.Div00_0111.addChild(obj.name, obj);

            obj = new Button("Button01","126","3","104","34",null,null,null,null,null,null,this.Div00.form.Div00_0111.form);
            obj.set_taborder("3");
            obj.set_text("Thêm Nữa");
            obj.set_cssclass("btnAdd");
            obj.set_color("#ff6400");
            obj.set_background("#ffffff");
            this.Div00.form.Div00_0111.addChild(obj.name, obj);

            obj = new Button("Button01_00","270","3","88","34",null,null,null,null,null,null,this.Div00.form.Div00_0111.form);
            obj.set_taborder("4");
            obj.set_text("Hủy");
            obj.set_cssclass("btnAdd");
            obj.set_color("#ff6400");
            obj.set_background("#ffffff");
            this.Div00.form.Div00_0111.addChild(obj.name, obj);

            obj = new Static("Static00","110","106","10","15",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("*");
            obj.set_textAlign("left");
            obj.set_color("red");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div_task_info","20","395","150","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static_title_task","0","0","20","20",null,null,null,null,null,null,this.Div00.form.Div_task_info.form);
            obj.set_taborder("6");
            obj.set_border("1px solid #FF6400");
            obj.set_borderRadius("10px");
            obj.set_background("url(\'theme::blue/images/btn_expand.png\') no-repeat center");
            this.Div00.form.Div_task_info.addChild(obj.name, obj);

            obj = new Static("Static02","22","0","125","26",null,null,null,null,null,null,this.Div00.form.Div_task_info.form);
            obj.set_taborder("7");
            obj.set_text("Thông tin tác vụ");
            obj.set_font("normal 16px/normal \"Arial\"");
            obj.set_verticalAlign("top");
            this.Div00.form.Div_task_info.addChild(obj.name, obj);

            obj = new Div("Div00_02","20","435","540","395",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_accessibilityenable("false");
            obj.set_visible("false");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div00_00","0","77","540","60",null,null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","170","20",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_text("Chọn người làm task");
            obj.set_font("normal 16px/normal \"Arial\"");
            this.Div00.form.Div00_02.form.Div00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","0","25","540","34",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div00_00.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_userProject");
            obj.set_codecolumn("USER_ID");
            obj.set_datacolumn("USER_NM");
            this.Div00.form.Div00_02.form.Div00_00.addChild(obj.name, obj);

            obj = new Div("Div_group_link","0","0","540","60",null,null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("1");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","25","540","34",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div_group_link.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            this.Div00.form.Div00_02.form.Div_group_link.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","140","20",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div_group_link.form);
            obj.set_taborder("1");
            obj.set_text("Nhóm đã liên kết");
            obj.set_font("normal 16px/normal \"Arial\"");
            this.Div00.form.Div00_02.form.Div_group_link.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_00",null,"157","265","60","0",null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","110","20",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div00_00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Ngày Kết Thúc");
            obj.set_font("normal 16px/normal \"Arial\"");
            this.Div00.form.Div00_02.form.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","25","100%","34",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div00_00_00_00.form);
            obj.set_taborder("1");
            this.Div00.form.Div00_02.form.Div00_00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_00_01","2","157","265","60",null,null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("3");
            obj.set_text("");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","110","20",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("Ngày Bắt Đầu");
            obj.set_font("normal 16px/normal \"Arial\"");
            this.Div00.form.Div00_02.form.Div00_00_01.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","0","25","100%","34",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div00_00_01.form);
            obj.set_taborder("1");
            this.Div00.form.Div00_02.form.Div00_00_01.addChild(obj.name, obj);

            obj = new Div("Div00_00_00","0","237","540","60",null,null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("4");
            obj.set_text("");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","130","20",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_text("Ưu Tiên");
            obj.set_font("normal 16px/normal \"Arial\"");
            this.Div00.form.Div00_02.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Combo("Combo00","0","25","100%","34",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div00_00_00.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_displaynulltext("Không có");
            var Div00_form_Div00_02_form_Div00_00_00_form_Combo00_innerdataset = new nexacro.NormalDataset("Div00_form_Div00_02_form_Div00_00_00_form_Combo00_innerdataset", obj);
            Div00_form_Div00_02_form_Div00_00_00_form_Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">High</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">Medium</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">Low</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Div00_02_form_Div00_00_00_form_Combo00_innerdataset);
            obj.set_text("");
            obj.set_index("-1");
            this.Div00.form.Div00_02.form.Div00_00_00.addChild(obj.name, obj);

            obj = new Div("Div00_01","0","317","265","60",null,null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("5");
            obj.set_text("");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","25","100.00%","34",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div00_01.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            this.Div00.form.Div00_02.form.Div00_01.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","110","20",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div00_01.form);
            obj.set_taborder("1");
            obj.set_text("Tên SubTask");
            obj.set_font("normal 16px/normal \"Arial\"");
            this.Div00.form.Div00_02.form.Div00_01.addChild(obj.name, obj);

            obj = new Div("Div00_00_00_01",null,"317","265","60","0",null,null,null,null,null,this.Div00.form.Div00_02.form);
            obj.set_taborder("6");
            obj.set_text("");
            this.Div00.form.Div00_02.addChild(obj.name, obj);

            obj = new Static("Static01","0","0","130","20",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div00_00_00_01.form);
            obj.set_taborder("1");
            obj.set_text("Tag");
            obj.set_font("normal 16px/normal \"Arial\"");
            this.Div00.form.Div00_02.form.Div00_00_00_01.addChild(obj.name, obj);

            obj = new Edit("Edit00","0","25","100.00%","34",null,null,null,null,null,null,this.Div00.form.Div00_02.form.Div00_00_00_01.form);
            obj.set_taborder("1");
            obj.set_borderRadius("5px");
            this.Div00.form.Div00_02.form.Div00_00_00_01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00.form,function(p){});
            this.Div00.form.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_00.form,function(p){});
            this.Div00.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_01.form,function(p){});
            this.Div00.form.Div00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_0111.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_0111.form,function(p){});
            this.Div00.form.Div00_0111.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div_task_info.form
            obj = new Layout("default","",0,0,this.Div00.form.Div_task_info.form,function(p){});
            this.Div00.form.Div_task_info.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02.form.Div00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02.form.Div00_00.form,function(p){});
            this.Div00.form.Div00_02.form.Div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02.form.Div_group_link.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02.form.Div_group_link.form,function(p){});
            this.Div00.form.Div00_02.form.Div_group_link.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02.form.Div00_00_00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02.form.Div00_00_00_00.form,function(p){});
            this.Div00.form.Div00_02.form.Div00_00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02.form.Div00_00_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02.form.Div00_00_01.form,function(p){});
            this.Div00.form.Div00_02.form.Div00_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02.form.Div00_00_00.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02.form.Div00_00_00.form,function(p){});
            this.Div00.form.Div00_02.form.Div00_00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02.form.Div00_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02.form.Div00_01.form,function(p){});
            this.Div00.form.Div00_02.form.Div00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02.form.Div00_00_00_01.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02.form.Div00_00_00_01.form,function(p){});
            this.Div00.form.Div00_02.form.Div00_00_00_01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form.Div00_02.form
            obj = new Layout("default","",0,0,this.Div00.form.Div00_02.form,function(p){});
            this.Div00.form.Div00_02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",580,910,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Div00_00.form.Combo00","value","ds_cond","PROJECT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Div00_02.form.Div00_00.form.Combo00","value","ds_cond","TB_OWNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Div00_02.form.Div00_00_01.form.Calendar00","value","ds_cond","ST_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.Div00_02.form.Div00_00_00_00.form.Calendar00","value","ds_cond","ED_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.Div00_02.form.Div00_00_00.form.Combo00","value","ds_cond","PRJORITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.Div00_02.form.Div00_01.form.Edit00","value","ds_cond","TASK_NM_SUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.Div00_02.form.Div00_00_00_01.form.Edit00","value","ds_cond","TAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Div00.form.Edit00","value","ds_cond","PROJECTP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Div00_01.form.TextArea00","value","ds_cond","DES");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("newTask.xfdl", function() {
        this.new_task_onload = function(obj,e)
        {
        	nexacro.getApplication().mainframe.HFrameSet00.VFrameSet00.TopFrame.form.Static00.set_text('Tác vụ mới');
        	this.Div00.form.Div00_0111.set_top(395);
        	this.getListProject();
        };




        this.Div00_Div00_00_Combo00_onitemchanged = function(obj,e)
        {
        	if(obj.value != '') {
        		if(!this.Div00.form.Div_task_info.visible ) {
        			this.Div00.form.Div00_02.set_visible(true);
        			this.Div00.form.Div_task_info.set_visible(true);
        			this.Div00.form.Div00_0111.set_top(850);
        		}
        		this.ds_cond.setColumn(0, "PROJECTP_NM", this.ds_project.getColumn(obj.index,"PROJECTP_NM"));
        		this.ds_cond.setColumn(0, "DES", this.ds_project.getColumn(obj.index,"DES"));
        		this.getUserProject();
        	}else {
        		this.Div00.form.Div00_02.set_visible(false);
        		this.Div00.form.Div_task_info.set_visible(false);

        	}
        };

        this.Div00_Div_task_info_Static_title_task_onclick = function(obj,e)
        {
        	 if (this.Div00.form.Div00_02.visible) {
        			// If the input is visible, hide it
        			 this.Div00.form.Div00_02.set_visible(false);
        			 this.Div00.form.Div_task_info.form.Static_title_task.set_background('url(\'theme::blue/images/cmb_WF_Drop1_P.png\') no-repeat center');
        			 this.Div00.form.Div00_0111.set_top(435);
        		} else {
        			// If the input is hidden, show it
        			this.Div00.form.Div00_02.set_visible(true);
        			this.Div00.form.Div_task_info.form.Static_title_task.set_background('url(\'theme::blue/images/btn_expand.png\') no-repeat center');
        		    this.Div00.form.Div00_0111.set_top(850);
        		}
        };

        this.getListProject = function ()
        {

        	 var id = "selectListProject";
             var url = "http://localhost:8080/com/selectListProject";
             var reqDs = "ds_cond = ds_cond";
             var respDs = "ds_project=ds_project";
             var args = "";
             var callback = "fc_callback";
             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };

        this.getUserProject = function ()
        {
        	this.ds_userProject.clear();
        	var id = "selectUserProject";
             var url = "http://localhost:8080/project/pm/selectUserProject";
             var reqDs = "ds_cond = ds_cond";
             var respDs = "ds_userProject=ds_userProject";
             var args = "";
             var callback = "fc_callback";
             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };

        this.fc_callback = function (serviceID, errCD, errMSG)
        {
            if (errCD == -99)
            {
            	this.alert("please login!");
        		return;
            }

        	switch(serviceID) {
        	case 'selectListProject':
        	    var idx = this.ds_project.insertRow(0);
        		this.ds_project.setColumn(idx, "PROJECT_ID","");
        		this.ds_project.setColumn(idx, "PROJECTP_NM","Chọn dự án")
        		break;
        		case 'saveTask':
        	    var idx = this.ds_project.insertRow(0);
        		this.ds_project.setColumn(idx, "PROJECT_ID","");
        		this.ds_project.setColumn(idx, "PROJECTP_NM","Chọn dự án")
        		break;

        	default:
        	}
        };

        this.Button00_onclick = function(obj,e)
        {

        	var id = "saveTask";
             var url = "http://localhost:8080/task/pm/createTask";
             var reqDs = "ds_cond = ds_cond";
             var respDs = "ds_userProject=ds_userProject";
             var args = "";
             var callback = "fc_callback";
             this.transaction(id, url, reqDs, respDs, args, callback, true, 0, false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.new_task_onload,this);
            this.Div00.form.Div00.form.Edit00.addEventHandler("onchanged",this.Div00_Div00_Edit00_onchanged,this);
            this.Div00.form.Div00_00.form.Static00_00.addEventHandler("onclick",this.Div_container_prj_Div00_Static00_onclick,this);
            this.Div00.form.Div00_00.form.Combo00.addEventHandler("onitemchanged",this.Div00_Div00_00_Combo00_onitemchanged,this);
            this.Div00.form.Div00_0111.form.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Div00.form.Div00_0111.form.Button01.addEventHandler("onclick",this.Div_container_prj_Button01_onclick,this);
            this.Div00.form.Div00_0111.form.Button01_00.addEventHandler("onclick",this.Div_container_prj_Button01_onclick,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Div_container_prj_Div00_Static00_onclick,this);
            this.Div00.form.Div_task_info.form.Static_title_task.addEventHandler("onclick",this.Div00_Div_task_info_Static_title_task_onclick,this);
            this.Div00.form.Div00_02.form.Div00_00_00.form.Combo00.addEventHandler("onitemchanged",this.Div00_Div00_02_Div00_00_00_Combo00_onitemchanged,this);
        };
        this.loadIncludeScript("newTask.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
