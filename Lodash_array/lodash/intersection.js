// Creates an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

let _ = require('lodash');

let arr = [1, 3, 3, 4, 5, 2];

let arr1 = [1, 8, 9, 3, 7, 2];

let res = _.intersection(arr, arr1);

console.log({ res });           //  [1, 3, 2]


// *****************************************************

var list = [1, 2, 3, 4, 5, 6];

var result = _.intersection(list, [1, 4, 5, 9]);
console.log(result);            //[ 1, 4, 5 ]