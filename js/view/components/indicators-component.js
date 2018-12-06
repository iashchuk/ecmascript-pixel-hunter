import {MAX_GAME_VALUES} from '../../logic/config';
import markAnswer from '../../logic/indicators';


const createUnknownAnswers = (quantity) => {
  let answers = ``;
  for (let i = 0; i < quantity; i++) {
    answers += `<li class="stats__result stats__result--unknown"></li>`;
  }
  return answers;
};

export default (answers) => {
  return `
  <ul class="stats">
    ${[...answers].map((item) => markAnswer(item)).join(``)}
    ${(answers.length !== MAX_GAME_VALUES.level) ? createUnknownAnswers(MAX_GAME_VALUES.level - answers.length) : ``}
  </ul>`;
};
