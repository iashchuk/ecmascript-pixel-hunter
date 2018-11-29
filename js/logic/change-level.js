import {MAX_GAME_VALUES} from './config';
import {changeScreen} from '../services';
import {getGameScreen} from './game';
import stats from '../templates/stats';


const changeLevel = (state) => {
  if (state.level < 0) {
    throw new Error(`should not be negative value of level`);
  }

  if (state.level > MAX_GAME_VALUES.level) {
    throw new Error(`should not be more than max level`);
  }

  if (state.lives === 0) {
    state.gameOver = true;
  }

  if (state.gameOver || (state.level === 10)) {
    changeScreen(stats(state));
  } else {
    changeScreen(getGameScreen(state));
  }
};

export {changeLevel};
