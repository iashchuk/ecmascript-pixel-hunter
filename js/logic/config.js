const INITIAL_STATE = {
  level: 0,
  games: 10,
  time: 30,
  lives: 3,
  answers: []
};

const AnswerScore = {
  WRONG: 0,
  SLOW: -50,
  NORMAL: 100,
  FAST: 50,
  BONUS: 50
};

const AnswerTime = {
  FAST: 10,
  SLOW: 20
};

const getDefaultState = () => {
  return {
    level: 0,
    games: INITIAL_STATE.games,
    lives: INITIAL_STATE.lives,
    time: INITIAL_STATE.time,
    answers: []
  };
};


export {INITIAL_STATE, AnswerScore, AnswerTime, getDefaultState};
