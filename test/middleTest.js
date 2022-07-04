// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// assertArraysEqual(middle([1]), [])
// assertArraysEqual(middle([1, 2]), [])
// assertArraysEqual(middle([1, 2, 3]), [2])
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5])

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns true for [1] and []", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns returns true for [1, 2] and []", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });
  it("returns returns true for [1, 2, 3], [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]); 
  });
  it("returns returns true for [1, 2, 3, 4, 5, 6, 7, 8]) and [4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); 
  });
});

