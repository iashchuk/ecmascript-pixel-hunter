import {getElementFromTemplate, changeScreen} from '../services';
import greeting from './greeting';


const backButtonTemplate = `
  <button class="back">
    <span class="visually-hidden">Вернуться к началу</span>
    <svg class="icon" width="45" height="45" viewBox="0 0 45 45" fill="#000000">
      <use xlink:href="img/sprite.svg#arrow-left"></use>
    </svg>
    <svg class="icon" width="101" height="44" viewBox="0 0 101 44" fill="#000000">
      <use xlink:href="img/sprite.svg#logo-small"></use>
    </svg>
    </button>
  </section>
`;

const timerTemplate = (time) => {
  return `<div class="game__timer">${time}</div>`;
};

const livesTemplate = (lives) => {
  return `<div class="game__lives">
      <img src="img/heart__${lives >= 1 ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="31" height="27">
      <img src="img/heart__${lives >= 2 ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="31" height="27">
      <img src="img/heart__${lives >= 3 ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="31" height="27">
  </div>`;
};


const getBackButton = () => {
  const backButton = getElementFromTemplate(backButtonTemplate);
  backButton.addEventListener(`click`, () => changeScreen(greeting()));
  return backButton;
};

const getTimerBlock = (time) => {
  return getElementFromTemplate(timerTemplate(time));
};

const getLivesBlock = (lives) => {
  return getElementFromTemplate(livesTemplate(lives));
};

const createHeader = (...blocks) => {
  const header = document.createElement(`header`);
  header.classList.add(`header`);
  blocks.forEach((block) => {
    header.appendChild(block);
  });
  return header;
};

const getHeader = (lives, time) => {
  return createHeader(getBackButton(), getLivesBlock(lives), getTimerBlock(time));
};

export {getBackButton, getHeader};

