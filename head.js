const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};
const head = function (array) {
  let result = array[0];
  return result;
  }

// assertEqual("bootcamp", "Lighthouse Labs");
// assertEqual(2, 2);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");