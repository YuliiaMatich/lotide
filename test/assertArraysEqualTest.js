// const eqArrays = require('../eqArrays');
// const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)


const assert = require('chai').assert;
const assertArraysEqual   = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns returns false for ['1', '2', '3'] and ['1', '2', 3]", () => {
    assert.strictEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false); 
  });
});