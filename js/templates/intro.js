import {getElementFromTemplate, changeScreen, createScreen} from '../services';
import greeting from './greeting';
import footer from './footer';

const introTemplate = `
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>
`;


export default () => {
  const introElement = getElementFromTemplate(introTemplate);

  const asteriskButton = introElement.querySelector(`.intro__asterisk`);
  asteriskButton.addEventListener(`click`, () => changeScreen(greeting()));

  return createScreen(introElement, footer());

};
