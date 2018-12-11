import IntroView from '../views/intro-view';
import FooterView from '../views/footer-view';
import Controller from './controller';

export default class IntroController extends Controller {
  constructor() {
    super();
    this.content = new IntroView();
    this.footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
    this.root.appendChild(this.footer.element);
  }

  changeView() {}

  init() {
    this.content.asteriskButtonHandler = this.changeView;
    this.render(this.root);
  }
}
