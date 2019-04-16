Mobile Development
Week 5
Amilcar Aponte
amilcar@cct.ie
Before I forget
• Remember you have an In-class Lab Session next week 
Last week
• Geolocation
• Google Maps API
Today’s Plan
• Take a look at last week exercise
• Other external APIs
External APIs
• Nowadays, external APIs are pretty similar to what services were. In
other words, there is some processing power that we are
“outsourcing” and we just rely on their interfaces.
• Facebook API
• A thousand Google APIs
• Anything that you can find in
• https://www.programmableweb.com/category/all/news
The main point with APIs
• You need to ask for permission to use them
• So, you will need an API key
• All of them have exactly the same structure and principle, although
not all of them will have the same endpoints and interfaces
How do they work?
Internal
Engine Client
API
Before we get coding – JavaScript Refreshing
• Callbacks: functions that are passed to other functions to be executed
after something else has happened
• We’ll see an example of that today
Now let’s get coding
• Let’s try to write some code to get some data about the location that
we collected from the GPS sensor last week.
• https://opencagedata.com/
OpenCage Geocoder
• They will take your latitude and longitude and return some data
regarding your place, such as name of the city/country, currency, road
name, post code, among others
• They offer a free plan that allows 2500 requests per day. More than
enough for what we need.
How does it work?
• Let’s understand first how it works.
• Our app has to send a get request to the URL they specify
• https://api.opencagedata.com/geocode/v1/json?q=LAT+LNG&key=YO
UR-API-KEY
Let’s try it
• Sign up to OpenCage
• And try to do a get request using your web browser
• Just stick the URL with some value of LAT, LONG and your API key.
The answer
• The response we’re getting is a JSON object
• It contains a bunch of meta data about the location
Using JavaScript
• Now, for your mobile application you want to be able to run the query
from the JavaScript program
• You can also use jQuery if you like, there is sample code in the
documentation of OpenCage
Take a look at this piece of code
var http = new XMLHttpRequest();
const url = 'http://my.api.com';
http.open("GET", url);
http.send();
Take a look at this piece of code
http.onreadystatechange = (e) => {
var response = http.responseText;
var responseJSON = JSON.parse(response);
console.log(responseJSON);
}
What we’re missing
• We should be able to isolate the bits of data we’re interested on
• Remember the answer is a JSON object, so you can access internal bits using
responseJSON.results.components…
• Display those bits of data on the front end
• Give it a go! 
That’s all folks
• Any questions?