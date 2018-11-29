import {assert} from 'chai';
import {getDefaultState} from '../logic/config';
import {countTime} from '../logic/count-time';

describe(`Count time`, () => {

  it(`should return 29 after calling tick 1 time for start 30 sec`, () => {
    const newTimer = countTime(getDefaultState().time);
    newTimer.tick();
    assert.equal(newTimer.remainTime, 29);
  });

  it(`should return 0 after calling tick 30 times for start 30 sec and call function onTimeEnd`, () => {
    const newTimer = countTime(getDefaultState().time);
    for (let i = 1; i <= getDefaultState().time; i++) {
      newTimer.tick();
    }
    assert.equal(newTimer.remainTime, 0);
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
