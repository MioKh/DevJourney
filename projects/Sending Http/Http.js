const apiUrl = "https://jsonplaceholder.typicode.com/todos"; //fetching the data from the link

const getTodo = () => {
  fetch(apiUrl + "?_limit=10") // the actual fetching data the apiUrl is just a link
    .then((res) => res.json()) // fetch api is kinda weird it asks for a response promise first
    .then((data) => {
      // then gives you the data in any name you name it
      data.forEach((todo) => addToDom(todo));
    });
};

const addToDom = (todo) => {
  const div = document.createElement("div"); // create a div
  div.classList.add("todo");
  div.appendChild(document.createTextNode(todo.title)); // and add the fetched data title in it
  div.setAttribute("data-id", todo.id);

  if (todo.completed) {
    // if the property comlete is true in the object then
    div.classList.add("done"); // add this class
  }

  document.getElementById("todo-list").appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiUrl, {
    method: "POST", // sending the data to the server
    body: JSON.stringify(newTodo), // conversion :D
    headers: { "Content-Type": "application/json" }, // type of sended data
  })
    .then((res) => res.json())
    .then((todo) => addToDom(todo));
};

const toggleCompletion = (e) => {
  if (e.target.classList.contains("todo")) {
    e.target.classList.toggle("done");
  }
};

const init = () => {
  document.addEventListener("DOMContentLoaded", getTodo);
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
  document
    .querySelector("#todo-list")
    .addEventListener("click", toggleCompletion);
};

init();
