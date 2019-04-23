function startApp(){
  alert("got to start app");
  //Placeholders
  var lat, lon;

  console.log("Start");
  //Get current position
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Pos", position);
    // Save current position
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    openCage(position);
    // Once the request has been processed and we have
    // and answer, we can do something with it
   
    
  }, function(err) {
    // Handle some error
    console.log('err', err);
  });
}

function openCage(position)
{
  alert("got to open cage");

  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  var http = new XMLHttpRequest();

 
  const url = 'https://api.opencagedata.com/geocode/v1/json?q='+lat+'+'+lon+'&key=b4d8a0a740ea4821b56bcb4b53fb8750';

  http.open("GET", url);
 
  http.send();


  http.onreadystatechange = (e) => 
  {
      
    
      var response = http.responseText;

     
      var responseJSON = JSON.parse(response); 
  
      console.log(responseJSON);


      var city = responseJSON.results[0].components.city;
      var country = responseJSON.results[0].components.country;
      var currency = responseJSON.results[0].annotations.currency.name;
 
      

     
      var oc = "City : " + city + "<br>Country : " + country + "<br>Currency : " + currency;

  
      document.getElementById('opencage').innerHTML = oc;
  }
}
