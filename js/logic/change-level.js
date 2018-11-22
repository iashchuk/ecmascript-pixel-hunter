import {MAX_LEVEL} from './config';

const changeLevel = (game, level) => {
  if (level < 0) {
    throw new Error(`should not be negative value of level`);
  }

  if (level > MAX_LEVEL) {
    throw new Error(`should not be more than max level`);
  }

  return Object.assign({}, game, {level});
};


export {changeLevel};
