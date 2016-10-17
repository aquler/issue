$(function(){

	// 中国手机号11位验证
	$("#tab1 form button").on("click",function(){
		var phoneVal = $("#phone-input").val();
		 var pattern = /^1[3|4|5|7|8]\d{9}$/;
		 if(pattern.test(phoneVal)) { 
		 	return true; 
		 }else{ 
		 	$("#phone-input").val("").focus();
		 	return false; 
		 }

	})
	// 修改密码密码相同验证
	$("#tab2 form button").on("click",function(check){
		var pass = [];
		$("#tab2 form input[type=password]").each(function(index){
			pass[index] = $(this);
		});
		if(pass[1].val() != pass[2].val()){
			check.preventDefault();
			pass[1].val("");
			pass[2].val("");
			pass[1].attr('placeholder','密码输入不同,请重新输入');
		}
	});
})