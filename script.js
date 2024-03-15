// previous comments are deleted for readability , check the commit

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.github.com/users/mioKH/repos"); // real url
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(this.responseText);

    const ul = document.querySelector("ul");
    for (let i = 0; i < data.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${data[i].html_url}" target="_blank">${data[i].name}</a>`;
      ul.appendChild(li);
    } // somewhat of a practical example
  }
};

xhr.send();
