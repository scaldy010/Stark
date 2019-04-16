# Mobile Development

Today’s plan
• Storing files in the phone
Storing files
• Phonegap offers a plugin to explore folders in you application
sandbox using our old friend JavaScript that allows to create, read
and write files in the application sandbox.
Let’s see a diagram
File System File Entry
File Writer
File Reader 
```javascript
fs.root.getFile(a, b, c, d)
fileEntry.createWriter(a)
fileEntry.file(a)
Reader.readAsText(file)
```

## First: Get access to the file system

• This function takes four parameters:
• The type of file we want to create
• PERSISTENT OR TEMPORARY
• The size of the file (in bytes)
• If define 0, it doesn’t have a limit
• Success callback
• Error callback

```javascript
window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, fileSystemCallback, onError);
```

## Second: Get the file (fileEntry)

• This will happen in the success callback
•fs is the File System object
•root refers to the root directory
• getFile is the function to create the file

```javascript
function fileSystemCallback(fs) {
    // Name of the file I want to create
    var fileToCreate = "newPersistentFile.txt";
    // Opening/creating the file
    fs.root.getFile(fileToCreate, fileSystemOptional,
        getFileCallback, onError);
}
```

Let’s take a closer look
•fileToCreate would be the path and name of the file
•fileSystemOptionals are two:
• create: would create a file if it doesn’t exist (default is false)
• exclusive: would assume that the file doesn’t exist (default is false)
• Success and error callbacks, are the same story.


`var fileSystemOptionals = { create: true, exclusive: false };`

## Third: Write a file

```javascript
fileEntry.createWriter(function (fileWriter) {
    dataObj = new Blob(['Lets write some text here'], { type: 'text/plain' });
    fileWriter.write(dataObj);
    fileWriter.onwriteend = function () {
        console.log("Successful file write...");
    };
    fileWriter.onerror = function (e) {
        console.log("Failed file write: " + e.toString());
    };
});
```

## Third: Write a file

• The previous step will return an object: this is the file entry
•With that, we can create a writer (like the bufferWriter in Java).
•And of course, it takes a callback function once the writer is created
• The write function takes a data object (a blob), and triggers events
• onwriteend
• onerror

## Fourth: Read a file

```javascript

fileEntry.file(function (file) {
    // Create the reader
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = function () {
        console.log("Successful file read: " + this.result);
        console.log("file path: " + fileEntry.fullPath);
    };
}, onError);

```


## Fourth: Read a File

• Same as before, step three returns a file entry object
•With that, we can call the file function that takes a success and an
error callback
•In the success callback, we create a FileReader (again, similar to the
idea of the buffer reader in Java)
•Ans the reader triggers an event
• onloadend
Give it a go
• Find the full code up on Moodle
• Try to save in the file any other text
A few points
• You might need to install the file plugin
• You also might need to install phonegap command line
• I’ll stick around to give you a hand
That’s all folks
Any question?