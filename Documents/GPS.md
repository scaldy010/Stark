
# GPS Location

## Objectives
1. ~~bang head agaisnt wall for hours~~
1. ~~take time to review code~~
    1. ~~should have been done before now (your a dope)~~


##Background / Preparation

In this activity you’ll be using Phonegap. You can use the hello world template that is built-in, as it
already has the geolocation plugin, or you can decide to use another template and add the plugin as
last week.

### Tasks 1 and 2:

The function that Phonegap provides to access the GPS sensor in the phone is:

```javascript 
navigator.geolocation.getCurrentPosition(geoCallback, onError)
```

The functions “geoCallback” and “onError” are callback functions that will be called after.

### Task 3:

The sample code provided includes the lecturer’s API key. If you would like to create you own API
key (which is recommended) you will need to sign up to use the Google Map API. The first year of
use of the API is for free, but you will need a credit/debit card to sign up anyway.

## Task 1: Get the GPS reading from you device on the console.

a. Create a new function called getLocation() to wrap up the getCurrentPosition function
provided above.
b. Create the geoCallback function:
- It should take one attribute (position).
- Print to the console the content of the position object.
c. Create the onError function
- It should take one attribute (message).
- Print to the console the content of the message object.
d. Create a button on the front end to call the getLocation function.
e. Run your app using your web browser, and inspect the page to see the result.

##Task 2: Get the GPS reading from you device on the front end.

a. Create a place holder in the HTML file to display the GPS position.
b. Modify the geoCallback function to extract the data from the position object, and display on
front end using the place holder created in part a.
- TIP: The position object works as a JSON object, so we can access the latitude using
position.coords.latitude
- Make sure to display at least longitude and altitude.
c. Run your app using your web browser.
d. Run you app using your phone.
Task 3: Get a map displayed on your front end from Google Maps API
Optional Section:
a. Sign up to use the Google Maps API
- Go to https://console.cloud.google.com/ and log in with your Google credentials.
- Agree to the terms and conditions.
b. Click on APIs and Services on the left menu
c. Click on “create project” and then click on “create”.
d. Give your new project a name and click on “create”.
e. Click on “Enable APIS and services”.
f. Click on “Maps JavaScript APi” and then “Enable”.
g. Click on “Credentials”, then on “Create Credentials”, and then on “API Key”. Finally, copy
your API Key and close the dialog.
- The free version of this API is very limited, however, Google APIs will give you a trial
with USD$300 bonus to use their full capabilities within a year, if you enable the
billing. This should be plenty of credit to get you through this module.
Mandatory Section:
h. Add a place holder for your map in the HTML file of your app.
 `<div id="map"></div>`
i. Add the script code to import the Google Map JavaScript API

```javascript
<script
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAp
FPNQ2WxbEueUXMJBPHjLenlPnFo68ls&callback=initMap">
</script>
```
- The key above is mine. Feel free to use it, but consider using your own.
- Notice that the callback function is initMap
j. Include the initMap function in your JavaScript file

```javascript

function initMap() {
 var cct = {lat: 53.346, lng: -6.2588};
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
```
k. Add the style code to display the map properly in your CSS file

```css
#map {
 height: 400px;
 width: 100%;
}
```

l. Run your app and to make sure your map appears.
m. If it doesn’t come up, try to debug the code.

## Task 4: Add another marker to the map in another position
a. Use the position {lat: 53.3458, lng: -6.2575}
b. Run the app to display the both markers on the map.
c. Can you tell me the place that I’m pointing to?
Task 5: Display your current position on the map
a. Using the readings from the GPS sensor create two variables lat and lng, with the values
from the reading.
b. Create a new function called updateMap that takes the two values from part a.
c. Modify the initMap function from task 3
- Take two parameters (lat and lng)
- Change the position of the centre of the map (use the values coming from outside).
- Change the position of the Marker (use the values coming from outsie).