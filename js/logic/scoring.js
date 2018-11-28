import {AnswerScore} from './config';

const scoring = (answers, lives) => {
  let resultState = {
    normal: {
      count: 0,
      points: 0
    },
    fast: {
      count: 0,
      points: 0
    },
    slow: {
      count: 0,
      points: 0
    },
    lives: {
      count: 0,
      points: 0
    },
    total: 0
  };

  answers.forEach((answer) => {
    if (answer.isCorrect) {
      resultState.normal.points += AnswerScore.NORMAL;
      resultState.normal.count++;
    }
    if (answer.isCorrect && answer.isFast) {
      resultState.fast.points += AnswerScore.FAST;
      resultState.fast.count++;
    }
    if (answer.isCorrect && answer.isSlow) {
      resultState.slow.points += AnswerScore.SLOW;
      resultState.slow.count++;
    }
  });

  resultState.lives.count = lives;
  resultState.lives.points = lives * AnswerScore.BONUS;

  resultState.total = resultState.normal.points + resultState.fast.points + resultState.slow.points + resultState.lives.points;

  return resultState;
};


export {scoring};
