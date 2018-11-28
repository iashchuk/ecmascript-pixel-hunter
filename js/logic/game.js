import {createScreen} from '../services';
import {getGameList} from '../data/data';
import {getHeader} from '../templates/header';
import indicators from './indicators';
import getFooter from '../templates/footer';
import spot from './spot';
import choose from './choose';
import guess from './guess';


let gameState;
let gameList;

const getDefaultState = () => {
  gameList = getGameList();
  gameState = {
    level: 0,
    time: 30,
    lives: 3,
    points: 0,
    answers: [],
    gameOver: false
  };
};

const getGameState = () => {
  return gameState;
};


const getGameScreen = ({level, lives, time, answers}) => {
  const typeOfGame = {spot, choose, guess};
  let getGame = typeOfGame[gameList[level]];
  return createScreen(getHeader(lives, time), getGame(), indicators(answers), getFooter());
};


export {getDefaultState, getGameState, getGameScreen};
