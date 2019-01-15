import AbstractView from './abstract-view';
import indicators from './components/indicators-component';
import {StatsMessages} from '../logic/config';

export default class StatsView extends AbstractView {
  constructor(results) {
    super();
    this.results = results.reverse();
  }

  results

  get template() {
    const getResultTable = (result, index) => {
      return `
        <h1>${result.isWin ? StatsMessages.win : StatsMessages.lose}</h1>
        <table class="result__table">
          <tr>
            <td class="result__number">${index + 1}.</td>
            <td colspan="2" class="result__indicators">
              ${indicators(result.answers)}
            </td>
            <td class="result__points">×&nbsp;100</td>
            <td class="result__total">${result.normal.points}
            </td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">${result.fast.count}
            &nbsp;<span class="stats__result stats__result--fast"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${result.fast.points}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${result.lives.count}
            &nbsp;<span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${result.lives.points}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${result.slow.count}
            &nbsp;<span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${result.slow.points}</td>
          </tr>
          <tr>
            <td colspan="5" class="result__total  result__total--final">${result.isWin ? result.total : StatsMessages.fail}
            </td>
          </tr>
        </table>
    `;
    };

    return `
      <div class="result">
        ${this.results.map((result, index) => (getResultTable(result, index))).join(``)}
      </div>
    `;
  }
}
