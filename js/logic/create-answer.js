import {INITIAL_STATE, AnswerTime} from './config';

export default (result, time) => {
  return {
    correct: result,
    time: INITIAL_STATE.time - time,
    get fast() {
      return this.time < AnswerTime.FAST;
    },
    get slow() {
      return this.time > AnswerTime.SLOW;
    }
  };
};
