const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    return true;
  } else {
    return false;
  };
};

module.exports = assertArraysEqual;
