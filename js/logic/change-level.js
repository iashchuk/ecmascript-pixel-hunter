import {MAX_GAME_VALUES} from './config';
import {changeScreen} from '../services';
import {getGameScreen} from '../screens/game-screen';
import stats from '../screens/stats-screen';
import {getRandomInRange} from '../services';
import {getGameState} from '../screens/game-screen';

const changeLevel = (state) => {
  state.level += 1;
  state.time = getRandomInRange(0, 30);

  if (state.level < 0) {
    throw new Error(`should not be negative value of level`);
  }

  if (state.level > MAX_GAME_VALUES.level) {
    throw new Error(`should not be more than max level`);
  }

  if (!state.lives) {
    state.gameOver = true;
  }

  if (state.gameOver || (state.level === 10)) {
    changeScreen(stats(getGameState()));
  } else {
    changeScreen(getGameScreen(state));
  }
};

export {changeLevel};
