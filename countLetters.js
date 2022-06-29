const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else (console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const countLetters = function (string) {
const result = {}
for (const item of string) {
if (item !== " ") {
  if (result[item]) {
    result[item] += 1;
  } else {
    result[item] = 1;
  }
  }
}


console.log(result);
}

countLetters("lighthouse in the house");