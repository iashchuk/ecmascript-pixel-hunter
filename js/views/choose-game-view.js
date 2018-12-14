import AbstractView from './abstract-view';
import indicators from './components/indicators-component';
import {resizeImages} from '../data/resize';
import {DEBUG} from '../logic/config';


export default class ChooseGameView extends AbstractView {
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
            <form class="game__content">
              ${this.game.params.map((param) => `
                <div class="game__option" data-type="${param.type}" data-item="${param.index}">
                  ${DEBUG ? `<span class="debug">${param.type}</span>` : ``};
                  <img src="${param.src}" alt="Option ${param.index}" width="468" height="458">
                  <label class="game__answer  game__answer--photo">
                    <input class="visually-hidden" name="question${param.index}" type="radio" value="photo">
                    <span>Фото</span>
                  </label>
                  <label class="game__answer  game__answer--wide  game__answer--paint">
                    <input class="visually-hidden" name="question${param.index}" type="radio" value="painting">
                    <span>Рисунок</span>
                  </label>
                </div>
                `).join(``)}
            </form>
          ${indicators(this.state.answers)}
      </section>
    `;
  }


  bind() {
    const QUESTIONS = 2;
    const gameContent = this.element.querySelector(`.game__content`);
    const gameOptions = this.element.querySelectorAll(`.game__option`);

    resizeImages(gameContent);

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
  }

  answerHandler() {}
}
