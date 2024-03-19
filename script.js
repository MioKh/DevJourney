<<<<<<< HEAD
=======
// fetch api
fetch("./users.json")
  .then((response) => response.json())
  .then((data) => console.log(data)); // more modern then xhr

fetch("https://api.github.com/users/mioKH") // real api
  .then((response) => response.json())
  .then((data) => console.log(data.bio)); 
>>>>>>> 296244de95e4531cfc348b4d32eebbf9d147a42a
