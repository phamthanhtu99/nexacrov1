(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_NewSupplier");
            this.set_titletext("New Supplier");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,626);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_supplier", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "SUPPLIER_NAME","type" : "STRING","size" : "100"},{"id" : "PRODUCT_NAME","type" : "STRING","size" : "100"},{"id" : "CATEGORY_CODE","type" : "STRING","size" : "30"},{"id" : "BUYING_PRICE","type" : "STRING","size" : "15"},{"id" : "CONTACT_NUMBER","type" : "STRING","size" : "15"},{"id" : "RETURN_TYPE","type" : "STRING","size" : "20"},{"id" : "IMAGE_DATA","type" : "STRING","size" : "2000000"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_result", this);
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


            obj = new FileDialog("fdl_image", this);
            obj.set_filter("Images(*.png;*.jpg;*.jpeg;*.gif)|*.png;*.jpg;*.jpeg;*.gif|");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("fut_image", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_title","24","16","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("New Supplier");
            obj.set_color("#383e49");
            obj.set_font("600 20px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_line_top","0","60",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_background("#f0f1f3");
            this.addChild(obj.name, obj);

            obj = new Static("sta_drop","24","72","432","100",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#f9fafb");
            obj.set_border("1px dashed #d0d5dd");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_photo","48","86","72","72",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_image("url(\'imagerc::kanban/img_avatar.png\')");
            obj.set_stretch("fit");
            obj.set_border("0px none");
            obj.set_background("transparent");
            obj.set_borderRadius("36px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_drag","140","92","300","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("Drag image here");
            obj.set_color("#667085");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_or","140","112","20","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("or");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_browse","160","112","110","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Browse image");
            obj.set_color("#1a5fd9");
            obj.set_font("600 13px \"Segoe UI\"");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_name","24","186","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("Supplier Name");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_name","160","186","296","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_maxlength("100");
            obj.set_displaynulltext("Enter supplier name");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_product","24","246","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("Product");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_product","160","246","296","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            obj.set_displaynulltext("Enter product");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_category","24","306","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("Category");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_category","160","306","296","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_category");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CODE_NAME");
            obj.set_displaynulltext("Select product category");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_price","24","366","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("Buying Price");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_price","160","366","296","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maxlength("12");
            obj.set_inputtype("digit");
            obj.set_displaynulltext("Enter buying price");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_contact","24","426","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("Contact Number");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_contact","160","426","296","40",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_maxlength("15");
            obj.set_inputtype("digit");
            obj.set_displaynulltext("Enter supplier contact number");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_padding("0px 12px");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_l_type","24","486","130","40",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("Type");
            obj.set_color("#48505e");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_not_taking","160","486","144","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Not taking return");
            obj.set_background("#ffffff");
            obj.set_color("#5d6679");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_taking","312","486","144","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("Taking return");
            obj.set_background("#ffffff");
            obj.set_color("#5d6679");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_line_bottom","0","556",null,"1","0",null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_background("#f0f1f3");
            this.addChild(obj.name, obj);

            obj = new Button("btn_discard","240","570","88","40",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Discard");
            obj.set_background("#ffffff");
            obj.set_color("#5d6679");
            obj.set_borderRadius("8px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","336","570","120","40",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Add Supplier");
            obj.set_background("#1a5fd9");
            obj.set_color("#ffffff");
            obj.set_borderRadius("8px");
            obj.set_border("0px none");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,626,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("bind_name","edt_name","value","ds_supplier","SUPPLIER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_product","edt_product","value","ds_supplier","PRODUCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_category","cmb_category","value","ds_supplier","CATEGORY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_price","edt_price","value","ds_supplier","BUYING_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("bind_contact","edt_contact","value","ds_supplier","CONTACT_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("Form_NewSupplier.xfdl","Lib::Lib_Comm.xjs");
        this.registerScript("Form_NewSupplier.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_Comm.xjs"); /*include "Lib::Lib_Comm.xjs"*/;

        this.fv_oType = null;

        this.Form_onload = function(obj,e)
        {
        	this.fn_searchCode();
        	this.edt_name.setFocus();
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
        	}
        	else if(svcId == "svcSaveSupplier"){
        		this.close(this.ds_supplier.getColumn(0, "SUPPLIER_NAME"));
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
        	this.ds_supplier.setColumn(0, "IMAGE_DATA", sPath);
        	this.img_photo.set_stretch("fixaspectratio");
        	this.img_photo.set_image("url('" + nexacro.getEnvironment().services["KanbanUrl"].url + sPath + "')");
        };

        this.fut_image_onerror = function(obj,e)
        {
        	this.btn_save.set_enable(true);
        	this.gfn_alert("msg.err.validator", [e.errormsg]);
        };

        this.fn_setTypeStyle = function(objBtn, bSelected)
        {
        	objBtn.set_background(bSelected ? "#eff4ff" : "#ffffff");
        	objBtn.set_color(bSelected ? "#1a5fd9" : "#5d6679");
        	objBtn.set_border(bSelected ? "1px solid #1a5fd9" : "1px solid #d0d5dd");
        	objBtn.set_font((bSelected ? "600 " : "") + "13px \"Segoe UI\"");
        };

        // Not taking return / Taking return Button
        this.btn_type_onclick = function(obj,e)
        {
        	if(this.fv_oType){
        		this.fn_setTypeStyle(this.fv_oType, false);
        	}
        	this.fn_setTypeStyle(obj, true);
        	this.fv_oType = obj;
        	this.ds_supplier.setColumn(0, "RETURN_TYPE", obj == this.btn_taking ? "TAKING" : "NOT_TAKING");
        };

        // Add Supplier Button
        this.btn_save_onclick = function(obj,e)
        {
        	this.gfn_clearValidation(this.ds_supplier);
        	this.gfn_setValidation(this.ds_supplier, "SUPPLIER_NAME" , "Supplier name" , "required");
        	this.gfn_setValidation(this.ds_supplier, "PRODUCT_NAME"  , "Product"       , "required");
        	this.gfn_setValidation(this.ds_supplier, "CATEGORY_CODE" , "Category"      , "required");
        	this.gfn_setValidation(this.ds_supplier, "BUYING_PRICE"  , "Buying price"  , "required,digits");
        	this.gfn_setValidation(this.ds_supplier, "CONTACT_NUMBER", "Contact number", "required,digits,minlength:9");
        	this.gfn_setValidation(this.ds_supplier, "RETURN_TYPE"   , "Type"          , "required");
        	if(this.gfn_validation(this.ds_supplier, "A") == false) return;

        	this.btn_save.set_enable(false);

            var sSvcID    = "svcSaveSupplier";
            var sURL      = "KanbanUrl::supplier/insert";
            var sInDs     = "ds_supplier=ds_supplier";
            var sOutDs    = "ds_result=ds_result";
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
            this.btn_not_taking.addEventHandler("onclick",this.btn_type_onclick,this);
            this.btn_taking.addEventHandler("onclick",this.btn_type_onclick,this);
            this.btn_discard.addEventHandler("onclick",this.btn_discard_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.fdl_image.addEventHandler("onclose",this.fdl_image_onclose,this);
            this.fut_image.addEventHandler("onsuccess",this.fut_image_onsuccess,this);
            this.fut_image.addEventHandler("onerror",this.fut_image_onerror,this);
        };
        this.loadIncludeScript("Form_NewSupplier.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
