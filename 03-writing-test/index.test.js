const { test, expect } = require('node:test');
const assert = require('node:assert');
const { sum } = require('./index.js');

test('Sum of 1 and 2 should be 3', () => {
  const result = sum(1, 2);
  assert.strictEqual(result, 3);
});

test('Sum of -1 and 1 should be 0', () => {
  const result = sum(-1, 1);
  assert.strictEqual(result, 0);
});

test('Sum of 0 and 0 should be 0', () => {
  const result = sum(0, 0);
  assert.strictEqual(result, 0);
});

test('Sum of 100 and 200 should be 300', () => {
  const result = sum(100, 200);
  assert.strictEqual(result, 300);
});
