import ModalConfirmView from '../view/modal-view';
import getGreetingScreen from './greeting-screen';
import {changeScreen} from '../services';
import {getGameScreen, getGameState} from './game-screen';

export default () => {
  const modalConfirm = new ModalConfirmView();
  modalConfirm.confirmHandler = () => changeScreen(getGreetingScreen());
  modalConfirm.cancelHandler = () => changeScreen(getGameScreen(getGameState()));

  return modalConfirm.element;
};
