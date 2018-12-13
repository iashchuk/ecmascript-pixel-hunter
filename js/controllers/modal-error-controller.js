import ModalErrorView from '../views/modal-error-view';
import Controller from './controller';

export default class ModalErrorController extends Controller {
  constructor(error) {
    super();
    this.error = error;
    this.content = new ModalErrorView(error);
    this.root = document.createElement(`div`);
    this.root.appendChild(this.content.element);
  }

  render(element) {
    const mainElement = document.querySelector(`main`);
    mainElement.appendChild(element);
  }

  init() {
    this.render(this.root);
  }
}
