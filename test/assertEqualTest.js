// const assertEqual = require('../assertEqual');

// assertEqual("bootcamp", "Lighthouse Labs");
// assertEqual(2, 2);


const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns 'bootcamp' for 'bootcamp'", () => {
    assert.strictEqual(assertEqual('bootcamp', 'Lighthose labs'), false);
  });
  it("returns true for '2'", () => {
    assert.strictEqual(assertEqual('2', '2'), true); 
  });
});