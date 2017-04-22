// Psuedo code
// 1 - doc ready
// 2 - make submit clickable via .submit
// 3 - read the value entered into the field; store as var
// 4 - make change all vals to lowercase
// 5 - if-else to say if var is city name, then  render new background image


$(document).ready(function() {
	//console.log('got here');

	$('#submit-btn').click(submit);


	function submit (event) {
		event.preventDefault();
		var location = $('#city-type').val();
		var location = location.toLowerCase().trim();
		$('#city-type').val('');
	


	if (location === 'nyc' || location === 'new york' || location === 'new york city') {
		$('body').toggleClass('nyc');
	} else if (location === 'la' || location === 'los angeles' || location === 'lax') {
		$('body').toggleClass('la');
	} else if (location === 'sf' || location === 'san francisco' || location ==='bay area') {
		$('body').toggleClass('sf');
	} else if (location === 'austin' || location === 'atx') {
		$('body').toggleClass('austin');
	} else if (location === 'sydney' || location === 'syd') {
		$('body').toggleClass('sydney');
	}
}

});