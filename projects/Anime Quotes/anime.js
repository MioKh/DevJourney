const text = document.querySelector(".text");
const character = document.querySelector(".character");
const anime = document.querySelector(".anime");
const quoteBtn = document.querySelector(".btn");

function generateQuotes() {
  fetch("https://animechan.xyz/api/random")
  .then((response) => response.json())
  .then((data) => { // a lot better then xhr 
    text.innerHTML = data.quote;
    character.innerHTML = `Character: ` + data.character;
    anime.innerHTML = `Anime: ` + data.anime;
  });

} // a more practical example

quoteBtn.addEventListener("click", generateQuotes);
