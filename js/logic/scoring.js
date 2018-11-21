import {AnswerScore} from './config';

const scoring = (answers, lives) => {
  if (answers.length < 10) {
    return -1;
  }
  if (lives < 0) {
    return 0;
  }
  return (answers.reduce((total, current) => total + current) + lives * AnswerScore.BONUS);
};

export {scoring};
