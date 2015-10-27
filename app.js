$(document).ready(function() {
	$("#inp").keydown(function(e) {
		if (e.which == 13) {
			var val = $("#inp").val();
			$("#inp").val("")
			var d = new Date(val);
			if (d == "Invalid Date") {
				console.log(d);
			} else {
				countdown(d);
			}
		} else { 
			console.log(e.which);
		}
	});
});

function countdown(end) {
	function time_diff() {
		var start_date = new Date();
		var end_date = end;

		$('#start > span').text(start_date);
		$('#end > span').text(end_date);

		var s_yr = start_date.getFullYear();
		var e_yr = end_date.getFullYear();
		var s_mo = start_date.getMonth();
		var e_yr = end_date.getMonth();
		var s_date = start_date.getDate();
		var e_date = end_date.getDate();

		ms_diff = end_date.getTime() - start_date.getTime();
		console.log(ms_diff)

		day_dif = ms_diff / (1000 * 60 * 60 *  24)
		hr_dif = (day_dif - Math.floor(day_dif)) * 24;
		min_dif = (hr_dif - Math.floor(hr_dif)) * 60;
		sec_dif = (min_dif - Math.floor(min_dif)) * 60;
		mili_dif = (sec_dif - Math.floor(sec_dif)) * 1000;
		day_dif = Math.floor(day_dif);
		hr_dif = Math.floor(hr_dif);
		min_dif = Math.floor(min_dif);
		sec_dif = Math.floor(sec_dif);
		mili_dif = Math.floor(mili_dif);

		$('#countdown > span').text(day_dif + " days, " + hr_dif + " hours, " + min_dif + " mins, " + sec_dif + " seconds.")
	}
	setInterval(time_diff, 1000);
	$('#content').css({"background-image": "url('running.jpg')", "background-repeat": "no-repeat", "background-size" : "cover", "color":"white"});
}

