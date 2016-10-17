$(function(){
	// 修改
	$("tbody .am-btn-toolbar button:first-child").each(function(){
		$(this).on("click",function(check){
			check.preventDefault(); //此处阻止提交表单
			var $ChangeUsers =  $(this).closest("tr");// 要修改的用户
			var $changeModal = $("#change-modal"); //获取change-modal

			//设置修改表的数据
			$changeModal.find("#power-name").val($ChangeUsers.find("td:first-child").text());
			// 设置表的用户管理权限
			console.log($ChangeUsers.find("td:nth-child(2)").text());
			if($ChangeUsers.find("td:nth-child(2)").text() == "监督员"){
				$("#radio-1").prop('checked', true);
			} else if($ChangeUsers.find("td:nth-child(2)").text() == "管理员") {
				$("#radio-2").prop('checked', true);
			} else {
				$("#radio-3").prop('checked', true);
			}
			// 调用修改用户弹窗
			$changeModal.modal();
		});
	});
})