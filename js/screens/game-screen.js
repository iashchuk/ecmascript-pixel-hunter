import spot from './spotgame-screen';
import choose from './choosegame-screen';
import guess from './guessgame-screen';
import {createScreen} from '../services';
import {getGameList} from '../data/data';
import {getDefaultState} from '../logic/config';
import {changeScreen} from '../services';


let gameState;
let gameList;

const getGameState = () => {
  return gameState;
};

const getGameScreen = ({level}) => {
  const typeOfGame = {spot, choose, guess};
  let getGame = typeOfGame[gameList[level]];
  return createScreen(getGame());
};

const initGame = () => {
  gameList = getGameList();
  gameState = getDefaultState();
  changeScreen(getGameScreen(gameState));
};


export {initGame, getGameState, getGameScreen};
