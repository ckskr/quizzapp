export default function Questioncard() {
  const button = document.querySelector('[data-js="button"]');
  const answer = document.querySelector('[data-js="answer"]');

  let isAnswerShown = false;

  button.addEventListener('click', () => {
    isAnswerShown = !isAnswerShown;

    if (isAnswerShown) {
      button.innerText = 'Hide answer';
      answer.classList.add('card__answer__shown');
    } else {
      button.innerText = 'Show answer';
      answer.classList.remove('card__answer__shown');
    }
  });
}
