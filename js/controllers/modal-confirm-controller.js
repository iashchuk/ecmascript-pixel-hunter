import ModalConfirmView from '../view/modal-confirm-view';
import Controller from './controller';

export default class ModalConfirmController extends Controller {
  constructor() {
    super();
    this.content = new ModalConfirmView();

    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
  }

  render(element) {
    const mainElement = document.querySelector(`main`);
    mainElement.appendChild(element);
  }

  showGreeting() {}

  init() {
    this.content.confirmHandler = this.showGreeting;
    this.render(this.root);
  }
}
