$(document).ready(function(){

	$('#submit-btn').click(function(event){
		event.preventDefault();
		

		// 'SF'
		var city = $('#city-type').val();
		// sf, san francisco bay area
		city = city.toLowerCase();

		if (city === 'nyc' || city === 'new york city' || city === 'new york')	{
			$('body').removeClass('sf la');
			$('body').addClass('nyc');
		}

		if (city === 'sf' || city === 'san francisco' || city === 'bay area') {
			$('body').removeClass('nyc la');
			$('body').addClass('sf');
		}

		if (city === 'la' || city === 'los angeles') {
			$('body').removeClass('nyc sf');
			$('body').addClass('la');
		}
	})
});