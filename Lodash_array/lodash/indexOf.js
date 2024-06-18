// Gets the index at which the first occurrence of value is found in array using SameValueZero for equality comparisons. If fromIndex is negative, it's used as the offset from the end of array.

// _.indexOf(array, value, [fromIndex=0])

let _ = require('lodash');

let list = [1, 2, 3, 2, 5, 2];
var result = _.indexOf(list, 2);
console.log(result);                //1

var result = _.indexOf(list, 2, 3);
// console.log(result);                //3


// ************************************************

let arr = [2, 4, 5, 7, 5, 2, 4, 3, 2, 4,];

console.log(_.indexOf(arr, 2, 5));
// => 1

// Search from the `fromIndex`.
console.log(_.indexOf([1, 2, 1, 2], 2, 2))
// => 3