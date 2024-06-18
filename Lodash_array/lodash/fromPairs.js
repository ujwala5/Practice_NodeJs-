//The inverse of _.toPairs; this method returns an object composed from key-value pairs.
//_.fromPairs(pairs)


let _ = require('lodash');

let arr = [['One', 1], ['Two', 2]];

let res = _.fromPairs(arr);
console.log({ res });

// *********************************************

let arr1 = [['a', 1], ['b', 2]];
let res1 = _.fromPairs(arr1);

console.log({ res1 });
