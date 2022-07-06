export default function Bookmark() {
  const bookmark = document.querySelector('[data-js="bookmark"]');

  const fill = document.querySelector('[data-js="filled"]');

  function clickBookmark() {
    fill.classList.toggle("bookmark__icon__clicked");
  }

  bookmark.addEventListener("click", clickBookmark);
}
