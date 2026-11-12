(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Suppliers");
            this.set_titletext("Suppliers");
            this.set_background("#f0f1f3");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,648);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "KEYWORD","type" : "STRING","size" : "100"},{"id" : "CATEGORY","type" : "STRING","size" : "30"},{"id" : "RETURN_TYPE","type" : "STRING","size" : "20"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_supplier", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_codeCond", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GROUP_CODES","type" : "STRING","size" : "200"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_code", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_category", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "30"},{"id" : "CODE_NAME","type" : "STRING","size" : "100"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "30"},{"id" : "CODE_NAME","type" : "STRING","size" : "100"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_columns", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "10"},{"id" : "NAME","type" : "STRING","size" : "100"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","24","16",null,null,"24","16",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","30","120","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Suppliers");
            obj.set_color("#383e49");
            obj.set_font("600 18px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_filter_info","150","30","320","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_color("#1a5fd9");
            obj.set_font("12px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_count",null,"30","160","36","240",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_textAlign("right");
            obj.set_color("#858d9d");
            obj.set_font("12px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"30","100","36","134",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Add Supplier");
            obj.set_background("#1a5fd9");
            obj.set_color("#ffffff");
            obj.set_borderRadius("4px");
            obj.set_border("0px none");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_filter",null,"30","84","36","40",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Filters");
            obj.set_icon("url(\'imagerc::kanban/ic_filter.png\')");
            obj.set_textPadding("0px 0px 0px 6px");
            obj.set_background("#ffffff");
            obj.set_color("#5d6679");
            obj.set_borderRadius("4px");
            obj.set_border("1px solid #d0d3d9");
            obj.set_font("13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_supplier","40","72",null,null,"40","28",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_supplier");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_selecttype("row");
            obj.set_cursor("pointer");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"190\"/><Column size=\"170\"/><Column size=\"90\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"Supplier Name\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\" cursor=\"pointer\"/><Cell col=\"1\" text=\"Product\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\" cursor=\"pointer\"/><Cell col=\"2\" text=\"Contact Number\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\" cursor=\"pointer\"/><Cell col=\"3\" text=\"Email\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\" cursor=\"pointer\"/><Cell col=\"4\" text=\"Type\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\" cursor=\"pointer\"/><Cell col=\"5\" text=\"On the way\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\" cursor=\"pointer\"/></Band><Band id=\"body\"><Cell text=\"bind:SUPPLIER_NAME\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"1\" text=\"bind:PRODUCT_NAME\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"2\" text=\"bind:CONTACT_NUMBER\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"3\" text=\"bind:EMAIL\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"4\" text=\"bind:RETURN_TYPE_NAME\" textAlign=\"left\" cssclass=\"expr:RETURN_TYPE==&apos;TAKING&apos;?&apos;cell_WF_StockIn&apos;:&apos;cell_WF_StockOut&apos;\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"5\" text=\"bind:ON_THE_WAY\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_nodata","40","140",null,"40","40",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.set_text("No suppliers match your search.");
            obj.set_textAlign("center");
            obj.set_color("#858d9d");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdv_filter","0","0","260","278",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("1px solid #e4e7ec");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_category","16","12","228","20",null,null,null,null,null,null,this.pdv_filter.form);
            obj.set_taborder("4");
            obj.set_text("Category");
            obj.set_color("#48505e");
            obj.set_font("600 12px \"Segoe UI\"");
            this.pdv_filter.addChild(obj.name, obj);

            obj = new Combo("cmb_category","16","34","228","36",null,null,null,null,null,null,this.pdv_filter.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("13px \"Segoe UI\"");
            this.pdv_filter.addChild(obj.name, obj);

            obj = new Static("sta_l_type","16","80","228","20",null,null,null,null,null,null,this.pdv_filter.form);
            obj.set_taborder("5");
            obj.set_text("Type");
            obj.set_color("#48505e");
            obj.set_font("600 12px \"Segoe UI\"");
            this.pdv_filter.addChild(obj.name, obj);

            obj = new Combo("cmb_type","16","102","228","36",null,null,null,null,null,null,this.pdv_filter.form);
            obj.set_taborder("1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("13px \"Segoe UI\"");
            this.pdv_filter.addChild(obj.name, obj);

            obj = new Static("sta_l_columns","16","148","228","20",null,null,null,null,null,null,this.pdv_filter.form);
            obj.set_taborder("6");
            obj.set_text("Columns");
            obj.set_color("#48505e");
            obj.set_font("600 12px \"Segoe UI\"");
            this.pdv_filter.addChild(obj.name, obj);

            obj = new MultiCombo("mcb_columns","16","170","228","36",null,null,null,null,null,null,this.pdv_filter.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_showselectallcheckbox("true");
            obj.set_selectallcheckboxtext("All columns");
            obj.set_edittype("count");
            obj.set_counttextformat("{0} columns shown");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("13px \"Segoe UI\"");
            this.pdv_filter.addChild(obj.name, obj);

            obj = new Button("btn_reset","16","224","108","36",null,null,null,null,null,null,this.pdv_filter.form);
            obj.set_taborder("3");
            obj.set_text("Reset");
            obj.set_background("#ffffff");
            obj.set_color("#5d6679");
            obj.set_borderRadius("6px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("600 13px \"Segoe UI\"");
            this.pdv_filter.addChild(obj.name, obj);

            obj = new Button("btn_apply","136","224","108","36",null,null,null,null,null,null,this.pdv_filter.form);
            obj.set_taborder("4");
            obj.set_text("Apply");
            obj.set_background("#1a5fd9");
            obj.set_color("#ffffff");
            obj.set_borderRadius("6px");
            obj.set_border("0px none");
            obj.set_font("600 13px \"Segoe UI\"");
            this.pdv_filter.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdv_filter.form
            obj = new Layout("default","",0,0,this.pdv_filter.form,function(p){});
            this.pdv_filter.form.addLayout(obj.name, obj);

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
        this.addIncludeScript("Form_Suppliers.xfdl","Lib::Lib_Comm.xjs");
        this.registerScript("Form_Suppliers.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_Comm.xjs"); /*include "Lib::Lib_Comm.xjs"*/;

        this.Form_onload = function(obj,e)
        {
        	var oFilter = this.pdv_filter.form;
        	oFilter.cmb_category.set_innerdataset(this.ds_category);
        	oFilter.cmb_type.set_innerdataset(this.ds_type);
        	this.fn_initColumns();

        	// the list does not need the codes, so both requests run at the same time
        	this.fn_searchCode();
        	this.fn_searchList();
        };

        // common codes of the filter combos
        this.fn_searchCode = function()
        {
        	this.ds_codeCond.setColumn(0, "GROUP_CODES", "CATEGORY,RETURN_TYPE");

            var sSvcID    = "svcCommonCode";
            var sURL      = "KanbanUrl::common/code";
            var sInDs     = "ds_cond=ds_codeCond";
            var sOutDs    = "ds_code=ds_code";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        this.fn_searchList = function()
        {
        	// the server sends no dataset when nothing matches, so clear it first
        	this.ds_supplier.clearData();

            var sSvcID    = "svcSupplierList";
            var sURL      = "KanbanUrl::supplier/list";
            var sInDs     = "ds_cond=ds_cond";
            var sOutDs    = "ds_supplier=ds_supplier";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	if(errCd < 0){
        		this.gfn_alert("msg.err.validator", [errMsg]);
        		return;
        	}

        	if(svcId == "svcCommonCode"){
        		var arrCode = new Array();
        		arrCode.push({codeGroup:"CATEGORY"   , obj:this.pdv_filter.form.cmb_category, first:"2::All categories"});
        		arrCode.push({codeGroup:"RETURN_TYPE", obj:this.pdv_filter.form.cmb_type    , first:"2::All"});
        		this.gfn_getCommonCode(arrCode, this.ds_code);
        	}
        	else if(svcId == "svcSupplierList"){
        		this.ds_supplier.set_rowposition(-1);
        		this.sta_count.set_text(this.ds_supplier.rowcount + " suppliers");
        		this.sta_nodata.set_visible(this.ds_supplier.rowcount == 0);
        	}
        };

        // Called by Form_Layout when the header search changes (already debounced there)
        this.fn_search = function(sKeyword)
        {
        	this.ds_cond.setColumn(0, "KEYWORD", sKeyword);
        	this.fn_searchList();
        };

        // Columns MultiCombo: one item per grid column (from the head texts), every column shown at first
        this.fv_arrColSize = [];
        this.fn_initColumns = function()
        {
        	var objGrid = this.grd_supplier;
        	var objDs   = this.ds_columns;
        	var arrCode = new Array();

        	objDs.clearData();
        	for(var i=0; i<objGrid.getFormatColCount(); i++){
        		var nRow = objDs.addRow();
        		objDs.setColumn(nRow, "CODE", String(i));
        		objDs.setColumn(nRow, "NAME", objGrid.getCellProperty("head", i, "text"));
        		this.fv_arrColSize[i] = objGrid.getFormatColSize(i);
        		arrCode.push(String(i));
        	}
        	this.pdv_filter.form.mcb_columns.set_innerdataset(objDs);
        	this.pdv_filter.form.mcb_columns.set_value(arrCode.join(","));
        };

        // hides the columns that are not selected (size 0), shows the others with their first size
        this.fn_applyColumns = function()
        {
        	var objCombo = this.pdv_filter.form.mcb_columns;
        	var sValue   = this.gfn_nvl(objCombo.value, "");
        	if(sValue == ""){
        		// at least one column must stay: show them all again
        		this.gfn_alert("msg.kanban.column.required");
        		this.fn_showAllColumns();
        		return;
        	}
        	var arrShow = sValue.split(",");
        	for(var i=0; i<this.fv_arrColSize.length; i++){
        		var bShow = arrShow.indexOf(String(i)) > -1;
        		this.grd_supplier.setFormatColProperty(i, "size", bShow ? this.fv_arrColSize[i] : 0);
        	}
        };

        this.fn_showAllColumns = function()
        {
        	var arrCode = new Array();
        	for(var i=0; i<this.fv_arrColSize.length; i++){
        		arrCode.push(String(i));
        	}
        	this.pdv_filter.form.mcb_columns.set_value(arrCode.join(","));
        	this.fn_applyColumns();
        };

        // Filters Button
        this.btn_filter_onclick = function(obj,e)
        {
        	this.pdv_filter.trackPopupByComponent(obj, obj.getOffsetWidth() - this.pdv_filter.getOffsetWidth(), obj.getOffsetHeight() + 4);
        };

        // Apply Button (filter popup)
        this.pdv_filter_btn_apply_onclick = function(obj,e)
        {
        	var oFilter = this.pdv_filter.form;
        	this.ds_cond.setColumn(0, "CATEGORY"   , oFilter.cmb_category.value);
        	this.ds_cond.setColumn(0, "RETURN_TYPE", oFilter.cmb_type.value);
        	this.pdv_filter.closePopup();
        	this.fn_applyColumns();

        	var arrText = new Array();
        	if(!this.gfn_isNull(oFilter.cmb_category.value)) arrText.push(oFilter.cmb_category.text);
        	if(!this.gfn_isNull(oFilter.cmb_type.value))     arrText.push(oFilter.cmb_type.text);
        	this.sta_filter_info.set_text(arrText.length > 0 ? "Filtered: " + arrText.join(", ") : "");

        	this.fn_searchList();
        };

        // Reset Button (filter popup)
        this.pdv_filter_btn_reset_onclick = function(obj,e)
        {
        	this.pdv_filter.form.cmb_category.set_index(0);
        	this.pdv_filter.form.cmb_type.set_index(0);
        	this.fn_showAllColumns();
        	this.pdv_filter_btn_apply_onclick(obj, e);
        };

        // Add Supplier Button
        this.btn_add_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("popNewSupplier", 0, 0, 480, 626);
        	objChild.formurl = "Base::Form_NewSupplier.xfdl";
        	objChild.openalign = "center middle";
        	objChild.dragmovetype = "all";
        	objChild.overlaycolor = "RGBA(0, 0, 0, 0.2)";
        	objChild.set_showtitlebar(false);

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callbackPopup");
        };

        // Supplier row -> edit popup
        this.grd_supplier_oncellclick = function(obj,e)
        {
        	if(e.row < 0) return;

        	var objChild = new ChildFrame("popEditSupplier", 0, 0, 480, 626);
        	objChild.formurl = "Base::Form_NewSupplier.xfdl";
        	objChild.openalign = "center middle";
        	objChild.dragmovetype = "all";
        	objChild.overlaycolor = "RGBA(0, 0, 0, 0.2)";
        	objChild.set_showtitlebar(false);

            objChild.showModal(this.getOwnerFrame()
                             , {pSupplierId:this.ds_supplier.getColumn(e.row, "SUPPLIER_ID")}
                             , this
                             , "fn_callbackPopup");
        };

        this.fn_callbackPopup = function(sPopupId, sReturn)
        {
        	if(sReturn == undefined){
        		sReturn = "";
        	}

        	if(sPopupId == "popNewSupplier"){
        		if(sReturn.length > 0){
        			this.gfn_alert("msg.kanban.supplier.added", [sReturn]);
        			this.fn_searchList();
        		}
        	}
        	else if(sPopupId == "popEditSupplier"){
        		if(sReturn.length > 0){
        			this.gfn_alert("msg.kanban.supplier.updated", [sReturn]);
        			this.fn_searchList();
        		}
        	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_filter.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.grd_supplier.addEventHandler("oncellclick",this.grd_supplier_oncellclick,this);
            this.pdv_filter.form.btn_reset.addEventHandler("onclick",this.pdv_filter_btn_reset_onclick,this);
            this.pdv_filter.form.btn_apply.addEventHandler("onclick",this.pdv_filter_btn_apply_onclick,this);
        };
        this.loadIncludeScript("Form_Suppliers.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
