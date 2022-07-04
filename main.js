let button = document.querySelector('[data-js="button"]');

let text = document.querySelector('[data-js="text"]');

console.log(button);
console.log(text);

function onButtonClick() {
  console.log("button clicked!");

  text.classList.toggle("text--highlight");
}

button.addEventListener("click", onButtonClick);
