import {getGameState} from './game-screen';
import {gameData} from '../data/data';
import {createAnswer} from '../logic/create-answer';
import {changeLevel} from '../logic/change-level';
import GuessGameView from '../view/guessgame-view';
import {changeScreen} from '../services';
import getModalConfirmScreen from './modal-screen';


export default () => {
  const game = new GuessGameView(getGameState(), gameData.guess);
  const gameScreen = game.element;

  game.answerHandler = (evt) => {
    let result = (evt.target.dataset.type === `paint`);
    createAnswer(getGameState(), result, getGameState().time);
    changeLevel(getGameState());
  };

  game.backButtonHandler = () => changeScreen(getModalConfirmScreen());

  return gameScreen;
};
