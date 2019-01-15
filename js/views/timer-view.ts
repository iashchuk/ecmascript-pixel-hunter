import AbstractView from './abstract-view';

const TimeType = {
  DANGER: 5,
  CRITICAL: 3
};

export default class TimerView extends AbstractView {
  constructor(state) {
    super();
    this.time = state.time;
  }

  time: number

  get template() {
    return `<div class="game__timer">${this.time}</div>`;
  }

  countdown() {
    if (this.time < TimeType.DANGER) {
      this.element.classList.add(`blink`);
    }
    if (this.time < TimeType.CRITICAL) {
      this.element.classList.add(`blink--fast`);
    }
  }
}
