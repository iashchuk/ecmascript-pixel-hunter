import {changeLives} from './change-lives';

const createAnswer = (state, result, time) => {
  let answer = {
    isCorrect: result,
    time,
    isFast: time > 20,
    isSlow: time < 10
  };

  changeLives(state, answer);

  state.answers.push(answer);
};


export {createAnswer};
