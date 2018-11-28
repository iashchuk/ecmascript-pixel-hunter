import {getElementFromTemplate} from '../services';


const getGameTemplate = (game) => {
  const [params] = game.params;
  return `
  <section class="game">
        <p class="game__task">${params.description}</p>
        <form class="game__content game__content--wide">

          <div class="game__option" data-type="${params.type}" data-number="${params.index}">
            <img src="${params.src}" alt="Option ${params.index}" width="705" height="455">
            <label class="game__answer  game__answer--photo">
              <input class="visually-hidden" name="question${params.index}" type="radio" value="photo">
              <span>Фото</span>
            </label>
            <label class="game__answer  game__answer--wide  game__answer--paint">
              <input class="visually-hidden" name="question${params.index}" type="radio" value="paint">
              <span>Рисунок</span>
            </label>
          </div>
        </form>
  </section>`;
};

const getSpotTemplate = (game) => {
  return getElementFromTemplate(getGameTemplate(game));
};


export default getSpotTemplate;
