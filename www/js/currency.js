var input;
var rate;
var iso_code;

function readingInput(){

    input = document.getElementById('input').value;

}

function getRate(openCageCallback){

    iso_code = openCageCallback.iso_code;

    // The XMLHttpRequest object, is the one in 
    // charge of handleing the request for us
    var http = new XMLHttpRequest();

    // The url to send the request to. Notice that we're passing
    // here some value of Latituted and longitude for the API 
    var key = 'c9623257b8f42e31ab47feb0d7957b19';
    // to process
    const url = 'http://apilayer.net/api/live?access_key='+ key + '&currencies='+ iso_code + '&source=USD&format=1';
    // Opening the request. Remember, we will send
    // a "GET" request to the URL define above
    http.open("GET", url);
    // Sending the request
    http.send();

    // Once the request has been processed and we have
    // and answer, we can do something with it
    http.onreadystatechange = (e) => {
        
        // First, I'm extracting the reponse from the 
        // http object in text format
        var response = http.responseText;

        // As we know that answer is a JSON object,
        // we can parse it and handle it as such
        var responseJSON = JSON.parse(response); 
    
        // Printing the result JSON to the console
        console.log(responseJSON);

        rate = responseJSON.quotes.USDEUR;
        
    }

    getCurrencyCallBack(null,{rate})
}

// Converting in one direction
function convert(){

    readingInput();
    getRate();
    var result = input * rate;
    document.getElementById('result').innerHTML = result;
}

// Converting in the other direction
function convert2(){

    readingInput();
    getRate();
    var result = input / rate;
    document.getElementById('result').innerHTML = result;

}