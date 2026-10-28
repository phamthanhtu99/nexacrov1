(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Frame_WorkTitle");
            this.set_scrolltype("none");
            this.set_titletext("Frame_WorkTitle");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,40);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_base",null,"7","0","26","5",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Button00");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","31","5","572","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메뉴타이틀");
            obj.set_cssclass("sta_WF_Title3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_myMenu","5","9","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_BookMark");
            this.addChild(obj.name, obj);

            obj = new Button("btn_print",null,"7","60","26","btn_base:0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("출력");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_excel",null,"7","60","26","btn_print:5",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("엑셀");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","60","26","btn_excel:5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,"7","60","26","btn_save:5",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"7","60","26","btn_delete:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("입력");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"7","60","26","btn_add:5",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Frame_WorkTitle.xfdl", function() {
        this.fv_objApp = nexacro.getApplication();
        this.fv_menuId = "";

        this.form_onload = function(obj,e)
        {
        	this.fv_menuId = this.getOwnerFrame().arguments["menuId"];

            this.fn_setBookmark();
        };

        this.fn_setBookmark = function()
        {
            var nRow = this.fv_objApp.gds_myMenu.findRow("MENU_ID", this.fv_menuId);
            this.btn_myMenu.cssclass = "btn_WF_BookMark";
            if(nRow > -1){
                this.btn_myMenu.cssclass = "btn_WF_BookMarkS";
            }
        }

        this.btn_myMenu_onclick = function(obj,e)
        {
        	this.fv_objApp.gds_myMenu.enableevent = false;
        	if(this.btn_myMenu.cssclass == "btn_WF_BookMarkS"){
        		//즐겨찾기해제
        		var nRow = this.fv_objApp.gds_myMenu.findRow("MENU_ID", this.fv_menuId);
        		this.fv_objApp.gds_myMenu.deleteRow(nRow);
                this.btn_myMenu.cssclass = "btn_WF_BookMark";
        	}
        	else{
        		//즐겨찾기추가
        		var nRow = this.fv_objApp.gds_menu.findRow("MENU_ID", this.fv_menuId);
                var nNewRow =  this.fv_objApp.gds_myMenu.addRow();
        		this.fv_objApp.gds_myMenu.copyRow(nNewRow, this.fv_objApp.gds_menu, nRow);
                this.btn_myMenu.cssclass = "btn_WF_BookMarkS";
        	}
        	this.fv_objApp.gds_myMenu.enableevent = true;
        	nexacro.setPrivateProfile("gds_myMenu", this.fv_objApp.gds_myMenu.saveXML());

        };

        this.fn_setAuthBtn = function(strAuth)
        {
        	//공통버튼 설정 1:사용, 0:미사용
        	//각각버튼을 arrange로 설정 size 0으로 처리
        	var arrObj = ["btn_search","btn_add","btn_delete","btn_save","btn_excel","btn_print"];
        	for(var i=0; i<arrObj.length; i++){
        		var objBtn = this.components[arrObj[i]];
        		if(strAuth.substr(i, 1) == "0"){
        			objBtn.width = "0";
        			objBtn.right = (objBtn.right.replace(":5", ":0")); //사이 간격으로 인하여 한쪽은 0으로 변경
        		}
        		else{
        			objBtn.visible = true;
        		}
        	}

            this.resetScroll();
        }

        // 공통버튼 클릭이벤트
        this.fn_commBtnClick = function(obj,e)
        {
        	var sName = String(obj.name).substr(4);   //btn_save

            switch(sName) {
                case "search":
                    this.parent.parent.div_work.form.fn_search();
                    break;
                case "add":
                     this.parent.parent.div_work.form.fn_add();
                    break;
                case "delete":
                     this.parent.parent.div_work.form.fn_delete();
                    break;
                case "save":
                     this.parent.parent.div_work.form.fn_save();
                    break;
                case "excel":
                     this.parent.parent.div_work.form.fn_excel();
                    break;
                case "print":
                     this.parent.parent.div_work.form.fn_print();
                    break;
                default:
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btn_base.addEventHandler("onclick",this.fn_commBtnClick,this);
            this.btn_myMenu.addEventHandler("onclick",this.btn_myMenu_onclick,this);
            this.btn_print.addEventHandler("onclick",this.fn_commBtnClick,this);
            this.btn_excel.addEventHandler("onclick",this.fn_commBtnClick,this);
            this.btn_save.addEventHandler("onclick",this.fn_commBtnClick,this);
            this.btn_delete.addEventHandler("onclick",this.fn_commBtnClick,this);
            this.btn_add.addEventHandler("onclick",this.fn_commBtnClick,this);
            this.btn_search.addEventHandler("onclick",this.fn_commBtnClick,this);
        };
        this.loadIncludeScript("Frame_WorkTitle.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
