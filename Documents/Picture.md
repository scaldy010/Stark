Mobile Development

[ Take picture ](https://cordova.apache.org/plugins/?q=camera)


• npm i –g phonegap
Installing Plugins
• Phonegap plugin add name-of-plugin
• This is easier than the way we did before
Camera
• Now that we master the accelerometer from last week, the camera
should be a piece of cake
• navigator.camera.getPicture(cameraCallback, onError);
• For this to work, we need to pass two callback functions
• cameraCallback
• onError
Camera – Try it
• Create first the cameraCallback function –leave it empty for now
• cameraCallback()
• We don’t need to create onError function, we’ll use the same as last
week
• Create a place holder in the HTML file to display the picture
• Create a button to trigger the camera
### Camera - Code
```javascript
function cameraCallback(){
}
<button id="buttonPic" onclick="pics()" >Picture</button>
<img id="myImage" height="50%" width="50%"></img>
Camera - Code
• Let’s take a minute to understand what this is doing
function pics(){
navigator.camera.getPicture(cameraCallback, onError);
}
function cameraCallback(imageData) {
var image = document.getElementById('myImage’);
image.src = imageData;
}
```


