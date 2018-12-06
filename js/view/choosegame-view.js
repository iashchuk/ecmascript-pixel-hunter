import AbstractView from './abstract-view';
import HeaderView from './header-view';
import footer from './components/footer-component';
import indicators from './components/indicators-component';


export default class ChooseGameView extends AbstractView {
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
          <form class="game__content">
            ${this.game.params.map((param) => `
              <div class="game__option" data-type="${param.type}" data-item="${param.index}">
                <img src="${param.src}" alt="Option ${param.index}" width="468" height="458">
                <label class="game__answer  game__answer--photo">
                  <input class="visually-hidden" name="question${param.index}" type="radio" value="photo">
                  <span>Фото</span>
                </label>
                <label class="game__answer  game__answer--wide  game__answer--paint">
                  <input class="visually-hidden" name="question${param.index}" type="radio" value="paint">
                  <span>Рисунок</span>
                </label>
              </div>
              `).join(``)}
          </form>
        ${indicators(this.state.answers)}
    </section>
    ${footer}
    `;
  }


  bind() {
    const QUESTIONS = 2;
    const backButton = this.element.querySelector(`.back`);
    const gameContent = this.element.querySelector(`.game__content`);
    const gameOptions = this.element.querySelectorAll(`.game__option`);

    gameContent.addEventListener(`change`, () => {

      const answers = [];

      gameOptions.forEach((option) => {
        const inputs = option.querySelectorAll(`input`);

        inputs.forEach((input) => {
          if (input.checked) {
            answers.push(input.value === option.dataset.type);
          }
        });
      });

      const answerOne = answers[0];
      const answerTwo = answers[1];

      if (answers.length === QUESTIONS) {
        this.answerHandler(answerOne && answerTwo);
      }
    });

    backButton.addEventListener(`click`, () => this.backButtonHandler());
  }

  backButtonHandler() {}
  answerHandler() {}
}
