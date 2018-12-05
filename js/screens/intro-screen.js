import IntroView from '../view/intro-view';
import getGreetingScreen from './greeting-screen';
import {changeScreen} from '../services';


export default () => {
  const intro = new IntroView();
  intro.asteriskButtonHandler = () => changeScreen(getGreetingScreen());
  return intro.element;
};
