$(function(){
	$("#tab1-radios input[type=radio]").on("click",function(){
		$("#tab1-form").submit();
	})

	$("#tab3-del").on("click",function(){
		if(window.confirm("确定删除选中的平台？")){
			return true;
		}
		return false;
	})


	// 保存后的弹框
	var alertFlag = $("#alert-flag").text();
	if(alertFlag == "right"){
		$("#save-alert .am-modal-hd").text("保存成功！");
		$("#save-alert").modal();
	} else if(alertFlag == "wrong"){
		$("#save-alert .am-modal-hd").text("保存失败！");
		$("#save-alert").modal();
	}

	if(!!returnData.ifReturn){
		if(returnData.flag == "success"){
			$saveAlertHd.text("保存成功");
		} else {
			$saveAlertHd.text("保存失败");
			$saveAlertBd.text(returnData.detail);
		}
		$saveAlert.modal();
	}
});