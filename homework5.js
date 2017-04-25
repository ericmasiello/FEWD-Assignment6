$('document').ready(function() {
	console.log('this is running');


$('#submit-btn').click(function(event) {
	event.preventDefault()
	var city = $('#city-type').val();
	city = (city.toLowerCase());

	if (city === 'nyc'|| city === 'new york'||city === 'ny' || city === 'new york city') {
	$('body').removeClass('nyc sf la austin sydney').addClass('nyc');
} else if (city === 'la'|| city === 'los angeles'|| city === 'lax') {
	$('body').removeClass('nyc sf la austin sydney').addClass('la');
} else if (city === 'sf' || city === 'bay area' || city === 'san francisco') {
		$('body').removeClass('nyc sf la austin sydney').addClass('sf');
} else if (city === 'austin' || city === 'atx') {
		$('body').removeClass('nyc sf la austin sydney').addClass('austin');
} else if (city === 'sydney' || city === 'syd') {
		$('body').removeClass('nyc sf la austin sydney').addClass('sydney');
}

});

});