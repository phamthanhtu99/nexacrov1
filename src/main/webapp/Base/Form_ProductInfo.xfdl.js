(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_ProductInfo");
            this.set_titletext("Product Info");
            this.set_background("#f0f1f3");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,648);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "PRODUCT_ID","type" : "STRING","size" : "20"}]},"Rows" : [{}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_stock", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_movement", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_purchase", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_adjust", this);
            obj._setContents({});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta_bg","24","16",null,null,"24","16",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("#ffffff");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_back","40","28","150","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("‹  Back to Inventory");
            obj.set_background("transparent");
            obj.set_color("#1a5fd9");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","60","600","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Loading...");
            obj.set_color("#383e49");
            obj.set_font("600 20px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_availability",null,"64","160","28","40",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_textAlign("center");
            obj.set_borderRadius("14px");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_detail","40","104",null,null,"40","28",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_overview",this.tab_detail);
            obj.set_text("Overview");
            this.tab_detail.addChild(obj.name, obj);

            obj = new Static("sta_h_primary","16","14","300","28",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("0");
            obj.set_text("Primary Details");
            obj.set_color("#383e49");
            obj.set_font("600 16px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_name","16","48","150","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("1");
            obj.set_text("Product name");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_name","166","48","330","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_code","16","78","150","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("3");
            obj.set_text("Product ID");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_code","166","78","330","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("4");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_category","16","108","150","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("5");
            obj.set_text("Category");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_category","166","108","330","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("6");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_price","16","138","150","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("7");
            obj.set_text("Buying price");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_price","166","138","330","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("8");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_unit","16","168","150","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("9");
            obj.set_text("Unit");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_unit","166","168","330","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("10");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_expiry","16","198","150","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("11");
            obj.set_text("Expiry Date");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_expiry","166","198","330","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("12");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_threshold","16","228","150","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("13");
            obj.set_text("Threshold Value");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_threshold","166","228","330","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("14");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_h_supplier","16","270","300","28",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("15");
            obj.set_text("Supplier Details");
            obj.set_color("#383e49");
            obj.set_font("600 16px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_supplier","16","304","150","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("16");
            obj.set_text("Supplier name");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_supplier","166","304","330","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("17");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_contact","16","334","150","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("18");
            obj.set_text("Contact number");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_contact","166","334","330","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("19");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_email","16","364","150","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("20");
            obj.set_text("Email");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_email","166","364","330","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_return","16","394","150","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("22");
            obj.set_text("Return type");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_return","166","394","330","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("23");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new ImageViewer("img_photo","560","16","150","150",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("24");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px dashed #98a2b3");
            obj.set_borderRadius("8px");
            obj.set_background("#f9fafb");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_noimage","560","16","150","150",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("25");
            obj.set_text("No image");
            obj.set_textAlign("center");
            obj.set_color("#98a2b3");
            obj.set_font("12px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_purchased","560","180","140","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("26");
            obj.set_text("Opening stock");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_purchased","700","180","200","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("27");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_quantity","560","210","140","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("28");
            obj.set_text("Remaining stock");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_quantity","700","210","200","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("29");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_sold","560","240","140","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("30");
            obj.set_text("Sold");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_sold","700","240","200","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("31");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_created","560","270","140","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("32");
            obj.set_text("Added on");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_created","700","270","200","26",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("33");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Static("sta_h_stock","560","304","300","28",null,null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("34");
            obj.set_text("Stock Locations");
            obj.set_color("#383e49");
            obj.set_font("600 16px \"Segoe UI\"");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Grid("grd_stock","560","336",null,"110","16",null,null,null,null,null,this.tab_detail.tpg_overview.form);
            obj.set_taborder("35");
            obj.set_autofittype("col");
            obj.set_border("1px solid #f0f1f3");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"220\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Store Name\" textAlign=\"left\" background=\"#f9fafb\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 8px\"/><Cell col=\"1\" text=\"Stock in hand\" textAlign=\"right\" background=\"#f9fafb\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 8px\"/></Band><Band id=\"body\"><Cell text=\"bind:LOCATION_NAME\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 8px\"/><Cell col=\"1\" text=\"bind:QUANTITY\" textAlign=\"right\" color=\"#10a760\" font=\"600 13px &quot;Segoe UI&quot;\" padding=\"0px 8px\"/></Band></Format></Formats>");
            this.tab_detail.tpg_overview.addChild(obj.name, obj);

            obj = new Tabpage("tpg_purchase",this.tab_detail);
            obj.set_text("Purchases");
            this.tab_detail.addChild(obj.name, obj);

            obj = new Grid("grd_movement","16","16",null,null,"16","16",null,null,null,null,this.tab_detail.tpg_purchase.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"280\"/><Column size=\"150\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"Date\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"1\" text=\"Quantity\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"2\" text=\"Unit price\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"3\" text=\"Note\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"4\" text=\"By\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:DATE_TEXT\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"1\" text=\"bind:QTY_TEXT\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"2\" text=\"bind:PRICE_TEXT\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"3\" text=\"bind:NOTE\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"4\" text=\"bind:USER_NAME\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/></Band></Format></Formats>");
            this.tab_detail.tpg_purchase.addChild(obj.name, obj);

            obj = new Static("sta_nodata","16","70",null,"40","16",null,null,null,null,null,this.tab_detail.tpg_purchase.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_text("Nothing recorded yet.");
            obj.set_textAlign("center");
            obj.set_color("#858d9d");
            obj.set_font("14px \"Segoe UI\"");
            this.tab_detail.tpg_purchase.addChild(obj.name, obj);

            obj = new Tabpage("tpg_adjust",this.tab_detail);
            obj.set_text("Adjustments");
            this.tab_detail.addChild(obj.name, obj);

            obj = new Grid("grd_movement","16","16",null,null,"16","16",null,null,null,null,this.tab_detail.tpg_adjust.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"280\"/><Column size=\"150\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"Date\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"1\" text=\"Quantity\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"2\" text=\"Unit price\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"3\" text=\"Note\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"4\" text=\"By\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:DATE_TEXT\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"1\" text=\"bind:QTY_TEXT\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"2\" text=\"bind:PRICE_TEXT\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"3\" text=\"bind:NOTE\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"4\" text=\"bind:USER_NAME\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/></Band></Format></Formats>");
            this.tab_detail.tpg_adjust.addChild(obj.name, obj);

            obj = new Static("sta_nodata","16","70",null,"40","16",null,null,null,null,null,this.tab_detail.tpg_adjust.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_text("Nothing recorded yet.");
            obj.set_textAlign("center");
            obj.set_color("#858d9d");
            obj.set_font("14px \"Segoe UI\"");
            this.tab_detail.tpg_adjust.addChild(obj.name, obj);

            obj = new Tabpage("tpg_history",this.tab_detail);
            obj.set_text("History");
            this.tab_detail.addChild(obj.name, obj);

            obj = new Grid("grd_movement","16","16",null,null,"16","16",null,null,null,null,this.tab_detail.tpg_history.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"240\"/><Column size=\"140\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"Date\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"1\" text=\"Type\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"2\" text=\"Quantity\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"3\" text=\"Unit price\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"4\" text=\"Note\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"5\" text=\"By\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:DATE_TEXT\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"1\" text=\"bind:TYPE_NAME\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"2\" text=\"bind:QTY_TEXT\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"3\" text=\"bind:PRICE_TEXT\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"4\" text=\"bind:NOTE\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"5\" text=\"bind:USER_NAME\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/></Band></Format></Formats>");
            this.tab_detail.tpg_history.addChild(obj.name, obj);

            obj = new Static("sta_nodata","16","70",null,"40","16",null,null,null,null,null,this.tab_detail.tpg_history.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_text("Nothing recorded yet.");
            obj.set_textAlign("center");
            obj.set_color("#858d9d");
            obj.set_font("14px \"Segoe UI\"");
            this.tab_detail.tpg_history.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab_detail.tpg_overview.form
            obj = new Layout("default","",0,0,this.tab_detail.tpg_overview.form,function(p){});
            this.tab_detail.tpg_overview.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_detail.tpg_purchase.form
            obj = new Layout("default","",0,0,this.tab_detail.tpg_purchase.form,function(p){});
            this.tab_detail.tpg_purchase.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_detail.tpg_adjust.form
            obj = new Layout("default","",0,0,this.tab_detail.tpg_adjust.form,function(p){});
            this.tab_detail.tpg_adjust.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_detail.tpg_history.form
            obj = new Layout("default","",0,0,this.tab_detail.tpg_history.form,function(p){});
            this.tab_detail.tpg_history.form.addLayout(obj.name, obj);

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
        this.addIncludeScript("Form_ProductInfo.xfdl","Lib::Lib_Comm.xjs");
        this.registerScript("Form_ProductInfo.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_Comm.xjs"); /*include "Lib::Lib_Comm.xjs"*/;

        this.CONST_MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        this.Form_onload = function(obj,e)
        {
        	// grids in tab pages are bound by script: the datasets live in this form
        	this.tab_detail.tpg_overview.form.grd_stock.set_binddataset(this.ds_stock);
        	this.tab_detail.tpg_purchase.form.grd_movement.set_binddataset(this.ds_purchase);
        	this.tab_detail.tpg_adjust.form.grd_movement.set_binddataset(this.ds_adjust);
        	this.tab_detail.tpg_history.form.grd_movement.set_binddataset(this.ds_movement);

        	this.fn_searchDetail();
        };

        // product with its supplier (ds_product), stock per location (ds_stock), every stock movement (ds_movement)
        this.fn_searchDetail = function()
        {
        	var oLayout = this.parent.parent;
        	var sProductId = (oLayout && oLayout.fv_sProductId) ? oLayout.fv_sProductId : "1";
        	this.ds_cond.setColumn(0, "PRODUCT_ID", sProductId);

            var sSvcID    = "svcProductDetail";
            var sURL      = "KanbanUrl::product/detail";
            var sInDs     = "ds_cond=ds_cond";
            var sOutDs    = "ds_product=ds_product ds_stock=ds_stock ds_movement=ds_movement";
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

        	if(svcId == "svcProductDetail"){
        		this.fn_showProduct();
        		this.fn_showMovement();
        		// no row is selected at first in the read-only grids
        		this.ds_stock.set_rowposition(-1);
        		this.ds_movement.set_rowposition(-1);
        		this.ds_purchase.set_rowposition(-1);
        		this.ds_adjust.set_rowposition(-1);
        	}
        };

        // value of ds_product, "-" when it is empty
        this.fn_getValue = function(sColId)
        {
        	var sValue = this.ds_product.getColumn(0, sColId);
        	return this.gfn_isNull(sValue) ? "-" : String(sValue);
        };

        // yyyyMMdd -> dd MMM yyyy
        this.fn_formatDate = function(sDate)
        {
        	if(this.gfn_isNull(sDate) || String(sDate).length < 8) return "-";
        	sDate = String(sDate);
        	return sDate.substr(6, 2) + " " + this.CONST_MONTH[parseInt(sDate.substr(4, 2), 10) - 1] + " " + sDate.substr(0, 4);
        };

        // yyyyMMddHHmmss -> dd/MM/yyyy HH:mm
        this.fn_formatDateTime = function(sDate)
        {
        	if(this.gfn_isNull(sDate) || String(sDate).length < 12) return "";
        	sDate = String(sDate);
        	return sDate.substr(6, 2) + "/" + sDate.substr(4, 2) + "/" + sDate.substr(0, 4) + " " + sDate.substr(8, 2) + ":" + sDate.substr(10, 2);
        };

        this.fn_showProduct = function()
        {
        	var oOverview = this.tab_detail.tpg_overview.form;
        	var sUnit = this.fn_getValue("UNIT");

        	this.sta_title.set_text(this.fn_getValue("PRODUCT_NAME"));
        	this.fn_showAvailability();

        	oOverview.sta_name.set_text(this.fn_getValue("PRODUCT_NAME"));
        	oOverview.sta_code.set_text(this.fn_getValue("PRODUCT_CODE"));
        	oOverview.sta_category.set_text(this.fn_getValue("CATEGORY_NAME"));
        	oOverview.sta_price.set_text("₹" + this.gfn_appendComma(this.ds_product.getColumn(0, "BUYING_PRICE")));
        	oOverview.sta_unit.set_text(sUnit);
        	oOverview.sta_expiry.set_text(this.fn_formatDate(this.ds_product.getColumn(0, "EXPIRY_DATE")));
        	oOverview.sta_threshold.set_text(this.fn_getValue("THRESHOLD_VALUE") + " " + sUnit);

        	var bSupplier = !this.gfn_isNull(this.ds_product.getColumn(0, "SUPPLIER_NAME"));
        	oOverview.sta_supplier.set_text(bSupplier ? this.fn_getValue("SUPPLIER_NAME") : "No supplier for this product yet");
        	oOverview.sta_contact.set_text(this.fn_getValue("SUPPLIER_CONTACT"));
        	oOverview.sta_email.set_text(this.fn_getValue("SUPPLIER_EMAIL"));
        	oOverview.sta_return.set_text(this.fn_getValue("SUPPLIER_RETURN_TYPE_NAME"));

        	oOverview.sta_purchased.set_text(this.fn_getValue("PURCHASED_QTY") + " " + sUnit);
        	oOverview.sta_quantity.set_text(this.fn_getValue("QUANTITY") + " " + sUnit);
        	oOverview.sta_sold.set_text(this.fn_getValue("SOLD_QTY") + " " + sUnit);
        	oOverview.sta_created.set_text(this.fn_formatDate(this.ds_product.getColumn(0, "CREATED_DATE")));

        	// IMAGE_DATA is the path returned by file/upload ("file/<name>")
        	var sImage = this.ds_product.getColumn(0, "IMAGE_DATA");
        	oOverview.sta_noimage.set_visible(this.gfn_isNull(sImage));
        	if(!this.gfn_isNull(sImage)){
        		oOverview.img_photo.set_image("url('" + nexacro.getEnvironment().services["KanbanUrl"].url + sImage + "')");
        	}
        };

        this.fn_showAvailability = function()
        {
        	var sCode = this.ds_product.getColumn(0, "AVAILABILITY");
        	var oColor = {IN : ["#10a760", "#ecfdf3"], LOW : ["#e19133", "#fffaeb"], OUT : ["#da3e33", "#fef3f2"]}[sCode] || ["#667085", "#f2f4f7"];
        	this.sta_availability.set_text(this.fn_getValue("AVAILABILITY_NAME"));
        	this.sta_availability.set_color(oColor[0]);
        	this.sta_availability.set_background(oColor[1]);
        };

        // adds the display columns, then fills the Purchases / Adjustments copies
        this.fn_showMovement = function()
        {
        	var objDs = this.ds_movement;
        	objDs.set_enableevent(false);
        	objDs.addColumn("DATE_TEXT" , "STRING");
        	objDs.addColumn("TYPE_NAME" , "STRING");
        	objDs.addColumn("QTY_TEXT"  , "STRING");
        	objDs.addColumn("PRICE_TEXT", "STRING");
        	for(var i=0; i<objDs.rowcount; i++){
        		var nQty   = parseInt(objDs.getColumn(i, "QUANTITY"), 10);
        		var vPrice = objDs.getColumn(i, "UNIT_PRICE");
        		objDs.setColumn(i, "DATE_TEXT" , this.fn_formatDateTime(objDs.getColumn(i, "MOVEMENT_DATE")));
        		objDs.setColumn(i, "TYPE_NAME" , objDs.getColumn(i, "MOVEMENT_TYPE_NAME"));
        		objDs.setColumn(i, "QTY_TEXT"  , (nQty > 0 ? "+" : "") + nQty);
        		objDs.setColumn(i, "PRICE_TEXT", this.gfn_isNull(vPrice) ? "-" : "₹" + this.gfn_appendComma(vPrice));
        	}
        	objDs.set_enableevent(true);

        	this.fn_copyMovement(this.ds_purchase, "PURCHASE"  , this.tab_detail.tpg_purchase.form);
        	this.fn_copyMovement(this.ds_adjust  , "ADJUSTMENT", this.tab_detail.tpg_adjust.form);
        	this.tab_detail.tpg_history.form.sta_nodata.set_visible(objDs.rowcount == 0);
        };

        this.fn_copyMovement = function(objTarget, sType, oPage)
        {
        	objTarget.copyData(this.ds_movement);
        	objTarget.filter("MOVEMENT_TYPE=='" + sType + "'");
        	oPage.sta_nodata.set_visible(objTarget.rowcount == 0);
        };

        // Back to Inventory Button
        this.btn_back_onclick = function(obj,e)
        {
        	var oLayout = this.parent.parent;
        	if(oLayout && oLayout.fn_openMenu){
        		oLayout.fn_openMenu("inventory", "Inventory");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_back.addEventHandler("onclick",this.btn_back_onclick,this);
        };
        this.loadIncludeScript("Form_ProductInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
