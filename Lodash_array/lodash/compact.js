//reates an array with all falsey values removed in JavaScript.

let _ = require('lodash');


let numbers = ['false', 0, NaN, 1, 2, false, "", undefined, null];

let result = _.compact(numbers);

console.log({ result });

// **********************************************************************

let array = [0, false, '', undefined, NaN];
let newArray = _.compact(array);

console.log({ newArray });


// **************************************************************************

let array1 = [false, 'HTML', NaN, 'CSS', 'undefined'];

let newArray1 = _.compact(array1);
console.log({ newArray1 });