$('document').ready(function() {
	console.log('this is running');
});

$('#submit-btn').click(function(event) {
	event.preventDefault()
	var city = $('#city-type').val();
	city = (city.toLowerCase());

	if (city === 'nyc'|| city === 'new york'||city === 'ny' || city === 'new york city') {
	$('body').removeClass('nyc sf la austin sydney').addClass('nyc');
}
});

$('#submit-btn').click(function(event) {
	event.preventDefault()
	var city = $('#city-type').val();
	city = (city.toLowerCase());

	if (city === 'la'|| city === 'los angeles'|| city === 'lax') {
	$('body').removeClass('nyc sf la austin sydney').addClass('la');
}

});

$('#submit-btn').click(function(event) {
	event.preventDefault()
	var city = $('#city-type').val();
	city = (city.toLowerCase());
	
	if (city === 'sf' || city === 'bay area' || city === 'san francisco') {
		$('body').removeClass('nyc sf la austin sydney').addClass('sf');
}

});

$('#submit-btn').click(function(event) {
	event.preventDefault()
	var city = $('#city-type').val();
	city = (city.toLowerCase());

	if (city === 'austin' || city === 'atx') {
		$('body').removeClass('nyc sf la austin sydney').addClass('austin');
}

});

$('#submit-btn').click(function(event) {
	event.preventDefault()
	var city = $('#city-type').val();
	city = (city.toLowerCase());

	if (city === 'sydney' || city === 'syd') {
		$('body').removeClass('nyc sf la austin sydney').addClass('sydney');
}


});