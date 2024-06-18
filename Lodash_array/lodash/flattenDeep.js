//Recursively flattens array.


let _ = require('lodash');

let arr = [1, [2, [3, [4]], 5]];
let res = _.flattenDeep(arr);

console.log({ res });               //{ res: [ 1, 2, 3, 4, 5 ] }


// ***************************************************

let list = [1, [2], [4], 5, [[6]]];
let result = _.flattenDeep(list);

console.log(result);                //[ 1, 2, 4, 5, 6 ]
