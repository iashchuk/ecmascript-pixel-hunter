import StatsView from '../views/stats-view';
import BackView from '../views/back-view';
import FooterView from '../views/footer-view';
import Controller from './controller';


export default class StatsController extends Controller {

  results
  back
  content
  footer
  root

  constructor(results) {
    super();
    this.results = results;

    this.back = new BackView();
    this.content = new StatsView(this.results);
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
