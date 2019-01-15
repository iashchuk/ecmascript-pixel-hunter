import AbstractView from './abstract-view';
import indicators from './components/indicators-component';
import getPreloadImages from '../data/preolad-images';
import {DEBUG} from '../logic/config';


export default class TinderGameView extends AbstractView {

  constructor(state, game) {
    super();
    this.state = state;
    this.game = game;
    ([this.params] = this.game.params);
  }

  state
  game
  params


  get images() {
    return getPreloadImages(this.game);
  }

  get template() {
    return `
      <section class="game">
        <p class="game__task">${this.game.description}</p>
        <form class="game__content game__content--wide">
          <div class="game__option" data-type="${this.params.type}" data-number="${this.params.index}">
            ${DEBUG ? `<span class="debug">${this.params.type}</span>` : ``};
            <img src="${this.images[0].src}" alt="Option ${this.images[0].index}" width="${this.images[0].width}" height="${this.images[0].height}">
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
    const gameContent: HTMLFormElement = this.element.querySelector(`.game__content`);
    const gameOption: HTMLDataElement = this.element.querySelector(`.game__option`);
    const gameType = gameOption.dataset.type;

    gameContent.addEventListener(`click`, () => {
      const answer = (gameType === gameContent.question1.value);
      if (gameContent.question1.value) {
        this.answerHandler(answer);
      }
    });
  }


  answerHandler(boolean) {}
}
