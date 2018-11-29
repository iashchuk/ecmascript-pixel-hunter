import {assert} from 'chai';
import {getDefaultState} from '../logic/config';
import {changeLives} from '../logic/change-lives';


describe(`Change lives`, () => {

  // it(`should return 2 if mistake answer and 3 lives`, () => {

  //   assert.equal(changeLives(getDefaultState(), false).lives, 2);
  // });

  // it(`should return 0 if mistake answer and 1 lives`, () => {
  //   assert.equal(changeLives(getDefaultState(), false).lives, 0);
  // });

  it(`should return Error if quanity of lives is negative`, () => {
    const current = Object.assign({}, getDefaultState(), {lives: 0});
    assert.throws(() => changeLives(current, false).lives);
  });

  it(`should return Error if quanity of lives more max lives`, () => {
    const current = Object.assign({}, getDefaultState(), {lives: 4});
    assert.throws(() => changeLives(current, true).lives);
  });

});
