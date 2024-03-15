function getData(endpoint, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open("Get", endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      callback(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    // simulate delay from server
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000); // random seconds 1 to 3 random in miliseconds
}

getData("./users.json", (data) => {
  console.log(data);
  getData("./fruits.json", (data) => {
    console.log(data);
    getData("./vegetables.json", (data) => {
      console.log(data);
    });
  });
}); // now this gets data in order but it looks awful 
// its even called a callback hell 
