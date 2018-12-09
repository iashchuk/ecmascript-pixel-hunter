import {INITIAL_STATE} from '../../logic/config';
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
    ${(answers.length !== INITIAL_STATE.games) ? createUnknownAnswers(INITIAL_STATE.games - answers.length) : ``}
  </ul>`;
};
