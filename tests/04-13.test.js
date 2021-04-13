import {
  acronymParser
} from '../04-13.js';

const { test, skip } = QUnit;

QUnit.module('acronym parser')

test('It should take in a string and return a string with the first three letters of the given words', assert => {
  const result = acronymParser('National Public Radio');
  assert.equal(result, 'NPR');
})