//XJS=Lib_Comm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"Lib::Lib_Util.xjs");
        this.addIncludeScript(path,"Lib::Lib_Grid.xjs");
        this.registerScript(path, function() {

        /************************************************************************************************
         * Common library (messages, transaction, common code, validation, popup, session)
         * Use in a form: include "Lib::Lib_Comm.xjs";
         ************************************************************************************************/
        this.executeIncludeScript("Lib::Lib_Util.xjs"); /*include "Lib::Lib_Util.xjs"*/;
        this.executeIncludeScript("Lib::Lib_Grid.xjs"); /*include "Lib::Lib_Grid.xjs"*/;

        /************************************************************************************************
         * Messages (gds_message in appvariables.xml)
         ************************************************************************************************/
        this.lfn_getMsg = function(sMsgId, arrWord)
        {
        	var objDs = nexacro.getApplication().gds_message;
        	var nRow = objDs.findRow("MSG_ID", sMsgId);
        	if (nRow < 0) {
        		return sMsgId;
        	}
        	// the screens are in English: use MSG_TEXT_EN when it exists
        	var sMsg = objDs.getColumn(nRow, "MSG_TEXT_EN");
        	if (this.lfn_isNull(sMsg)) {
        		sMsg = objDs.getColumn(nRow, "MSG_TEXT");
        	}
        	sMsg = String(sMsg).replace(/\\n/g, "\n");

        	if (!this.lfn_isNull(arrWord)) {
        		for (var i = 0; i < arrWord.length; i++) {
        			sMsg = sMsg.replace("{" + i + "}", arrWord[i]);
        		}
        	}
        	return sMsg;
        };

        this.lfn_alert = function(sMsgId, arrWord)
        {
        	var sMsgType = nexacro.getApplication().gds_message.lookup("MSG_ID", sMsgId, "MSG_TYPE");
        	var sMsg = this.lfn_getMsg(sMsgId, arrWord);

        	if (sMsgType == "C") {
        		return this.confirm(sMsg);
        	}
        	this.alert(sMsg);
        };

        /**
         * 값이 존재하는지 여부 체크
         */
        this.lfn_isNull = function(sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") return true;
        	if (sValue == null) return true;

        	var ChkStr = new String(sValue);

        	if (ChkStr == null) return true;
        	if (ChkStr.toString().length == 0 ) return true;
        	return false;
        };

        /************************************************************************************************
         * Transaction
         ************************************************************************************************/
        /**
         * Server url of an API path ("product/list").
         * In a web browser the app is served by the same Spring Boot server, so the page origin is used.
         */
        this.lfn_getApiUrl = function(sPath)
        {
        	var sBase = "http://localhost:8080/";
        	if (system.navigatorname != "nexacro") {
        		sBase = window.location.protocol + "//" + window.location.host + "/";
        	}
        	return sBase + sPath;
        };

        /**
         * Common transaction.
         * sUrl     : API path ("product/list") or a full url / service prefix url
         * bQuiet   : true = the form callback handles errors itself (no common alert)
         * The callback is only called on errors when bQuiet is true.
         */
        this.lfn_transaction = function(sId, sUrl, inData, outData, sArg, sCallBack, isAsync, bQuiet)
        {
        	if (this.lfn_isNull(sCallBack)) sCallBack = "fn_callback";

        	if ((isAsync != true) && (isAsync != false)) isAsync = true;

        	var sSvcId  = sId + ":" + sCallBack + ":" + (bQuiet ? "Q" : "");
        	var sSvcUrl = (sUrl.indexOf("://") > 0 || sUrl.indexOf("::") > 0) ? sUrl : this.lfn_getApiUrl(sUrl);

        	if (this.lfn_isNull(sArg)) {
        		sArg = "";
        	}

        	sArg += " in_var1="+nexacro.wrapQuote(this.titletext) + " in_var2="+this.name;
        	var nDataType = 0;

        	trace(sSvcId + " : " + sSvcUrl + " : " + inData + " : " + outData + " : " + isAsync);

        	this.transaction(sSvcId, sSvcUrl, inData, outData, sArg, "lfn_callback", isAsync, nDataType, false);
        };

        this.lfn_callback = function(svcID, errorCode, errorMsg)
        {
        	var arrSvc    = svcID.split(":");
        	var sSvcId    = arrSvc[0];
        	var sCallback = arrSvc[1];
        	var bQuiet    = arrSvc[2] == "Q";

        	// -99: LoginInterceptor on the server, the session is gone
        	if (errorCode == -99) {
        		this.lfn_alert("msg.session.timeout");
        		this.lfn_goLogin();
        		return;
        	}

        	if (errorCode != 0 && !bQuiet) {
        		this.alert(this.lfn_isNull(errorMsg) ? this.lfn_getMsg("msg.server.error") : errorMsg);
        		return;
        	}

        	// form에 callback 함수가 있을때
        	if (this[sCallback]) {
        		this.lookupFunc(sCallback).call(sSvcId, errorCode, errorMsg);
        	}
        };

        /************************************************************************************************
         * Common code (cached in gds_comCode for the whole session)
         ************************************************************************************************/
        /**
         * Loads the code groups ("CATEGORY,RETURN_TYPE") once per session, then calls sCallBack().
         * Groups that are already cached are not requested again.
         */
        this.lfn_getCode = function(sGroups, sCallBack)
        {
        	var objApp = nexacro.getApplication();
        	var sLoaded = objApp.gv_loadedCodes || ",";
        	var arrNeed = [];
        	var arrGroup = sGroups.split(",");

        	for (var i = 0; i < arrGroup.length; i++) {
        		if (sLoaded.indexOf("," + arrGroup[i] + ",") < 0) {
        			arrNeed.push(arrGroup[i]);
        		}
        	}
        	if (arrNeed.length == 0) {
        		this.lookupFunc(sCallBack).call();
        		return;
        	}

        	var objCond = this.lfn_getTempDataset("ds_lfnCodeCond");
        	this.lfn_setRow(objCond, {GROUP_CODES : arrNeed.join(",")});
        	this.lfn_getTempDataset("ds_lfnCode");

        	this.lfv_codeGroups = arrNeed;
        	this.lfn_transaction("lfnCode~" + sCallBack, "common/code", "ds_cond=ds_lfnCodeCond", "ds_lfnCode=ds_code", "", "lfn_codeCallback");
        };

        this.lfn_codeCallback = function(svcID, errorCode, errorMsg)
        {
        	var objApp = nexacro.getApplication();
        	var objCode = objApp.gds_comCode;
        	var objTmp = this.ds_lfnCode;
        	var arrGroup = this.lfv_codeGroups;

        	objCode.set_enableevent(false);
        	// drop rows of these groups first so two forms loading at once do not double them
        	for (var i = objCode.rowcount - 1; i >= 0; i--) {
        		if (arrGroup.indexOf(objCode.getColumn(i, "GROUP")) > -1) {
        			objCode.deleteRow(i);
        		}
        	}
        	for (var j = 0; j < objTmp.rowcount; j++) {
        		objCode.copyRow(objCode.addRow(), objTmp, j);
        	}
        	objCode.set_enableevent(true);

        	objApp.gv_loadedCodes = (objApp.gv_loadedCodes || ",") + arrGroup.join(",") + ",";
        	this.lookupFunc(svcID.split("~")[1]).call();
        };

        /** Name of a code, "" when it is not found. */
        this.lfn_getCodeName = function(sGroup, sCode)
        {
        	var objCode = nexacro.getApplication().gds_comCode;
        	var nRow = objCode.findRowExpr("GROUP=='" + sGroup + "' && CODE=='" + sCode + "'");
        	return nRow < 0 ? "" : objCode.getColumn(nRow, "CODE_NAME");
        };

        /**
         * Binds the codes of a group to a Combo.
         * sFirstText : adds a first item with an empty code ("All")
         */
        this.lfn_bindCode = function(objCombo, sGroup, sFirstText)
        {
        	var sDsId = "ds_code_" + objCombo.name;
        	var objDs = this.lfn_getTempDataset(sDsId);
        	var objCode = nexacro.getApplication().gds_comCode;

        	objDs.set_enableevent(false);
        	objDs.clear();
        	objDs.addColumn("CODE", "STRING");
        	objDs.addColumn("CODE_NAME", "STRING");
        	if (!this.lfn_isNull(sFirstText)) {
        		var nFirst = objDs.addRow();
        		objDs.setColumn(nFirst, "CODE", "");
        		objDs.setColumn(nFirst, "CODE_NAME", sFirstText);
        	}
        	for (var i = 0; i < objCode.rowcount; i++) {
        		if (objCode.getColumn(i, "GROUP") == sGroup) {
        			var nRow = objDs.addRow();
        			objDs.setColumn(nRow, "CODE", objCode.getColumn(i, "CODE"));
        			objDs.setColumn(nRow, "CODE_NAME", objCode.getColumn(i, "CODE_NAME"));
        		}
        	}
        	objDs.set_enableevent(true);

        	objCombo.set_codecolumn("CODE");
        	objCombo.set_datacolumn("CODE_NAME");
        	objCombo.set_innerdataset(objDs);
        	if (!this.lfn_isNull(sFirstText)) {
        		objCombo.set_index(0);
        	}
        };

        /** Dataset created in this form by script (common functions use it for temporary data). */
        this.lfn_getTempDataset = function(sId)
        {
        	if (!this[sId]) {
        		var objDs = new Dataset(sId, this);
        		this.addChild(sId, objDs);
        	}
        	return this[sId];
        };

        /************************************************************************************************
         * Validation
         ************************************************************************************************/
        /**
         * Checks the rules, shows the message under each field and focuses the first wrong one.
         * aRules : [{comp:objEdit, err:objStatic, label:"Email", rule:"required,email"}, ...]
         *          rule items: required, email, digits, minlength:8,
         *                      equalto (with equalComp / equalLabel in the rule object)
         * The error Static can be left out: then sta_<name without prefix>_err is used.
         */
        this.lfn_validate = function(aRules)
        {
        	var objFirst = null;

        	for (var i = 0; i < aRules.length; i++) {
        		var oRule = aRules[i];
        		var objErr = oRule.err || this.lfn_getErrorStatic(oRule.comp);
        		var sMsg = this.lfn_checkRule(oRule);

        		if (objErr) {
        			objErr.set_text(sMsg);
        			objErr.set_visible(sMsg != "");
        		}
        		if (sMsg != "" && !objFirst) {
        			objFirst = oRule.comp;
        		}
        	}
        	if (objFirst) {
        		objFirst.setFocus();
        		return false;
        	}
        	return true;
        };

        /** Message of the first broken rule, "" when the value is fine. */
        this.lfn_checkRule = function(oRule)
        {
        	var sValue = this.lfn_isNull(oRule.comp.value) ? "" : String(oRule.comp.value).trim();
        	var arrRule = oRule.rule.split(",");

        	for (var i = 0; i < arrRule.length; i++) {
        		var arrPart = arrRule[i].split(":");
        		var sName = arrPart[0];

        		if (sName == "required") {
        			if (sValue == "") return this.lfn_getMsg("msg.err.validator.required", [oRule.label]);
        			continue;
        		}
        		if (sValue == "") {
        			continue;
        		}
        		if (sName == "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sValue)) {
        			return this.lfn_getMsg("msg.err.validator.email");
        		}
        		if (sName == "digits" && !/^\d+$/.test(sValue)) {
        			return this.lfn_getMsg("msg.err.validator.digits", [oRule.label]);
        		}
        		if (sName == "minlength" && sValue.length < parseInt(arrPart[1], 10)) {
        			return this.lfn_getMsg("msg.err.validator.minlength", [oRule.label, arrPart[1]]);
        		}
        		if (sName == "equalto" && sValue != String(oRule.equalComp.value)) {
        			return this.lfn_getMsg("msg.err.validator.equalto", [oRule.label, oRule.equalLabel]);
        		}
        	}
        	return "";
        };

        /** sta_name_err for edt_name / cmb_name / cal_name, in the same form as the field. */
        this.lfn_getErrorStatic = function(objComp)
        {
        	var sKey = objComp.name.substr(objComp.name.indexOf("_") + 1);
        	return objComp.parent.components["sta_" + sKey + "_err"];
        };

        /** Hides the error of a field (call it from oninput / onitemchanged). */
        this.lfn_clearError = function(objComp)
        {
        	var objErr = this.lfn_getErrorStatic(objComp);
        	if (objErr) {
        		objErr.set_visible(false);
        	}
        };

        /************************************************************************************************
         * Popup
         ************************************************************************************************/
        this.lfn_openPopup = function(sPopupType, sPopupId, nLeft, nTop, nWidth, nHeight, nRight, nBottom, sUrl, oArg, sPopupCallback)
        {
        	if(sPopupType == "modal"){
        		newChild = new nexacro.ChildFrame;
        		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, nRight, nBottom, sUrl);

        		newChild.dragmovetype = "all";
        		newChild.openalign = "center middle";
        		newChild.overlaycolor = "RGBA(0, 0, 0, 0.2)";
        		// the popup forms draw their own title
        		newChild.set_showtitlebar(false);
        		newChild.showModal(this.getOwnerFrame(), oArg, this, sPopupCallback);
        	}
        	else if(sPopupType == "modeless"){
        		var sOpenStyle= "showtitlebar=true showstatusbar=false showontaskbar=true showcascadetitletext=false resizable=true autosize=true titletext=modeless";
        		var objApp = nexacro.getApplication();

        		nLeft = (objApp.mainframe.width  / 2) - Math.round(nWidth / 2);
        		nTop  = (objApp.mainframe.height / 2) - Math.round(nHeight / 2) ;
        		nLeft = system.clientToScreenX(this, nLeft);
        		nTop  = system.clientToScreenY(this, nTop);

        		var arrPopFrame = nexacro.getPopupFrames();
        		if (arrPopFrame[sPopupId]) {
        			if (system.navigatorname == "nexacro") {
        				arrPopFrame[sPopupId].setFocus();
        			}
        			else {
        				arrPopFrame[sPopupId]._getWindowHandle().focus();
        			}
        		}
        		else {
        			nexacro.open(sPopupId, sUrl, this.getOwnerFrame(), oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight, this);
        		}
        	}
        };

        /************************************************************************************************
         * Session
         ************************************************************************************************/
        /** Keeps the logged in user (ds row from auth/login) in gds_user and the token. */
        this.lfn_setUser = function(objDs, bRemember)
        {
        	var objUser = nexacro.getApplication().gds_user;
        	objUser.clearData();
        	var nRow = objUser.addRow();
        	objUser.setColumn(nRow, "USER_ID", objDs.getColumn(0, "USER_ID"));
        	objUser.setColumn(nRow, "USER_NAME", objDs.getColumn(0, "USER_NAME"));
        	objUser.setColumn(nRow, "E_MAIL", objDs.getColumn(0, "EMAIL"));
        	this.lfn_saveToken(objDs.getColumn(0, "TOKEN"), bRemember);
        };

        /** Clears the user and shows the login screen (also from a popup). */
        this.lfn_goLogin = function()
        {
        	var objApp = nexacro.getApplication();
        	objApp.gds_user.clearData();
        	this.lfn_clearToken();
        	if (this.opener) {
        		this.close();
        	}
        	objApp.mainframe.VFrameSet.LoginFrame.set_formurl("Base::Form_Login.xfdl");
        };

        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
