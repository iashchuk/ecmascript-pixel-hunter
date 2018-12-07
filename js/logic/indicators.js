export default (answer) => {
  if (answer) {
    if (answer.isCorrect && answer.isFast) {
      return `<li class="stats__result stats__result--fast"></li>`;
    } else if (answer.isCorrect && answer.isSlow) {
      return `<li class="stats__result stats__result--slow"></li>`;
    } else if (answer.isCorrect) {
      return `<li class="stats__result stats__result--correct"></li>`;
    } else {
      return `<li class="stats__result stats__result--wrong"></li>`;
    }
  } else {
    return `<li class="stats__result stats__result--unknown"></li>`;
  }
};

