const apiUrl = "https://jsonplaceholder.typicode.com/todos"; //fetching the data from the link

const getTodo = () => {
  fetch(apiUrl + "?_limit=5") // the actual fetching data the apiUrl is just a link
    .then((res) => res.json()) // fetch api is kinda weird it asks for a response promise first
    .then((data) => {
      // then gives you the data in any name you name it
      data.forEach((todo) => addToDom(todo));
    });
};

const addToDom = (todo) => {
  const div = document.createElement("div"); // create a div
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
    title: e.target.firstChildElement.value,
    completed: false,
  };

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((todo) => addToDom(todo));
};

const init = () => {
  document.addEventListener("DOMContentLoaded", getTodo);
  document.querySelector("#todo-form").addEventListener("submit", createTodo);
};

init();
