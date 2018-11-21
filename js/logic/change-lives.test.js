import {assert} from 'chai';
import {AnswerScore, START_GAME} from './config';
import {changeLives} from './change-lives';


describe(`Change lives`, () => {
  it(`should return 2 if mistake answer and 3 lives`, () => {
    const current = Object.assign({}, START_GAME);
    assert.equal(changeLives(current, AnswerScore.WRONG).lives, 2);
  });
});
