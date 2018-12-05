import GreetingView from '../view/greeting-view';
import getRulesScreen from './rules-screen';
import {changeScreen} from '../services';


export default () => {
  const greetingView = new GreetingView();
  greetingView.continueButtonHandler = () => changeScreen(getRulesScreen());
  return greetingView.element;
};
