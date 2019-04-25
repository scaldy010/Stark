# Stark

> A web dev CA for Mobile Development

[Mark down & vs code cheat sheet](./Documents/Cheatsheets.md)


## Phases 

### phase 0

- ~~Setup IDE~~ 
- ~~Setup GIT~~
- ~~Learn markdown~~ 
- ~~gatehr links to demos~~

Completed | Formated | link |
| --- | --- | --- |
|    []|    [X]| [ Take picture ](./Documents/Picture.md) |
|    []|     [X]| [ Currency Converter ](./Documents/Currencyconverter.md) |
|    []|     [X]| [ Saving data ](./Documents/Savingdata.md) |
|    [X]|     [X]| [ GPS  ](./Documents/GPS.md) |
|    [X]|     [X]| [ External API's ](./Documents/ExternalAPI.md) |


### Phase 1 - practical research 

> Get working demos of essential functinoality and cut useful snippets into a reminder location

Created Ultron Phonegap project 

1. This will not be uploaded to git 
2. This will be the project used to test and run example code

---

# GPS 

Implemeneted GPS location with google maps 

done using https://opencagedata.com

##### inputs
1. latitude  
1. longitude

Both taken from the phone and then an API call is used to return the following 

##### outputs
1. City 
1. Country
1. Currency 
1. Iso_code

Sample output 
1. city: "Dublin 12" 
1. Country: "Ireland"
1. Currency: "Euro" 
1. iso_code: "EUR"

##### HTML
```html
<body onload="startApp()">

    <div id='opencage' ></div>
    <div id='map' ></div>                                        
```

##### JavaScript

```javascript 
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
```



- take picture 

[sample take a picture with saving project](https://github.com/apontejaj/Framework2) 




### phase 2 - skeleton project 

1. show splash screen on application start 
2. request GPS location from hardware 
3. turn gps location into GPS Name 
4. sava data, define schema
5. connect to currancy API 
6. get rate 
7. calculate and display conversion to user 

### phase 3 A - Implement weather 
1. Connect to API 
2. send GPS location 
3. get weather 
4. present to user 
5. save data

### phase 3 B - Implement take a picure

1. take picture 
2. galerry vs camera, is this  somehting i need to think about 

### phase 3 C - Google Maps

1. Show location on google maps
2. Show pins of saved activity on map



