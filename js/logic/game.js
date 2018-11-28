import {createScreen} from '../services';
import {getGameList} from '../data/data';
import {getDefaultState} from './config';
import spot from './spot';
import choose from './choose';
import guess from './guess';
import indicators from './indicators';
import {getHeader} from '../templates/header';
import getFooter from '../templates/footer';


let gameState;
let gameList;

const initGame = () => {
  gameList = getGameList();
  gameState = getDefaultState();
};

const getGameState = () => {
  return gameState;
};


const getGameScreen = ({level, lives, time, answers}) => {
  const typeOfGame = {spot, choose, guess};
  let getGame = typeOfGame[gameList[level]];
  return createScreen(getHeader(lives, time), getGame(), indicators(answers), getFooter());
};


export {initGame, getGameState, getGameScreen};
