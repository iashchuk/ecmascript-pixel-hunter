import {MAX_GAME_VALUES} from './config';

const changeLives = (state, answer) => {
  if (typeof state.lives !== `number`) {
    throw new Error(`lives should be of type number`);
  }

  if (state.lives < 0) {
    throw new Error(`should not be negative value of lives`);
  }

  if (state.lives > MAX_GAME_VALUES.lives) {
    throw new Error(`should not be more than max lives`);
  }

  if (!answer.isCorrect) {
    state.lives--;
  }

};

export {changeLives};
