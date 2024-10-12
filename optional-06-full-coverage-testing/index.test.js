import { test, assert } from 'node:test';
import { sum } from './index.js';

test('sum of two positive numbers', () => {
  const result = sum(2, 3);
  assert.strictEqual(result, 5);
});

test('sum of a positive number and zero', () => {
  const result = sum(5, 0);
  assert.strictEqual(result, 5);
});

test('sum of two negative numbers', () => {
  const result = sum(-2, -3);
  assert.strictEqual(result, -5);
});

test('sum of a positive and a negative number', () => {
  const result = sum(10, -3);
  assert.strictEqual(result, 7);
});

test('sum of two zeros', () => {
  const result = sum(0, 0);
  assert.strictEqual(result, 0);
});

test('sum of a positive number and a negative number', () => {
  const result = sum(-10, 10);
  assert.strictEqual(result, 0);
});

test('sum with large numbers', () => {
  const result = sum(1000000, 2000000);
  assert.strictEqual(result, 3000000);
});

test('sum of floating point numbers', () => {
  const result = sum(1.5, 2.5);
  assert.strictEqual(result, 4);
});
