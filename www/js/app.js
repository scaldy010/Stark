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
    // Once the request has been processed and we have
    // and answer, we can do something with it
    alert
    (
      "lat =" + lat + "/n" + 
      "lon =" + lon 
    );

  }, function(err) {
    // Handle some error
    console.log('err', err);
  });
  openCage(position)
}


