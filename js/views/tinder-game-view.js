import AbstractView from './abstract-view';
import indicators from './components/indicators-component';
import {resizeImages} from '../data/resize.js';


export default class TinderGameView extends AbstractView {

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
        <form class="game__content game__content--wide">
          <div class="game__option" data-type="${this.params.type}" data-number="${this.params.index}">
            <img src="${this.params.src}" alt="Option ${this.params.index}" width="705" height="455">
            <label class="game__answer  game__answer--photo">
              <input class="visually-hidden" name="question${this.params.index}" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
              <input class="visually-hidden" name="question${this.params.index}" type="radio" value="painting">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
        ${indicators(this.state.answers)}
      </section>
    `;
  }


  bind() {
    const gameContent = this.element.querySelector(`.game__content`);
    const gameOption = this.element.querySelector(`.game__option`).dataset.type;

    resizeImages(gameContent);
    gameContent.addEventListener(`click`, () => {
      const answer = (gameOption === gameContent.question1.value);
      if (gameContent.question1.value) {
        this.answerHandler(answer);
      }
    });
  }

  answerHandler() {}
}
