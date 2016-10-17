var modelManager = (function(){
	// 获取一些页面元素
	var $saveBtn = $("#save-btn"); //保存按钮
	var $delBtn = $("#del-btn"); //删除按钮
	var $changeBtn = $("tbody tr>td:last-child button"); //修改按钮
	var $liTab2 = $("#li-tab2");

	// 函数

	//保存型号
	$saveBtn.on("click",function(){
		var $platforms = $(".platform"); //所有平台
		var modelData = {};
		modelData.platforms = [];
		modelData.name = $("#model-form>div:first-child input").val(); //型号名
		modelData.series = $("#model-form>div:nth-child(2) select").val(); //型号系列
		modelData.url = $("#model-form>div:nth-child(3) input").val(); //图片地址
		//型号各个平台信息
		$platforms.each(function(index){
			var platformInfo = {};
			platformInfo.name = $(this).find(".platform-name").text().trim();
			platformInfo.url = $(this).find(".platform-url").val();
			platformInfo.status = $(this).find("select").val();
			if(platformInfo.url != ""){
				modelData.platforms.push(platformInfo);
			}
		});
		
		console.log(modelData);
		// ajax把数据传给后台
		// $.ajax({
		// 	type: "POST",
		// 	url: "",
		// 	data: modelData,
		// 	success: function(data){
		// 		if(data.ret == "right"){
		// 			$("#save-alert .am-modal-hd").text("保存成功");
		// 		} else {
		// 			$("#save-alert .am-modal-hd").text("保存失败");
		// 		} 
		// 		$("#save-alert").modal();
		// 	},
		// 	error: function(){
		// 		console.log("error");
		// 	},
		// 	dataType: "json"
		// });
	});

	//后端复制给isClick,然后判断是否调到页面
	var isClick = $("#paper").text();
	if(isClick == 1){
		setTimeout(function(){
			$liTab2.trigger("click");
		},1);
	}


	//删除事件
	$delBtn.on("click",function(check){
		if(window.confirm("确定删除？")){
			return true;
		}
		return false;
	})


})();