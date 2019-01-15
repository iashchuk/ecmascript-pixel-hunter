import {MIN_QUNATITY_LIVES, AnswerScore} from './config';

export default (answers, lives) => {
  return {
    fast: {
      get count() {
        return answers.filter((answer) => answer.correct && answer.fast).length;
      },
      get points() {
        return this.count * AnswerScore.FAST;
      }
    },
    slow: {
      get count() {
        return answers.filter((answer) => answer.correct && answer.slow).length;
      },
      get points() {
        return this.count * AnswerScore.SLOW;
      }
    },
    normal: {
      get count() {
        return answers.filter((answer) => answer.correct).length;
      },
      get points() {
        return this.count * AnswerScore.NORMAL;
      }
    },
    lives: {
      get count() {
        return lives >= MIN_QUNATITY_LIVES ? lives : MIN_QUNATITY_LIVES;
      },
      get points() {
        return this.count * AnswerScore.BONUS;
      }
    },
    get isWin() {
      return lives >= MIN_QUNATITY_LIVES;
    },
    get total() {
      return this.normal.points + this.fast.points + this.slow.points + this.lives.points;
    }
  };
};
