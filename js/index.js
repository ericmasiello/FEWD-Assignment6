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
    $('body').removeClass();
    $('body').addClass('nyc');
  } else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
    $('body').removeClass();
    $('body').addClass('sf');
  } else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
    $('body').removeClass();
    $('body').addClass('la');
  } else if (city === 'Austin' || city === 'ATX') {
    $('body').removeClass();
    $('body').addClass('austin');
  } else if (city === 'Sydney' || city === 'SYD') {
    $('body').removeClass();
    $('body').addClass('sydney');
  }
}

$('#submit-btn').click(cityInput);