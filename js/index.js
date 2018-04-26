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
  if (city === 'NYC' || city === 'New York' || city === 'New York City') {
    $('body').addClass('nyc').removeClass('sf').removeClass('la').removeClass('austin').removeClass('sydney');
  } else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
    $('body').addClass('sf').removeClass('nyc').removeClass('la').removeClass('austin').removeClass('sydney');
  } else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
    $('body').addClass('la').removeClass('nyc').removeClass('sf').removeClass('austin').removeClass('sydney');
  } else if (city === 'Austin' || city === 'ATX') {
    $('body').addClass('austin').removeClass('nyc').removeClass('sf').removeClass('la').removeClass('sydney');
  } else if (city === 'Sydney' || city === 'SYD') {
    $('body').addClass('sydney').removeClass('nyc').removeClass('sf').removeClass('la').removeClass('austin');
  }
}

$('#submit-btn').click(cityInput);