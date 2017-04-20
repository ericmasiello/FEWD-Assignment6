// make document ready for javaScript
// find submit button and set up click event
//	 prevent default on the submit button
// 	 find val of input 
// 	 if city ==== New York || New York City || NYC 
// 			set background to nyc.jpg
// 	 else if city === San Franscisco || SF || Bay Area
// 			set background to sf.jpg
// 	 else if city === Los Angeles || LA || LAX
// 			set background to la.jpg
// 	 else if city === Austin || AUX
// 			set bacground to austin.jpg
// 	 else 
// 			set background to sydney.jpg


$(document).ready(function() {
	$('#submit-btn').click(function(event) {
		// prevent default
		event.preventDefault();

		// find value of input, make it lower case and set it to variable city
		var city = $('#city-type').val().toLowerCase().trim();

		// if statment
		if (city === 'new york' || city === 'new york city' || city === 'nyc') {
			$('body').addClass('nyc').removeClass('sf la austin sydney');
			$('#city-type').val('');
		} else if (city === 'san francisco' || city === 'sf' || city === 'bay area') {
			$('body').addClass('sf').removeClass('nyc la austin sydney');
			$('#city-type').val('');
		} else if (city === 'los angeles' || city === 'la' || city === 'lax') {
			$('body').addClass('la').removeClass('sf nyc austin sydney');
			$('#city-type').val('');
		} else if (city === 'austin' || city === 'aux') {
			$('body').addClass('austin').removeClass('sf la nyc sydney');
			$('#city-type').val('');
		} else if (city === 'sydney' || city === 'syd') {
			$('body').addClass('sydney').removeClass('sf la austin nyc');
			$('#city-type').val('');
		};
	});
});
