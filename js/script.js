/* global $*/

// - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
// - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
// - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
// - "Austin" or "ATX" make the background of the page austin.jpg
// - "Sydney" or "SYD" make the background of the page sydney.jpg

function cityBackground() {
  event.preventDefault();

  var city = $('#city-type').val();

  if (city === 'new york' || city === 'new york city' || city === 'nyc') {
    $('body').css('background-image', 'url("images/nyc.jpg")')
  } else if (city === 'san francisco' || city === 'sf' || city === 'bay area') {
    $('body').css('background-image', 'url("images/sf.jpg")');
  } else if (city === 'los angeles' || city === 'la' || city === 'lax') {
    $('body').css('background-image', 'url("images/la.jpg")');
  } else if (city === 'austin' || city === 'atx') {
    $('body').css('background-image', 'url("images/austin.jpg")');
  } else if (city === 'sydney' || city === 'syd') {
    $('body').css('background-image', 'url("images/sydney.jpg")');
  } else {
    $('body').css('background-image', 'url("images/citipix_skyline.jpg")')
  }
} 

$('#submit-btn').click(cityBackground);