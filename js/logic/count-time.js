import {MAX_TIME} from './config';


const countTime = (game, time) => {

  if (time < 0) {
    throw new Error(`should not be negative value of time`);
  }

  if (time > MAX_TIME) {
    throw new Error(`should not be more than max time`);
  }

  return Object.assign({}, game, {time});
};

export {countTime};
