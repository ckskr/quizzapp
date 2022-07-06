//Bookmark

import Bookmark from "./components/bookmark/bookmark.js";

Bookmark();

//Answer

const button = document.querySelector('[data-js="button"]');
const answer = document.querySelector('[data-js="answer"]');

function onButtonClick() {
  answer.classList.toggle("card__answer__shown");
}

button.addEventListener("click", onButtonClick);
