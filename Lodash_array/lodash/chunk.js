//It returns the array of chunks that is also an array

let _ = require('lodash');

let numbers = [1, 2, 3, 4, 5, 6, 7];

let result = _.chunk(numbers, 3);

console.log({ result });        //{ result: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ] }


