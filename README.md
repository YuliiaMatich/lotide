# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @yuliiamatich/lotide`

**Require it:**

`const _ = require('@yuliiamatich/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: compares two arrays by telling if they are equal or not.
* `assertEqual(value1, value2)`: compares two values by telling if they match or not.
* `assertObjectsEqual(object1, object2)`: takes in two objects and console.log an appropriate message to the console (true of false).
* `countLetters(string)`: takes in a sentence (as a string) and then returns a count of each of the letters in that sentence
* `countOnly(array, object)`: takes in a collection of items (array) and returns counts for a specific subset of those items(everything that the input object listed). 
* `eqArrays(array1, array2)`: takes in two arrays and returns true or false, based on a perfect match.
* `eqObjects(object1, object2)`: compares two objects and returns true or false, based on a perfect match.
* `findKey(object, callback)`: scans the object and returns the first key for which the callback returns a truthy value. If no key is found - returns undefined.
* `findKeyByValue(object, objectValue)`: searches for a key on an object where its value matches a given value.
* `head(array)`: retrieves the first element from the array.
* `letterPositions(string)`: returns all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: returns a new array based on the condition passed to the callback function.
* `middle(array)`: returns the middle-most element(s) of the given array.
* `tail(array)`: retreives every element  of the array except the first element.
* `takeUntil(array, callback)`: returns a slice of the array with elements taken from the beginning, keeps going until the callback returns a truthy value.
* `without(array1, array2)`: returns a subset of a given array, removing unwanted elements.