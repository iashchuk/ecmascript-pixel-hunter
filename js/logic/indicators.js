import indicatorsTemplate from '../templates/indicators.template';


export default (answers) => {
  const indicatorsBlock = indicatorsTemplate();
  const indicators = indicatorsBlock.querySelectorAll(`li`);

  if (answers.length > 0) {
    answers.forEach((answer, index) => {
      indicators[index].classList.remove(`stats__result--unknown`);
      if (!answer.isCorrect) {
        indicators[index].classList.add(`stats__result--wrong`);
      } else if (answer.isCorrect && answer.isFast) {
        indicators[index].classList.add(`stats__result--fast`);
      } else if (answer.isCorrect && answer.isSlow) {
        indicators[index].classList.add(`stats__result--slow`);
      } else if (answer.isCorrect) {
        indicators[index].classList.add(`stats__result--correct`);
      }
    });
  }
  return indicatorsBlock;
};
