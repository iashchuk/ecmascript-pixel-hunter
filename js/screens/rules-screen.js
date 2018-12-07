import RulesView from '../view/rules-view';
import getGreetingScreen from './greeting-screen';
import {initGame} from './game-screen';
import {changeScreen} from '../services';

export default () => {
  const rules = new RulesView();
  rules.rulesButtonHandler = () => initGame();
  rules.backButtonHandler = () => changeScreen(getGreetingScreen());
  return rules.element;
};
