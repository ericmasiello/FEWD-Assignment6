/* 
page loads with defaults
listen to the submit event on the form element
when the submit event happens, we'll do the following...

1. find the text box and extract the text the person typed in there
2. compare what the user typed in to nyc or new york or new york city
3. if there's a match then we need to remove any classes on the body tag
4. and then add the nyc class to to the body tag.
5. changes the background image to corresponding city
6. 
7.

*/

$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        var city = $("#city-type").val();

        city = city.toLowerCase();     

        if(city === "nyc" || city === "new york city"|| city === "new york") {
            $("body").addClass("nyc").removeClass("la austin sydney sf"); 
        }

        if(city === "la" || city === "los angles" || city === "lax") {
            $("body").addClass("la").removeClass("nyc austin sydney sf");
        }

        if(city === "austin" || city === "atx") {
            $("body").addClass("austin").removeClass("nyc la sydney sf");
        }

        if(city === "sydney" || city === "syd") {
            $("body").addClass("austin").removeClass("nyc la austin sf");
        }

        if(city === "san francisco" || city === "sf" || city === "bay area") {
            $("body").addClass("austin").removeClass("nyc la sydney austin");
        }
    });
});



