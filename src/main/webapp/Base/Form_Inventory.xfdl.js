(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Inventory");
            this.set_titletext("Inventory");
            this.set_background("#f0f1f3");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,648);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "KEYWORD","type" : "STRING","size" : "100"},{"id" : "CATEGORY","type" : "STRING","size" : "30"},{"id" : "AVAILABILITY","type" : "STRING","size" : "10"},{"id" : "PAGE","type" : "STRING","size" : "10"},{"id" : "PAGE_SIZE","type" : "STRING","size" : "10"}]},"Rows" : [{"PAGE" : "1","PAGE_SIZE" : "9"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_product", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_page", this);
            obj._setContents({});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_summary", this);
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


            obj = new Dataset("ds_availability", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "30"},{"id" : "CODE_NAME","type" : "STRING","size" : "100"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_columns", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "CODE","type" : "STRING","size" : "10"},{"id" : "NAME","type" : "STRING","size" : "100"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_summary","24","16",null,"130","24",null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_background("#ffffff");
            obj.set_borderRadius("8px");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","16","12","300","30",null,null,null,null,null,null,this.div_summary.form);
            obj.set_taborder("0");
            obj.set_text("Overall Inventory");
            obj.set_color("#383e49");
            obj.set_font("600 18px \"Segoe UI\"");
            this.div_summary.addChild(obj.name, obj);

            obj = new Div("div_categories","0","48","25%","72",null,null,null,null,null,null,this.div_summary.form);
            obj.set_taborder("1");
            obj.set_border("0px none");
            this.div_summary.addChild(obj.name, obj);

            obj = new Static("sta_label","16","0","150","22",null,null,null,null,null,null,this.div_summary.form.div_categories.form);
            obj.set_taborder("0");
            obj.set_text("Categories");
            obj.set_color("#1570ef");
            obj.set_font("600 14px \"Segoe UI\"");
            this.div_summary.form.div_categories.addChild(obj.name, obj);

            obj = new Static("sta_value","16","24","100","24",null,null,null,null,null,null,this.div_summary.form.div_categories.form);
            obj.set_taborder("1");
            obj.set_text("-");
            obj.set_color("#5d6679");
            obj.set_font("600 14px \"Segoe UI\"");
            this.div_summary.form.div_categories.addChild(obj.name, obj);

            obj = new Static("sta_note","16","50","100","20",null,null,null,null,null,null,this.div_summary.form.div_categories.form);
            obj.set_taborder("2");
            obj.set_text("In use");
            obj.set_color("#858d9d");
            obj.set_font("12px \"Segoe UI\"");
            this.div_summary.form.div_categories.addChild(obj.name, obj);

            obj = new Div("div_total","25%","48","25%","72",null,null,null,null,null,null,this.div_summary.form);
            obj.set_taborder("2");
            obj.set_border("0px none");
            this.div_summary.addChild(obj.name, obj);

            obj = new Static("sta_divider","0","4","1","62",null,null,null,null,null,null,this.div_summary.form.div_total.form);
            obj.set_taborder("0");
            obj.set_background("#f0f1f3");
            this.div_summary.form.div_total.addChild(obj.name, obj);

            obj = new Static("sta_label","16","0","150","22",null,null,null,null,null,null,this.div_summary.form.div_total.form);
            obj.set_taborder("1");
            obj.set_text("Total Products");
            obj.set_color("#e19133");
            obj.set_font("600 14px \"Segoe UI\"");
            this.div_summary.form.div_total.addChild(obj.name, obj);

            obj = new Static("sta_value","16","24","90","24",null,null,null,null,null,null,this.div_summary.form.div_total.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_color("#5d6679");
            obj.set_font("600 14px \"Segoe UI\"");
            this.div_summary.form.div_total.addChild(obj.name, obj);

            obj = new Static("sta_note","16","50","90","20",null,null,null,null,null,null,this.div_summary.form.div_total.form);
            obj.set_taborder("3");
            obj.set_text("All items");
            obj.set_color("#858d9d");
            obj.set_font("12px \"Segoe UI\"");
            this.div_summary.form.div_total.addChild(obj.name, obj);

            obj = new Static("sta_value2",null,"24","110","24","16",null,null,null,null,null,this.div_summary.form.div_total.form);
            obj.set_taborder("4");
            obj.set_text("-");
            obj.set_textAlign("right");
            obj.set_color("#5d6679");
            obj.set_font("600 14px \"Segoe UI\"");
            this.div_summary.form.div_total.addChild(obj.name, obj);

            obj = new Static("sta_note2",null,"50","110","20","16",null,null,null,null,null,this.div_summary.form.div_total.form);
            obj.set_taborder("5");
            obj.set_text("Revenue, 7 days");
            obj.set_textAlign("right");
            obj.set_color("#858d9d");
            obj.set_font("12px \"Segoe UI\"");
            this.div_summary.form.div_total.addChild(obj.name, obj);

            obj = new Div("div_top","50%","48","25%","72",null,null,null,null,null,null,this.div_summary.form);
            obj.set_taborder("3");
            obj.set_border("0px none");
            this.div_summary.addChild(obj.name, obj);

            obj = new Static("sta_divider","0","4","1","62",null,null,null,null,null,null,this.div_summary.form.div_top.form);
            obj.set_taborder("0");
            obj.set_background("#f0f1f3");
            this.div_summary.form.div_top.addChild(obj.name, obj);

            obj = new Static("sta_label","16","0","150","22",null,null,null,null,null,null,this.div_summary.form.div_top.form);
            obj.set_taborder("1");
            obj.set_text("Top Selling");
            obj.set_color("#845ebc");
            obj.set_font("600 14px \"Segoe UI\"");
            this.div_summary.form.div_top.addChild(obj.name, obj);

            obj = new Static("sta_value","16","24","90","24",null,null,null,null,null,null,this.div_summary.form.div_top.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_color("#5d6679");
            obj.set_font("600 14px \"Segoe UI\"");
            this.div_summary.form.div_top.addChild(obj.name, obj);

            obj = new Static("sta_note","16","50","90","20",null,null,null,null,null,null,this.div_summary.form.div_top.form);
            obj.set_taborder("3");
            obj.set_text("Last 7 days");
            obj.set_color("#858d9d");
            obj.set_font("12px \"Segoe UI\"");
            this.div_summary.form.div_top.addChild(obj.name, obj);

            obj = new Static("sta_value2",null,"24","110","24","16",null,null,null,null,null,this.div_summary.form.div_top.form);
            obj.set_taborder("4");
            obj.set_text("-");
            obj.set_textAlign("right");
            obj.set_color("#5d6679");
            obj.set_font("600 14px \"Segoe UI\"");
            this.div_summary.form.div_top.addChild(obj.name, obj);

            obj = new Static("sta_note2",null,"50","110","20","16",null,null,null,null,null,this.div_summary.form.div_top.form);
            obj.set_taborder("5");
            obj.set_text("Cost");
            obj.set_textAlign("right");
            obj.set_color("#858d9d");
            obj.set_font("12px \"Segoe UI\"");
            this.div_summary.form.div_top.addChild(obj.name, obj);

            obj = new Div("div_low","75%","48","25%","72",null,null,null,null,null,null,this.div_summary.form);
            obj.set_taborder("4");
            obj.set_border("0px none");
            this.div_summary.addChild(obj.name, obj);

            obj = new Static("sta_divider","0","4","1","62",null,null,null,null,null,null,this.div_summary.form.div_low.form);
            obj.set_taborder("0");
            obj.set_background("#f0f1f3");
            this.div_summary.form.div_low.addChild(obj.name, obj);

            obj = new Static("sta_label","16","0","150","22",null,null,null,null,null,null,this.div_summary.form.div_low.form);
            obj.set_taborder("1");
            obj.set_text("Low Stocks");
            obj.set_color("#f36960");
            obj.set_font("600 14px \"Segoe UI\"");
            this.div_summary.form.div_low.addChild(obj.name, obj);

            obj = new Static("sta_value","16","24","90","24",null,null,null,null,null,null,this.div_summary.form.div_low.form);
            obj.set_taborder("2");
            obj.set_text("-");
            obj.set_color("#5d6679");
            obj.set_font("600 14px \"Segoe UI\"");
            this.div_summary.form.div_low.addChild(obj.name, obj);

            obj = new Static("sta_note","16","50","90","20",null,null,null,null,null,null,this.div_summary.form.div_low.form);
            obj.set_taborder("3");
            obj.set_text("Low stock");
            obj.set_color("#858d9d");
            obj.set_font("12px \"Segoe UI\"");
            this.div_summary.form.div_low.addChild(obj.name, obj);

            obj = new Static("sta_value2",null,"24","110","24","16",null,null,null,null,null,this.div_summary.form.div_low.form);
            obj.set_taborder("4");
            obj.set_text("-");
            obj.set_textAlign("right");
            obj.set_color("#5d6679");
            obj.set_font("600 14px \"Segoe UI\"");
            this.div_summary.form.div_low.addChild(obj.name, obj);

            obj = new Static("sta_note2",null,"50","110","20","16",null,null,null,null,null,this.div_summary.form.div_low.form);
            obj.set_taborder("5");
            obj.set_text("Not in stock");
            obj.set_textAlign("right");
            obj.set_color("#858d9d");
            obj.set_font("12px \"Segoe UI\"");
            this.div_summary.form.div_low.addChild(obj.name, obj);

            obj = new Static("sta_product_bg","24","162",null,null,"24","16",null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_background("#ffffff");
            obj.set_borderRadius("8px");
            this.addChild(obj.name, obj);

            obj = new Static("sta_products","40","176","200","36",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("Products");
            obj.set_color("#383e49");
            obj.set_font("600 18px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_filter_info","150","176","300","36",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_color("#1a5fd9");
            obj.set_font("12px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add",null,"176","96","36","240",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Add Product");
            obj.set_background("#1a5fd9");
            obj.set_color("#ffffff");
            obj.set_borderRadius("4px");
            obj.set_border("0px none");
            obj.set_font("600 13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_filter",null,"176","84","36","146",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Filters");
            obj.set_icon("url(\'imagerc::kanban/ic_filter.png\')");
            obj.set_textPadding("0px 0px 0px 6px");
            obj.set_background("#ffffff");
            obj.set_color("#5d6679");
            obj.set_borderRadius("4px");
            obj.set_border("1px solid #d0d3d9");
            obj.set_font("13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_download",null,"176","96","36","40",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Download all");
            obj.set_background("#ffffff");
            obj.set_color("#5d6679");
            obj.set_borderRadius("4px");
            obj.set_border("1px solid #d0d3d9");
            obj.set_font("13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_product","40","218",null,null,"40","74",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_product");
            obj.set_autofittype("col");
            obj.set_border("0px none");
            obj.set_selecttype("row");
            obj.set_cursor("pointer");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"160\"/><Column size=\"140\"/><Column size=\"130\"/></Columns><Rows><Row size=\"34\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"Products\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"1\" text=\"Buying Price\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"2\" text=\"Quantity\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"3\" text=\"Threshold Value\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"4\" text=\"Expiry Date\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"5\" text=\"Availability\" textAlign=\"left\" background=\"#ffffff\" color=\"#667085\" font=\"600 13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCT_NAME\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"1\" text=\"expr:comp.parent.gfn_appendComma(BUYING_PRICE, 2)\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"2\" text=\"expr:QUANTITY + &apos; &apos; + UNIT\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"3\" text=\"expr:THRESHOLD_VALUE + &apos; &apos; + UNIT\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"4\" text=\"expr:comp.parent.fn_formatDate(EXPIRY_DATE)\" textAlign=\"left\" color=\"#48505e\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/><Cell col=\"5\" text=\"bind:AVAILABILITY_NAME\" textAlign=\"left\" cssclass=\"expr:AVAILABILITY==&apos;IN&apos;?&apos;cell_WF_StockIn&apos;:(AVAILABILITY==&apos;LOW&apos;?&apos;cell_WF_StockLow&apos;:&apos;cell_WF_StockOut&apos;)\" font=\"13px &quot;Segoe UI&quot;\" padding=\"0px 4px 0px 0px\" border=\"0px none, 0px none, 1px solid #f0f1f3, 0px none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_nodata","40","290",null,"40","40",null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_visible("false");
            obj.set_text("No products match your search.");
            obj.set_textAlign("center");
            obj.set_color("#858d9d");
            obj.set_font("14px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_prev","40",null,"76","36",null,"28",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Previous");
            obj.set_background("#ffffff");
            obj.set_color("#5d6679");
            obj.set_borderRadius("4px");
            obj.set_border("1px solid #d0d3d9");
            obj.set_font("13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta_page","126",null,null,"36","126","28",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_textAlign("center");
            obj.set_color("#48505e");
            obj.set_font("13px \"Segoe UI\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_next",null,null,"76","36","40","28",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Next");
            obj.set_background("#ffffff");
            obj.set_color("#5d6679");
            obj.set_borderRadius("4px");
            obj.set_border("1px solid #d0d3d9");
            obj.set_font("13px \"Segoe UI\"");
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

            obj = new Static("sta_l_availability","16","80","228","20",null,null,null,null,null,null,this.pdv_filter.form);
            obj.set_taborder("5");
            obj.set_text("Availability");
            obj.set_color("#48505e");
            obj.set_font("600 12px \"Segoe UI\"");
            this.pdv_filter.addChild(obj.name, obj);

            obj = new Combo("cmb_availability","16","102","228","36",null,null,null,null,null,null,this.pdv_filter.form);
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
            //-- Default Layout : this.div_summary.form.div_categories.form
            obj = new Layout("default","",0,0,this.div_summary.form.div_categories.form,function(p){});
            this.div_summary.form.div_categories.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_summary.form.div_total.form
            obj = new Layout("default","",0,0,this.div_summary.form.div_total.form,function(p){});
            this.div_summary.form.div_total.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_summary.form.div_top.form
            obj = new Layout("default","",0,0,this.div_summary.form.div_top.form,function(p){});
            this.div_summary.form.div_top.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_summary.form.div_low.form
            obj = new Layout("default","",0,0,this.div_summary.form.div_low.form,function(p){});
            this.div_summary.form.div_low.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_summary.form
            obj = new Layout("default","",0,0,this.div_summary.form,function(p){});
            this.div_summary.form.addLayout(obj.name, obj);

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
        this.addIncludeScript("Form_Inventory.xfdl","Lib::Lib_Comm.xjs");
        this.registerScript("Form_Inventory.xfdl", function() {
        this.executeIncludeScript("Lib::Lib_Comm.xjs"); /*include "Lib::Lib_Comm.xjs"*/;

        this.CONST_PAGE_SIZE = 9;
        this.fv_nPage = 1;

        this.Form_onload = function(obj,e)
        {
        	var oFilter = this.pdv_filter.form;
        	oFilter.cmb_category.set_innerdataset(this.ds_category);
        	oFilter.cmb_availability.set_innerdataset(this.ds_availability);
        	this.fn_initColumns();

        	// the list does not need the codes, so the three requests run at the same time
        	this.fn_searchCode();
        	this.fn_searchSummary();
        	this.fn_searchList(1);
        };

        // common codes of the filter combos
        this.fn_searchCode = function()
        {
        	this.ds_codeCond.setColumn(0, "GROUP_CODES", "CATEGORY,AVAILABILITY");

            var sSvcID    = "svcCommonCode";
            var sURL      = "KanbanUrl::common/code";
            var sInDs     = "ds_cond=ds_codeCond";
            var sOutDs    = "ds_code=ds_code";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        // Overall Inventory
        this.fn_searchSummary = function()
        {
            var sSvcID    = "svcSummary";
            var sURL      = "KanbanUrl::product/summary";
            var sInDs     = "";
            var sOutDs    = "ds_summary=ds_summary";
            var sParam    = "";
            var sCallBack = "fn_callback";
        	this.gfn_transaction(sSvcID, sURL, sInDs, sOutDs, sParam, sCallBack);
        };

        // one page of products (paged on the server)
        this.fn_searchList = function(nPage)
        {
        	this.fv_nPage = nPage;
        	this.ds_cond.setColumn(0, "PAGE"     , nPage);
        	this.ds_cond.setColumn(0, "PAGE_SIZE", this.CONST_PAGE_SIZE);
        	// the server sends no dataset when nothing matches, so clear it first
        	this.ds_product.clearData();

            var sSvcID    = "svcProductList";
            var sURL      = "KanbanUrl::product/list";
            var sInDs     = "ds_cond=ds_cond";
            var sOutDs    = "ds_product=ds_product ds_page=ds_page";
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
        		arrCode.push({codeGroup:"CATEGORY"    , obj:this.pdv_filter.form.cmb_category    , first:"2::All categories"});
        		arrCode.push({codeGroup:"AVAILABILITY", obj:this.pdv_filter.form.cmb_availability, first:"2::All"});
        		this.gfn_getCommonCode(arrCode, this.ds_code);
        	}
        	else if(svcId == "svcSummary"){
        		this.fn_showSummary();
        	}
        	else if(svcId == "svcProductList"){
        		var nTotal = this.ds_page.rowcount > 0 ? parseInt(this.ds_page.getColumn(0, "TOTAL_COUNT"), 10) : 0;
        		this.fn_setPaging(nTotal);
        		this.sta_nodata.set_visible(nTotal == 0);
        		this.ds_product.set_rowposition(-1);
        	}
        };

        this.fn_showSummary = function()
        {
        	var objDs = this.ds_summary;
        	var oForm = this.div_summary.form;
        	oForm.div_categories.form.sta_value.set_text(objDs.getColumn(0, "CATEGORY_COUNT"));
        	oForm.div_total.form.sta_value.set_text(objDs.getColumn(0, "PRODUCT_COUNT"));
        	oForm.div_total.form.sta_value2.set_text("₹" + this.gfn_appendComma(objDs.getColumn(0, "REVENUE")));
        	oForm.div_top.form.sta_value.set_text(objDs.getColumn(0, "TOP_SELLING"));
        	oForm.div_top.form.sta_value2.set_text("₹" + this.gfn_appendComma(objDs.getColumn(0, "TOP_SELLING_COST")));
        	oForm.div_low.form.sta_value.set_text(objDs.getColumn(0, "LOW_STOCK"));
        	oForm.div_low.form.sta_value2.set_text(objDs.getColumn(0, "OUT_OF_STOCK"));
        };

        this.fn_setPaging = function(nTotal)
        {
        	var nTotalPage = Math.max(1, Math.ceil(nTotal / this.CONST_PAGE_SIZE));
        	this.sta_page.set_text("Page " + this.fv_nPage + " of " + nTotalPage);
        	this.btn_prev.set_enable(this.fv_nPage > 1);
        	this.btn_next.set_enable(this.fv_nPage < nTotalPage);
        };

        // yyyyMMdd -> dd/MM/yy (used by the Expiry Date cell)
        this.fn_formatDate = function(sDate)
        {
        	if(this.gfn_isNull(sDate) || String(sDate).length < 8) return "";
        	sDate = String(sDate);
        	return sDate.substr(6, 2) + "/" + sDate.substr(4, 2) + "/" + sDate.substr(2, 2);
        };

        // Called by Form_Layout when the header search changes (already debounced there)
        this.fn_search = function(sKeyword)
        {
        	this.ds_cond.setColumn(0, "KEYWORD", sKeyword);
        	this.fn_searchList(1);
        };

        // Previous Button
        this.btn_prev_onclick = function(obj,e)
        {
        	this.fn_searchList(this.fv_nPage - 1);
        };

        // Next Button
        this.btn_next_onclick = function(obj,e)
        {
        	this.fn_searchList(this.fv_nPage + 1);
        };

        // Columns MultiCombo: one item per grid column (from the head texts), every column shown at first
        this.fv_arrColSize = [];
        this.fn_initColumns = function()
        {
        	var objGrid = this.grd_product;
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
        		this.grd_product.setFormatColProperty(i, "size", bShow ? this.fv_arrColSize[i] : 0);
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
        	this.ds_cond.setColumn(0, "CATEGORY"    , oFilter.cmb_category.value);
        	this.ds_cond.setColumn(0, "AVAILABILITY", oFilter.cmb_availability.value);
        	this.pdv_filter.closePopup();
        	this.fn_applyColumns();

        	var arrText = new Array();
        	if(!this.gfn_isNull(oFilter.cmb_category.value))     arrText.push(oFilter.cmb_category.text);
        	if(!this.gfn_isNull(oFilter.cmb_availability.value)) arrText.push(oFilter.cmb_availability.text);
        	this.sta_filter_info.set_text(arrText.length > 0 ? "Filtered: " + arrText.join(", ") : "");

        	this.fn_searchList(1);
        };

        // Reset Button (filter popup)
        this.pdv_filter_btn_reset_onclick = function(obj,e)
        {
        	this.pdv_filter.form.cmb_category.set_index(0);
        	this.pdv_filter.form.cmb_availability.set_index(0);
        	this.fn_showAllColumns();
        	this.pdv_filter_btn_apply_onclick(obj, e);
        };

        // Product row -> Product Info
        this.grd_product_oncellclick = function(obj,e)
        {
        	var oLayout = this.parent.parent;
        	if(e.row > -1 && oLayout && oLayout.fn_openProduct){
        		oLayout.fn_openProduct(this.ds_product.getColumn(e.row, "PRODUCT_ID"));
        	}
        };

        // Add Product Button
        this.btn_add_onclick = function(obj,e)
        {
        	var objChild = new ChildFrame("popNewProduct", 0, 0, 480, 696);
        	objChild.formurl = "Base::Form_NewProduct.xfdl";
        	objChild.openalign = "center middle";
        	objChild.dragmovetype = "all";
        	objChild.overlaycolor = "RGBA(0, 0, 0, 0.2)";
        	objChild.set_showtitlebar(false);

            objChild.showModal(this.getOwnerFrame()
                             , {}
                             , this
                             , "fn_callbackPopup");
        };

        this.fn_callbackPopup = function(sPopupId, sReturn)
        {
        	if(sReturn == undefined){
        		sReturn = "";
        	}

        	if(sPopupId == "popNewProduct"){
        		if(sReturn.length > 0){
        			this.gfn_alert("msg.kanban.product.added", [sReturn]);
        			// refresh after insert: the new product is the first row of page 1
        			this.fn_searchSummary();
        			this.fn_searchList(1);
        		}
        	}
        };

        // Download all Button
        this.btn_download_onclick = function(obj,e)
        {
        	var sQuery = "?KEYWORD="      + encodeURIComponent(this.gfn_nvl(this.ds_cond.getColumn(0, "KEYWORD"), ""))
        	           + "&CATEGORY="     + encodeURIComponent(this.gfn_nvl(this.ds_cond.getColumn(0, "CATEGORY"), ""))
        	           + "&AVAILABILITY=" + encodeURIComponent(this.gfn_nvl(this.ds_cond.getColumn(0, "AVAILABILITY"), ""));
        	system.execBrowser(nexacro.getEnvironment().services["KanbanUrl"].url + "product/export" + sQuery);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
            this.btn_filter.addEventHandler("onclick",this.btn_filter_onclick,this);
            this.btn_download.addEventHandler("onclick",this.btn_download_onclick,this);
            this.grd_product.addEventHandler("oncellclick",this.grd_product_oncellclick,this);
            this.btn_prev.addEventHandler("onclick",this.btn_prev_onclick,this);
            this.btn_next.addEventHandler("onclick",this.btn_next_onclick,this);
            this.pdv_filter.form.btn_reset.addEventHandler("onclick",this.pdv_filter_btn_reset_onclick,this);
            this.pdv_filter.form.btn_apply.addEventHandler("onclick",this.pdv_filter_btn_apply_onclick,this);
        };
        this.loadIncludeScript("Form_Inventory.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
