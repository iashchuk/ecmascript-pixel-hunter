import {assert} from 'chai';
import {AnswerScore} from './config';
import {scoring} from './scoring';

describe(`Scoring`, () => {
  it(`should return -1 if less than 10 answers`, () => {
    assert.equal(scoring([
      AnswerScore.FAST,
      AnswerScore.FAST,
      AnswerScore.FAST,
      AnswerScore.WRONG,
      AnswerScore.WRONG,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL
    ], 3), -1);
  });
  it(`should return 1150 if all lives and normal speed`, () => {
    assert.equal(scoring([
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL
    ], 3), 1150);
  });
  it(`should return 0 if less than 0 lives`, () => {
    assert.equal(scoring([
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL,
      AnswerScore.NORMAL
    ], -1), 0);
  });
  it(`should return 1650 for maximum score`, () => {
    assert.equal(scoring([
      AnswerScore.FAST,
      AnswerScore.FAST,
      AnswerScore.FAST,
      AnswerScore.FAST,
      AnswerScore.FAST,
      AnswerScore.FAST,
      AnswerScore.FAST,
      AnswerScore.FAST,
      AnswerScore.FAST,
      AnswerScore.FAST
    ], 3), 1650);
  });
});
