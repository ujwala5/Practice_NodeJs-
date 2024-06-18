//Flattens array a single level deep.

let _ = require('lodash');

let arr = [1, [2, [3, [4]], 5]];

let res = _.flatten(arr);
console.log({ res });           //res: [ 1, 2, [ 3, [Array] ], 5 ] }



// *************************************************


let list = [1, [2], [4], 5, [[6]]];
let result = _.flatten(list);

console.log({ result });        //{ result: [ 1, 2, 4, 5, [ 6 ] ] }
