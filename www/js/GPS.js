function openCage(position){
    alert("got to open cage hellooooo!!!");

    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var http = new XMLHttpRequest();

   
    const url = 'https://api.opencagedata.com/geocode/v1/json?q='+lat+'+'+lon+'&key=b4d8a0a740ea4821b56bcb4b53fb8750';
  
    http.open("GET", url);
   
    http.send();

  
    http.onreadystatechange = (e) => {
        
      
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
function initMap(position) 
{
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var cct = {lat,lon};
    var map = new
   google.maps.Map(document.getElementById('map'),
   { zoom: 4,
    center: cct
    }
    );
    var marker = new google.maps.Marker({
    position: cct,
    map: map
    });
   }