import {changeScreen} from './services';
import greeting from './greeting';

const backToGreeting = (backButton) => {
  backButton.addEventListener(`click`, () => {
    changeScreen(greeting);
  });
};

export default backToGreeting;
