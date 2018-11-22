import {MAX_GAME_VALUES} from './config';

const changeLevel = (game, level) => {
  if (level < 0) {
    throw new Error(`should not be negative value of level`);
  }

  if (level > MAX_GAME_VALUES.level) {
    throw new Error(`should not be more than max level`);
  }

  return Object.assign({}, game, {level});
};


export {changeLevel};
