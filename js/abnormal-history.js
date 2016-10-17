(function(){
	var $showBtn = $("tbody tr>td:last-child>img"); //展开收起的按键

	$showBtn.on("click",function(){
		var classTag = $(this).parent().parent().find("td:nth-child(2)").text();
		if(this.className == "hide"){
			this.className = "show";
			this.src = "./images/toggle/展开.png";
			$("tbody tr."+classTag).removeClass("hide");
		} else {
			console.log("2");
			this.className = "hide";
			this.src = "./images/toggle/收起.png";
			$("tbody tr."+classTag).addClass("hide");
		}
	})

})();