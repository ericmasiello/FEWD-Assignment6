console.log('hello is this showing up?');
//The user types in the name of the city
//The user clicks on the submit button, which carries out the function findCity
//The function is prevented from going into the default action
//The function extracts and stores the user input
//the user may use lowercase, so make sure strings are converted to lowercase.
//The stored name of the city is then evaluated to a set of conditionals
function error() {
  alert('Oops! There is no picture for this city!');
}

function findCity(event) {
  event.preventDefault(); 
  console.log('submitting the form');

  var city = $('#city-type').val();
  city = city.toLowerCase();
    
  if (city === 'new york' || city === 'new york city'|| city === 'ny' || city === 'nyc') {
    $('body').removeClass().addClass('nyc');
  } else if (city === 'san francisco' || city === 'san fran' || city === 'bay area' || city === 'sf') {
    $('body').removeClass().addClass('sf');           
  } else if (city === 'los angeles' || city === 'la' || city === 'lax') {
    $('body').removeClass().addClass('la');           
  } else if (city === 'austin' || city === 'atx') {
    $('body').removeClass().addClass('austin');
  } else if (city === 'sydney' || city === 'syd') {
    $('body').removeClass().addClass('sydney');      
  } else {
    $('body').removeClass();
    return error(); //using an alert box, but how can I make a popup?
    event.default();
    }  
  }
  
  $('#submit-btn').click(findCity);



//long code
/*  
  if (city.toLowerCase().toUpperCase() === 'New York'.toLowerCase().toUpperCase() || city.toLowerCase().toUpperCase() === 'New York City'.toLowerCase().toUpperCase() || city.toLowerCase().toUpperCase() === 'NY'.toLowerCase().toUpperCase() || city.toLowerCase().toUpperCase() === 'NYC'.toLowerCase().toUpperCase()) {
      $('body').removeClass();
      $('body').addClass('nyc');
    } else if (city.toLowerCase().toUpperCase() === 'San Francisco'.toLowerCase().toUpperCase() || city.toLowerCase().toUpperCase() === 'San Fran'.toLowerCase().toUpperCase() || city.toLowerCase().toUpperCase() === 'Bay Area'.toLowerCase().toUpperCase() || city.toLowerCase().toUpperCase() === 'SF'.toLowerCase().toUpperCase()) {
      $('body').removeClass();
      $('body').addClass('sf');           
    } else if (city.toLowerCase().toUpperCase() === 'Los Angeles'.toLowerCase().toUpperCase() || city.toLowerCase().toUpperCase() === 'LA'.toLowerCase().toUpperCase() || city.toLowerCase().toUpperCase() === 'LAX'.toLowerCase().toUpperCase()) {
      $('body').removeClass();
      $('body').addClass('la');           
    } else if (city.toLowerCase().toUpperCase() === 'Austin'.toLowerCase().toUpperCase() || city.toLowerCase().toUpperCase() === 'ATX'.toLowerCase().toUpperCase()) {
      $('body').removeClass();
      $('body').addClass('austin');
    } else if (city.toLowerCase().toUpperCase() === 'Sydney'.toLowerCase().toUpperCase() || city.toLowerCase().toUpperCase() === 'SYD'.toLowerCase().toUpperCase()) {
      $('body').removeClass();
      $('body').addClass('sydney');      
    } else {
      $('body').removeClass();
      return error(); //using an alert box, but how can I make a popup?
      event.default();
    }
  
}

$('#submit-btn').click(findCity);

*/