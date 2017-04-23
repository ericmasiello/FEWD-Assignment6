$(document).ready(function() {
  $('form').submit(onSubmitForm);

  function onSubmitForm(event) {
    event.preventDefault();

    var city = $('#city-type').val().toLowerCase();
    var bodyClass = '';

    if (city === 'new york' || city === 'new york city' || city === 'nyc') {
      bodyClass = 'nyc';
    } else if (city === 'san francisco' || city === 'sf' || city === 'bay area') {
      bodyClass = 'sf';
    } else if (city === 'los angeles' || city === 'la' || city === 'lax') {
      bodyClass = 'la';
    } else if (city === 'austin' || city === 'atx') {
      bodyClass = 'austin';
    } else if (city === 'sydney' || city === 'syd') {
      bodyClass = 'sydney';
    }
    
    // Remove all the different city classes from the 'body'
    // then just add the one that matched
    $('body').removeClass('nyc sf la austin sydney').addClass(bodyClass);  
  }
});