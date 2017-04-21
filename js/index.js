$('document').ready(function(){

	console.log('ready');

	$('#submit-btn').click(hitSubmit);


	function hitSubmit(event) {
		event.preventDefault();

		var userInput = $('#city-type').val().trim().toLowerCase();


			if (userInput ==='nyc'||userInput ==='new york city'
				||userInput ==='new york'){
						$('body').removeClass('sf la austin sydney').addClass('nyc');
						$('#city-type').val('');

			} else if (userInput ==='san francisco'||userInput ==='sf'
				||userInput ==='bay area'){
						$('body').removeClass('nyc la austin sydney').addClass('sf');
						$('#city-type').val('');

			} else if (userInput ==='los angeles'||userInput  ==='la'
				||userInput ==='lax'){
						$('body').removeClass('nyc sf austin sydney').addClass('la');
						$('#city-type').val('');

			} else if (userInput ==='austin'||userInput ==='atx'){
						$('body').removeClass('nyc sf la sydney').addClass('austin');
						$('#city-type').val('');

			} else if (userInput ==='sydney'||userInput ==='syd'){
						$('body').removeClass('nyc sf la austin').addClass('sydney');
						$('#city-type').val('');
			} 
	}

}); 


