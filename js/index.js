// * gobal $ *
$(document).ready(function () {
  // console.log('ready!');

  $('#submit-btn').click(function (event) {
    event.preventDefault();
    console.log("input clicked...");
    var city = $('#city-type').val();


    if (city === 'San Francisco' || city === 'New York' || city === 'Sydney' || city === 'Austin' || city === 'Los Angeles' || city === 'Bay Area' || 'NYC' || city === 'New York City' || city === 'SF' || city === 'ATX' || city === 'DC') {
      console.log('searching for city skyline...');

      if (city === 'San Francisco' || city === 'Bay Area' || city === 'SF') {
        console.log("Welcome to San Fran");
        $('body').css("background", "url(images/sf.jpg) no-repeat center center fixed");

      } else if (city === 'New York' || city === 'NYC' || city === 'New York City') {
        console.log("Welcome to NYC");
        $('body').css("background", "url(images/nyc.jpg) no-repeat ");

      } else if (city === 'Sydney' || city === 'SYD') {
        console.log("Welcome to Sydney");
        $('body').css('background', "url(images/nyc.jpg) no-repeat center center fixed");

      } else if (city === 'Los Angeles' || city === 'LAX') {
        console.log('welcome to LA');
        $('body').css("background", "url(images/la.jpg) no-repeat center center fixed");

      } else if (city === 'Austin' || city === 'ATX') {
        console.log('welcome to Austin');
        $('body').css("background", "url(images/austin.jpg) no-repeat center center fixed");


      } else if (city === 'DC' || city === 'Washington' || city === 'DCA') {
        console.log('welcome to DC');
        $('body').css("background", "url(images/dc2.jpg) no-repeat center center fixed");

      }

    } else {
      console.log("No such cities exist");
      return;
    }
  });


});