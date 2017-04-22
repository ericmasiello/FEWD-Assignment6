
//Ensure javascript is loaded after html/css
$(document).ready(function() {
	$('#submit-btn').click(function(event){
		event.preventDefault();

//Establish variable for storage of entries

		var city = $("#city-type").val();
// Add Classes when certain search terms are invoked

		if (city === 'la'|| city === "Los Angeles" || city === "LA") {
			$("body").removeClass("nyc sf la austin sydney");
			$("body").addClass("la");

		}

		if (city === "NY" || city === "New York City" || city === "NYC" || city === "nyc" || city === "ny"){
			$("body").removeClass("nyc sf la austin sydney");
			$("body").addClass("nyc");
		}

		if (city === "SF" || city === "San Francisco" || city === "sf"){
			$("body").removeClass("nyc sf la austin sydney");
			$("body").addClass("sf");
		}

		if (city === "Austin" || city === "ATX" || city === "atx" || city === "austin"){
			$("body").removeClass("nyc sf la austin sydney");
			$("body").addClass("austin");
		}

		if (city === "Sydney" || city === "SYD" || city === "syd" || city === "sydney"){
			$("body").removeClass("nyc sf la austin sydney");
			$("body").addClass("sydney");
		}
//	Reset form after each query

		$("#city-type").val('');
	})

});




