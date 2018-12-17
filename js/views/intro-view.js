import AbstractView from './abstract-view';


export default class IntroView extends AbstractView {

  constructor() {
    super();
  }

  get template() {
    return `
      <section class="intro">
        <button class="intro__asterisk intro__asterisk--animate asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
        <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
      </section>
    `;
  }

  animate() {
    const intro = this.element.querySelector(`.intro`);
    intro.classList.add(`intro--animate`);
  }

  bind() {
    const asteriskButton = this.element.querySelector(`.intro__asterisk`);
    asteriskButton.addEventListener(`click`, () => this.asteriskButtonHandler());
  }

  asteriskButtonHandler() {}
}
