/* global */

console.log('Hello World');

function changeBackground (event) { 
  event.preventDefault() }

  var city =('#city-type').val();
  city = city.toLowerCase();; 
  var addClass ='';

  if (city === 'new york' || city === 'new york city' || city === 'nyc') {
    $('body').removeClass().addClass ('nyc');    
  } else if (city === 'san francisco' || city === 'san fran' || city === 'bay area' || city === 'sf') {
    $('body').removeClass().addClass('sf');
  } else if (city === 'los angeles' || city === 'la' || city === 'lax') {
    $('body').removeClass().addClass('la');
  } else if (city === 'austin' || city === 'atx') {
    $('body').removeClass().addClass('austin');
  } else if (city === 'sydney' || city === 'syd') {
    $('body').removeClass().addClass('sydney');

  } else {
    $('body').addClass('starter-image');
    alert('Error');

  
  }

$ ('#submit-btn').click(changeBackground); 
// User types the name of the city into the placeholder
// On click, the submit buttons carries out the function changeBackground





}