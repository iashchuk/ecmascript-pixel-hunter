import AbstractView from './abstract-view';
import indicators from './components/indicators-component';


export default class GuessGameView extends AbstractView {
  constructor(state, game) {
    super();
    this.state = state;
    this.game = game;
    ([this.params] = this.game.params);
  }

  get template() {
    return `
      <section class="game">
            <p class="game__task">${this.game.description}</p>
            <form class="game__content game__content--triple">
            ${this.game.params.map((param) => `
            <div class="game__option">
              <img src="${param.src}" data-type="${param.type}" alt="Option 1" width="304" height="455">
            </div>`).join(``)}
            </form>
            ${indicators(this.state.answers)}
      </section>
    `;
  }

  bind() {
    const gameContent = this.element.querySelector(`.game__content`);
    gameContent.addEventListener(`click`, (evt) => this.answerHandler(evt));
  }

  answerHandler() {}
}
