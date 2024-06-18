// Creates a slice of array with n elements dropped from the beginning.

let _ = require('lodash');

let numbers = [1, 2, 3, 4, 5];

let res = _.drop(numbers);     //drop only beginning valuue

let res1 = _.drop(numbers, 0);   //drop 3 beginning valuue

console.log({ res });
console.log({ res1 });

// *********************************************************

console.log(_.drop([1, 2, 3]));
// => [2, 3]

console.log(_.drop([1, 2, 3], 2));
// => [3]

console.log(_.drop([1, 2, 3], 5));
// => []

console.log(_.drop([1, 2, 3], 0));
// => [1, 2, 3]