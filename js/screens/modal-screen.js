import ModalConfirmView from '../view/modal-view';
import getGreetingScreen from './greeting-screen';
import {changeScreen} from '../services';
import {getGameScreen, getGameState} from './game-screen';

export default () => {
  const modal = new ModalConfirmView();
  modal.confirmHandler = () => changeScreen(getGreetingScreen());
  modal.cancelHandler = () => changeScreen(getGameScreen(getGameState()));

  return modal.element;
};
