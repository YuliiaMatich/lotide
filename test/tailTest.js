// const assertEqual = require('../assertEqual');
// const tail = require('../tail');
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(tail(words).length, 1);

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns true for ['Yo Yo', 'Lighthouse', 'Labs'] and ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns returns true for [1, 2, 3], [2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]); 
  });
});
