import {MAX_GAME_VALUES} from './config';

const changeLives = (game, answer) => {
  const result = (answer) ? 0 : 1;
  const lives = game.lives - result;

  if (lives < 0) {
    throw new Error(`should not be negative value of lives`);
  }

  if (lives > MAX_GAME_VALUES.lives) {
    throw new Error(`should not be more than max lives`);
  }

  return Object.assign({}, game, {lives});
};

export {changeLives};
