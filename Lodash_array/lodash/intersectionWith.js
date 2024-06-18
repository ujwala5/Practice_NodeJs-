// This method is like _.intersection except that it accepts comparator which is invoked to compare elements of arrays. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).

let _ = require('lodash');

let objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
let others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];

let res = _.intersectionWith(objects, others, _.isEqual);

console.log({ res });

// *************************************************************

var numbers = [1.7, 2.4, 3.6, 4.2];
// var listOfNumbers = '';

let listOfNumbers = _.intersectionWith([{ 'x': 4 }, { 'x': 1 }], [{ 'x': 4 }], _.isEqual);
console.log(listOfNumbers); 