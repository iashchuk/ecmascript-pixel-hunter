import RulesView from '../views/rules-view';
import BackView from '../views/back-view';
import FooterView from '../views/footer-view';
import Controller from './controller';


export default class RulesController extends Controller {
  constructor() {
    super();
    this.back = new BackView();
    this.content = new RulesView();
    this.footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this.back.element);
    this.root.appendChild(this.content.element);
    this.root.appendChild(this.footer.element);
  }

  showGreeting() {}
  changeView() {}

  init() {
    this.back.backButtonHandler = this.showGreeting;
    this.content.rulesButtonHandler = (player) => this.changeView(player);
    this.render(this.root);
  }
}
