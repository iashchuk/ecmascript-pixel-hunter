'use strict';

(() => {

  const RIGHT_ARROW = 39;
  const LEFT_ARROW = 37;
  const FIRST_SCREEN = 0;
  const ARROWS_BUTTONS =
  `<style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
      z-index: 2;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
  `;

  const slides = Array.from(document.querySelectorAll(`template`)).map((item) => item.content);
  let currentSlide = FIRST_SCREEN;

  const selectSlide = (element) => {
    const mainElement = document.querySelector(`#main`);
    mainElement.innerHTML = ``;
    mainElement.appendChild(element.cloneNode(true));
  };

  const showSlide = (index) => {
    index = index < 0 ? slides.length - 1 : index;
    index = index >= slides.length ? 0 : index;
    currentSlide = index;
    selectSlide(slides[currentSlide]);
  };

  const createSliderButtons = () => {
    const buttonsWrap = document.createElement(`div`);
    buttonsWrap.classList.add(`arrows__wrap`);
    buttonsWrap.innerHTML = ARROWS_BUTTONS;
    document.body.appendChild(buttonsWrap);
  };

  const onPreviousSlideClick = (evt) => {
    evt.preventDefault();
    showSlide(currentSlide - 1);
  };

  const onNextSlideClick = (evt) => {
    evt.preventDefault();
    showSlide(currentSlide + 1);
  };

  const onArrowKeyDown = (evt) => {
    switch (evt.keyCode) {
      case RIGHT_ARROW:
        showSlide(currentSlide + 1);
        break;
      case LEFT_ARROW:
        showSlide(currentSlide - 1);
        break;
    }
  };

  const addNavigationListeners = () => {
    const [leftArrow, rightArrow] = document.querySelectorAll(`.arrows__btn`);
    leftArrow.addEventListener(`click`, onPreviousSlideClick);
    rightArrow.addEventListener(`click`, onNextSlideClick);
    document.addEventListener(`keydown`, onArrowKeyDown);
  };

  createSliderButtons();
  addNavigationListeners();
  showSlide(currentSlide);

})();
