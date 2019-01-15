import IntroView from '../views/intro-view';
import GreetingView from '../views/greeting-view';
import FooterView from '../views/footer-view';
import Controller from './controller';

export default class IntroController extends Controller {
  constructor() {
    super();
    this.intro = new IntroView();
    this.greeting = new GreetingView();
    this.footer = new FooterView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this.intro.element);
    this.root.appendChild(this.greeting.element);
    this.root.appendChild(this.footer.element);
  }

  intro
  greeting
  footer
  root

  animate() {
    this.intro.animate();
    this.greeting.animate();
  }

  changeView() {}

  init() {
    this.render(this.root);
    this.greeting.continueButtonHandler = this.changeView;
  }
}
