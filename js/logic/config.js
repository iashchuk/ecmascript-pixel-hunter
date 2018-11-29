const MAX_GAME_VALUES = {
  level: 10,
  lives: 3,
  time: 30
};

const DEFAULT_STATE = {
  level: 0,
  time: 30,
  lives: 3,
  points: 0,
  answers: [],
  gameOver: false
};

const AnswerScore = {
  WRONG: 0,
  SLOW: -50,
  NORMAL: 100,
  FAST: 50,
  BONUS: 50
};

const AnswerTime = {
  SLOW: 10,
  FAST: 20,
};

const getDefaultState = () => {
  return Object.assign({}, DEFAULT_STATE);
};


export {MAX_GAME_VALUES, AnswerScore, AnswerTime, getDefaultState};
