$(document).ready(function() {


   $('#submit-btn').click(function(event){ 
      event.preventDefault();
      var city = $('#city-type').val();
   
    
	 if (city === 'New York' || city === 'New York City' || city === 'NYC') {
    // make the page background image of New York City if one of these 3 terms are entered
      $('body').removeClass(); $('body').addClass('nyc');
    
   } else if(city === 'San Fransisco' ||  city === 'SF' || city === 'Bay Area') {
    // make the page background image of San Fransisco if one of these 3 terms are entered
      $('body').removeClass(); $('body').addClass('sf');
 
   } else if(city === 'LA' ||  city === 'LAX') {
    // make the page background image of Los Angeles if one of these 3 terms are entered
      $('body').removeClass(); $('body').addClass('la');

   } else if(city === 'Austin' || city === 'ATX') {
    // make the page background image of Austin if one of these 3 terms are entered
      $('body').removeClass(); $('body').addClass('austin');

   } else if(cityy === 'Sydney' || city === 'SYD') {
    // make the page background image of Austin if one of these 3 terms are entered
      $('body').removeClass(); $('body').addClass('sydney');

   } else(city !== 'New York' || city !== 'New York City' || city !== 'NYC' || city !== 'San Fransisco' || city !== 'SF' || city !== 'Bay Area' || city !== 'LA' || city !== 'LAX' || city !== 'Austin' || city !== 'ATX' || city !== 'Sydney' || city !== 'SYD')
    // keep the background unchanged if none of these terms are entered
     $('body').removeClass(); $('body').addClass('skyline');
   ;})
});
