
// placeholders
var position;
var iso_code;
var rate;
var googleMapsReady = false;

function startApp() {
  console.log("StartApp()");

  getGps(function (err, result) {
    position = result;

    // call open cage with position
    openCage(position, openCageCallback);

    // call maps with position
    if (googleMapsReady) {
      initMap(position);
    }
  });

  function openCageCallback(err, cage) {
    console.log('openCage results', cage);
    var { city, country, currency, iso_code } = cage;

    // Update DOM
    var oc = "City : " + city + "<br>Country : " + country + "<br>Currency : " + currency + "<br>Currency code :" + iso_code;
    document.getElementById('opencage').innerHTML = oc;
    iso_code = iso_code;
  }
}

// google maps callback
function startMaps() {
  googleMapsReady = true;
}

