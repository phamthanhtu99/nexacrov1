(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ReportTask");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReportTask", this);
            obj._setContents("<ColumnInfo><Column id=\"TieuDe\" type=\"STRING\" size=\"256\"/><Column id=\"PhanTram\" type=\"STRING\" size=\"256\"/><Column id=\"ChuSohuu\" type=\"STRING\" size=\"256\"/><Column id=\"TrangThai\" type=\"STRING\" size=\"256\"/><Column id=\"ThoiLuong\" type=\"STRING\" size=\"256\"/><Column id=\"NgayBatDau\" type=\"DATE\" size=\"256\"/><Column id=\"ThoiHan\" type=\"STRING\" size=\"256\"/><Column id=\"NgayHoanThanh\" type=\"DATE\" size=\"256\"/><Column id=\"UuTien\" type=\"STRING\" size=\"256\"/><Column id=\"Tag\" type=\"STRING\" size=\"256\"/><Column id=\"LoaiHoaDon\" type=\"STRING\" size=\"256\"/><Column id=\"lv\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TieuDe\">Tiêu đề 1</Col><Col id=\"PhanTram\">0</Col><Col id=\"ChuSohuu\">LocNH10</Col><Col id=\"TrangThai\">Mở</Col><Col id=\"ThoiLuong\">3 ngày</Col><Col id=\"NgayBatDau\">05-31-2023</Col><Col id=\"ThoiHan\">05-31-2023</Col><Col id=\"NgayHoanThanh\">05-31-2023</Col><Col id=\"UuTien\">Cao</Col><Col id=\"LoaiHoaDon\">Không có</Col><Col id=\"lv\">0</Col></Row><Row><Col id=\"TieuDe\">Tiêu đề 1.1</Col><Col id=\"PhanTram\">0</Col><Col id=\"ChuSohuu\">LocNH10</Col><Col id=\"TrangThai\">Mở</Col><Col id=\"ThoiLuong\">3 ngày</Col><Col id=\"NgayBatDau\">05-31-2023</Col><Col id=\"ThoiHan\">05-31-2023</Col><Col id=\"NgayHoanThanh\">05-31-2023</Col><Col id=\"UuTien\">Cao</Col><Col id=\"LoaiHoaDon\">Không có</Col><Col id=\"lv\">1</Col></Row><Row><Col id=\"TieuDe\">Tiêu đề 1.2</Col><Col id=\"PhanTram\">0</Col><Col id=\"ChuSohuu\">LocNH10</Col><Col id=\"TrangThai\">Mở</Col><Col id=\"ThoiLuong\">3 ngày</Col><Col id=\"NgayBatDau\">05-31-2023</Col><Col id=\"ThoiHan\">05-31-2023</Col><Col id=\"NgayHoanThanh\">05-31-2023</Col><Col id=\"UuTien\">Cao</Col><Col id=\"LoaiHoaDon\">Không có</Col><Col id=\"lv\">1</Col></Row><Row><Col id=\"TieuDe\">Tiêu đề 1.2.1</Col><Col id=\"PhanTram\">0</Col><Col id=\"ChuSohuu\">LocNH10</Col><Col id=\"TrangThai\">Mở</Col><Col id=\"ThoiLuong\">3 ngày</Col><Col id=\"NgayBatDau\">05-31-2023</Col><Col id=\"ThoiHan\">05-31-2023</Col><Col id=\"NgayHoanThanh\">05-31-2023</Col><Col id=\"UuTien\">Cao</Col><Col id=\"LoaiHoaDon\">Không có</Col><Col id=\"lv\">2</Col></Row><Row><Col id=\"TieuDe\">Tiêu đề 1.2.2</Col><Col id=\"PhanTram\">0</Col><Col id=\"ChuSohuu\">LocNH10</Col><Col id=\"TrangThai\">Mở</Col><Col id=\"ThoiLuong\">3 ngày</Col><Col id=\"NgayBatDau\">05-31-2023</Col><Col id=\"ThoiHan\">05-31-2023</Col><Col id=\"NgayHoanThanh\">05-31-2023</Col><Col id=\"UuTien\">Cao</Col><Col id=\"LoaiHoaDon\">Không có</Col><Col id=\"lv\">2</Col></Row><Row><Col id=\"TieuDe\">them tac vu</Col><Col id=\"lv\">2</Col></Row><Row><Col id=\"TieuDe\">Tiêu đề 2</Col><Col id=\"PhanTram\">0</Col><Col id=\"ChuSohuu\">LocNH10</Col><Col id=\"TrangThai\">Mở</Col><Col id=\"ThoiLuong\">3 ngày</Col><Col id=\"NgayBatDau\">05-31-2023</Col><Col id=\"ThoiHan\">05-31-2023</Col><Col id=\"NgayHoanThanh\">05-31-2023</Col><Col id=\"UuTien\">Cao</Col><Col id=\"LoaiHoaDon\">Không có</Col><Col id=\"lv\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","41","64","100.00%","336",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsReportTask");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeusebutton("use");
            obj.set_treeuseimage("true");
            obj.set_treeuseline("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TieuDe\"/><Cell col=\"1\" text=\"PhanTram\"/><Cell col=\"2\" text=\"ChuSohuu\"/><Cell col=\"3\" text=\"TrangThai\"/><Cell col=\"4\" text=\"ThoiLuong\"/><Cell col=\"5\" text=\"NgayBatDau\"/><Cell col=\"6\" text=\"ThoiHan\"/><Cell col=\"7\" text=\"NgayHoanThanh\"/><Cell col=\"8\" text=\"UuTien\"/><Cell col=\"9\" text=\"Tag\"/><Cell col=\"10\" text=\"LoaiHoaDon\"/><Cell col=\"11\" text=\"lv\"/></Band><Band id=\"body\"><Cell text=\"bind:TieuDe\" displaytype=\"treeitemcontrol\" treestartlevel=\"0\" treelevel=\"bind:lv\" edittype=\"tree\" autosizecol=\"limitmax\" autosizerow=\"limitmax\" expr=\"EXPR(level == 0?&apos;red&apos;:&apos;blue&apos;)\" background=\"EXPR(level == 0?&apos;red&apos;:&apos;blue&apos;)\"/><Cell col=\"1\" autosizerow=\"limitmax\" autosizecol=\"limitmax\"/><Cell col=\"2\" text=\"bind:ChuSohuu\" autosizerow=\"limitmax\" autosizecol=\"limitmax\"/><Cell col=\"3\" text=\"bind:TrangThai\" autosizerow=\"limitmax\" autosizecol=\"limitmax\"/><Cell col=\"4\" text=\"bind:ThoiLuong\" autosizerow=\"limitmax\" autosizecol=\"limitmax\"/><Cell col=\"5\" text=\"bind:NgayBatDau\" autosizerow=\"limitmax\" autosizecol=\"limitmax\"/><Cell col=\"6\" text=\"bind:ThoiHan\" autosizerow=\"limitmax\" autosizecol=\"limitmax\"/><Cell col=\"7\" text=\"bind:NgayHoanThanh\" autosizerow=\"limitmax\" autosizecol=\"limitmax\"/><Cell col=\"8\" text=\"bind:UuTien\" autosizerow=\"limitmax\" autosizecol=\"limitmax\"/><Cell col=\"9\" text=\"bind:Tag\" autosizerow=\"limitmax\" autosizecol=\"limitmax\"/><Cell col=\"10\" text=\"bind:LoaiHoaDon\" autosizerow=\"limitmax\" autosizecol=\"limitmax\"/><Cell col=\"11\" text=\"bind:lv\" autosizerow=\"limitmax\" autosizecol=\"limitmax\"/><Cell row=\"1\" colspan=\"12\" text=\"bind:ChuSohuu\" displaytype=\"treeitemcontrol\" treelevel=\"bind:lv\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ReportTask.xfdl", function() {

        this.ReportTask_onload = function(obj,e)
        {
        	var treeGrid = this.Grid00;
        	nexacro.GridC
        	this.Grid00.set_treeuseimage()('imagerc::image_custom/menu.png');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ReportTask_onload,this);
        };
        this.loadIncludeScript("ReportTask.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
