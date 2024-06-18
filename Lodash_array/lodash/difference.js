// The _.difference() function is used to remove a single element or the array of elements from the original array. This function works pretty much same as the core function of JavaScript i.e filter.

let _ = require('lodash');

let numbers = [1, 2, 3, 4, 5, 5, 5, 5, 6];

let res = _.difference(numbers, [5, 4, 7]);

console.log(res);