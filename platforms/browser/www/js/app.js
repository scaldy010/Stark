function startApp(){
  //Placeholders
  var lat, lon;

  console.log("Start");
  //Get current position
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Pos", position);
    // Save current position
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    var url = "https://api.opencagedata.com/geocode/v1/json?q=" + lat + "+" + lon + "&key=22e5695431c543d682e4d4b52ec743ab"
    http.open("GET", url);
    // Sending the request
    http.send();

    // Once the request has been processed and we have
    // and answer, we can do something with it
    http.onreadystatechange = (e) => {
      console.log("HTTP", e);
        
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
  }, function(err) {
    // Handle some error
    console.log('err', err);
  });
}

