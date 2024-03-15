// I'll also be writing commets along the code for my future self and anyone else who may need it.
// I'll try to minimize the comments as much as possible to make the code more readable.
// I'll only be using comments to help me understand what the code is doing. in case i forget what it does

// Ajax / XHR object

const xhr = new XMLHttpRequest(); // create an instance of the XHR object
xhr.open('GET', 'users.json'); // basically gets the data from the URL
xhr.onreadystatechange = function() { 
    if (xhr.readyState === 4 && xhr.status === 200) { // if the request is done and the status is 200 (200 is the code for a successful request)
        console.log(JSON.parse(xhr.responseText)); 
    }
}

xhr.send(); // send the request ( without this, the request won't be sent and no data will be returned)