import {AnswerScore, AnswerTime} from './config';

const createAnswer = (answer, time) => {
  return {
    answer,
    time
  };
};


const scoring = (answers, lives) => {
  if (answers.length < 10) {
    return -1;
  }

  if (typeof lives !== `number`) {
    throw new Error(`lives should be of type number`);
  }

  if (lives < 0) {
    throw new Error(`should not be negative value of lives`);
  }

  let score = 0;

  answers.forEach((result) => {
    if (result.time < 0) {
      throw new Error(`should not be negative value of time`);
    }

    if (typeof result.answer !== `boolean` && result.answer !== 0 && result.answer !== 1) {
      throw new Error(`answer should be of type boolean or 0/1`);
    }

    if (result.answer && result.time > AnswerTime.FAST) {
      score += AnswerScore.FAST;
    } else if (result.answer && result.time < AnswerTime.SLOW) {
      score += AnswerScore.SLOW;
    } else if (result.answer) {
      score += AnswerScore.NORMAL;
    }
  });
  score += lives * AnswerScore.BONUS;
  return score;
};

export {createAnswer, scoring};
