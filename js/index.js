$(document).ready(function() {

$('#submit-btn').click(submitOnClick);
//  We are now in the button.submit `click` event listener
  function submitOnClick(event) {
    event.preventDefault();

    var cityName = $('#city-type').val().trim();
    cityName = cityName.toLowerCase();

    if (cityName === 'new york city' || cityName === 'new york' || cityName ===  'nyc') {
      $('body').addClass('nyc').removeClass('sf','la','austin','sydney');
      $('#city-type').val('');
    }
    else if (cityName === 'san francisco' || cityName === 'sf' || cityName ===  'bay area') {
      $('body').addClass('sf').removeClass('nyc','la','austin','sydney');
      $('#city-type').val('');
    }
      else if (cityName === 'los angeles' || cityName === 'la' || cityName ===  'lax') {
        $('body').addClass('la').removeClass('nyc','sf','austin','sydney');
        $('#city-type').val('');
    }
    else if (cityName === 'austin' || cityName === 'atx') {
      $('body').addClass('austin').removeClass('nyc','sf','la','sydney');
      $('#city-type').val('');
    }
    else if (cityName === 'sydney' || cityName === 'syd') {
      $('body').addClass('sydney').removeClass('nyc','sf','la','austin');
      $('#city-type').val('');
    }
  }
});
