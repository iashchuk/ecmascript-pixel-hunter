export default (answer) => {
  switch (true) {
    case !answer.correct:
      return `<li class="stats__result stats__result--wrong"></li>`;
    case answer.correct && answer.fast:
      return `<li class="stats__result stats__result--fast"></li>`;
    case answer.correct && answer.slow:
      return `<li class="stats__result stats__result--slow"></li>`;
    case answer.correct:
      return `<li class="stats__result stats__result--correct"></li>`;
    default:
      return `<li class="stats__result stats__result--unknown"></li>`;
  }
};
