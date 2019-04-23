function getGps(callback) {
    navigator.geolocation.getCurrentPosition(function (position) {
        // console.log("Pos", position);

        // error first by convention
        callback(null, position);
    });
}

function openCage(position, gotPositionCallback) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var http = new XMLHttpRequest();

    const url = 'https://api.opencagedata.com/geocode/v1/json?q=' + lat + '+' + lon + '&key=b4d8a0a740ea4821b56bcb4b53fb8750';
    http.open("GET", url);
    http.send();

    http.onreadystatechange = (e) => {
        // https://stackoverflow.com/questions/14306187/xmlhttprequest-onreadystatechange-called-multiple-times
        if(http.readyState !== 4) return;

        var response = http.responseText;
        if(!response) return;

        var responseJSON = JSON.parse(response);

        // console.log(responseJSON);

        var city = responseJSON.results[0].components.city;
        var country = responseJSON.results[0].components.country;
        var currency = responseJSON.results[0].annotations.currency.name;

        // by convention put any error as first parameter
        gotPositionCallback(null, { city, country, currency });
    }

}
