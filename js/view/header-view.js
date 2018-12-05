import AbstractView from './abstract-view';
import BackView from './back-view';
import timer from './components/timer-component';
import lives from './components/lives-component';


export default class HeaderView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
  }

  get template() {
    const back = new BackView();

    return `
    <header class="header">
      ${back.template}
      ${timer(this.state.time)}
      ${lives(this.state.lives)}
    </header>`;
  }

  bind() {}

}
