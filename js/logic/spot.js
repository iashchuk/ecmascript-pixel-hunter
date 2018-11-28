import {getGameState} from './game';
import {getRandomInRange} from '../services';
import {gameData} from '../data/data';
import spot from '../templates/spot.template';
import {createAnswer} from './create-answer';
import {changeLevel} from './change-level';


export default () => {
  getGameState().level += 1;
  const spotGame = spot(gameData.spot);
  const gameContent = spotGame.querySelector(`.game__content`);
  const gameOption = spotGame.querySelector(`.game__option`).dataset.type;

  const answerHandler = () => {
    if (gameContent.question1.value) {
      let time = getRandomInRange(0, 30);
      let result = (gameOption === gameContent.question1.value);

      createAnswer(getGameState(), result, time);
      changeLevel(getGameState());
    }
  };
  gameContent.addEventListener(`click`, answerHandler);

  return spotGame;
};
