const INITIAL_GAME = {
  level: 0,
  lives: 3,
  time: 30
};

const MAX_GAME_VALUES = {
  level: 10,
  lives: 3,
  time: 30
};

const AnswerScore = {
  WRONG: 0,
  SLOW: 50,
  NORMAL: 100,
  FAST: 150,
  BONUS: 50
};

const AnswerTime = {
  SLOW: 10,
  FAST: 20,
};

const creatInitialState = () => {
  return {
    currentGameIndex: INITIAL_GAME.level,
    livesCount: INITIAL_GAME.lives,
    time: INITIAL_GAME.time
  };
};

creatInitialState();


export {INITIAL_GAME, MAX_GAME_VALUES, AnswerScore, AnswerTime};
