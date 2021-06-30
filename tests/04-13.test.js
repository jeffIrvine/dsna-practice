import {
  acronymParser,
  raindrops
} from '../challenges/04-13.js';

const { test, skip } = QUnit;

QUnit.module('acronym parser')

test('It should take in a string and return a string with the first three letters of the given words', assert => {
  const result = acronymParser('National Public Radio');
  assert.equal(result, 'NPR');
})

QUnit.module('raindrops')

test('It should take in a number and return a string corresponding to its divisor', assert => {
  const result = raindrops(21);
  assert.equal(result, 'PlingPlong')
})
