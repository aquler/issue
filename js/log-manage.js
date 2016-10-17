$(function() {
	//显示当前日期
	var dateNow = new Date();
	var dateStr = dateNow.getFullYear() + "-" + ("0"+(dateNow.getMonth()+1)).slice(-2) + "-" + ("0"+dateNow.getDate()).slice(-2);

	$('#my-startDate').text(dateStr);
	$('#my-endDate').text(dateStr);

	// 日期
	var inputDateStr = [dateStr,dateStr];
	var startDate = new Date();
	var endDate = new Date();
	var $alert = $('#my-alert');
	$('#my-start').datepicker().
	on('changeDate.datepicker.amui', function(event) {
		if (event.date.valueOf() > endDate.valueOf()) {
			$alert.find('p').text('开始日期应小于结束日期！').end().show();
		} else {
			$alert.hide();
			startDate = new Date(event.date);
			$('#my-startDate').text($('#my-start').data('date'));
			inputDateStr[0] = $('#my-start').data('date');
			$("#input-date").val(inputDateStr.join(";"));
			console.log($("#input-date").val());
		}
		$(this).datepicker('close');
	});

	$('#my-end').datepicker().
	on('changeDate.datepicker.amui', function(event) {
		if (event.date.valueOf() < startDate.valueOf()) {
			$alert.find('p').text('结束日期应大于开始日期！').end().show();
		} else {
			$alert.hide();
			endDate = new Date(event.date);
			$('#my-endDate').text($('#my-end').data('date'));
			inputDateStr[1]= $('#my-end').data('date');
			$("#input-date").val(inputDateStr.join(";"));
			console.log($("#input-date").val());
		}
		$(this).datepicker('close');
	});
	$("#input-date").val(inputDateStr.join(";"));
	console.log($("#input-date").val());
});