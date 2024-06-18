//This method is like _.intersection except that it accepts iteratee which is invoked for each element of each arrays to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:


let _ = require('lodash');

let res = _.intersectionBy([3.1, 1.2], [1.9, 3.4], Math.floor);

console.log({ res });               //[ 3.1, 1.2 ]

// *************************************************************

let response = _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
console.log({ response });