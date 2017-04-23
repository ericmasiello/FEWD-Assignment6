$(document).ready(function(){
//delaying execution of fucntions until DOM assets are loaded 
  // indent your code plz :)
console.log('I got here');

// var city = input;

//reading the contents of the submit form 
// $('#submit-btn').val(submit);

$('form').submit(function(event) {
  console.log('got here');
  
  
  // need to preventDefault so form doesnt refresh the page
  event.preventDefault();
  
  console.log('I got to submit btn');
  // need to extract text from the input with id="city-type"
  var city = $('#city-type').val();
  

  // city is your variable
  //using toLowerCase to normalize 
  if (city.toLowerCase() === 'nyc' || city.toLowerCase() === 'new york' || city.toLowerCase() === 'new york city') {
    
    // $('body').css('.nyc');
    // use 'addClass'
    // don't put the '.' when using addClass or removeClass
    $('body').removeClass('austin sydney la sf');
    $('body').addClass('nyc');


  } else if(city.toLowerCase() === 'sf' || city.toLowerCase() === 'san francisco' || city.toLowerCase() === 'bay area') {
	    

  	$('body').removeClass('austin sydney la nyc');
	$('body').addClass('sf');

  } else if(city.toLowerCase() === 'la' || city.toLowerCase() === 'los angeles') {
    
    $('body').removeClass('austin sydney nyc sf');
	$('body').addClass('la');


  }else if(city.toLowerCase() === 'austin'  || city.toLowerCase() === 'atx') {
    
    $('body').removeClass('nyc sydney la sf');
	$('body').addClass('austin');


  }else if(city.toLowerCase() === 'sydney' || city.toLowerCase() === 'syd') {
    
    $('body').removeClass('austin nyc la sf');
	$('body').addClass('sydney');

  }
  
});


});