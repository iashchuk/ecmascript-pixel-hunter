import {getDefaultState, INITIAL_STATE} from '../logic/config';
import {getGameList} from '../data/data';


export default class GameModel {
  constructor() {
    this.restart();
  }

  get state() {
    return this._state;
  }

  restart() {
    this._state = getDefaultState();
    this._games = getGameList();
  }

  changeLives(answer) {
    if (!answer.correct) {
      this._state.lives--;
    }
  }

  isGameOver() {
    return this._state.lives <= 0 || this._state.level === INITIAL_STATE.games;
  }

  nextLevel() {
    return this._state.level++;
  }

  nextGame() {
    return this._games[this._state.level];
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
