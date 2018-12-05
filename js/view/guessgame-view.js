import AbstractView from './abstract-view';
import HeaderView from './header-view';
import footer from './components/footer-component';
import indicators from './components/indicators-component';


export default class GuessGameView extends AbstractView {

  constructor(state, game) {
    super();
    this.state = state;
    this.game = game;
    ([this.params] = this.game.params);
  }

  get template() {
    const header = new HeaderView(this.state);

    return `
    ${header.template}
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
    ${footer}
    `;
  }

  bind() {
    const gameContent = this.element.querySelector(`.game__content`);
    const backButton = this.element.querySelector(`.back`);

    gameContent.addEventListener(`click`, (evt) => this.answerHandler(evt));
    backButton.addEventListener(`click`, () => this.backButtonHandler());
  }

  backButtonHandler() {}
  answerHandler() {}
}
