



function changeBackground () {
  event.preventDefault();

  var city = $('#city-type').val()

  if (city === 'New York' || city === 'New York City' || city === 'NYC') {
    $('body').css('background', 'url(./images/nyc.jpg');
} else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
  $('body').css('background', 'url(./images/sf.jpg');
} else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
  $('body').css('background', 'url(./images/la.jpg');
} else if (city === 'Austin' || city === 'ATX') {
  $('body').css('background', 'url(./images/austin.jpg');
} else if (city === 'Sydney' || city === 'SYD') {
  $('body').css('background', 'url(./images/austin.jpg');
}

}

$('#submit-btn').click(changeBackground);



// Need it to clear Text (use toUpperCase or toLowerCase)?
// be able to understand different case







 