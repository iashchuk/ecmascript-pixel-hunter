import {assert} from 'chai';
import {scoring, createAnswer} from './scoring';

describe(`Scoring`, () => {
  it(`should return -1 if less than 10 answers`, () => {
    assert.equal(scoring([
      createAnswer(true, 25),
      createAnswer(true, 25),
      createAnswer(false, 15),
      createAnswer(false, 15),
      createAnswer(true, 15),
      createAnswer(true, 15),
      createAnswer(true, 15),
      createAnswer(true, 15),
    ], 3), -1);
  });

  it(`should return 1150 if all lives and normal speed`, () => {
    assert.equal(scoring([
      createAnswer(true, 19),
      createAnswer(true, 18),
      createAnswer(true, 17),
      createAnswer(true, 16),
      createAnswer(true, 15),
      createAnswer(true, 14),
      createAnswer(true, 13),
      createAnswer(true, 12),
      createAnswer(true, 11),
      createAnswer(true, 10),
    ], 3), 1150);
  });

  it(`should return Error if lives is negative`, () => {
    assert.throws(() => scoring([
      createAnswer(true, 15),
      createAnswer(true, 15),
      createAnswer(true, 15),
      createAnswer(true, 15),
      createAnswer(true, 15),
      createAnswer(true, 15),
      createAnswer(true, 15),
      createAnswer(true, 15),
      createAnswer(true, 15),
      createAnswer(true, 15),
    ], -1));
  });

  it(`should return 1650 for maximum score`, () => {
    assert.equal(scoring([
      createAnswer(true, 30),
      createAnswer(true, 29),
      createAnswer(true, 28),
      createAnswer(true, 27),
      createAnswer(true, 26),
      createAnswer(true, 25),
      createAnswer(true, 24),
      createAnswer(true, 23),
      createAnswer(true, 22),
      createAnswer(true, 21),
    ], 3), 1650);
  });
});
