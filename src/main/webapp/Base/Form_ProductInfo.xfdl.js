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
            obj.set_taborder("20");
            obj.set_background("#ffffff");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_back","40","24","150","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("‹  Back to Inventory");
            obj.set_background("transparent");
            obj.set_color("#858d9d");
            obj.set_border("0px none");
            obj.set_textAlign("left");
            obj.set_font("12px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","40","48","560","36",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("Loading...");
            obj.set_color("#383e49");
            obj.set_font("600 20px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_edit",null,"46","90","36","150",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Edit");
            obj.set_icon("url(\'imagerc::kanban/ic_edit.png\')");
            obj.set_textPadding("0px 0px 0px 6px");
            obj.set_background("#ffffff");
            obj.set_color("#48505e");
            obj.set_borderRadius("4px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_download",null,"46","100","36","40",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Download");
            obj.set_background("#ffffff");
            obj.set_color("#48505e");
            obj.set_borderRadius("4px");
            obj.set_border("1px solid #d0d5dd");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tab_overview","40","92","96","36",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Overview");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#1a5fd9");
            obj.set_font("600 14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tab_purchase","136","92","104","36",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Purchases");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#5d6679");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tab_adjust","240","92","116","36",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Adjustments");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#5d6679");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_tab_history","356","92","88","36",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("History");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_color("#5d6679");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_tab_line","40","128",null,"1","40",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_background("#e4e7ec");
            this.addChild(obj.name, obj);

            obj = new Static("sta_tab_mark","40","127","96","2",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_background("#1a5fd9");
            this.addChild(obj.name, obj);

            obj = new Div("div_overview","40","132",null,null,"40","28",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_h_primary","0","12","300","28",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("0");
            obj.set_text("Primary Details");
            obj.set_color("#383e49");
            obj.set_font("600 15px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_name","0","48","180","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("1");
            obj.set_text("Product name");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_name","190","48","360","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_code","0","82","180","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("3");
            obj.set_text("Product ID");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_code","190","82","360","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("4");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_category","0","116","180","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("5");
            obj.set_text("Product category");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_category","190","116","360","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("6");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_expiry","0","150","180","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("7");
            obj.set_text("Expiry Date");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_expiry","190","150","360","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("8");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_threshold","0","184","180","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("9");
            obj.set_text("Threshold Value");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_threshold","190","184","360","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("10");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_h_supplier","0","224","300","28",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("11");
            obj.set_text("Supplier Details");
            obj.set_color("#383e49");
            obj.set_font("600 15px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_supplier","0","260","180","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("12");
            obj.set_text("Supplier name");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_supplier","190","260","360","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("13");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_contact","0","294","180","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("14");
            obj.set_text("Contact Number");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_contact","190","294","360","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("15");
            obj.set_text("-");
            obj.set_color("#383e49");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_h_stock","0","334","300","28",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("16");
            obj.set_text("Stock Locations");
            obj.set_color("#383e49");
            obj.set_font("600 15px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Grid("grd_stock","0","368","560",null,null,"0",null,null,null,null,this.div_overview.form);
            obj.set_taborder("17");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"380\"/><Column size=\"180\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"Store Name\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"1\" text=\"Stock in hand\" textAlign=\"right\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:LOCATION_NAME\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"1\" text=\"bind:QUANTITY\" textAlign=\"right\" background=\"#ffffff\" color=\"#1a5fd9\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/></Band></Format></Formats>");
            this.div_overview.addChild(obj.name, obj);

            obj = new ImageViewer("img_photo","700","12","150","150",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("18");
            obj.set_stretch("fixaspectratio");
            obj.set_border("1px dashed #98a2b3");
            obj.set_borderRadius("4px");
            obj.set_background("#ffffff");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_noimage","700","12","150","150",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("19");
            obj.set_text("No image");
            obj.set_textAlign("center");
            obj.set_color("#98a2b3");
            obj.set_font("12px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_opening","640","190","180","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("20");
            obj.set_text("Opening Stock");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_opening",null,"190","120","26","0",null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_textAlign("right");
            obj.set_color("#383e49");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_remaining","640","224","180","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("22");
            obj.set_text("Remaining Stock");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_remaining",null,"224","120","26","0",null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("23");
            obj.set_text("-");
            obj.set_textAlign("right");
            obj.set_color("#383e49");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_ontheway","640","258","180","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("24");
            obj.set_text("On the way");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_ontheway",null,"258","120","26","0",null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("25");
            obj.set_text("-");
            obj.set_textAlign("right");
            obj.set_color("#383e49");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_threshold2","640","292","180","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("26");
            obj.set_text("Threshold value");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_threshold2",null,"292","120","26","0",null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("27");
            obj.set_text("-");
            obj.set_textAlign("right");
            obj.set_color("#383e49");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_l_availability","640","326","180","26",null,null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("28");
            obj.set_text("Availability");
            obj.set_color("#858d9d");
            obj.set_font("13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Static("sta_availability",null,"326","120","26","0",null,null,null,null,null,this.div_overview.form);
            obj.set_taborder("29");
            obj.set_text("-");
            obj.set_textAlign("right");
            obj.set_color("#383e49");
            obj.set_font("600 13px \"Segoe UI\"");
            this.div_overview.addChild(obj.name, obj);

            obj = new Div("div_purchase","40","132",null,null,"40","28",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_movement","0","12",null,null,"0","0",null,null,null,null,this.div_purchase.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"280\"/><Column size=\"150\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"Date\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"1\" text=\"Quantity\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"2\" text=\"Unit price\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"3\" text=\"Note\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"4\" text=\"By\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:DATE_TEXT\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"1\" text=\"bind:QTY_TEXT\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"2\" text=\"bind:PRICE_TEXT\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"3\" text=\"bind:NOTE\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"4\" text=\"bind:USER_NAME\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/></Band></Format></Formats>");
            this.div_purchase.addChild(obj.name, obj);

            obj = new Static("sta_nodata","0","80",null,"40","0",null,null,null,null,null,this.div_purchase.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_text("Nothing recorded yet.");
            obj.set_textAlign("center");
            obj.set_color("#858d9d");
            obj.set_font("14px \"Segoe UI\"");
            this.div_purchase.addChild(obj.name, obj);

            obj = new Div("div_adjust","40","132",null,null,"40","28",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_visible("false");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_movement","0","12",null,null,"0","0",null,null,null,null,this.div_adjust.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"110\"/><Column size=\"130\"/><Column size=\"280\"/><Column size=\"150\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"Date\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"1\" text=\"Quantity\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"2\" text=\"Unit price\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"3\" text=\"Note\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"4\" text=\"By\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:DATE_TEXT\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"1\" text=\"bind:QTY_TEXT\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"2\" text=\"bind:PRICE_TEXT\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"3\" text=\"bind:NOTE\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"4\" text=\"bind:USER_NAME\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/></Band></Format></Formats>");
            this.div_adjust.addChild(obj.name, obj);

            obj = new Static("sta_nodata","0","80",null,"40","0",null,null,null,null,null,this.div_adjust.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_text("Nothing recorded yet.");
            obj.set_textAlign("center");
            obj.set_color("#858d9d");
            obj.set_font("14px \"Segoe UI\"");
            this.div_adjust.addChild(obj.name, obj);

            obj = new Div("div_history","40","132",null,null,"40","28",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_visible("false");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_movement","0","12",null,null,"0","0",null,null,null,null,this.div_history.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"250\"/><Column size=\"140\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"38\"/></Rows><Band id=\"head\"><Cell text=\"Date\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"1\" text=\"Type\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"2\" text=\"Quantity\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"3\" text=\"Unit price\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"4\" text=\"Note\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/><Cell col=\"5\" text=\"By\" textAlign=\"left\" background=\"#f0f1f3\" color=\"#667085\" font=\"600 12px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:DATE_TEXT\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"1\" text=\"bind:TYPE_NAME\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"2\" text=\"bind:QTY_TEXT\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"3\" text=\"bind:PRICE_TEXT\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"4\" text=\"bind:NOTE\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"5\" text=\"bind:USER_NAME\" textAlign=\"left\" background=\"#ffffff\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 12px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/></Band></Format></Formats>");
            this.div_history.addChild(obj.name, obj);

            obj = new Static("sta_nodata","0","80",null,"40","0",null,null,null,null,null,this.div_history.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_text("Nothing recorded yet.");
            obj.set_textAlign("center");
            obj.set_color("#858d9d");
            obj.set_font("14px \"Segoe UI\"");
            this.div_history.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_overview.form
            obj = new Layout("default","",0,0,this.div_overview.form,function(p){});
            this.div_overview.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_purchase.form
            obj = new Layout("default","",0,0,this.div_purchase.form,function(p){});
            this.div_purchase.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_adjust.form
            obj = new Layout("default","",0,0,this.div_adjust.form,function(p){});
            this.div_adjust.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_history.form
            obj = new Layout("default","",0,0,this.div_history.form,function(p){});
            this.div_history.form.addLayout(obj.name, obj);

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

        this.fv_oTab = null;

        this.Form_onload = function(obj,e)
        {
        	// grids in the page Divs are bound by script: the datasets live in this form
        	this.div_overview.form.grd_stock.set_binddataset(this.ds_stock);
        	this.div_purchase.form.grd_movement.set_binddataset(this.ds_purchase);
        	this.div_adjust.form.grd_movement.set_binddataset(this.ds_adjust);
        	this.div_history.form.grd_movement.set_binddataset(this.ds_movement);

        	this.fv_oTab = this.btn_tab_overview;
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

        // yyyyMMdd -> d/M/yy (13/4/23)
        this.fn_formatDate = function(sDate)
        {
        	if(this.gfn_isNull(sDate) || String(sDate).length < 8) return "-";
        	sDate = String(sDate);
        	return parseInt(sDate.substr(6, 2), 10) + "/" + parseInt(sDate.substr(4, 2), 10) + "/" + sDate.substr(2, 2);
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
        	var oOverview = this.div_overview.form;

        	this.sta_title.set_text(this.fn_getValue("PRODUCT_NAME"));

        	// Primary Details
        	oOverview.sta_name.set_text(this.fn_getValue("PRODUCT_NAME"));
        	oOverview.sta_code.set_text(this.fn_getValue("PRODUCT_CODE"));
        	oOverview.sta_category.set_text(this.fn_getValue("CATEGORY_NAME"));
        	oOverview.sta_expiry.set_text(this.fn_formatDate(this.ds_product.getColumn(0, "EXPIRY_DATE")));
        	oOverview.sta_threshold.set_text(this.fn_getValue("THRESHOLD_VALUE"));

        	// Supplier Details
        	var bSupplier = !this.gfn_isNull(this.ds_product.getColumn(0, "SUPPLIER_NAME"));
        	oOverview.sta_supplier.set_text(bSupplier ? this.fn_getValue("SUPPLIER_NAME") : "No supplier for this product yet");
        	oOverview.sta_contact.set_text(this.fn_getValue("SUPPLIER_CONTACT"));

        	// stock figures on the right
        	oOverview.sta_opening.set_text(this.fn_getValue("PURCHASED_QTY"));
        	oOverview.sta_remaining.set_text(this.fn_getValue("QUANTITY"));
        	oOverview.sta_ontheway.set_text(this.fn_getValue("ON_THE_WAY"));
        	oOverview.sta_threshold2.set_text(this.fn_getValue("THRESHOLD_VALUE"));
        	this.fn_showAvailability();

        	// IMAGE_DATA is the path returned by file/upload ("file/<name>")
        	var sImage = this.ds_product.getColumn(0, "IMAGE_DATA");
        	oOverview.sta_noimage.set_visible(this.gfn_isNull(sImage));
        	oOverview.img_photo.set_image(this.gfn_isNull(sImage) ? "" : "url('" + nexacro.getEnvironment().services["KanbanUrl"].url + sImage + "')");
        };

        this.fn_showAvailability = function()
        {
        	var sCode  = this.ds_product.getColumn(0, "AVAILABILITY");
        	var sColor = {IN : "#10a760", LOW : "#e19133", OUT : "#da3e33"}[sCode] || "#667085";
        	this.div_overview.form.sta_availability.set_text(this.fn_getValue("AVAILABILITY_NAME"));
        	this.div_overview.form.sta_availability.set_color(sColor);
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
        		objDs.setColumn(i, "PRICE_TEXT", this.gfn_isNull(vPrice) ? "-" : "₹" + this.gfn_appendComma(vPrice, 2));
        	}
        	objDs.set_enableevent(true);

        	this.fn_copyMovement(this.ds_purchase, "PURCHASE"  , this.div_purchase.form);
        	this.fn_copyMovement(this.ds_adjust  , "ADJUSTMENT", this.div_adjust.form);
        	this.div_history.form.sta_nodata.set_visible(objDs.rowcount == 0);
        };

        this.fn_copyMovement = function(objTarget, sType, oPage)
        {
        	objTarget.copyData(this.ds_movement);
        	objTarget.filter("MOVEMENT_TYPE=='" + sType + "'");
        	oPage.sta_nodata.set_visible(objTarget.rowcount == 0);
        };

        // Overview / Purchases / Adjustments / History tabs
        this.btn_tab_onclick = function(obj,e)
        {
        	var arrTab = [[this.btn_tab_overview, this.div_overview], [this.btn_tab_purchase, this.div_purchase],
        	              [this.btn_tab_adjust  , this.div_adjust  ], [this.btn_tab_history , this.div_history ]];
        	for(var i=0; i<arrTab.length; i++){
        		var bActive = arrTab[i][0] == obj;
        		arrTab[i][0].set_color(bActive ? "#1a5fd9" : "#5d6679");
        		arrTab[i][0].set_font((bActive ? "600 " : "") + "14px \"Segoe UI\"");
        		arrTab[i][1].set_visible(bActive);
        	}
        	// the blue line under the selected tab
        	this.sta_tab_mark.set_left(obj.getOffsetLeft());
        	this.sta_tab_mark.set_width(obj.getOffsetWidth());
        	this.fv_oTab = obj;
        };

        // Edit Button
        this.btn_edit_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("popEditProduct", 0, 0, 480, 696);
        	objChild.formurl = "Base::Form_NewProduct.xfdl";
        	objChild.openalign = "center middle";
        	objChild.dragmovetype = "all";
        	objChild.overlaycolor = "RGBA(0, 0, 0, 0.2)";
        	objChild.set_showtitlebar(false);

            objChild.showModal(this.getOwnerFrame()
                             , {pProductId:this.ds_cond.getColumn(0, "PRODUCT_ID")}
                             , this
                             , "fn_callbackPopup");
        };

        this.fn_callbackPopup = function(sPopupId, sReturn)
        {
        	if(sReturn == undefined){
        		sReturn = "";
        	}

        	if(sPopupId == "popEditProduct"){
        		if(sReturn.length > 0){
        			this.gfn_alert("msg.kanban.product.updated", [sReturn]);
        			this.fn_searchDetail();
        		}
        	}
        };

        // Download Button: the product as CSV (product/export with its Product ID)
        this.btn_download_onclick = function(obj,e)
        {
        	var sCode = this.gfn_nvl(this.ds_product.getColumn(0, "PRODUCT_CODE"), "");
        	system.execBrowser(nexacro.getEnvironment().services["KanbanUrl"].url + "product/export?KEYWORD=" + encodeURIComponent(sCode));
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
            this.btn_edit.addEventHandler("onclick",this.btn_edit_onclick,this);
            this.btn_download.addEventHandler("onclick",this.btn_download_onclick,this);
            this.btn_tab_overview.addEventHandler("onclick",this.btn_tab_onclick,this);
            this.btn_tab_purchase.addEventHandler("onclick",this.btn_tab_onclick,this);
            this.btn_tab_adjust.addEventHandler("onclick",this.btn_tab_onclick,this);
            this.btn_tab_history.addEventHandler("onclick",this.btn_tab_onclick,this);
        };
        this.loadIncludeScript("Form_ProductInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
