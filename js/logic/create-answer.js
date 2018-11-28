import {changeLives} from './change-lives';
import {AnswerTime} from './config';

const createAnswer = (state, result, time) => {
  let answer = {
    isCorrect: result,
    time,
    isFast: time > AnswerTime.FAST,
    isSlow: time < AnswerTime.SLOW
  };

  changeLives(state, answer);

  state.answers.push(answer);
};


export {createAnswer};
