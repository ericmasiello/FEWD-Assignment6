/* global */

console.log('Hello World');

$(document).ready(function(){

  
      $('form').submit(addCity);
  
  
      function addCity(event) {
        event.preventDefault();
  
  
        var city = $('#city-type').val();
  
  
  
      if (city === 'New York' || city === 'NYC' || city === 'New York City' || city === 'new york' || city === 'nyc' || city === 'new york city') {
        $('body').removeClass('starter-image').addClass('nyc');
      } else if (city === 'San Francisco' || city === 'SF' || city === 'san francisco' || city === 'sf' ) {
        $('body').removeClass('starter-image').addClass('sf');
      } else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX' || city === 'los angeles' || city === 'la' || city === 'lax') {
        $('body').removeClass('starter-image').addClass('la');
      } else if (city === 'Austin' || city === 'ATX' || city === 'austin' || city === 'atx') {
        $('body').removeClass('starter-image').addClass('austin');
      } else if (city === 'Sydney' || city === 'SYD' || city === 'sydney' || city === 'syd') {
        $('body').removeClass('starter-image').addClass('sydney');
	
      } else {
        $('body').addClass('starter-image');
        alert('We have no pictures of this city!');
        
      }
  
      }
  
    });