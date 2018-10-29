function findDate (){

	// Date inputed by user
	var input = document.getElementById('date').value;
	var inputDate = new Date(input);
	var today = new Date();
	var months
	var yRemainder
	var mRemainder
	var days




// --- below is the milliseconds being being subtracted from the current dates milliseconds to find
//proper amount of milliseconds to be then changed to days;
	var mSeconds = today.getTime() - inputDate.getTime();
	var daysDiff = mSeconds/(86400000);
// --- days changed to years
	var years = Math.floor(daysDiff/365);
	var yRemainder = daysDiff % 365;

	var months = Math.floor(yRemainder/31);
	var mRemainder = yRemainder % 31;
	var days = Math.floor(mRemainder);
// --- results plugged into "Years" "Months" and "Days" and displayed on index.html where results
//is mentioned.
	document.getElementById('results').innerHTML = "Years: " + years +
	" Months: " + months +
	" Days: " + days;
}



//--- Hoped to add an alert to make sure people only use dates previous to the
//current date. So if it's 10/30/2018, you couldnt use 12/25/2018 and it would throw an error alerts
//still messing with this though

  // function datevalidation();
	// if (today > inputDate) {
		// alert("Use date prior to today's date");
	// } else {
		// mSeconds  = today - inputDate;
		// activationbutton(false);
				// }
	// }
