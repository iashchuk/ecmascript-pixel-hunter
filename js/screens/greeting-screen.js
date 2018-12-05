import GreetingView from '../view/greeting-view';
import getRulesScreen from './rules-screen';
import {changeScreen} from '../services';


export default () => {
  const greeting = new GreetingView();
  greeting.continueButtonHandler = () => changeScreen(getRulesScreen());
  return greeting.element;
};
