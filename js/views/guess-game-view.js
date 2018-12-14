import AbstractView from './abstract-view';
import indicators from './components/indicators-component';
import {resizeImages} from '../data/resize';
import {ImagesType} from '../logic/config';
import {DEBUG} from '../logic/config';

export default class GuessGameView extends AbstractView {
  constructor(state, game) {
    super();
    this.state = state;
    this.game = game;
  }

  get template() {
    return `
      <section class="game">
            <p class="game__task">${this.game.description}</p>
            <form class="game__content game__content--triple">
            ${this.game.params.map((param) => `
            <div class="game__option">
              ${DEBUG ? `<span class="debug">${param.type}</span>` : ``}
              <img src="${param.src}" data-type="${param.type}" tabindex="0" alt="Option 1" width="304" height="455">
            </div>`).join(``)}
            </form>
            ${indicators(this.state.answers)}
      </section>
    `;
  }

  bind() {
    const ENTER_KEYCODE = 27;
    const gameContent = this.element.querySelector(`.game__content`);

    const getAnswer = () => {
      return (this.game.description.includes(ImagesType.photo)) ? `photo` : `painting`;
    };

    const answerElementHandler = (evt) => {
      let result = (evt.target.dataset.type === getAnswer());
      this.answerHandler(result);
    };

    const answerKeyDownHandler = (evt) => {
      if (evt.keyCode === ENTER_KEYCODE) {
        answerElementHandler(evt);
      }
    };

    resizeImages(gameContent);

    gameContent.addEventListener(`click`, answerElementHandler);
    gameContent.addEventListener(`keydown`, answerKeyDownHandler);
  }

  answerHandler() {}
}
