(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_menu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_GROUP","type" : "STRING","size" : "256"},{"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NAME","type" : "STRING","size" : "256"},{"id" : "LEVEL","type" : "STRING","size" : "256"},{"id" : "FORM_URL","type" : "STRING","size" : "256"},{"id" : "ENABLE","type" : "STRING","size" : "256"},{"id" : "MENU_AUTH","type" : "STRING","size" : "256"}]},"Rows" : [{"MENU_GROUP" : "10","MENU_ID" : "1010","MENU_NAME" : "개발 가이드","LEVEL" : "0","ENABLE" : "1"},{"MENU_GROUP" : "10","MENU_ID" : "1020","MENU_NAME" : "실습화면","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "10","MENU_ID" : "1030","MENU_NAME" : "사원관리","LEVEL" : "2","FORM_URL" : "Form::Form_ScriptSample1.xfdl","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "10","MENU_ID" : "1040","MENU_NAME" : "기능샘플","LEVEL" : "1","FORM_URL" : "","ENABLE" : "1","MENU_AUTH" : "111111"},{"MENU_GROUP" : "10","MENU_ID" : "1050","MENU_NAME" : "기간 달력 / 월력","LEVEL" : "2","FORM_URL" : "Sample::Sample_Calendar.xfdl","ENABLE" : "1","MENU_AUTH" : "100100"},{"MENU_GROUP" : "10","MENU_ID" : "1060","MENU_NAME" : "공통코드관리","LEVEL" : "2","FORM_URL" : "Sample::Sample_CommCode.xfdl","ENABLE" : "1","MENU_AUTH" : "001001"},{"MENU_GROUP" : "10","MENU_ID" : "1070","MENU_NAME" : "드래그 앤 드롭","LEVEL" : "2","FORM_URL" : "Sample::Sample_DragDrop.xfdl","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "10","MENU_ID" : "1080","MENU_NAME" : "그리드 기능","LEVEL" : "2","FORM_URL" : "Sample::Sample_Grid.xfdl","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "10","MENU_ID" : "1090","MENU_NAME" : "메시지","LEVEL" : "2","ENABLE" : "1","FORM_URL" : "Sample::Sample_Message.xfdl","MENU_AUTH" : "000000"},{"MENU_GROUP" : "10","MENU_ID" : "1110","MENU_NAME" : "팝업 처리","LEVEL" : "2","FORM_URL" : "Sample::Sample_Popup.xfdl","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "10","MENU_ID" : "1120","MENU_NAME" : "트랜잭션","LEVEL" : "2","FORM_URL" : "Sample::Sample_Transaction.xfdl","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "10","MENU_ID" : "1130","MENU_NAME" : "정합성 체크","LEVEL" : "2","FORM_URL" : "Sample::Sample_Validation.xfdl","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2010","MENU_NAME" : "디자인 가이드","LEVEL" : "0","FORM_URL" : "","ENABLE" : "0","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2020","MENU_NAME" : "컴포넌트","LEVEL" : "1","FORM_URL" : "","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2030","MENU_NAME" : "컴포넌트 가이드1","LEVEL" : "2","FORM_URL" : "Guide::CompGuide01.xfdl","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2040","MENU_NAME" : "컴포넌트 가이드2","LEVEL" : "2","ENABLE" : "1","FORM_URL" : "Guide::CompGuide02.xfdl","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2050","MENU_NAME" : "컴포넌트 가이드3","LEVEL" : "2","ENABLE" : "1","FORM_URL" : "Guide::CompGuide03.xfdl","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2060","MENU_NAME" : "컴포넌트 가이드4","LEVEL" : "2","FORM_URL" : "Guide::CompGuide04.xfdl","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2070","MENU_NAME" : "컴포넌트 가이드5","LEVEL" : "2","FORM_URL" : "Guide::CompGuide05.xfdl","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2080","MENU_NAME" : "컴포넌트 가이드6","LEVEL" : "2","FORM_URL" : "Guide::CompGuide06.xfdl","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2090","MENU_NAME" : "컴포넌트 가이드6-1","LEVEL" : "2","ENABLE" : "1","FORM_URL" : "Guide::CompGuide06_1.xfdl","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2100","MENU_NAME" : "컴포넌트 가이드7","LEVEL" : "2","FORM_URL" : "Guide::CompGuide07.xfdl","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2110","MENU_NAME" : "컴포넌트 가이드8","LEVEL" : "2","FORM_URL" : "Guide::CompGuide08.xfdl","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2120","MENU_NAME" : "컴포넌트 가이드9","LEVEL" : "2","FORM_URL" : "Guide::CompGuide09.xfdl","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2130","MENU_NAME" : "컴포넌트 가이드10","LEVEL" : "2","ENABLE" : "1","FORM_URL" : "Guide::CompGuide10.xfdl","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2140","MENU_NAME" : "컴포넌트 가이드1","LEVEL" : "2","ENABLE" : "1","FORM_URL" : "Guide::CompGuide01.xfdl","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2150","MENU_NAME" : "화면 템플릿","LEVEL" : "1","ENABLE" : "1","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2160","MENU_NAME" : "템플릿1","LEVEL" : "2","ENABLE" : "1","FORM_URL" : "Guide::Template01.xfdl","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2170","MENU_NAME" : "템플릿2","LEVEL" : "2","ENABLE" : "1","FORM_URL" : "Guide::Template02.xfdl","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2180","MENU_NAME" : "템플릿3","LEVEL" : "2","ENABLE" : "1","FORM_URL" : "Guide::Template03.xfdl","MENU_AUTH" : "000000"},{"MENU_GROUP" : "20","MENU_ID" : "2190","MENU_NAME" : "템플릿4","LEVEL" : "2","ENABLE" : "1","FORM_URL" : "Guide::Template04.xfdl","MENU_AUTH" : "000000"},{"MENU_GROUP" : "30","MENU_ID" : "3010","MENU_NAME" : "전자결재","LEVEL" : "0","ENABLE" : ""},{"MENU_GROUP" : "30","MENU_ID" : "3020","MENU_NAME" : "결재양식","LEVEL" : "1","ENABLE" : ""},{"MENU_GROUP" : "30","MENU_ID" : "3030","MENU_NAME" : "결재요청문서","LEVEL" : "2","ENABLE" : ""},{"MENU_GROUP" : "30","MENU_ID" : "3040","MENU_NAME" : "임시보관문서","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3050","MENU_NAME" : "결재문서","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3060","MENU_NAME" : "미결함","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3070","MENU_NAME" : "기결함","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3080","MENU_NAME" : "수신참조함","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3090","MENU_NAME" : "반려함","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3100","MENU_NAME" : "결재설정","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "30","MENU_ID" : "3110","MENU_NAME" : "결재라인설정","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "40","MENU_ID" : "4010","MENU_NAME" : "전자우편","LEVEL" : "0","ENABLE" : "1"},{"MENU_GROUP" : "40","MENU_ID" : "4020","MENU_NAME" : "전체편지함","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "40","MENU_ID" : "4030","MENU_NAME" : "받은편지함","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "40","MENU_ID" : "4040","MENU_NAME" : "보낸편지함","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "40","MENU_ID" : "4050","MENU_NAME" : "임시보관함","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "40","MENU_ID" : "4060","MENU_NAME" : "지운편지함","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5010","MENU_NAME" : "일정관리","LEVEL" : "0","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5020","MENU_NAME" : "개인일정","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5030","MENU_NAME" : "일정","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5040","MENU_NAME" : "메모","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5050","MENU_NAME" : "할일","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5060","MENU_NAME" : "공유일정","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5070","MENU_NAME" : "통합일정검색","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5080","MENU_NAME" : "주간일정","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5090","MENU_NAME" : "월간일정","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5100","MENU_NAME" : "업무보고","LEVEL" : "1","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5110","MENU_NAME" : "업무보고작성","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5120","MENU_NAME" : "업무보고확인","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5130","MENU_NAME" : "업무보고참조","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5140","MENU_NAME" : "주간업무보고","LEVEL" : "2","ENABLE" : "1"},{"MENU_GROUP" : "50","MENU_ID" : "5014","MENU_NAME" : "주간업무보고","LEVEL" : "2","ENABLE" : "1"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_user", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "USER_ID","type" : "STRING","size" : "256"},{"id" : "USER_NAME","type" : "STRING","size" : "256"},{"id" : "USER_AUTH","type" : "STRING","size" : "256"},{"id" : "EMPL_ID","type" : "STRING","size" : "256"},{"id" : "PHONE_NO","type" : "STRING","size" : "256"},{"id" : "E_MAIL","type" : "STRING","size" : "256"}]}});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_message", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MSG_ID","type" : "STRING","size" : "256"},{"id" : "MSG_TEXT","type" : "STRING","size" : "256"},{"id" : "MSG_TEXT_EN","type" : "STRING","size" : "256"},{"id" : "MSG_TYPE","type" : "STRING","size" : "256"},{"id" : "MSG_ICON","type" : "STRING","size" : "2"}]},"Rows" : [{"MSG_ID" : "msg.server.error","MSG_TEXT" : "서버 오류입니다.\\n관리자에게 문의하세요.","MSG_TEXT_EN" : "Server error. Please contact your administrator.","MSG_TYPE" : "A","MSG_ICON" : "ERR"},{"MSG_ID" : "msg.server.error.msg","MSG_TEXT" : "서버에서 다음과 같은 에러메시지를 받았습니다.\\n{0}","MSG_TEXT_EN" : "The server received the following error message.s\\n{0}","MSG_TYPE" : "A","MSG_ICON" : "WAN"},{"MSG_ID" : "msg.session.timeout","MSG_TEXT" : "세션이 종료되었습니다. 다시 로그인해주세요.","MSG_TEXT_EN" : "Your session has expired, please login again.","MSG_TYPE" : "A","MSG_ICON" : "ERR"},{"MSG_ID" : "msg.login.url.error","MSG_TEXT" : "정상적인 경로로 접속하시기 바랍니다.","MSG_TEXT_EN" : "invalid access! please, login first at www.tobesoft.com","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.login.error","MSG_TEXT" : "해당하는 사용자 정보가 없습니다.","MSG_TEXT_EN" : "No user found.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.call.nofile","MSG_TEXT" : "해당하는 메뉴에 Program File이 등록되지 않았습니다.","MSG_TEXT_EN" : "the requested menu does not exist!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.nomenu","MSG_TEXT" : "해당 Menu가 존재하지 않습니다.","MSG_TEXT_EN" : "The specified menu doesn't exist.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "confirm.logout","MSG_TEXT" : "로그아웃 하시겠습니까?","MSG_TEXT_EN" : "Are you sure you want to log out?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "confirm.before.movepage","MSG_TEXT" : "변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?","MSG_TEXT_EN" : "There are unsaved data. Would you like to leave now?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "confirm.before.search","MSG_TEXT" : "검색을 진행하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?","MSG_TEXT_EN" : "Any unsaved data will be discarded. \\nWould you like to continue?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "confirm.before.moveropos","MSG_TEXT" : "해당 row의 위치를 이동하면 변경된 데이터가 사라집니다. \\n계속 진행 하시겠습니까?","MSG_TEXT_EN" : "If you move the selected row, your changes will be discarded. \\nWould you like to continue?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "confirm.before.delete","MSG_TEXT" : "선택된 자료를 삭제 하시겠습니까?","MSG_TEXT_EN" : "Are you sure you want to delete?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "confirm.before.deletesave","MSG_TEXT" : "선택된 자료를 삭제 후 저장하시겠습니까?","MSG_TEXT_EN" : "Are you sure you want to delete and save?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "msg.noselect","MSG_TEXT" : "{0} 을(를) 선택해 주십시요.","MSG_TEXT_EN" : "Please, select {0}","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.search.nodata","MSG_TEXT" : "지정된 조건에 해당하는 항목을 찾을 수 없습니다.","MSG_TEXT_EN" : "No data found.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.save.nodata","MSG_TEXT" : "저장할 데이터가 없습니다.","MSG_TEXT_EN" : "No data to save.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.save.nochange","MSG_TEXT" : "변경된 내역이 없습니다.","MSG_TEXT_EN" : "No changes found.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "confirm.before.save","MSG_TEXT" : "변경된 내역을 저장 하시겠습니까?","MSG_TEXT_EN" : "Would you like to save your changes?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "msg.search.success","MSG_TEXT" : "조회 되었습니다.","MSG_TEXT_EN" : "Successfully ","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.save.success","MSG_TEXT" : "저장 되었습니다.","MSG_TEXT_EN" : "Successfully saved!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.update.success","MSG_TEXT" : "수정 되었습니다.","MSG_TEXT_EN" : "Successfully updated!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.delete.success","MSG_TEXT" : "삭제 되었습니다.","MSG_TEXT_EN" : "Successfully deleted!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.action.success","MSG_TEXT" : "처리 되었습니다.","MSG_TEXT_EN" : "Successfully processed!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.action.fail","MSG_TEXT" : "프로세스가 실패하였습니다.","MSG_TEXT_EN" : "Failed process!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.updateafter","MSG_TEXT" : "변경된 내역을 저장 후 작업하세요.","MSG_TEXT_EN" : "Please, save your changes first!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.delete.child","MSG_TEXT" : "하위 자료가 있어 삭제할 수 없습니다.","MSG_TEXT_EN" : "the requested deletion could not be performed because dependent data found!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.grid.noselect","MSG_TEXT" : "선택된 항목이 없습니다.","MSG_TEXT_EN" : "No item has been selected!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.before.delete","MSG_TEXT" : "정말로 삭제 하시겠습니까?","MSG_TEXT_EN" : "Are you sure you want to delete?","MSG_TYPE" : "C","MSG_ICON" : "CFN"},{"MSG_ID" : "msg.err.validator","MSG_TEXT" : "{0}","MSG_TEXT_EN" : "{0}","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.required","MSG_TEXT" : "{0} 은(는) 필수 입력 항목입니다.","MSG_TEXT_EN" : "{0} is a required field.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.length","MSG_TEXT" : "{0} 의 입력값은 {1} 자리이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.rangelength","MSG_TEXT" : "{0} 은(는) {1} 와(과) {2} 사이의 자리이어야 합니다.","MSG_TEXT_EN" : "The length of {0} is between {1} and {2}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.maxlength","MSG_TEXT" : "{0} 의 입력값의 길이는 {1} 이하이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be less than or equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.minlength","MSG_TEXT" : "{0} 의 입력값의 길이는 {1} 이상이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be greater than or equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.maxlengthB","MSG_TEXT" : "{0} 의 입력값의 길이는 {1} 이하이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be less than or equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.minlengthB","MSG_TEXT" : "{0} 의 입력값의 길이는 {1} 이상이어야 합니다.","MSG_TEXT_EN" : "The length of {0} must be greater than or equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.digits","MSG_TEXT" : "{0} 은(는) 숫자만 입력 가능합니다.","MSG_TEXT_EN" : "{0} must be a numeric value.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.min","MSG_TEXT" : "{0} 은(는) {1} 이상의 숫자만 입력 가능합니다.","MSG_TEXT_EN" : "{0} must be a numeric value greater than or equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.max","MSG_TEXT" : "{0} 은(는) {1} 이하의 숫자만 입력 가능합니다.","MSG_TEXT_EN" : "{0} must be a numeric value less than or equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.date","MSG_TEXT" : "{0} 은(는) 유효하지 않은 날짜 형식입니다.","MSG_TEXT_EN" : "{0} is in invalid date format.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.dateym","MSG_TEXT" : "{0} 은(는) 유효하지 않은 년월 형식입니다.","MSG_TEXT_EN" : "{0} is in invalid year/month format.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.fromto","MSG_TEXT" : "{0} 의 날짜가 {1} 의 날짜보다 작습니다.","MSG_TEXT_EN" : "{0} is less than {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.comparebig","MSG_TEXT" : "{0} 이(가) {1} 보다 작습니다.","MSG_TEXT_EN" : "{0} is less than {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.comparesmall","MSG_TEXT" : "{0} 이(가) {1} 보다 큽니다.","MSG_TEXT_EN" : "{0} is greater than {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.equalto","MSG_TEXT" : "{0} 이(가) {1} 와(과) 일치하지 않습니다.","MSG_TEXT_EN" : "{0} is not equal to {1}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.range","MSG_TEXT" : "{0} 은(는) {1} 와(과) {2} 사이의 값입니다.","MSG_TEXT_EN" : "The value of {0} is between {1} and {2}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.declimit","MSG_TEXT" : "{0} 은(는) 소숫점 {1} 자리로 구성되어야 합니다.","MSG_TEXT_EN" : "The fractional part of {0} must consiste of {1} digits.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.code","MSG_TEXT" : "{0} 은(는) {1} 중 하나의 값이어야 합니다.","MSG_TEXT_EN" : "{0} must be the value of {1}","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.ssn","MSG_TEXT" : "{0} 은(는) 올바른 주민번호가 아닙니다.","MSG_TEXT_EN" : "The entered Social Security Number is invalid.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.email","MSG_TEXT" : "e-mail이 잘못된 형태로 입력 되었습니다.","MSG_TEXT_EN" : "The entered email address is invalid.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.url","MSG_TEXT" : "웹사이트 주소가 잘못 입력 되었습니다.","MSG_TEXT_EN" : "The entered website address is invalid.","MSG_TYPE" : "A","MSG_ICON" : "WAN"},{"MSG_ID" : "msg.err.validator.phone","MSG_TEXT" : "전화번호가 잘못된 형태로 입력 되었습니다.","MSG_TEXT_EN" : "The entered phone number is invalid.","MSG_TYPE" : "A","MSG_ICON" : "WAN"},{"MSG_ID" : "msg.err.validator.multicombo.maxcnt","MSG_TEXT" : "{0}개 이상 선택 할 수 없습니다.","MSG_TEXT_EN" : "You can't select more than {0}","MSG_TYPE" : "A","MSG_ICON" : "WAN"},{"MSG_ID" : "msg.err.maxdate","MSG_TEXT" : "날짜의 입력 가능 범위를 벗어났습니다.","MSG_TEXT_EN" : "Invalid date.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.validator.date.great","MSG_TEXT" : "종료일이 시작일보다 빠릅니다.","MSG_TEXT_EN" : "Invalid date range.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.filesize","MSG_TEXT" : "첨부 파일의 용량은 최고 5MB까지 입니다.","MSG_TEXT_EN" : "Maximum allowed attachment size is 5 MB.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.nofilepath","MSG_TEXT" : "경로가 지정되지 않은 첨부파일은 업/다운로드 할 수 없습니다.","MSG_TEXT_EN" : "A valid file path must be provided.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.exist.code","MSG_TEXT" : "입력하는 Code ({0})값이 이미 등록되어 있습니다.","MSG_TEXT_EN" : "Code already exsits!","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.invalid.filename","MSG_TEXT" : "파일 이름이 정의되지 않았습니다.","MSG_TEXT_EN" : "Please, specify a filename.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.notice.itemcount","MSG_TEXT" : "첨부 파일은 {0}개 이상 등록 할 수 없습니다.","MSG_TEXT_EN" : "Attachments can not be registered in more than {0}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.uploadfail","MSG_TEXT" : "{0}로(으로) 파일업로드 실패 입니다.","MSG_TEXT_EN" : "the file upload is failed because {0}.","MSG_TYPE" : "A","MSG_ICON" : "INF"},{"MSG_ID" : "msg.err.nodata","MSG_TEXT" : "해당하는 데이터가 없습니다.","MSG_TEXT_EN" : "No data available.","MSG_TYPE" : "A","MSG_ICON" : "INF"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_myMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "MENU_GROUP","type" : "STRING","size" : "256"},{"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NAME","type" : "STRING","size" : "256"},{"id" : "LEVEL","type" : "STRING","size" : "256"},{"id" : "FORM_URL","type" : "STRING","size" : "256"},{"id" : "ENABLE","type" : "STRING","size" : "256"},{"id" : "MENU_AUTH","type" : "STRING","size" : "256"}]}});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_openForm", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "FORM_ID","type" : "STRING","size" : "256"},{"id" : "MENU_ID","type" : "STRING","size" : "256"},{"id" : "MENU_NAME","type" : "STRING","size" : "256"},{"id" : "FORM_URL","type" : "STRING","size" : "256"}]}});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_gridPersonal", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "sFormatId","type" : "STRING","size" : "256"},{"id" : "sFormat","type" : "STRING","size" : "2147483647"},{"id" : "sOrgFormat","type" : "STRING","size" : "2147483647"}]}});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_word", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "WORD_ID","type" : "STRING","size" : "256"},{"id" : "KR","type" : "STRING","size" : "256"},{"id" : "EN","type" : "STRING","size" : "256"}]},"Rows" : [{"KR" : "스테틱","EN" : "static","WORD_ID" : "comp.static"},{"KR" : "체크","EN" : "check","WORD_ID" : "comp.check"},{"WORD_ID" : "comp.button","KR" : "버튼","EN" : "button"},{"KR" : "박스","EN" : "box","WORD_ID" : "comp.box"},{"KR" : "콤보","EN" : "combo","WORD_ID" : "comp.combo"},{"KR" : "달력","EN" : "calendar","WORD_ID" : "comp.calendar"},{"KR" : "웹브라우저","EN" : "web browser","WORD_ID" : "comp.webbrowser"},{"KR" : "이미지","EN" : "image","WORD_ID" : "comp.image"},{"KR" : "팝업","EN" : "popup","WORD_ID" : "comp.popup"},{"KR" : "라디오","EN" : "radio","WORD_ID" : "comp.radio"},{"WORD_ID" : "comp.number","KR" : "숫자","EN" : "number"},{"WORD_ID" : "comp.text","KR" : "텍스트","EN" : "text"},{"WORD_ID" : "comp.test","KR" : "테스트","EN" : "test"},{"WORD_ID" : "comp.textmode","KR" : "텍스트모드","EN" : "text mode"},{"WORD_ID" : "frame.menu","EN" : "menu","KR" : "메뉴"},{"KR" : "즐겨찾기","EN" : "Favorites","WORD_ID" : "frame.favorites"},{"WORD_ID" : "frame.searchMenu","KR" : "메뉴검색","EN" : "Search"},{"WORD_ID" : "frame.searchMenu.button","KR" : "검색","EN" : "sch.."},{"WORD_ID" : "frame.logOut","KR" : "로그아웃","EN" : "Log out"},{"WORD_ID" : "cmm.no","KR" : "순번","EN" : "NO"},{"WORD_ID" : "cmm.status","KR" : "상태","EN" : "Status"},{"WORD_ID" : "cmm.checkbox","KR" : "체크박스","EN" : "Checkbox"},{"WORD_ID" : "popup.notice","KR" : "알림","EN" : "notice"},{"WORD_ID" : "popup.confirm","KR" : "확인","EN" : "confirm"},{"WORD_ID" : "popup.ok","KR" : "확인","EN" : "OK"},{"WORD_ID" : "popup.close","KR" : "닫기","EN" : "Close"},{"WORD_ID" : "popup.cancel","KR" : "취소","EN" : "Cancel"},{"WORD_ID" : "popup.periodselect","KR" : "기간 선택","EN" : "Select the time period"},{"WORD_ID" : "popup.monthselect","KR" : "월 선택","EN" : "Select the month"},{"WORD_ID" : "popup.dataselect","KR" : "데이터 선택","EN" : "Select the data"},{"WORD_ID" : "popup.columnselect","KR" : "컬럼 선택","EN" : "Select the column"},{"WORD_ID" : "popup.modal","KR" : "모달팝업","EN" : "modal popup"},{"WORD_ID" : "popup.columnname","KR" : "컬럼명","EN" : "column name"},{"WORD_ID" : "popup.filtercriteria","KR" : "필터 기준","EN" : "filter criteria"},{"WORD_ID" : "popup.findcondition","KR" : "찾을 조건","EN" : "find conditions"},{"WORD_ID" : "popup.datafiltersetting","KR" : "데이터 필터 설정","EN" : "data filter setting"},{"WORD_ID" : "popup.apply","KR" : "적용","EN" : "Apply"},{"WORD_ID" : "popup.datafindreplace","KR" : "데이터 찾기/바꾸기","EN" : "data find/replace"},{"WORD_ID" : "popup.targetcolumn","KR" : "대상 컬럼","EN" : "target column"},{"WORD_ID" : "popup.findstring","KR" : "찾을 문자열","EN" : "find string"},{"WORD_ID" : "popup.replacestring","KR" : "바꿀 문자열","EN" : "replace string"},{"WORD_ID" : "popup.finddirection","KR" : "찾을 방향","EN" : "find direction"},{"WORD_ID" : "popup.findposition","KR" : "찾을 위치","EN" : "find position"},{"WORD_ID" : "popup.find","KR" : "찾기","EN" : "Find"},{"WORD_ID" : "popup.replace","KR" : "바꾸기","EN" : "Replace"},{"WORD_ID" : "popup.allchange","KR" : "모두바꾸기","EN" : "All Replace"},{"WORD_ID" : "popup.casesensitive","KR" : "대/소문자 구분","EN" : "Case sensitive"},{"WORD_ID" : "popup.colshwohide","KR" : "컬럼 보이기/숨기기","EN" : "column show/hide"},{"KR" : "조회","EN" : "search","WORD_ID" : "search"},{"KR" : "입력","EN" : "insert","WORD_ID" : "insert"},{"KR" : "삭제","EN" : "delete","WORD_ID" : "delete"},{"KR" : "수정","EN" : "modify","WORD_ID" : "modify"},{"WORD_ID" : "save","KR" : "저장","EN" : "save"},{"WORD_ID" : "print","EN" : "print","KR" : "출력"},{"WORD_ID" : "excel","KR" : "엑셀","EN" : "excel"},{"KR" : "사원","EN" : "employee","WORD_ID" : "employee"},{"KR" : "부서","EN" : "department","WORD_ID" : "department"},{"KR" : "회사","EN" : "company","WORD_ID" : "company"},{"WORD_ID" : "user","KR" : "사용자","EN" : "user"},{"KR" : "주민등록번호","EN" : "Social Security Number","WORD_ID" : "user.jumin"},{"WORD_ID" : "user.id","KR" : "아이디","EN" : "ID"},{"KR" : "명칭","WORD_ID" : "designation","EN" : "designation"},{"WORD_ID" : "useflg","KR" : "사용 여부","EN" : "use flg"},{"WORD_ID" : "reguser","KR" : "등록자","EN" : "register user"},{"WORD_ID" : "description","KR" : "설명","EN" : "description"},{"KR" : "시작일자","EN" : "Start date","WORD_ID" : "date.start"},{"KR" : "종료일","EN" : "End date","WORD_ID" : "date.end"},{"WORD_ID" : "value.max","KR" : "최대값","EN" : "Maximum value"},{"KR" : "금리","EN" : "Interest rate","WORD_ID" : "value.interest"},{"EN" : "1st value","KR" : "1번째값","WORD_ID" : "value.1st"},{"EN" : "2nd value","KR" : "2번째값","WORD_ID" : "value.2nd"},{"KR" : "등록자","EN" : "register","WORD_ID" : "register"},{"KR" : "정보","EN" : "info","WORD_ID" : "info"},{"KR" : "용어","EN" : "word","WORD_ID" : "word"},{"KR" : "사전","EN" : "dictionary","WORD_ID" : "dictionary"},{"KR" : "국가","EN" : "nation","WORD_ID" : "nation"},{"KR" : "언어","EN" : "language","WORD_ID" : "language"},{"KR" : "선택","EN" : "select","WORD_ID" : "select"},{"KR" : "초기화","EN" : "initialize","WORD_ID" : "initialize"},{"WORD_ID" : "tab1","KR" : "1번째탭","EN" : "First Tab"},{"WORD_ID" : "tab2","KR" : "2번째탭","EN" : "Second Tab"},{"KR" : "한글","EN" : "Korean","WORD_ID" : "korean"},{"KR" : "영어","EN" : "English","WORD_ID" : "english"},{"WORD_ID" : "sort","KR" : "정렬","EN" : "sort"},{"WORD_ID" : "colfix","KR" : "열고정","EN" : "column fix"},{"WORD_ID" : "rowfix","KR" : "행고정","EN" : "row fix"},{"WORD_ID" : "excel","KR" : "엑셀","EN" : "excel"},{"WORD_ID" : "basicfunction","KR" : "기본기능","EN" : "basic function"},{"WORD_ID" : "complicatedgrid","KR" : "복잡한 그리드","EN" : "complicated grid"},{"WORD_ID" : "gridpersonal","KR" : "그리드개인화","EN" : "personalization grid"},{"WORD_ID" : "listcount","KR" : "목록 갯수","EN" : "List count"},{"WORD_ID" : "etorangers","EN" : "Eto Rangers","KR" : "꾸러기수비대"},{"WORD_ID" : "sunday","KR" : "일요일","EN" : "Sunday"},{"WORD_ID" : "monday","KR" : "월요일","EN" : "Monday"},{"WORD_ID" : "tuesday","KR" : "화요일","EN" : "Tuesday"},{"WORD_ID" : "wednesday","KR" : "수요일","EN" : "Wednesday"},{"WORD_ID" : "thursday","KR" : "목요일","EN" : "Thursday"},{"WORD_ID" : "friday","KR" : "금요일","EN" : "Friday"},{"WORD_ID" : "saturday","KR" : "토요일","EN" : "Saturday"},{"KR" : "월","WORD_ID" : "mon","EN" : "MON"},{"KR" : "화","WORD_ID" : "tue","EN" : "TUE"},{"KR" : "수","WORD_ID" : "wed","EN" : "WED"},{"KR" : "목","WORD_ID" : "thu","EN" : "THU"},{"KR" : "금","WORD_ID" : "fri","EN" : "FRI"},{"KR" : "토","WORD_ID" : "sat","EN" : "SAT"},{"KR" : "일","WORD_ID" : "sun","EN" : "SUN"},{"WORD_ID" : "week","KR" : "주","EN" : "WEEK"},{"WORD_ID" : "emp.name","KR" : "성명","EN" : "Name"},{"WORD_ID" : "emp.id","KR" : "사원번호","EN" : "Emp. ID"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_gridPopupMenu", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "id","type" : "STRING","size" : "256"},{"id" : "level","type" : "STRING","size" : "256"},{"id" : "caption","type" : "STRING","size" : "256"},{"id" : "captionEN","type" : "STRING","size" : "256"},{"id" : "enable","type" : "STRING","size" : "256"},{"id" : "userData","type" : "STRING","size" : "256"},{"id" : "upmenu","type" : "STRING","size" : "256"}]},"Rows" : [{"id" : "shapefix","level" : "0","caption" : "틀고정","enable" : "false","userData" : "0","captionEN" : "shape fix"},{"id" : "colfix","level" : "1","caption" : "열고정","enable" : "false","userData" : "0","upmenu" : "shapefix","captionEN" : "column fix"},{"id" : "colfixfree","level" : "1","caption" : "열고정해제","enable" : "false","userData" : "0","upmenu" : "shapefix","captionEN" : "column fix free"},{"id" : "rowfix","level" : "1","caption" : "행고정","enable" : "false","userData" : "0","upmenu" : "shapefix","captionEN" : "row fix"},{"id" : "rowfixfree","level" : "1","caption" : "행고정해제","enable" : "false","userData" : "0","upmenu" : "shapefix","captionEN" : "row fix free"},{"caption" : "-","enable" : "false","userData" : "0","level" : "0","captionEN" : "-"},{"id" : "filter","level" : "0","caption" : "그리드필터","enable" : "false","userData" : "0","captionEN" : "grid filter"},{"id" : "filterfree","level" : "0","caption" : "그리드필터 해제","enable" : "false","userData" : "0","captionEN" : "grid filter free"},{"level" : "0","caption" : "-","enable" : "false","userData" : "0","captionEN" : "-"},{"id" : "replace","level" : "0","caption" : "찾기/바꾸기","enable" : "false","userData" : "0","captionEN" : "find/replace"},{"id" : "colhide","level" : "0","caption" : "컬럼 숨기기/보이기","enable" : "false","userData" : "0","captionEN" : "column show/hide"},{"level" : "0","caption" : "-","enable" : "false","userData" : "0","captionEN" : "-"},{"id" : "excel","level" : "0","caption" : "엑셀","enable" : "false","userData" : "0","captionEN" : "excel"},{"id" : "export","level" : "1","caption" : "내보내기","enable" : "false","userData" : "0","upmenu" : "excel","captionEN" : "export"},{"id" : "import","level" : "1","caption" : "가져오기","enable" : "false","userData" : "0","upmenu" : "excel","captionEN" : "import"},{"level" : "0","caption" : "-","enable" : "false","userData" : "0","captionEN" : "-"},{"id" : "personal","level" : "0","caption" : "현재포맷저장","enable" : "false","userData" : "0","captionEN" : "saving current format"},{"id" : "initial","level" : "0","caption" : "초기상태로","enable" : "false","userData" : "0","captionEN" : "initialization"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_comCode", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GROUP","type" : "STRING","size" : "256"},{"id" : "GROUP_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "CODE_NAME","type" : "STRING","size" : "256"}]},"Rows" : [{"CODE" : "07","CODE_NAME" : "사원","GROUP" : "C010","GROUP_NAME" : "직급"},{"CODE" : "06","CODE_NAME" : "대리","GROUP" : "C010","GROUP_NAME" : "직급"},{"CODE" : "05","CODE_NAME" : "과장","GROUP" : "C010","GROUP_NAME" : "직급"},{"CODE" : "04","CODE_NAME" : "차장","GROUP" : "C010","GROUP_NAME" : "직급"},{"CODE" : "03","CODE_NAME" : "부장","GROUP" : "C010","GROUP_NAME" : "직급"},{"CODE" : "02","CODE_NAME" : "이사","GROUP" : "C010","GROUP_NAME" : "직급"},{"CODE" : "01","CODE_NAME" : "사장","GROUP" : "C010","GROUP_NAME" : "직급"},{"CODE_NAME" : "재직","CODE" : "1","GROUP_NAME" : "재직상태","GROUP" : "C020"},{"CODE_NAME" : "휴직","CODE" : "2","GROUP_NAME" : "재직상태","GROUP" : "C020"},{"CODE_NAME" : "퇴직","CODE" : "9","GROUP_NAME" : "재직상태","GROUP" : "C020"},{"GROUP" : "C030","GROUP_NAME" : "발령구분","CODE" : "A10","CODE_NAME" : "입사(공채)"},{"GROUP" : "C030","GROUP_NAME" : "발령구분","CODE" : "A20","CODE_NAME" : "입사(수시)"},{"GROUP_NAME" : "발령구분","CODE" : "A30","CODE_NAME" : "입사(재입사)","GROUP" : "C030"},{"GROUP" : "C030","GROUP_NAME" : "발령구분","CODE" : "A90","CODE_NAME" : "퇴직"},{"CODE_NAME" : "부서발령","GROUP" : "C030","GROUP_NAME" : "발령구분","CODE" : "B10"},{"CODE_NAME" : "승진(정기)","GROUP" : "C030","GROUP_NAME" : "발령구분","CODE" : "C20"},{"CODE_NAME" : "승진(특별)","CODE" : "C30","GROUP_NAME" : "발령구분","GROUP" : "C030"},{"CODE_NAME" : "서울","GROUP" : "C040","GROUP_NAME" : "지역 코드","CODE" : "01"},{"CODE_NAME" : "부산","GROUP" : "C040","GROUP_NAME" : "지역 코드","CODE" : "02"},{"CODE_NAME" : "인천","GROUP" : "C040","GROUP_NAME" : "지역 코드","CODE" : "03"},{"CODE_NAME" : "대구","GROUP" : "C040","GROUP_NAME" : "지역 코드","CODE" : "04"},{"CODE_NAME" : "대전","GROUP" : "C040","GROUP_NAME" : "지역 코드","CODE" : "05"},{"GROUP" : "C040","GROUP_NAME" : "지역 코드","CODE" : "06","CODE_NAME" : "광주"},{"GROUP" : "C040","GROUP_NAME" : "지역 코드","CODE" : "07","CODE_NAME" : "울산"},{"GROUP" : "C050","GROUP_NAME" : "성별 코드","CODE" : "M","CODE_NAME" : "남자"},{"GROUP" : "C050","GROUP_NAME" : "성별 코드","CODE" : "F","CODE_NAME" : "여자"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "01","CODE_NAME" : "축구"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "02","CODE_NAME" : "야구"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "03","CODE_NAME" : "농구"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "04","CODE_NAME" : "낚시"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "05","CODE_NAME" : "배드맨턴"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "06","CODE_NAME" : "테니스"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "07","CODE_NAME" : "골프"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "08","CODE_NAME" : "수영"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "09","CODE_NAME" : "볼링"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "10","CODE_NAME" : "바둑"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "11","CODE_NAME" : "등산"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "12","CODE_NAME" : "음악감상"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "13","CODE_NAME" : "영화관람"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "14","CODE_NAME" : "독서"},{"GROUP" : "C060","GROUP_NAME" : "취미코드","CODE" : "15","CODE_NAME" : "기타"}]});
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_temp", this);
            obj._setContents({"ColumnInfo" : {"Column" : [ {"id" : "GROUP","type" : "STRING","size" : "256"},{"id" : "GROUP_NAME","type" : "STRING","size" : "256"},{"id" : "CODE","type" : "STRING","size" : "256"},{"id" : "CODE_NAME","type" : "STRING","size" : "256"}]}});
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("EduSysN24");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1290","840",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("EduSysN24");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_titlebarheight("28");
            mainframe.set_statusbarheight("25");
            mainframe.set_titlebarbuttongap("4");
            mainframe.set_titlebarbuttonsize("19 19");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("EduSysN24.xadl", function() {
        /**
        *  실무활용교육 샘플 프로젝트
        *  @MenuPath
        *  @FileName
        *  @Creator 	Education
        *  @CreateDate 	2024.12.01
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2024.12.01     	    Education 	           최초 생성
        *******************************************************************************
        */

        /************************************************************************************************
         * application 변수 선언 영역
        ************************************************************************************************/
        this.av_VFrameSet  = "";
        this.av_HFrameSet  = "";
        this.av_VFrameSet1 = "";
        this.av_WorkFrame  = "";

        this.av_LoginFrame = "";
        this.av_TopFrame   = "";
        this.av_LeftBarFrame  = "";
        this.av_LeftFrame  = "";
        this.av_MainFrame  = "";
        this.av_MdiFrame   = "";

        this.av_MenuColumns = {
        	menuId : "MENU_ID",    //  MENU ID
        	menuNm : "MENU_NAME",
        	menuUrl : "FORM_URL",
        	groupId : "MENU_GROUP",
        	menuLevel : "LEVEL"    //메뉴레벨
        };

        this.av_MaxForm = 15;     //열린 메뉴 최대 갯수
        this.av_MultiOpen = true  //동일화면 여러게 오픈true, 하나만 오픈false

        /***********************************************************************************************
        * Application EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/

        /**
         * @description Applicaton onload시 처리내역
        */
        this.Application_onload = function(obj,e)
        {
        	// Frame 변수 저장
        	this.av_VFrameSet  = this.mainframe.VFrameSet;                                			// VFrameSet
        	this.av_HFrameSet  = this.mainframe.VFrameSet.HFrameSet;                      			// HFrameSet
        	this.av_VFrameSet1 = this.mainframe.VFrameSet.HFrameSet.VFrameSet1;           			// VFrameSet1
        	this.av_WorkFrame  = this.mainframe.VFrameSet.HFrameSet.VFrameSet1.WorkFrame;           // WorkForm

        	this.av_LoginFrame    = this.mainframe.VFrameSet.LoginFrame; 				   			// LoginFrame
        	this.av_TopFrame      = this.mainframe.VFrameSet.TopFrame;  							// TopFrame
        	this.av_LeftBarFrame  = this.mainframe.VFrameSet.HFrameSet.LeftBarFrame;            	// LeftBarFrame
        	this.av_LeftFrame     = this.mainframe.VFrameSet.HFrameSet.LeftFrame;            		// leftFrame
        	this.av_MainFrame     = this.mainframe.VFrameSet.HFrameSet.VFrameSet1.MainFrame;  		// Mainform
        	this.av_MdiFrame      = this.mainframe.VFrameSet.HFrameSet.VFrameSet1.MdiFrame;  		// mdi frame
        	this.av_BottomFrame   = this.mainframe.VFrameSet.HFrameSet.VFrameSet1.BottomFrame;      // Bottom frame

            var nRunMode = 0;

        	//Local NexacroBrowser
        	if (system.navigatorname == "nexacro") {
        	    nRunMode = "0";
        		this.mainframe.titletext = "Local NexacroBrowser - " + this.mainframe.titletext;
        	}
        	// WebBrowser
        	else {
        		var urlPath = window.location.protocol + "//" + window.location.host;
                // http://172.0.0.1:8080 or http://localhost:8080

                // service URL 설정
        		var objSrv = nexacro.getEnvironment().services["SvcUrl"];
        		//Local WebBrowser
        	    if (objSrv.url.indexOf("localhost") > -1 || objSrv.url.indexOf("127.0.0.1") > -1 ) {
        			nRunMode = "1";
        			this.mainframe.titletext = "Local WebBrowser - " + this.mainframe.titletext;
        		}
        		//운영
        		else {
        		    nRunMode = "2";
        		}
        	}
        	nexacro.setEnvironmentVariable("ev_runMode", nRunMode);

        };

        /**
         * @description ESC 통신중단 방지
        */
        this.Application_onerror = function(obj,e)
        {
        	trace("Application_onerror");
        	trace("e.statuscode : " + e.statuscode);
        	trace("e.errormsg : " + e.errormsg);

        	// 사용자가 ESC키를 눌렀을 경우 ESC통신 중단 방지처리
        	if (e.errorcode == -2147418039) {
        		//return true;
        	}
        };

        });
		this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("EduSysN24.xadl");
    };
}
)();
