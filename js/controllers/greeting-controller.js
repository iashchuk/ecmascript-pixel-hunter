import GreetingView from '../view/greeting-view';
import FooterView from '../view/footer-view';
import Controller from './controller';


export default class GreetingController extends Controller {
  constructor() {
    super();
    this.content = new GreetingView();
    this.footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
    this.root.appendChild(this.footer.element);
  }

  changeView() {}

  init() {
    this.content.continueButtonHandler = this.changeView;
    this.render(this.root);
  }
}
