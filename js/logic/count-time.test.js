import {assert} from 'chai';
import {START_GAME} from './config';
import {countTime} from './count-time';

describe(`Count time`, () => {

  it(`should set time on default timer`, () => {
    assert.equal(countTime(START_GAME, START_GAME.timer).time, 30);
  });

  it(`should reset time and set value of 0`, () => {
    assert.equal(countTime(START_GAME, 0).time, 0);
  });

});
