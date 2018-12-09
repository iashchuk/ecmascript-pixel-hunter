import StatsView from '../view/stats-view';
import BackView from '../view/back-view';
import FooterView from '../view/footer-view';
import scoring from '../logic/scoring';
import Controller from './controller';


export default class StatsScreen extends Controller {
  constructor(state) {
    super();
    this.back = new BackView();
    this.content = new StatsView(state, scoring(state.answers, state.lives));
    this.footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this.back.element);
    this.root.appendChild(this.content.element);
    this.root.appendChild(this.footer.element);
  }

  showGreeting() {}

  init() {
    this.back.backButtonHandler = this.showGreeting;
    this.render(this.root);
  }
}
