import {INITIAL_STATE} from '../logic/config';

const changeLives = (state, answer) => {
  if (typeof state.lives !== `number`) {
    throw new Error(`lives should be of type number`);
  }

  if (state.lives < 0) {
    throw new Error(`should not be negative value of lives`);
  }

  if (state.lives > INITIAL_STATE.lives) {
    throw new Error(`should not be more than max lives`);
  }

  if (!answer.isCorrect) {
    state.lives--;
  }

};

export {changeLives};
