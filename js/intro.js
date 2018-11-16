import {getElementFromTemplate, changeScreen} from './services.js';
import greeting from './greeting.js';

const TEMPLATE = `
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>
`;

const intro = getElementFromTemplate(TEMPLATE);

const asteriskButton = intro.querySelector(`.intro__asterisk`);

asteriskButton.addEventListener(`click`, () => {
  changeScreen(greeting);
});


export default intro;