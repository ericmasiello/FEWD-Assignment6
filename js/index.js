$(document).ready(function(){
	console.log('i see you');
	/*set up a listener on the #city-type id
		if then to capture all possible inputs
		use $.val to store user input
		pass the value to a variable
		use .uppercase and save to a new variable
		add appropriate class to the body
		pray to a higher being
		amen
	*/
	$('#submit-btn').click(function(event){
		event.preventDefault(); 
		console.log('oh do you?');
		var cityName = $('#city-type').val();
		var cityUpper = cityName.toUpperCase();

		if (cityUpper==='NYC'|| cityUpper==='NEW YORK CITY' || cityUpper==='NEW YORK') {
			$('body').addClass('nyc');
			$('#city-type').val('');
		} else if (cityUpper==='SF'|| cityUpper==='BAY AREA' || cityUpper==='SAN FRANSISCO') {
			$('body').addClass('sf');
			$('#city-type').val('');
		} else if (cityUpper==='LA'|| cityUpper==='LAX' || cityUpper==='LOS ANGELES') {
			$('body').addClass('la');
			$('#city-type').val('');
		} else if (cityUpper==='ATX'|| cityUpper==='AUSTIN') {
			$('body').addClass('austin');
			$('#city-type').val('');
		} else if (cityUpper==='SYDNEY'|| cityUpper==='SYD') {
			$('body').addClass('sydney');
			$('#city-type').val('');
		} else	{
			$('#city-type').val('');
			window.alert('Please enter one of the five cities NYC,SF,LA,ATX,SYD');
		}

	});



});