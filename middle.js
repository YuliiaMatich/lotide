const eqArrays = function (array1, array2) {
for (let i = 0; i < array1.length; i++) {
  if (array1[i] !== array2[i]) {
    return false;
  } 
} 
return true;
}

const assertEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};


const middle = function (array) {
  let result = [];
if (array.length <= 2) {
return result;
} 
if (array.length % 2 === 0) {
  result.push(array[array.length / 2 - 1]);
  result.push(array[array.length / 2])
} else {
  result.push(array[Math.floor(array.length / 2)])
} return result;
}
console.log(middle([1])) // => []
console.log(middle([1, 2, 3])) // => []
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8])) // => []