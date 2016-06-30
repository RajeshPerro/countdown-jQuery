$(function(){

	//change the start date and end date as you like. Remember in JS value of month January is 0.
	var note = $('#note'),startdate = new Date(2016,5,30),enddate = new Date(2016,6,16),newYear = true; 
		
		//next two line and next line is responsible to find the difference between countdown start and end date it's give the out put as how many days!
		var timeDiff = Math.abs(enddate.getTime() - startdate.getTime());
		var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
		console.log(diffDays);
		
	if((new Date()) >= startdate && new Date() <= enddate)
	{
		
		// This line calculate exact end time this gettime function get the time of user PC. then it add with diffDays and convert it milisec.
		enddate =startdate.getTime() + diffDays*24*60*60*1000;
		
		
		
		newYear = true;
		
	}
	//You can remove this 'else' this else is only for making this project alive.(if start date and end date finish then it will automatiaclly add 15 days.)
	else
	{
		enddate =(new Date()).getTime() + 15*24*60*60*1000;	
	}
		
	$('#countdown').countdown({
		timestamp	: enddate,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			
			if(newYear){
				message += "left until the Opening!";
			}
			else {
				message += "";
			}
			
			note.html(message);
		}
	});
	
});
