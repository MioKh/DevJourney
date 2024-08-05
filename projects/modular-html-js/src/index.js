// src/script.js
import nav from "../html/nav.html";
import color1 from "../html/color1.html";
import color2 from "../html/color2.html";
import color3 from "../html/color3.html";
import "../src/main.css";
import "../css/nav.css";

// load css dynamically
function loadCSS(cssUrl) {
  // Remove existing CSS if any
  const existingLink = document.querySelector('link[data-fragment-css]');
  if (existingLink) {
    document.head.removeChild(existingLink);
  }

  // Load new CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = cssUrl;
  link.dataset.fragmentCss = true; // Custom attribute to identify fragment CSS
  document.head.appendChild(link);
}

document.getElementById("nav").innerHTML = nav;
document.getElementById("content").innerHTML = color1;
loadCSS("../css/color1.css"); // 

document.addEventListener('click', (event) => {
  if (event.target && event.target.classList.contains('btn1')) {
    document.getElementById("content").innerHTML = color1;
    loadCSS("../css/color1.css"); // Load CSS for color1
  } else if (event.target && event.target.classList.contains('btn2')) {
    document.getElementById("content").innerHTML = color2;
    loadCSS("../css/color2.css"); // Load CSS for color2
  } else if (event.target && event.target.classList.contains('btn3')) {
    document.getElementById("content").innerHTML = color3;
    loadCSS("../css/color3.css"); // Load CSS for color3
  }
});