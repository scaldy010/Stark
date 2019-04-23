// Initialize app
var myApp = new Framework7();



var $$ = Dom7;


var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
    console.log("Device is ready!");

});

// This function is going to use the plugin to 
// get the latitude and longitud from the device
function getLocation() {
    // Once the position has been retrieved, an JSON object
    // will be passed into the callback function (in this case geoCallback)
    // If something goes wrong, the onError function is the 
    // one that will be run
    navigator.geolocation.getCurrentPosition(geoCallback, onError);
}

// The callback function must catch the object with the position
function geoCallback(position) {

    // Printing the position object to the console
    console.log(position);

    // Extracting the latitude and longitude
    // from the position object
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    // Formatting the data to put it on the front end
    var location = "Lat: " + lat + "<br>Long: " + lon;

    // Placing the data on the front end
    document.getElementById('position').innerHTML = location;
}
/*
// This is the callback function for the google maps API
function initMap() {

    // Defining a position to display
    var cct = {lat: 53.346, lng: -6.2588};
    
    // Creating the map, centred on the position 
    // defined above
    var myMap = new google.maps.Map(document.getElementById('map'),
        {zoom: 18,
        center: cct });
    
    // Creating a marker to place on the map
    // at the position defined above
    var marker = new google.maps.Marker(
        { position: cct,
        map: myMap });
    
    // Adding another pointer
    var otherLocation = {lat: 53.3458, lng: -6.2575};
    var marker2 = new google.maps.Marker(
        { position: otherLocation,
        map: myMap });

    // REMEMBER: I added some style to the style file
    // to be able to display the map!!!
         
} 

*/

// This function is going to be in charge of invoking
// the open cage external API
function openCage() {

    // The XMLHttpRequest object, is the one in 
    // charge of handleing the request for us
    var http = new XMLHttpRequest();

    // The url to send the request to. Notice that we're passing
    // here some value of Latituted and longitude for the API 
    // to process
    var apikey = 'b4d8a0a740ea4821b56bcb4b53fb8750'
    var latitude = '51.0';
    var longitude = '7.0';
  
    var api_url = 'https://api.opencagedata.com/geocode/v1/json'
  
    var request_url = api_url
      + '?'
      + 'key=' +encodeURIComponent(apikey)
      + '&q=' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
      + '&pretty=1'
      + '&no_annotations=1';
    // Opening the request. Remember, we will send
    // a "GET" request to the URL define above
    http.open("GET", url);
    // Sending the request
    http.send();

    // Once the request has been processed and we have
    // and answer, we can do something with it
    http.onreadystatechange = (e) => {

        // First, I'm extracting the reponse from the 
        // http object in text format
        var response = http.responseText;

        // As we know that answer is a JSON object,
        // we can parse it and handle it as such
        var responseJSON = JSON.parse(response);

        // Printing the result JSON to the console
        console.log(responseJSON);

        // Extracting the individual values, just as we
        // do with any JSON object. Just as we did 
        // with the position.
        // REMEMBER: In this case, we have an array inside 
        // the JSON object.
        var city = responseJSON.results[0].components.city;
        var country = responseJSON.results[0].components.country;
        var currency = responseJSON.results[0].annotations.currency.name;

        // Formattng data to put it on the front end
        var oc = "City: " + city + "<br>Country: " + country + "<br>Currency: " + currency;

        // Placing formatted data on the front ed
        document.getElementById('opencage').innerHTML = oc;
    }

}

