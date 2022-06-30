const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
// const results2 = map(words, function(item) {return item[0]})
// console.log(results1);

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};


const eqArrays = function (array1, array2) {
for (let i = 0; i < array1.length; i++) {
  if (array1[i] !== array2[i]) {
    return false;
  } 
} 
return true;
}

assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(["note", "that", "the", "above", "code"], word => word[0]), ["n", "t", "t", "a", "c"]);
assertArraysEqual(map(["is", "only", "to", "major", "tom"], word => word[0]), ["i", "o", "t", "m", "t"]);