import AbstractView from './abstract-view';
import back from './components/back-component';
import footer from './components/footer-component';
import indicators from './components/indicators-component';


export default class StatsView extends AbstractView {
  constructor(state, scores) {
    super();
    this.state = state;
    ({normal: this.normal, fast: this.fast, slow: this.slow, lives: this.lives, total: this.total} = scores);
  }

  get template() {
    return `
    <header class="header">${back}</header>
    <div class="result">
      <h1>${!this.state.gameOver ? `Победа` : `Поражение`}</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2" class="result__indicators">
            ${indicators(this.state.answers)}
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${this.normal.points}
          </td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${this.fast.count}
          &nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${this.fast.points}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${this.lives.count}
          &nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${this.lives.points}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${this.slow.count}
          &nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${this.slow.points}</td>
        </tr>
        <tr>
          <td colspan="5" class="result__total  result__total--final">${this.total}
          </td>
        </tr>
      </table>
    </div>
    ${footer}
    `;
  }

  backButtonHadler() {}

  bind() {
    const backButton = this.element.querySelector(`.back`);
    backButton.addEventListener(`click`, () => {
      this.backButtonHadler();
    });
  }
}
