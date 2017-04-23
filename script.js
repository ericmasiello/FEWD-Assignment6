$(document).ready(function() {
	console.log("Got here!");

	/*
	1. Find the update button
	2. Add a click handler to the update button
	*/

	$("#submit-btn").click(changePhoto);

	function changePhoto () {

		event.preventDefault();

	//3. Find the user input and store in var city

		var city = $("#city-type").val();

	/*
	4. If placeholder = "New York" "New York City" or "NYC" 
	body background: url(file:///Users/christinarust/Desktop/FEWD31/Homework/Assignment5/images/nyc.jpg)
	
	If placeholder = "San Francisco" "SF" or "Bay Area"
	body background: url(file:///Users/christinarust/Desktop/FEWD31/Homework/Assignment5/images/sf.jpg)

	If placeholder = "Los Angeles" "LA" or "LAX"
	body background: url(file:///Users/christinarust/Desktop/FEWD31/Homework/Assignment5/images/la.jpg)

	If placeholder = "Austin" or "ATX"
	body background: url(file:///Users/christinarust/Desktop/FEWD31/Homework/Assignment5/images/austin.jpg)

	If placeholder = "Sydney" or "SYD"
	body background: url(file:///Users/christinarust/Desktop/FEWD31/Homework/Assignment5/images/sydney.jpg)
	*/

		if (city === "New York City" || city === "New York" || city === "NYC") {
			$("body").css("background-image", "url(file:///Users/christinarust/Desktop/FEWD31/Homework/Assignment5/images/nyc.jpg)");
		}

		else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
			$("body").css("background-image", "url(file:///Users/christinarust/Desktop/FEWD31/Homework/Assignment5/images/sf.jpg)");
		}

		else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
			$("body").css("background-image", "url(file:///Users/christinarust/Desktop/FEWD31/Homework/Assignment5/images/la.jpg)");
		}

		else if (city === "Austin" || city === "ATX") {
			$("body").css("background-image", "url(file:///Users/christinarust/Desktop/FEWD31/Homework/Assignment5/images/austin.jpg)");
		}
		
		else if (city === "Sydney" || city === "SYD") {
			$("body").css("background-image", "url(file:///Users/christinarust/Desktop/FEWD31/Homework/Assignment5/images/sydney.jpg)");
		}
		
		else {
			$("body").css("background-image", "url(images/citipix_skyline.jpg)");

		}
	}
});