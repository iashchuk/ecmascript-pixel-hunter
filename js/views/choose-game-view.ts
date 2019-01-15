import AbstractView from './abstract-view';
import indicators from './components/indicators-component';
import getPreloadImages from '../data/preolad-images';
import {DEBUG} from '../logic/config';


const QUESTIONS = 2;

export default class ChooseGameView extends AbstractView {

  state
  game

  constructor(state, game) {
    super();
    this.state = state;
    this.game = game;
  }


  get images() {
    return getPreloadImages(this.game);
  }

  get template() {
    return `
      <section class="game">
            <p class="game__task">${this.game.description}</p>
            <form class="game__content">
              ${this.game.params.map((param, index) => `
                <div class="game__option" data-type="${param.type}" data-item="${param.index}">
                  ${DEBUG ? `<span class="debug">${param.type}</span>` : ``};
                  <img src="${this.images[index].src}" alt="Option ${index}" width="${this.images[index].width}" height="${this.images[index].height}">
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
    const gameContent: HTMLFormElement = this.element.querySelector(`.game__content`);
    const gameOptions: NodeListOf<HTMLElement> = this.element.querySelectorAll(`.game__option`);

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

      const [answerOne, answerTwo] = answers;

      if (answers.length === QUESTIONS) {
        this.answerHandler(answerOne && answerTwo);
      }
    });
  }

  answerHandler(boolean) {}
}
