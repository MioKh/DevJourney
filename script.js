// remember callback hell a few commits ago

function getData(endpoint) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint);
    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(`something went wrong ${this.status}`);
        }
      }
    };
    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000);
  });
}

getData("./users.json")
  .then((data) => {
    console.log(data);
    return getData("./fruits.json");
  })
  .then((data) => {
    console.log(data);
    return getData("./vegetables.json");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
  // fix callback hell using promise chaining
