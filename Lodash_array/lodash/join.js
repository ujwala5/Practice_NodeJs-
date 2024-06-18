//Converts all elements in array into a string separated by separator.

let _ = require('lodash');

let res = _.join(['a', 'b', 'c'], '~');

console.log({ res });

let res_1 = _.join([]);