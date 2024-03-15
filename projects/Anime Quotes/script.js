const text = document.querySelector(".text");
const character = document.querySelector(".character");
const anime = document.querySelector(".anime");
const quoteBtn = document.querySelector(".btn");

function generateQuotes() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://animechan.xyz/api/random", true); // credits https://github.com/rocktimsaikia/animechan
  xhr.onload = function () {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      text.innerHTML = data.quote;
      character.innerHTML = `Character: ` + data.character;
      anime.innerHTML = `Anime: ` + data.anime;
    }
  };
  xhr.send();
} // a more practical example

quoteBtn.addEventListener("click", generateQuotes);

