//The lodash.fill() method is used to fill a set of values into the array in a given range.
//lodash.fill(array, value, startIndex, endIndex)


let _ = require('lodash');

let array = [1, 2, 3];

let res = _.fill(array, 1);

// console.log({ res });


// console.log(Array(2));
// console.log(_.fill(Array(2), 2));

// console.log(_.fill([4, 6, 8, 10], '*', 1, 3));

// ****************************************************************************

let array1 = [2, 2, 3, 4, 5, 6];

console.log("Before : ", array1);

_.fill(array1, 10, 0, 4);

console.log("After : ", array1);

// *****************************************************************

// Original array
let array2 = Array(10);

// Printing original array
console.log('Before : ', array2);
// Using fill() method to add
// values in range (0, 4]
_.fill(array2, 10, 0, 4);

// Printing original array again
console.log('After : ', array2);


// **********************************************************************

let array3 = [{ "aa": 1 }, { "bb": 1 }, "a", "b"];

console.log(_.fill(array3, 10, 2, 10));



