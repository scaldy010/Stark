# Stark

> A web dev CA for Mobile Development

## Phases 

### phase 0

- ~~Setup IDE~~ 
- ~~Setup GIT~~
- ~~Learn markdown~~ 
- ~~gatehr links to demos~~

Cleaned | Formated | link |
| --- | --- | --- |
|    []|    [X]| [ Take picture ](./Documents/Picture.md) |
|    []|     [X]| [ Currency Converter ](./Documents/Currencyconverter.md) |
|    []|     [X]| [ Saving data ](./Documents/Savingdata.md) |
|    []|     [X]| [ GPS  ](./Documents/GPS.md) |
|    []|     [X]| [ External API's ](./Documents/ExternalAPI.md) |


### Phase 1 - practical research 

> Get working demos of essential functinoality and cut useful snippets into a reminder location

Created Ultron Phonegap project 

1. This will not be uploaded to git 
2. This will be the project used to test and run example code

- GPS
#### Notes place holder 
Working code found on 4 March - 10 March mobile devlopment notes

#### Next steps

1. ~~Add working code to ultron~~
2. ~~Review code and take snippets~~
3. ~~Push confirmed code from ultron to Stark~~



#### code place holder 
##### HTML
```html

<div id="position">Waiting for position...</div>

<div id="opencage"> Waiting for city data...</div>

<div class="block">
    <div class="row">
        <button class="col button button-fill button-round" onclick="getLocation()"> tell me where you are!</button>
    </div>
</div>

<div class="block">
    <div class="row">
        <button class="col button button-fill button-round" onclick="openCage()"> City / Country </button>
    </div>
</div>                                         
```

##### JavaScript

```javascript 

function getLocation(){
    // Once the position has been retrieved, an JSON object
    // will be passed into the callback function (in this case geoCallback)
    // If something goes wrong, the onError function is the 
    // one that will be run
    navigator.geolocation.getCurrentPosition(geoCallback, onError);
}

// The callback function must catch the object with the position
function geoCallback(position){

    // Printing the position object to the console
    console.log(position);

    // Extracting the latitude and longitude
    // from the position object
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    // Formatting the data to put it on the front end
    var location = "Lat: " + lat + "<br>Long: " + lon;

    // Placing the data on the front end
    document.getElementById('position').innerHTML = location;
}

// This is the callback function for the google maps API
function initMap() {

    // Defining a position to display
    var cct = {lat: 53.346, lng: -6.2588};
    
    // Creating the map, centred on the position 
    // defined above
    var myMap = new google.maps.Map(document.getElementById('map'),
        {zoom: 18,
        center: cct });
    
    // Creating a marker to place on the map
    // at the position defined above
    var marker = new google.maps.Marker(
        { position: cct,
        map: myMap });
    
    // Adding another pointer
    var otherLocation = {lat: 53.3458, lng: -6.2575};
    var marker2 = new google.maps.Marker(
        { position: otherLocation,
        map: myMap });

    // REMEMBER: I added some style to the style file
    // to be able to display the map!!!

```



- weather API 
#### Notes place holder 

#### code place holder 
```


```
- take picture 

[sample take a picture with saving project](https://github.com/apontejaj/Framework2) 
#### Notes place holder 

#### code place holder 
```


```
- save data 
#### Notes place holder 

#### code place holder 
```


```
- currency exchange 
#### Notes place holder 

#### code place holder 
```


```

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

### Javascript snippets

```javascript
function someName( some, param) {};

const someName = (some, param) => {};
```

---

# Markdown Cheetsheet

# on commit, 

*if accepted this commit will*

## H2

* List
* List

*italics*
**bold**
`code`
~~strikeout~~
- [X] Tick box ticked
- [] Tick box not ticked
[Link title](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

[Internal Linking](#stark)

```python
block code
```

| Head | Col |
| --- | --- |
Some | table


# VS Code Cheet Sheet

1. File Jumper - Ctrl + P
1. Command Palette - Ctrl + Shift + p
1. Multi-caret - Ctrl + Alt + Arrow
1. Move Line - Ctrl + Shift + Arrow up/down
1. Multiselect - Ctrl + D
1. Duplicate line - Ctrl + Shift + D
1. Togle view side bar = ctrl - B



# phoneGap complie

1. go to https://build.phonegap.com
2. create new app 
3. input git link https://github.com/scaldy010/Stark
4. follow on screen instructions 