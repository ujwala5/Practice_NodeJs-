// is used to concatenating the arrays in JavaScript.

let _ = require('lodash');

let numbers = [1, 2, 3, 4];

let res = _.concat(numbers, 5);

console.log(res);

let res1 = _.concat(res, 6, [7, 8, 9]);
console.log(res1);


// ************************************************

let array = [1, 2, 3];

let values = [0, 5, "a", "b"];

let newArray = _.concat(array, values);
console.log("Before concat: " + array);

console.log("After concat: " + newArray);      //it returns array only
