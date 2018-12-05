import AbstractView from './abstract-view';
import HeaderView from './header-view';
import footer from './components/footer-component';
import indicators from './components/indicators-component';

export default class SpotGameView extends AbstractView {

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
      <form class="game__content game__content--wide">
        <div class="game__option" data-type="${this.params.type}" data-number="${this.params.index}">
          <img src="${this.params.src}" alt="Option ${this.params.index}" width="705" height="455">
          <label class="game__answer  game__answer--photo">
            <input class="visually-hidden" name="question${this.params.index}" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--wide  game__answer--paint">
            <input class="visually-hidden" name="question${this.params.index}" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      ${indicators(this.state.answers)}
    </section>
    ${footer}
    `;
  }


  bind() {
    const gameContent = this.element.querySelector(`.game__content`);
    const gameOption = this.element.querySelector(`.game__option`).dataset.type;
    const backButton = this.element.querySelector(`.back`);

    gameContent.addEventListener(`click`, () => {
      let result = (gameOption === gameContent.question1.value);
      if (gameContent.question1.value) {
        this.answerHandler(result);
      }
    });

    backButton.addEventListener(`click`, () => this.backButtonHandler());
  }

  backButtonHandler() {}
  answerHandler() {}
}
