import AbstractView from './abstract-view';
import back from './components/back-component';
import timer from './components/timer-component';
import lives from './components/lives-component';


export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    return `
      <header class="header">
        ${back}
        ${timer(this.state.time)}
        ${lives(this.state.lives)}
      </header>
    `;
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);
    backButton.addEventListener(`click`, () => this.backButtonHandler());

  }

  backButtonHandler() {}

}
