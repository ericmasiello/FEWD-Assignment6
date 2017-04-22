
//	Ensure javascript is loaded after html/css
$(document).ready(function() {
	$('form').submit(function(event){
		event.preventDefault();

//	Establish variable for storage of entries

		var city = $("#city-type").val();
		var city = city.toLowerCase();

//	Convert all entered strings to Lower Case



//	Add Classes when certain search terms are invoked

		if (city === 'la'|| city === "los Angeles" || city === "la") {
			$("body").removeClass("nyc sf la austin sydney");
			$("body").addClass("la");

		}

		if (city === "ny" || city === "new york city" || city === "nyc" || city === "nyc" || city === "ny"){
			$("body").removeClass("nyc sf la austin sydney");
			$("body").addClass("nyc");
		}

		if (city === "sf" || city === "san francisco" || city === "sf"){
			$("body").removeClass("nyc sf la austin sydney");
			$("body").addClass("sf");
		}

		if (city === "austin" || city === "atx"){
			$("body").removeClass("nyc sf la austin sydney");
			$("body").addClass("austin");
		}

		if (city === "sydney" || city === "syd" || city === "syd"){
			$("body").removeClass("nyc sf la austin sydney");
			$("body").addClass("sydney");
		}
//	Reset form after each query

		$("#city-type").val('');
	})

});




