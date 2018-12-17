import GreetingView from '../views/greeting-view';
import FooterView from '../views/footer-view';
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

  animate() {
    this.content.animate();
  }

  changeView() {}

  init() {
    this.content.continueButtonHandler = this.changeView;
    this.render(this.root);
  }
}
