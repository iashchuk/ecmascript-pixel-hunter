import {assert} from 'chai';
import {AnswerScore, START_GAME} from './config';
import {changeLives} from './change-lives';


describe(`Change lives`, () => {

  it(`should return 2 if mistake answer and 3 lives`, () => {
    const current = Object.assign({}, START_GAME);
    assert.equal(changeLives(current, AnswerScore.WRONG).lives, 2);
  });

  it(`should return 0 if mistake answer and 1 lives`, () => {
    const current = Object.assign({}, START_GAME, {lives: 1});
    assert.equal(changeLives(current, AnswerScore.WRONG).lives, 0);
  });

  it(`should return Error if quanity of lives is negative`, () => {
    const current = Object.assign({}, START_GAME, {lives: 0});
    assert.throws(() => changeLives(current, AnswerScore.WRONG).lives);
  });

  it(`should return Error if quanity of lives more max lives`, () => {
    const current = Object.assign({}, START_GAME, {lives: 4});
    assert.throws(() => changeLives(current, AnswerScore.NORMAL).lives);
  });

});
