import AbstractView from './abstract-view';
import BackView from './back-view';
import footer from './components/footer-component';


export default class RulesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    const back = new BackView();

    return `
      <header claass="header">${back.template}</header>
      <section class="rules">
        <h2 class="rules__title">Правила</h2>
        <ul class="rules__description">
          <li>Угадай 10 раз для каждого изображения фото
            <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
            <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
          <li>Фотографиями или рисунками могут быть оба изображения.</li>
          <li>На каждую попытку отводится 30 секунд.</li>
          <li>Ошибиться можно не более 3 раз.</li>
        </ul>
        <p class="rules__ready">Готовы?</p>
        <form class="rules__form">
          <input class="rules__input" type="text" placeholder="Ваше Имя">
          <button class="rules__button  continue" type="submit" disabled>Go!</button>
        </form>
      </section>
      ${footer}
    `;
  }

  bind() {
    const rulesButton = this.element.querySelector(`.rules__button`);
    const rulesInput = this.element.querySelector(`.rules__input`);
    const backButton = this.element.querySelector(`.back`);

    const rulesInputHandler = () => (rulesButton.disabled = !rulesInput.value);

    rulesInput.addEventListener(`input`, rulesInputHandler);
    rulesButton.addEventListener(`click`, this.rulesButtonHandler);
    backButton.addEventListener(`click`, this.backButtonHandler);
  }

  rulesButtonHandler() {}

}
