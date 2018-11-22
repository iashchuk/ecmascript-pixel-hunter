import {assert} from 'chai';
import {INITIAL_GAME} from './config';
import {countTime} from './count-time';

describe(`Count time`, () => {

  it(`should return 29 after calling tick 1 time for start 30 sec`, () => {
    const newTimer = countTime(INITIAL_GAME.time);
    newTimer.tick();
    assert.equal(newTimer.remainTime, 29);
  });

  it(`should return Error if time is not a number`, () => {
    assert.throws(() => countTime(`ten seconds`).time);
  });

  it(`should return Error if time is negative`, () => {
    assert.throws(() => countTime(-10).time);
  });

  it(`should return Error if time is more max time`, () => {
    assert.throws(() => countTime(60).time);
  });

});
