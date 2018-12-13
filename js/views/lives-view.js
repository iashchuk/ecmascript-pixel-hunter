import AbstractView from './abstract-view';

export default class Lives extends AbstractView {
  constructor(lives) {
    super();
    this.lives = lives;
  }
  get template() {
    const drawHeart = (full) => {
      return `<img src="img/heart__${full ? `full` : `empty`}.svg" class="game__heart" alt="Life" width="31" height="27">`;
    };
    return `
      <div class="game__lives">
          ${drawHeart(this.lives >= 1)}
          ${drawHeart(this.lives >= 2)}
          ${drawHeart(this.lives >= 3)}
      </div>`;
  }
}
