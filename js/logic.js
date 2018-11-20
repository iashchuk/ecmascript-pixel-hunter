export const AnswerScore = {
  WRONG: 0,
  SLOW: 50,
  NORMAL: 100,
  FAST: 150,
  BONUS: 50
};

export const scoring = (answers, lives) => {
  if (answers.length < 10) {
    return -1;
  }

  if (lives < 0) {
    return 0;
  }

  return (answers.reduce((total, current) => total + current) + lives * AnswerScore.BONUS);
};
