(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Comm_FindReplace");
            this.set_titletext("찾기/바꾸기");
            this.set_border("0px none");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "index","type" : "STRING","size" : "256"},{"id" : "name","type" : "STRING","size" : "256"},{"id" : "displaytype","type" : "STRING","size" : "256"},{"id" : "edittype","type" : "STRING","size" : "256"},{"id" : "body","type" : "STRING","size" : "256"}]}});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_direction", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "dataKO","type" : "STRING","size" : "256"},{"id" : "dataEN","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "prev","dataKO" : "이전","dataEN" : "previous"},{"code" : "next","dataKO" : "다음","dataEN" : "next"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_position", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "dataKO","type" : "STRING","size" : "256"},{"id" : "dataEN","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "current","dataKO" : "현재위치","dataEN" : "current"},{"code" : "first","dataKO" : "처음부터","dataEN" : "first"}]});
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_condition", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "code","type" : "STRING","size" : "256"},{"id" : "dataKO","type" : "STRING","size" : "256"},{"id" : "dataEN","type" : "STRING","size" : "256"}]},"Rows" : [{"code" : "equal","dataKO" : "일치","dataEN" : "equal"},{"code" : "inclusion","dataKO" : "포함","dataEN" : "inclusion"}]});
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","20","20","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("대상칼럼");
            obj.getSetter("uWord").set("popup.targetcolumn");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo00","130","20","220","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds00");
            obj.set_codecolumn("index");
            obj.set_datacolumn("name");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","20","54","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("찾을 문자열");
            obj.getSetter("uWord").set("popup.findstring");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","20","88","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("바꿀 문자열");
            obj.getSetter("uWord").set("popup.replacestring");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","20","142","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("찾을 방향");
            obj.getSetter("uWord").set("popup.finddirection");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","130","142","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_direction");
            obj.set_codecolumn("code");
            obj.set_datacolumn("dataKO");
            obj.set_text("");
            obj.set_value("prev");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","20","176","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("찾을 위치");
            obj.getSetter("uWord").set("popup.findposition");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo01","130","176","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_position");
            obj.set_codecolumn("code");
            obj.set_datacolumn("dataKO");
            obj.set_value("current");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","20","210","100","26",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("찾을 조건");
            obj.getSetter("uWord").set("popup.findcondition");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo02","130","210","180","26",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_direction("vertical");
            obj.set_innerdataset("ds_condition");
            obj.set_codecolumn("code");
            obj.set_datacolumn("dataKO");
            obj.set_value("equal");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk00","130","247","140","26",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("대/소문자구분");
            obj.getSetter("uWord").set("popup.casesensitive");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","370","20","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("찾기");
            obj.getSetter("uWord").set("popup.find");
            obj.set_cssclass("btn_WF_FillBlue");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","370","54","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("바꾸기");
            obj.getSetter("uWord").set("popup.replace");
            obj.set_cssclass("btn_WF_FillTeal");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","370","88","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("모두바꾸기");
            obj.getSetter("uWord").set("popup.allchange");
            obj.set_cssclass("btn_WF_FillTeal");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","370","122","90","26",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("닫기");
            obj.getSetter("uWord").set("popup.close");
            obj.set_cssclass("btn_WF_FillGray");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","130","54","220","26",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","130","88","220","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,300,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Comm_FindReplace.xfdl", function() {
        /**
        *  공통 그리드 찾기/바꾸기
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fv_grid="";
        this.fv_ds="";
        this.fv_selectRow=0;
        this.fv_cellname="";
        this.fv_cellindex=0;
        this.fv_selectType="cell";
        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfn_formOnLoad(this); //초기화[필수]

        	this.fv_grid 	  = this.getOwnerFrame().pvGrid;
        	this.fv_ds 		  = this.fv_grid.getBindDataset();
        	this.fv_selectRow  = this.getOwnerFrame().pvStrartRow;
        	this.fv_selectType = this.getOwnerFrame().pvSelectType;
        	this.fv_cellindex  = this.getOwnerFrame().pvSelectCell;

        	this.fv_grid.selecttype = "cell";

        	var bUserHeader = this._gfnGridUserHeaderFlg(this.fv_grid);
        	if( !bUserHeader) {
        		this.fn_getHeadText();
        	}
            else{
        		this.fn_getUserHeader(this.fv_grid);
        	}
        };

        /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
         /**
         * @description 그리드의 헤드정보를 받아와 콤보 세팅(userHeader prop 사용)
        */
        this.fn_getUserHeader = function (objGrid)
        {
        	this.ds00.clearData();
        	var nheadcnt = objGrid.getCellCount("head");
        	for( var i=0; i<nheadcnt; i++){
        		var bindcol = objGrid.getCellProperty("head", i, "calendarweekformat");
        		if( this.gfn_isNull(bindcol)) continue;

        		for( var j=0; j<objGrid.getCellCount("body"); j++)
        		{
        			var nCell =0;
        			if( bindcol == objGrid.getCellProperty("body", j,"text")){
        				nCell = j;
        				var columname = objGrid.getCellProperty("body", nCell, "text");

        				var nRow = this.ds00.addRow();
        				this.ds00.setColumn(nRow, "body"		, columname);
        				this.ds00.setColumn(nRow, "index"		, j);
        				this.ds00.setColumn(nRow, "displaytype" , objGrid.getCellProperty("body", j, "displaytype"));
        				this.ds00.setColumn(nRow, "edittype"	, objGrid.getCellProperty("body", j, "edittype"));
        				this.ds00.setColumn(nRow, "name"		, objGrid.getCellProperty("head", i, "text"));
        			}
        		}
        	}
        	// 현재 선택된 셀을 선택하도록
        	// 현재 선택된 셀이 검색/바꾸기에 해당되지 않을 경우 INDEX=0으로 세팅
        	var nTmp = this.ds00.findRow("index", this.fv_grid.currentcell);
        	if( nTmp > -1 ){
        		this.cbo00.value = this.ds00.getColumn(nTmp,"index");
        	}else{
        		this.cbo00.index = 0;
        	}

        	this.fv_cellindex = this.cbo00.value;
        	this.fn_setBtnInfo();
        };

        /**
         * @description 그리드의 헤드정보를 받아와 콤보 세팅
        */
        this.fn_getHeadText = function ()
        {
        	this.ds00.clearData();
        	// 바디의 갯수만큼 디스플레이정보 및 콤보의 정보를 설정한다.
            for(var i=0; i<this.fv_grid.getCellCount("body"); i++)
            {
                if( this.fv_grid.getCellProperty("body", i, "displaytype") != "image" )
                {
        			var sText = this.fv_grid.getCellProperty("body", i, "text");
        			if( sText == "bind:gridcmmcheck") continue; //공통체크박스 제외

        			var sBind;
        			if ( !this.gfn_isNull(sText)){
        				sBind = sText.substr(0, 5);
        			}else {
        				sBind = "";
        			}

        			if (sBind == "bind:")
        			{
        				var nrow = this.ds00.addRow();

        				this.ds00.setColumn(nrow, "body"		, this.fv_grid.getCellProperty("body", i, "text"));
        				this.ds00.setColumn(nrow, "displaytype" , this.fv_grid.getCellProperty("body", i, "displaytype"));
        				this.ds00.setColumn(nrow, "edittype"	, this.fv_grid.getCellProperty("body", i, "edittype"));
        				this.ds00.setColumn(nrow, "index"		, i);
        			}
                }
            }
        	// 바디에 매칭되는 헤더의 타이틀을 설정한다.
            for(var n=0; n<this.fv_grid.getCellCount("Head"); n++)
            {
                var title  = this.fv_grid.getCellProperty("Head", n, "text");
                var col    = this.fv_grid.getCellProperty("Head", n, "col");
                var body   = this.fv_grid.getCellProperty("body", n, "text");


                var nrow = this.ds00.findRow("body", body);
                if( nrow != -1 )
                {
                    //this.ds00.setColumn(nrow, "index",   col);
                    this.ds00.setColumn(nrow, "name" , title);
                }
            }

        	// 현재 선택된 셀을 선택하도록
        	// 현재 선택된 셀이 검색/바꾸기에 해당되지 않을 경우 INDEX=0으로 세팅
        	var nRow = this.ds00.findRow("index", this.fv_cellindex);
        	if( nRow > -1 ){
        		this.cbo00.value = (this.ds00.getColumn(nRow,"index"));
        	}else{
        		this.cbo00.index = 0;
        	}
        	this.fv_cellindex = this.cbo00.value;
        	this.fn_setBtnInfo();
        };

        /**
         * @description 찾기옵션세팅
        */
        this.fn_getFindOption = function()
        {
        	var option = {
        		'direction': this.rdo00.value,
        		'position': this.rdo01.value,
        		'scope': 'col',
        		'condition': this.rdo02.value,
        		'strict': this.chk00.value,
        		'cell': this.cbo00.value,
        	};

        	return option;
        };

        /**
         * @description 각 컬럼 타입별 바꾸기 가능/불가능 설정
        */
        this.fn_checkType = function (val)
        {
        	var arr = ["normal","text","calendarcontrol","date","editcontrol","number","text","textareacontrol"];
        	for( var i=0; i<arr.length; i++){
        		if ( arr[i] == val ){
        			return true;
        		}
        	}
        	return false;
        };

        /**
         * @description 바꾸기
        */
        this.replaceText = function (bAllChg)
        {
        	var findText = this.edt00.value;
        	if ( this.gfn_isNull(findText) )
        	{
        		return;
        	}

        	var grid = this.fv_grid;
        	var option = this.fn_getFindOption();
        	var replaceText = this.edt01.value;
        	if ( this.gfn_isNull(replaceText) )
        	{
        		replaceText = "";
        	}

        	var results = this.gfn_replaceGridText(grid, findText, replaceText, option, bAllChg);

        	var resultCnt = results.length;
        	if ( resultCnt > 0 )
        	{
        		var result;
        		var replaceCnt = 0;
        		for (var i=0; i<resultCnt; i++)
        		{
        			result = results[i];
        			if ( result.replace )
        			{
        				replaceCnt += 1;
        			}
        		}

        		// 모두 바꾸기
        		if ( bAllChg )
        		{
        			if ( resultCnt == replaceCnt )
        			{
        				// 마지막 변경된 셀로 이동
        				this.fn_markGridFindResult(grid, grid._lastReplaceRow, option.cell);
        				this.setFocus();
        				this.gfn_alert("msg.action.success", "", "success");
        				//this.alert("바꾸기 완료");
        			}
        			else
        			{
        // 				var errorCnt = resultCnt - replaceCnt;
        // 				var message = resultCnt + "건 변경 중 " + errorCnt + "건 오류 발생";
        // 				this.alert(message);
        				this.gfn_alert("msg.action.fail", "", "error");
        			}
        		}
        		else
        		{
        			if ( replaceCnt == 0 )
        			{
        				//this.alert(results[0].message);
        				this.gfn_alert("msg.search.nodata", "", "nodata");
        				return;
        			}

        			// 다음 찾기 대상으로 이동
        			findRowCell = this.gfn_findGridText(grid, findText, option);
        			findRow = findRowCell[0];
        			findCell = findRowCell[1];
        			if ( findRow > -1 && findCell > -1 )
        			{
        				this.fn_markGridFindResult(grid, findRow, findCell);
        			}
        			else
        			{
        				// 다음 대상이 없으면 마지막 찾은 셀로 이동
        				this.fn_markGridFindResult(grid, grid.lastReplaceRow, option.cell);
        			}
        			this.setFocus();
        		}
        	}
        	else
        	{
        		this.gfn_alert("msg.search.nodata", "", "nodata");
        		//this.alert("바꾸기할 항목이 없습니다.");
        	}
        };

        /**
         * @description 바꾸기 결과
        */
        this.fn_markGridFindResult = function(grid, findRow, findCell)
        {
        	var dataset = this.fv_ds;
        	dataset.rowposition = findRow;
        	grid.setCellPos(findCell);
        };

        /**
         * @description 버튼세팅
        */
        this.fn_setBtnInfo = function ()
        {
        	var sDisplaytype = this.fv_grid.getCellProperty("body", this.fv_cellindex, "displaytype");

        	if( !this.fn_checkType(sDisplaytype) ){
        		this.btn01.enable = false;
        		this.btn02.enable = false;
        	}
            else{
        		this.btn01.enable = true;
        		this.btn02.enable = true;
        	}
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
         * @description [닫기]버튼이벤트
        */
        this.btn03_onclick = function(obj,e)
        {
        	this.fv_grid.selecttype = this.fv_selectType;
        	this.close();
        };

        /**
         * @description [찾기]버튼이벤트
        */
        this.btn00_onclick = function(obj,e)
        {
        	var txt = this.edt00.value;
        	var option = this.fn_getFindOption();
        	var findRowCell = this.gfn_findGridText(this.fv_grid, txt, option);

        	var findRow = findRowCell[0];
        	var findCell = findRowCell[1];

        	if ( findRow > -1 && findCell > -1 )
        	{
        		this.fv_ds.rowposition = findRow;
        		this.fv_grid.setCellPos(findCell);
        	}
        	else
        	{
        		this.gfn_alert("msg.search.nodata", "", "nodata");
        		//this.alert("찾기 결과가 없습니다.");
        	}
        };

        /**
         * @description [대상컬럼콤보] 변경이벤트
        */
        this.cbo00_onitemchanged = function(obj,e)
        {
        	this.fv_cellindex = e.postvalue;
        	this.fn_setBtnInfo();
        };

        /**
         * @description [바꾸기] 변경이벤트
        */
        this.btn01_onclick = function(obj,e)
        {
        	this.replaceText(false);
        };

        /**
         * @description [모두바꾸기] 변경이벤트
        */
        this.btn02_onclick = function(obj,e)
        {
        	this.replaceText(true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cbo00.addEventHandler("onitemchanged",this.cbo00_onitemchanged,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
        };
        this.loadIncludeScript("Comm_FindReplace.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
