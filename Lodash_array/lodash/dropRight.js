// Creates a slice of array with n elements dropped from the end.

let _ = require('lodash');

let numbers = [1, 2, 3, 4, 5];

let res = _.dropRight(numbers);     //drop only end value

let res1 = _.dropRight(numbers, 3);   //drop 3 end value from right

console.log({ res });
console.log({ res1 });