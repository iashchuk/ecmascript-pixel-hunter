import RulesView from '../view/rules-view';
import getGreetingScreen from './greeting-screen';
import {initGame} from './game-screen';
import {changeScreen} from '../services';

export default () => {
  const rulesView = new RulesView();
  rulesView.rulesButtonHandler = () => initGame();
  rulesView.backButtonHandler = () => changeScreen(getGreetingScreen());
  return rulesView.element;
};
