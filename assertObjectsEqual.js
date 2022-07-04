const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length){
  return false;
  }
  for (let item of Object.keys(object1)) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
    return eqArrays(object1[item], object2[item])
    }
    else if (object1[item] !== object2[item]) {
      return false;
    } 
  } return true;
};

const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`));
};

module.exports = assertObjectsEqual;

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false