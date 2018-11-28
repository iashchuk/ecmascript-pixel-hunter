import {getElementFromTemplate, createScreen} from '../services';
import {getBackButton} from './header';
import footer from './footer';
import indicators from '../logic/indicators';
import {scoring} from '../logic/scoring';


export default (state) => {
  const {normal, fast, slow, lives, total} = scoring(state.answers, state.lives);

  const statsTemplate = `
  <div class="result">
    <h1>${!state.gameOver ? `Победа` : `Поражение`}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2" class="result__indicators">
          ${indicators(state.answers).innerHTML}
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${normal.points}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${fast.count}
        &nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${fast.points}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${lives.count}
        &nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${lives.points}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${slow.count}
        &nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${slow.points}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${total}</td>
      </tr>
    </table>
  </div>
`;

  const statsElement = getElementFromTemplate(statsTemplate);
  return createScreen(getBackButton(), statsElement, footer());
};
