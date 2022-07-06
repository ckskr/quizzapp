//Answer

const button = document.querySelector('[data-js="button"]');
const answer = document.querySelector('[data-js="answer"]');

function onButtonClick() {
  answer.classList.toggle("card__answer__shown");
}

button.addEventListener("click", onButtonClick);

//Bookmark‚

const bookmark = document.querySelector('[data-js="bookmark"]');

const fill = document.querySelector('[data-js="filled"]');

function clickBookmark() {
  fill.classList.toggle("bookmark__icon__clicked");
}

bookmark.addEventListener("click", clickBookmark);
