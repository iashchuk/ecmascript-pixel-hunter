import {getGameState} from './game-screen';
import {gameData} from '../data/data';
import {createAnswer} from '../logic/create-answer';
import {changeLevel} from '../logic/change-level';
import SpotGameView from '../view/spotgame-view';
import {changeScreen} from '../services';
import getModalConfirmScreen from './modal-screen';


export default () => {
  const spotGame = new SpotGameView(getGameState(), gameData.spot);
  const spotGameScreen = spotGame.element;

  spotGame.answerHandler = (answer) => {
    createAnswer(getGameState(), answer, getGameState().time);
    changeLevel(getGameState());
  };

  spotGame.backButtonHandler = () => changeScreen(getModalConfirmScreen());

  return spotGameScreen;
};
