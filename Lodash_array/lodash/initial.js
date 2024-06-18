//Gets all but the last element of array.
//array (Array) 

let _ = require('lodash');

let arr = [2, 3, 4, 8, 6, 5];
let arr1 = ['hello', 2, false, 1, 0];

let res1 = _.initial(arr1);
let res = _.initial(arr);


console.log({ res });       //[ 2, 3, 4, 8, 6 ]
console.log({ res1 });      //[ 'hello', 2, false, 1 ]