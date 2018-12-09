export default class Controller {
  constructor() {}

  render(element) {
    const mainElement = document.querySelector(`main`);
    mainElement.innerHTML = ``;
    mainElement.appendChild(element);
  }
}
