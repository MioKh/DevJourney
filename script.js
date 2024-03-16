// using promise.all 
// looks neater then promise chaining 

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

const userPromise = getData("./users.json");
const fruitPromise = getData("./fruits.json");
const vegetablePromise = getData("./vegetables.json");

Promise.all([userPromise, fruitPromise, vegetablePromise])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
  // looks better then promise chaining but this is optional at this point
