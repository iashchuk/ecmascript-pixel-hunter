import {MAX_GAME_VALUES} from './config';


const countTime = (game, time) => {

  if (time < 0) {
    throw new Error(`should not be negative value of time`);
  }

  if (time > MAX_GAME_VALUES.time) {
    throw new Error(`should not be more than max time`);
  }

  return Object.assign({}, game, {time});
};

export {countTime};
