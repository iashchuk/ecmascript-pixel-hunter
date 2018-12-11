import StatsView from '../views/stats-view';
import BackView from '../views/back-view';
import FooterView from '../views/footer-view';
import Controller from './controller';


export default class StatsController extends Controller {
  constructor(state) {
    super();
    this.back = new BackView();
    this.content = new StatsView(state);
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
