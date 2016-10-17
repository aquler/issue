$(function(){
	var $formFilter = $("#form-filter");

	// //获取cookie的值，然后设置select
	// var cookieArray = document.cookie, cookieArrayTemp = cookieArray.split("; ");
	// var cookieSeries,cookieStatus;
	// for(var i = 0 ; i < cookieArrayTemp.length ; i++){
	// 	var cookieArrayTempName_Pass = cookieArrayTemp[i].split("=");
	// 	if(cookieArrayTempName_Pass[0] == 'series'){
	// 		cookieSeries = cookieArrayTempName_Pass[1];
	// 	}
	// 	if(cookieArrayTempName_Pass[0] == 'status'){
	// 		cookieStatus = cookieArrayTempName_Pass[1];
	// 	}
	// }
	// if(cookieSeries != ""){
	// 	$("#select-series").find("option[value="+cookieSeries+"]").attr("selected",true);
	// 	$("#select-series").html( $("#select-series").html());
	// }
	// if(cookieStatus != ""){
	// 	$("#select-status").find("option[value="+cookieStatus+"]").attr("selected",true);
	// 	$("#select-status").html( $("#select-status").html());
	// }

	// // 获取cookie和跳转
	// $("#select-series").off("change").on("change",function(){
	// 	document.cookie = "series="+$("#select-series").val();
	// 	$formFilter.submit();
	// });
	// $("#select-status").off("change").on("change",function(){
	// 	document.cookie = "status="+$("#select-status").val();
	// 	$formFilter.submit();
	// })


	var $selectSeries = $("#select-series");
	var $selectStatus = $("#select-status");
	function Selectfilter(){
		var $trs;
		// 系列筛选
		if($selectSeries.val() != "全部系列"){
			$trs =  $("table tbody tr."+$selectSeries.val().slice(0,1));
		} else {
			$trs =  $("table tbody tr");
		}

		// 状态筛选
		if($selectStatus.val() == "normal"){
			$trs = $trs.filter(function(index,item){
				return !($(item).find(".abnormal").length > 0)
			})
		} else if($selectStatus.val() == "abnormal"){
			$trs = $trs.filter(function(index,item){
				return $(item).find(".abnormal").length > 0
			})
		}

		// 搜索筛选

		$trs = $trs.filter(function(index,item){
			return $(item).find("td:nth-child(2)").text().toLowerCase().indexOf($("#search-input").val().toLowerCase()) >= 0;
		})

		return $trs;
	}
	// 判断事件
	$selectSeries.on("change",function(){
		$("table tbody tr").hide();
		var $trs = Selectfilter();
		$trs.show();
	})
	$selectStatus.on("change",function(){
		$("table tbody tr").hide();
		var $trs = Selectfilter();
		$trs.show();
	})
	$("#search-btn").on("click",function(check){
		check.preventDefault();
		$("table tbody tr").hide();
		var $trs = Selectfilter();
		$trs.show();
	})

})



