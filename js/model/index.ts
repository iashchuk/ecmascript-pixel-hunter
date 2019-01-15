import {INITIAL_STATE, MIN_QUNATITY_LIVES, getDefaultState} from '../logic/config';

export default class GameModel {
  constructor(games, player) {
    this.games = games;
    this.player = player;
    this.restart();
  }

  get state() {
    return this._state;
  }

  restart() {
    this._state = getDefaultState();
  }

  changeLives(answer) {
    if (!answer.correct) {
      this._state.lives--;
    }
  }

  isGameOver() {
    return this._state.lives < MIN_QUNATITY_LIVES || this._state.level === INITIAL_STATE.games;
  }

  nextLevel() {
    return this._state.level++;
  }

  nextGame() {
    return this.games[this._state.level];
  }

  tick() {
    this._state = Object.assign({}, this._state, {
      time: this._state.time - 1,
    });
  }

  updateTimer() {
    this._state.time = INITIAL_STATE.time;
  }
}
