import {INITIAL_STATE} from '../logic/config';
import {changeScreen} from '../data/services';
import {getGameScreen} from '../screens/game-screen';
import stats from '../screens/stats-screen';
import {getRandomInRange} from '../data/services';
import {getGameState} from '../screens/game-screen';

const changeLevel = (state) => {
  state.level += 1;
  state.time = getRandomInRange(0, 30);

  if (state.level < 0) {
    throw new Error(`should not be negative value of level`);
  }

  if (state.level > INITIAL_STATE.games) {
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
