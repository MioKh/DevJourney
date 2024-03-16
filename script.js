// promises ( solves the problem of callback hell )
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// for reference

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = false;
    if (err) {
      reject("error");
    } else {
      resolve({
        name: "John",
        age: 30,
      });
    }
  }, 1000);
});

getUser
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("hello from global scope");
