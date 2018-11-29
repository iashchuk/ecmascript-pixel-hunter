import {getElementFromTemplate} from '../services';


const getGameTemplate = (game) => {
  return `
  <section class="game">
        <p class="game__task">${game.description}</p>
        <form class="game__content">
          ${game.params.map((param) => `
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
  </section>`;
};

const getChooseTemplate = (game) => {
  return getElementFromTemplate(getGameTemplate(game));
};

export default getChooseTemplate;
