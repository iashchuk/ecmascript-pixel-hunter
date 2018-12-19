const DEBUG = true;

const INITIAL_STATE = {
  level: 0,
  games: 10,
  time: 30,
  lives: 3,
  answers: []
};

const MIN_QUNATITY_LIVES = 0;

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

const AnswersType = {
  painting: `painting`,
  photo: `photo`
};

const ImagesType = {
  painting: `рисунок`,
  photo: `фото`
};

const StatsMessages = {
  win: `Победа`,
  lose: `Поражение`,
  fail: `FAIL`
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


export {DEBUG, INITIAL_STATE, MIN_QUNATITY_LIVES, AnswerScore, AnswerTime, AnswersType, ImagesType, getDefaultState, StatsMessages};
