// i have no idea what i am doing

const valueInput = document.querySelector(".value");
const indexInput = document.querySelector(".index");
const buttonContainer = document.querySelector(".buttons-container");


valueInput.addEventListener("input", (e) => {
    console.log(valueInput.value);
});

indexInput.addEventListener("input", (e) => {
    console.log(indexInput.value);
});

buttonContainer.addEventListener("click", (e) => {
    console.log(e.target);
});
