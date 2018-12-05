import SpotGameView from '../view/spotgame-view';
import {getGameState} from './game-screen';
import getModalConfirmScreen from './modal-screen';
import {gameData} from '../data/data';
import {createAnswer} from '../logic/create-answer';
import {changeLevel} from '../logic/change-level';
import {changeScreen} from '../services';


export default () => {
  const game = new SpotGameView(getGameState(), gameData.spot);
  const gameScreen = game.element;

  game.answerHandler = (answer) => {
    createAnswer(getGameState(), answer, getGameState().time);
    changeLevel(getGameState());
  };

  game.backButtonHandler = () => changeScreen(getModalConfirmScreen());

  return gameScreen;
};
