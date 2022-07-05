//Answer

let button = document.querySelector('[data-js="button"]');
let answer = document.querySelector('[data-js="answer"]');

function onButtonClick() {
  answer.classList.toggle("card__answer__shown");
}

button.addEventListener("click", onButtonClick);

//Bookmark

let bookmark = document.querySelector('[data-js="bookmark"]');

let fill = document.querySelector('[data-js="filled"]');

function clickBookmark() {
  fill.classList.toggle("bookmark__icon_clicked");
}

bookmark.addEventListener("click", clickBookmark);
