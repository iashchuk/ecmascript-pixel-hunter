import {getGameState} from './game';
import {getRandomInRange} from '../services';
import {gameData} from '../data/data';
import getGuessTemplate from '../templates/guess.template';
import {createAnswer} from './create-answer';
import {changeLevel} from './change-level';


export default () => {
  getGameState().level += 1;

  const guessGame = getGuessTemplate(gameData.guess);
  const gameContent = guessGame.querySelector(`.game__content`);

  const answerHandler = (evt) => {
    let time = getRandomInRange(0, 30);
    let result = (evt.target.dataset.type === `paint`);
    createAnswer(getGameState(), result, time);
    changeLevel(getGameState());
  };

  gameContent.addEventListener(`click`, answerHandler);

  return guessGame;
};


