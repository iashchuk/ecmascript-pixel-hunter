import {getGameState} from './game';
import {getRandomInRange} from '../services';
import {gameData} from '../data/data';
import getChooseTemplate from '../templates/choose.template';
import {createAnswer} from './create-answer';
import {changeLevel} from './change-level';


export default () => {
  getGameState().level += 1;
  const gameSelecter = getChooseTemplate(gameData.choose);
  const gameContent = gameSelecter.querySelector(`.game__content`);
  const gameOptions = gameSelecter.querySelectorAll(`.game__option`);
  let selectOne;
  let selectTwo;

  gameOptions.forEach((option) => {
    if (option.dataset.item === `1`) {
      selectOne = option.dataset.type;
    }
    if (option.dataset.item === `2`) {
      selectTwo = option.dataset.type;
    }
  });

  const answerHandler = () => {
    if (gameContent.question1.value && gameContent.question2.value) {
      let time = getRandomInRange(0, 30);
      let resultOne = (selectOne === gameContent.question1.value);
      let resultTwo = (selectTwo === gameContent.question2.value);
      createAnswer(getGameState(), resultOne && resultTwo, time);
      changeLevel(getGameState());
    }
  };
  gameContent.addEventListener(`click`, answerHandler);
  return gameSelecter;
};
