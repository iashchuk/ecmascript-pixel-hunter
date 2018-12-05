import IntroView from '../view/intro-view';
import getGreetingScreen from './greeting-screen';
import {changeScreen} from '../services';


export default () => {
  const introView = new IntroView();
  introView.asteriskButtonHandler = () => changeScreen(getGreetingScreen());
  return introView.element;
};
