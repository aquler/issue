$(function(){

	// 重置数据
	var $tab1Sms = $("#tab1-sms");
	var $tab1Email = $("#tab1-email");
	var $tab2Sms = $("#tab2-sms");
	var $tab2Email = $("#tab2-email");

	var tab1SmsVal = $tab1Sms.text();
	var tab1EmailVal = $tab1Email.text();
	var tab2SmsVal = $tab2Sms.text();
	var tab2EmailVal = $tab2Email.text();

	$("#tab1-reset").on("click",function(){
		$tab1Sms.val(tab1SmsVal);
		$tab1Email.val(tab1EmailVal);
	})
	$("#tab2-reset").on("click",function(){
		$tab2Sms.val(tab2SmsVal);
		$tab2Email.val(tab2EmailVal);
	})

	// 保存后的弹框
	var returnData = JSON.parse($("#return-data").html());
	var $saveAlert = $("#save-alert");
	var $saveAlertHd = $("#save-alert .am-modal-hd");
	var $saveAlertBd = $("#save-alert .am-modal-bd");

	$saveAlertHd.text("");
	$saveAlertBd.text("");
	if(!!returnData.ifReturn){
		if(returnData.flag == "success"){
			$saveAlertHd.text("保存成功");
		} else {
			$saveAlertHd.text("保存失败");
			$saveAlertBd.text(returnData.detail);
		}
		$saveAlert.modal();
	}
})