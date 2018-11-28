import {getElementFromTemplate} from '../services';


const getGameTemplate = (game) => {
  return `
  <section class="game">
        <p class="game__task">${game.description}</p>
        <form class="game__content game__content--triple">
        ${game.params.map((param) => `
        <div class="game__option">
          <img src="${param.src}" data-type="${param.type}" alt="Option 1" width="304" height="455">
        </div>`)}
        </form>
  </section>`;
};

const getGuessTemplate = (game) => {
  return getElementFromTemplate(getGameTemplate(game));
};

export default getGuessTemplate;
