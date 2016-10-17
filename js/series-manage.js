$(function(){
	// 删除判断
	$("#tab2-del").on("click",function(){
		if(window.confirm("确定删除选中的平台？")){
			return true;
		}
		return false;
	})

	// 修改系列的显示
	$("#tab3 input[type=text]").val($("#tab3 input[type=radio]").val());
	$("#tab3 input[type=radio]").on("change",function(){
		$("#tab3 input[type=text]").val($(this).val());
	})

	//保存和修改后的弹框
	var alertFlag = $("#alert-flag").text();
	var $saveAlert = $("#save-alert");
	if(alertFlag == "save-right"){
		$saveAlert.find(".am-modal-hd").text("保存成功！")
		$saveAlert.modal();
	} else if(alertFlag == "save-wrong"){
		$saveAlert.find(".am-modal-hd").text("保存失败！")
		$saveAlert.modal();
	} else if(alertFlag == "change-right"){
		$saveAlert.find(".am-modal-hd").text("修改成功！")
		$saveAlert.modal();
	}else if(alertFlag == "change-wrong"){
		$saveAlert.find(".am-modal-hd").text("修改失败！")
		$saveAlert.modal();
	}
})