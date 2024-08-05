import nav from "../html/nav.html"
import color1 from "../html/color1.html"
import color2 from "../html/color2.html"
import color3 from "../html/color3.html"

document.getElementById("nav").innerHTML = nav
document.getElementById("content").innerHTML = color1

document.addEventListener('click', (event) => {
    if (event.target && event.target.classList.contains('btn1')) {
        document.getElementById("content").innerHTML = color1;
    } else if (event.target && event.target.classList.contains('btn2')) {
        document.getElementById("content").innerHTML = color2;
    } else if (event.target && event.target.classList.contains('btn3')) {
        document.getElementById("content").innerHTML = color3;
    }
});


