$(function(){
	// 重置
	var $highInput = $("#high-line");
	var $lowInput = $("#low-line");
	var highVal = $highInput.val();
	var lowVal = $lowInput.val();
	$("#resertBtn").on("click",function(){
		$highInput.val(highVal);
		$lowInput.val(lowVal);
	})

	// 保存后的弹框
	var alertFlag = $("#alert-flag").text();
	if(alertFlag == "right"){
		$("#save-alert .am-modal-hd").text("保存成功");
		$("#save-alert").modal();
	} else if(alertFlag == "wrong"){
		$("#save-alert .am-modal-hd").text("保存失败");
		$("#save-alert").modal();
	}
});