import {assert} from 'chai';
import {INITIAL_GAME} from '../logic/config';
import {changeLevel} from '../logic/change-level';

describe(`Change level`, () => {

  it(`should change level on 2`, () => {
    assert.equal(changeLevel(INITIAL_GAME, 2).level, 2);
  });

  it(`should change level on 5`, () => {
    assert.equal(changeLevel(INITIAL_GAME, 5).level, 5);
  });

  it(`should return Error if level is negative`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, -1).level);
  });

  it(`should return Error if level is more max level`, () => {
    assert.throws(() => changeLevel(INITIAL_GAME, 11).level);
  });
});
