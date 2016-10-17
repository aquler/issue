(function(){
	function delModal(delUsers){
		$("#del-modal").modal({
			relatedTarget: this,
			onConfirm: function(options){

				$.ajax({
					type: "POST",
					url: "",
					data: {
						delUsersId: delUsers
					},
					success: function(){

					},
					error: function(){

					}
				})
			},
			onCancel: function(){

			}
		});	
	}

	// 选中的删除
	$("#modal-del-btn").on("click",function(check){
		if(window.confirm("确定删除选中项用户？"))
		{
		    $("#form-table").submit();
		}
		else
		{
		    return false;
		}
	});

	// 编辑本项
	$("tbody .am-btn-toolbar button:first-child").each(function(){
		$(this).on("click",function(check){
			check.preventDefault(); //此处阻止提交表单
			var $ChangeUsers =  $(this).closest("tr");// 要修改的用户
			var $changeModal = $("#change-modal"); //获取change-modal

			//设置修改表的数据
			$changeModal.find("input").each(function(index){
				if(index == 5){
					return false;
				}
				$(this).val($ChangeUsers.find("td:nth-child("+(index+2)+")").text());

			});
			// 设置表的用户管理权限
			if($ChangeUsers.find("td:nth-child(7)").text() == "管理员"){
				$("#radio2").prop('checked', true);
			} else if($ChangeUsers.find("td:nth-child(7)").text() == "监督员") {
				$("#radio1").prop('checked', true);
			}
			// 调用修改用户弹窗
			$changeModal.modal();
		});
	});
	// 新增
	$("#modal-add-btn").on("click",function(){
		console.log("12");
		var $addModal = $("#add-modal"); //获取add-modal
		// 调用新增用户弹窗
		$addModal.modal();
	})
	// 修改密码
	$("tbody .am-btn-toolbar button:last-child").each(function(){
		$(this).on("click",function(check){
			check.preventDefault(); //此处阻止提交表单
			var $ChangeUsers =  $(this).closest("tr");// 要修改的用户
			$("#password-modal").find("#password-modal-id").val($ChangeUsers.find("td:nth-child(2)").text());

			$("#password-modal").modal();
		});
	});
	// 修改密码密码相同验证
	$("#password-modal form>button").on("click",function(check){
		var pass = [];
		$("#password-modal form input[type=password]").each(function(index){
			pass[index] = $(this);
		});
		if(pass[0].val() != pass[1].val()){
			check.preventDefault();
			pass[0].val("");
			pass[1].val("");
			pass[0].attr('placeholder','密码输入不同,请重新输入');
		}
	});


	$(function(){
	$("#change-modal input[type=radio]").on("change",function(){
		console.log($(this).val());
	})
})
})();