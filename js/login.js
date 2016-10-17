var Login = (function(){
	var $inputName = $("form input[name = username]");
	var $inputPass = $("form input[name = password]");
	var $inputSumit = $("form input[name = submit]");
	var $errorShow = $("form div:nth-child(3)");
	var inputNameVal,inputPassVal;

	$("form>div:last-child>img").hide();
	$errorShow.html("&nbsp;");
	// ajax提交
	$inputSumit.on("click",function(){
		inputNameVal = $inputName.val().trim();
		inputPassVal = $inputPass.val().trim();

		// 如果账户名或者密码没有输入则阻止提交
		if(inputNameVal==""){
			$errorShow.html("请输入帐号");
			$inputName.focus();
			return false;
		}
		if(inputPassVal==""){
			$errorShow.html("请输入密码");
			$inputPass.focus();
			return false;
		}


		$.ajax({
			type 	: 'POST',
			url		: address,
			data 	: {
				name : $inputName.val(),
				pass : $inputPass.val()
			},
			success : function (data){
				$("form>div:last-child>input").val("登 陆");
				$("form>div:last-child>img").hide();
				if(data.ret == "Y"){
					window.location.herf = "#";
				} else {
					$errorShow.html("用户名或者密码错误！");
					 $inputName.focus();
					 $("form>div:last-child>input").val(" ");
					$("form>div:last-child>img").show();
				}
			},
			error : function(){
				console.log("error");
			},
			dataType : "json"
		});
	});

	// 用户如果去输入就隐藏错误显示
	$inputName.on("input propertychange",function(){
		$errorShow.html("&nbsp;");
	});
	$inputPass.on("input propertychange",function(){
		$errorShow.html("&nbsp;");
	});



	var $form = $("form");
	if( $("body").width() > 1133){
			$form.css('left',"75%");
		} else {
			$form.css('left',"900px");
	}
	$(window).resize(function(){
		if( $("body").width() > 1133){
			$form.css('left',"75%");
		} else {
			$form.css('left',"850px");
		}

		// if(parseInt($form.css('top')) < 298){
		// 	$form.css('top',"298px");
		// } else {
		// 	$form.css('top',"50%");
		// }
	});
})();
