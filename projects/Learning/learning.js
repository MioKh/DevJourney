const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "john", age: 20 });
  }, 1000);
});

async function getPromise() { // with a promise
  // making the function async
  const response = await promise; // wait until the promise resolves
  console.log(response);
}

getPromise();

async function getUsers() {
  // using a normal function
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data); // a lot more precise 
}

/*function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));  
} a bit confusing */

getUsers();

const getPosts = async () => {
  // using a arrow function
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
};
getPosts();
