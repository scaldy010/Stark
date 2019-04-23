function initMap(position) {
    
    var coordinates = { lat: position.coords.latitude, lng: position.coords.longitude };

    var target =  document.getElementById('map');
    var options = { zoom: 15, center: coordinates };
    var map = new google.maps.Map( target, options );
    
    var marker = new google.maps.Marker({
        position: coordinates,
        map: map
    });
}