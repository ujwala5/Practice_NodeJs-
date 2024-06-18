//Recursively flatten array up to depth times.
//_.flattenDepth(array, [depth=1])


let _ = require('lodash');

let array = [1, [2, [3, [4]], 5]];

let res = _.flattenDepth(array, 2);

console.log({ res });                   //{ res: [ 1, 2, 3, 4, 5 ] }

// ****************************************************

let arr = [1, [2], [4], 5, [[6]]];

let res1 = _.flattenDepth(arr, 1);

console.log({ res1 });