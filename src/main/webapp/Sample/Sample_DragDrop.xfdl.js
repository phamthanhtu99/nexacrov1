(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Sample_DragDrop");
            this.set_titletext("Sample_DragDrop");
            if (Form == this.constructor)
            {
                this._setFormPosition(1020,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_from", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]},"Rows" : [{"EMP_NAME" : "Melon","EMP_ID" : "KR010","POSITION" : "10","HIRE_DATE" : "20071001","SALARY" : "9000","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "01,05","DEPT_CODE" : "10","MEMO" : "aqua"},{"EMP_NAME" : "Jackson","EMP_ID" : "US050","POSITION" : "60","HIRE_DATE" : "20091021","SALARY" : "6000","GENDER" : "M","MARRIED" : "false","SKILL" : "11,03,13","HOBBY" : "09,14","DEPT_CODE" : "20","MEMO" : "gold"},{"EMP_NAME" : "Jennie","EMP_ID" : "KR240","POSITION" : "50","HIRE_DATE" : "20110508","SALARY" : "7000","GENDER" : "F","MARRIED" : "true","SKILL" : "01,06","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "greenyellow"},{"EMP_NAME" : "Dennis ","EMP_ID" : "JP150","POSITION" : "20","HIRE_DATE" : "20091021","SALARY" : "5000","GENDER" : "M","MARRIED" : "false","SKILL" : "09,11","HOBBY" : "07,06,05","DEPT_CODE" : "30","MEMO" : "khaki"},{"EMP_NAME" : "Andrew","EMP_ID" : "US020","POSITION" : "60","HIRE_DATE" : "20160602","SALARY" : "6500","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,13","DEPT_CODE" : "40","MEMO" : "lightpink"},{"EMP_NAME" : "Jungkook","EMP_ID" : "KR200","POSITION" : "60","HIRE_DATE" : "20120304","SALARY" : "7000","GENDER" : "M","MARRIED" : "true","SKILL" : "07,06,06","HOBBY" : "09,14","DEPT_CODE" : "50","MEMO" : "orange"},{"EMP_NAME" : "Adam","EMP_ID" : "JP230","POSITION" : "50","HIRE_DATE" : "20110928","SALARY" : "8000","GENDER" : "M","MARRIED" : "true","SKILL" : "11,03,13","HOBBY" : "09,15","DEPT_CODE" : "30","MEMO" : "silver"},{"EMP_NAME" : "JiYoung","EMP_ID" : "KR080","POSITION" : "50","HIRE_DATE" : "20131120","SALARY" : "8500","GENDER" : "F","MARRIED" : "false","SKILL" : "01,07","HOBBY" : "05","DEPT_CODE" : "40","MEMO" : "violet"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_to", this);
            obj.set_keystring("");
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "EMP_NAME","type" : "STRING","size" : "50"},{"id" : "EMP_ID","type" : "STRING","size" : "10"},{"id" : "DEPT_CODE","type" : "STRING","size" : "256"},{"id" : "POSITION","type" : "STRING","size" : "10"},{"id" : "HIRE_DATE","type" : "DATE","size" : "10"},{"id" : "SALARY","type" : "INT","size" : "10"},{"id" : "GENDER","type" : "STRING","size" : "256"},{"id" : "MARRIED","type" : "STRING","size" : "256"},{"id" : "SKILL","type" : "STRING","size" : "256"},{"id" : "HOBBY","type" : "STRING","size" : "256"},{"id" : "MEMO","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","20","60","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("From");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_from","20","Static00:0","480","310",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_from");
            obj.set_selecttype("multirow");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"SKILL\"/><Cell col=\"9\" text=\"HOBBY\"/><Cell col=\"10\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:SKILL\"/><Cell col=\"9\" text=\"bind:HOBBY\"/><Cell col=\"10\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_to","520","90","480","310",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_to");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"EMP_NAME\"/><Cell col=\"1\" text=\"EMP_ID\"/><Cell col=\"2\" text=\"DEPT_CODE\"/><Cell col=\"3\" text=\"POSITION\"/><Cell col=\"4\" text=\"HIRE_DATE\"/><Cell col=\"5\" text=\"SALARY\"/><Cell col=\"6\" text=\"GENDER\"/><Cell col=\"7\" text=\"MARRIED\"/><Cell col=\"8\" text=\"SKILL\"/><Cell col=\"9\" text=\"HOBBY\"/><Cell col=\"10\" text=\"MEMO\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\"/><Cell col=\"1\" text=\"bind:EMP_ID\"/><Cell col=\"2\" text=\"bind:DEPT_CODE\"/><Cell col=\"3\" text=\"bind:POSITION\"/><Cell col=\"4\" text=\"bind:HIRE_DATE\"/><Cell col=\"5\" text=\"bind:SALARY\"/><Cell col=\"6\" text=\"bind:GENDER\"/><Cell col=\"7\" text=\"bind:MARRIED\"/><Cell col=\"8\" text=\"bind:SKILL\"/><Cell col=\"9\" text=\"bind:HOBBY\"/><Cell col=\"10\" text=\"bind:MEMO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta_title","20","0","166","60",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Drag & Drop");
            obj.set_cssclass("sta_WF_Title1");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","520","60","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("To");
            obj.set_cssclass("sta_WF_Title2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1020,630,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Sample_DragDrop.xfdl", function() {
        /*
            Drag & Drop Sample
        */

        this.Form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this);
        };


        this.grd_from_ondrag = function(obj,e)
        {
            var arrObj = [];
            arrObj[0] = obj.getSelectedRows();
            arrObj[1] = obj.name;
            arrObj[2] = obj;

            e.userdata = arrObj;

            return true;
        };

        this.grd_to_ondrop = function(obj,e)
        {
            var sSelectRows = e.userdata[0];
            var objDragName = e.userdata[1];
            var objDragGrid = e.userdata[2];
            var objDragDs   = objDragGrid.getBindDataset();
            var objDs       = obj.getBindDataset();

            if(objDragName == obj.name){
                if(obj.selecttype == "row") objDs.moveRow(sSelectRows, e.row);
            }
            else{
                this.fn_setMoveData(objDragDs, objDs, sSelectRows, e.row, "C");
            }
        };


        /**
         * @class   그리드 Drag & Drop 이벤트 내부함수
         * @param {Object}   objFromDs - 드래그 데이터셋
         * @param {Object}   objToDs - 드롭 데이터셋
         * @param {Number} FromRow - 시작로우
         * @param {Number} nToRow - 종료로우
         * @param {String}    [sMoveType] - 무브타입 "M:이동, C:복사"
         * @return  N/A
         * @example
         * this.fnSetMoveData(this.dsList, this.dsMain, 1, 2, "M");
         */
        this.fn_setMoveData = function(objFromDs, objToDs, nFromRow, nToRow, sMoveType)
        {
        	if(this.gfn_isNull(nToRow)) nToRow = -1;
        	if(this.gfn_isNull(sMoveType)) sMoveType = "M";
        	var arrFromRow;
        	var nRow;
        	var nInsertRow = nToRow;

        	if(nFromRow == -1) return;

        	if(typeof(nFromRow) == "number"){
        		arrFromRow = [];
        		arrFromRow.push(nFromRow);
        	}
        	else{
        		arrFromRow = nFromRow;
        	}

        	for(var i=0; i<arrFromRow.length; i++){
        		if(nToRow > -1){
        			nRow = objToDs.insertRow(nInsertRow);
        		}
        		else{
        			nRow = objToDs.addRow();
        		}

        		objToDs.copyRow(nRow, objFromDs, arrFromRow[i]);

        		nInsertRow++;
        	}

            if(sMoveType == "M"){
                for(var i=arrFromRow.length-1; i>-1; i--){
                    objFromDs.deleteRow(arrFromRow[i]);
                }
            }
        }

        this.btn_drag_ondrag = function(obj,e)
        {
        	return true;
        };

        this.btn_drag_onlbuttondown = function(obj,e)
        {
        	obj.nX = e.clientx;
        	obj.nY = e.clienty;

        };

        this.Sample_DragDrop_ondrop = function(obj,e)
        {
        	this.btn_drag.move(e.clientx - this.btn_drag.nX, e.clienty - this.btn_drag.nY);
        	this.resetScroll();

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_onload,this);
            this.addEventHandler("ontimer",this.Form_Emp_ontimer,this);
            this.addEventHandler("ondrop",this.Sample_DragDrop_ondrop,this);
            this.grd_from.addEventHandler("ondrag",this.grd_from_ondrag,this);
            this.grd_to.addEventHandler("ondrop",this.grd_to_ondrop,this);
        };
        this.loadIncludeScript("Sample_DragDrop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
