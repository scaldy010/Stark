// Initialize app
var myApp = new Framework7();



var $$ = Dom7;


var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

});


function getLocation(){
  
    navigator.geolocation.getCurrentPosition(geoCallback, onError);
}


function geoCallback(position){

  
    console.log(position);
    openCage(position);

  
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

  
    var location = "Lat: " + lat + "<br>Long: " + lon;

    document.getElementById('position').innerHTML = location;
    
}
function openCage(position){

    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var http = new XMLHttpRequest();

   
    const url = 'https://api.opencagedata.com/geocode/v1/json?q='+lat+'+'+ lon+'&key=b4d8a0a740ea4821b56bcb4b53fb8750';
  
    http.open("GET", url);
   
    http.send();

  
    http.onreadystatechange = (e) => {
        
      
        var response = http.responseText;

       
        var responseJSON = JSON.parse(response); 
    
        console.log(responseJSON);

  
        var city = responseJSON.results[0].components.city;
        var country = responseJSON.results[0].components.country;
        var currency = responseJSON.results[0].annotations.currency.name;

       
        var oc = "City: " + city + "<br>Country: " + country + "<br>Currency: " + currency;

    
        document.getElementById('opencage').innerHTML = oc;
    }
    
}