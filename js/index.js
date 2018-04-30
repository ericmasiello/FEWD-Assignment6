/* global $ */

//PSEUDOCODE

//prevent form's default function
//when user clicks "update" 
//take user input and store it in a variable
//if var = NYC, New York City, or New York
//then display background image of NYC
//else if var = San Francisco, SF, or Bay area
//then display SF background image
// if...then...else... LA...Austin...Sydney


function cityInput(event) {
  event.preventDefault();
  var city = $('#city-type').val();
  city = city.toUpperCase();
  if (city === 'NYC' || city === 'NEW YORK' || city === 'NEW YORK CITY') {
    $('body').removeClass().addClass('nyc');
  } else if (city === 'SAN FRANCISCO' || city === 'SF' || city === 'BAY AREA') {
    $('body').removeClass().addClass('sf');
  } else if (city === 'LOS ANGELES' || city === 'LA' || city === 'LAX') {
    $('body').removeClass().addClass('la');
  } else if (city === 'AUSTIN' || city === 'ATX') {
    $('body').removeClass().addClass('austin');
  } else if (city === 'SYDNEY' || city === 'SYD') {
    $('body').removeClass().addClass('sydney');
  }
}

$('#submit-btn').click(cityInput);