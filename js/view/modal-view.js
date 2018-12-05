import AbstractView from './abstract-view';


export default class ModalConfirmView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `
      <section class="modal">
        <form class="modal__inner">
          <button class="modal__close" type="button">
            <span class="visually-hidden">Закрыть</span>
          </button>
          <h2 class="modal__title">Подтверждение</h2>
          <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
          <div class="modal__button-wrapper">
            <button class="modal__btn modal__btn--confirm">Ок</button>
            <button class="modal__btn modal__btn--cancel">Отмена</button>
          </div>
        </form>
      </section>
    `;
  }

  bind() {
    const buttonConfirm = this.element.querySelector(`.modal__btn--confirm`);
    const buttonCancel = this.element.querySelector(`.modal__btn--cancel`);
    const buttonClose = this.element.querySelector(`.modal__close`);

    buttonCancel.addEventListener(`click`, this.cancelHandler);
    buttonClose.addEventListener(`click`, this.cancelHandler);
    buttonConfirm.addEventListener(`click`, this.confirmHandler());
  }

  confirmHandler() {}
  cancelHandler() {}
}
