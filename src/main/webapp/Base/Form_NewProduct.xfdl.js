(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_NewProduct");
            this.set_titletext("New Product");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,696);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_product", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "PRODUCT_ID","type" : "STRING","size" : "20"},{"id" : "PRODUCT_NAME","type" : "STRING","size" : "100"},{"id" : "PRODUCT_CODE","type" : "STRING","size" : "30"},{"id" : "CATEGORY_CODE","type" : "STRING","size" : "30"},{"id" : "BUYING_PRICE","type" : "STRING","size" : "15"},{"id" : "QUANTITY","type" : "STRING","size" : "10"},{"id" : "UNIT","type" : "STRING","size" : "20"},{"id" : "EXPIRY_DATE","type" : "STRING","size" : "8"},{"id" : "THRESHOLD_VALUE","type" : "STRING","size" : "10"},{"id" : "IMAGE_DATA","type" : "STRING","size" : "2000000"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_detail", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cond", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "PRODUCT_ID","type" : "STRING","size" : "20"}]},"Rows" : [{}]});
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


            obj = new FileDialog("fdl_image", this);
            obj.set_filter("Images(*.png;*.jpg;*.jpeg;*.gif)|*.png;*.jpg;*.jpeg;*.gif|");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fut_image", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","24","16","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("New Product");
            obj.set_color("#383e49");
            obj.set_font("600 20px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_line_top","0","60",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#f0f1f3");
            this.addChild(obj.name, obj);

            obj = new Static("sta_drop","24","72","432","96",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#f9fafb");
            obj.set_border("1px dashed #d0d5dd");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_photo","44","84","72","72",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px dashed #98a2b3");
            obj.set_borderRadius("8px");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_drag","136","90","300","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Drag image here");
            obj.set_color("#667085");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_or","136","110","20","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("or");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_browse","156","110","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Browse image");
            obj.set_color("#1a5fd9");
            obj.set_font("600 13px \"Segoe UI\"");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_name","24","180","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Product Name");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","160","180","296","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maxlength("100");
            obj.set_displaynulltext("Enter product name");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_code","24","234","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Product ID");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_code","160","234","296","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maxlength("30");
            obj.set_displaynulltext("Enter product ID");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_category","24","288","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Category");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_category","160","288","296","38",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_category");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_displaynulltext("Select product category");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_price","24","342","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Buying Price");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_price","160","342","296","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maxlength("12");
            obj.set_inputtype("number");
            obj.set_displaynulltext("Enter buying price");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_quantity","24","396","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Quantity");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_quantity","160","396","296","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maxlength("9");
            obj.set_inputtype("digit");
            obj.set_displaynulltext("Enter product quantity");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_unit","24","450","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Unit");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_unit","160","450","296","38",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_maxlength("20");
            obj.set_displaynulltext("Enter product unit");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_expiry","24","504","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Expiry Date");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_expiry","160","504","296","38",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_dateformat("dd/MM/yyyy");
            obj.set_displaynulltext("Enter expiry date");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_threshold","24","558","130","38",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("Threshold Value");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_threshold","160","558","296","38",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maxlength("9");
            obj.set_inputtype("digit");
            obj.set_displaynulltext("Enter threshold value");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_line_bottom","0","626",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_background("#f0f1f3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_discard","240","640","88","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Discard");
            obj.set_background("#ffffff");
            obj.set_color("#5d6679");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","336","640","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("Add Product");
            obj.set_background("#1a5fd9");
            obj.set_color("#ffffff");
            obj.set_borderRadius("8px");
            obj.set_border("0px none");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,696,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("bind_name","edt_name","value","ds_product","PRODUCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_code","edt_code","value","ds_product","PRODUCT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_category","cmb_category","value","ds_product","CATEGORY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_price","edt_price","value","ds_product","BUYING_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_quantity","edt_quantity","value","ds_product","QUANTITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_unit","edt_unit","value","ds_product","UNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_expiry","cal_expiry","value","ds_product","EXPIRY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_threshold","edt_threshold","value","ds_product","THRESHOLD_VALUE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_NewProduct.xfdl","Lib::Lib_Comm.xjs");
        this.registerScript("Form_NewProduct.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_Comm.xjs"); /*include "Lib::Lib_Comm.xjs"*/;

        this.fv_sProductId = "";

        this.Form_onload = function(obj,e)
        {
        	// edit mode: Form_ProductInfo opens this popup with {pProductId}
        	this.fv_sProductId = this.gfn_nvl(this.getOwnerFrame().pProductId, "");
        	if(this.fn_isEdit()){
        		this.sta_title.set_text("Edit Product");
        		this.btn_save.set_text("Save Changes");
        		// the quantity changes with stock movements, not here
        		this.edt_quantity.set_readonly(true);
        		this.edt_quantity.set_background("#f2f4f7");
        	}
        	this.fn_searchCode();
        	this.edt_name.setFocus();
        };

        this.fn_isEdit = function()
        {
        	return this.fv_sProductId != "";
        };

        // the product to edit (product/detail), after the category codes are loaded
        this.fn_searchDetail = function()
        {
        	this.ds_cond.setColumn(0, "PRODUCT_ID", this.fv_sProductId);

            var sSvcID    = "svcProductDetail";
            var sURL      = "KanbanUrl::product/detail";
            var sInDs     = "ds_cond=ds_cond";
            var sOutDs    = "ds_detail=ds_product";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        // copies the detail into the bound one-row ds_product
        this.fn_setDetail = function()
        {
        	for(var i=0; i<this.ds_product.getColCount(); i++){
        		var sColId = this.ds_product.getColID(i);
        		this.ds_product.setColumn(0, sColId, this.ds_detail.getColumn(0, sColId));
        	}
        	// 257.00 -> 257
        	this.ds_product.setColumn(0, "BUYING_PRICE", String(Number(this.ds_detail.getColumn(0, "BUYING_PRICE"))));

        	var sImage = this.ds_detail.getColumn(0, "IMAGE_DATA");
        	if(!this.gfn_isNull(sImage)){
        		this.img_photo.set_image("url('" + nexacro.getEnvironment().services["KanbanUrl"].url + sImage + "')");
        	}
        };

        // common codes of the Category combo
        this.fn_searchCode = function()
        {
        	this.ds_codeCond.setColumn(0, "GROUP_CODES", "CATEGORY");

            var sSvcID    = "svcCommonCode";
            var sURL      = "KanbanUrl::common/code";
            var sInDs     = "ds_cond=ds_codeCond";
            var sOutDs    = "ds_code=ds_code";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        this.fn_callback = function(svcId, errCd, errMsg)
        {
        	if(errCd < 0){
        		this.btn_save.set_enable(true);
        		this.gfn_alert("msg.err.validator", [errMsg]);
        		return;
        	}

        	if(svcId == "svcCommonCode"){
        		var arrCode = new Array();
        		arrCode.push({codeGroup:"CATEGORY", obj:this.cmb_category, first:"2::Select product category"});
        		this.gfn_getCommonCode(arrCode, this.ds_code);

        		if(this.fn_isEdit()){
        			this.fn_searchDetail();
        		}
        	}
        	else if(svcId == "svcProductDetail"){
        		this.fn_setDetail();
        	}
        	else if(svcId == "svcSaveProduct" || svcId == "svcUpdateProduct"){
        		this.close(this.ds_product.getColumn(0, "PRODUCT_NAME"));
        	}
        };

        // Browse image Link
        this.sta_browse_onclick = function(obj,e)
        {
        	this.fdl_image.open("Select image", FileDialog.LOAD);
        };

        this.fdl_image_onclose = function(obj,e)
        {
        	if(e.virtualfiles && e.virtualfiles.length > 0){
        		this.fn_uploadImage(e.virtualfiles[0]);
        	}
        };

        // Drag image here
        this.Form_ondrop = function(obj,e)
        {
        	if(e.filelist && e.filelist.length > 0){
        		this.fn_uploadImage(e.filelist[0]);
        	}

        };

        // uploads the image to file/upload (FileUpTransfer works in Nexacro Runtime and in a browser)
        this.fn_uploadImage = function(objFile)
        {
        	if(!/\.(png|jpe?g|gif)$/i.test(objFile.filename)){
        		this.gfn_alert("msg.kanban.image.type");
        		return;
        	}
        	// Save waits for the upload
        	this.btn_save.set_enable(false);
        	this.fut_image.clearFileList();
        	this.fut_image.addFile(objFile.filename, objFile);
        	this.fut_image.upload("KanbanUrl::file/upload");
        };

        this.fut_image_onsuccess = function(obj,e)
        {
        	this.btn_save.set_enable(true);

        	// ds_file (FILE_PATH = "file/<name>")
        	var sPath = "";
        	var arrDs = e.datasets || [];
        	for(var i=0; i<arrDs.length; i++){
        		if(arrDs[i] && arrDs[i].getColIndex("FILE_PATH") > -1 && arrDs[i].rowcount > 0){
        			sPath = arrDs[i].getColumn(0, "FILE_PATH");
        		}
        	}
        	if(this.gfn_isNull(sPath)){
        		this.gfn_alert("msg.kanban.image.read");
        		return;
        	}
        	this.ds_product.setColumn(0, "IMAGE_DATA", sPath);
        	this.img_photo.set_image("url('" + nexacro.getEnvironment().services["KanbanUrl"].url + sPath + "')");
        };

        this.fut_image_onerror = function(obj,e)
        {
        	this.btn_save.set_enable(true);
        	this.gfn_alert("msg.err.validator", [e.errormsg]);
        };

        // Add Product / Save Changes Button
        this.btn_save_onclick = function(obj,e)
        {
        	this.gfn_clearValidation(this.ds_product);
        	this.gfn_setValidation(this.ds_product, "PRODUCT_NAME"   , "Product name"   , "required");
        	this.gfn_setValidation(this.ds_product, "PRODUCT_CODE"   , "Product ID"     , "required");
        	this.gfn_setValidation(this.ds_product, "CATEGORY_CODE"  , "Category"       , "required");
        	this.gfn_setValidation(this.ds_product, "BUYING_PRICE"   , "Buying price"   , "required,min:0");
        	this.gfn_setValidation(this.ds_product, "QUANTITY"       , "Quantity"       , "required,digits");
        	this.gfn_setValidation(this.ds_product, "UNIT"           , "Unit"           , "required");
        	this.gfn_setValidation(this.ds_product, "EXPIRY_DATE"    , "Expiry date"    , "required,date");
        	this.gfn_setValidation(this.ds_product, "THRESHOLD_VALUE", "Threshold value", "required,digits");
        	if(this.gfn_validation(this.ds_product, "A") == false) return;

        	this.btn_save.set_enable(false);

            var sSvcID    = this.fn_isEdit() ? "svcUpdateProduct" : "svcSaveProduct";
            var sURL      = this.fn_isEdit() ? "KanbanUrl::product/update" : "KanbanUrl::product/insert";
            var sInDs     = "ds_product=ds_product";
            var sOutDs    = this.fn_isEdit() ? "" : "ds_result=ds_result";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        // Discard Button
        this.btn_discard_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ondrop",this.Form_ondrop,this);
            this.sta_browse.addEventHandler("onclick",this.sta_browse_onclick,this);
            this.btn_discard.addEventHandler("onclick",this.btn_discard_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.fdl_image.addEventHandler("onclose",this.fdl_image_onclose,this);
            this.fut_image.addEventHandler("onsuccess",this.fut_image_onsuccess,this);
            this.fut_image.addEventHandler("onerror",this.fut_image_onerror,this);
        };
        this.loadIncludeScript("Form_NewProduct.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
