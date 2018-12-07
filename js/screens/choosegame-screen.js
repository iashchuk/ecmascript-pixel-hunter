import ChooseGameView from '../view/choosegame-view';
import {gameData} from '../data/data';
import {changeScreen} from '../services';
import {getGameState} from './game-screen';
import getModalConfirmScreen from './modal-screen';
import {createAnswer} from '../logic/create-answer';
import {changeLevel} from '../logic/change-level';

export default () => {
  const game = new ChooseGameView(getGameState(), gameData.choose);
  const gameScreen = game.element;

  game.answerHandler = (answer) => {
    createAnswer(getGameState(), answer, getGameState().time);
    changeLevel(getGameState());
  };

  game.backButtonHandler = () => changeScreen(getModalConfirmScreen());

  return gameScreen;
};

