/* Get ansfer from form */
$(document).ready(function() {

	$('form').submit(function() {
		//city ==== 'New York city'
		var city = $('#city-type').val();


		//city === 'new york city'
		city = city.toLowerCase();

		$('body').removeClass('nyc sf la austin sydney');

		if (city === 'new york' || city === 'new york city' || city === 'nyc') {
			$('body').addClass('nyc');
		} else if (city === 'sf' || city === 'bay area' || city === 'san francisco') {
			$('body').addClass('sf');
		} else if (city === 'los angeles' || city === 'la' || city === 'lax') {
			$('body').addClass('la');
		} else if (city === 'austin' || city === 'atx') {
			$('body').addClass('austin');
		} else if (city === 'sydney' || city === 'syd') {
			$('body').addClass('sydney');
		}	
		event.preventDefault();
	});
});







