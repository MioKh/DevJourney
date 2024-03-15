function getData(endpoint) {
  const xhr = new XMLHttpRequest();

  xhr.open("Get", endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      console.log(data);
    }
  };

  setTimeout(() => {
    // simulate delay from server
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000); // random seconds 1 to 3 random in miliseconds
}

getData("./users.json");
getData("./fruits.json");
getData("./vegetables.json");
// this gets the data in random order if you want it to be in order you can use callbacks 
