//Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey.

let _ = require('lodash');

var users = [
    { user: 'Sam', active: false },
    { user: 'Ted', active: true },
    { user: 'Julie', active: false }
];

let res = _.dropWhile(users, function (o) {
    return !o.active;
});

console.log({ res });             // [ { user: 'Ted', active: true }, { user: 'Julie', active: false } ]


// *********************************************************


let users_ = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

let res1 = _.dropWhile(users_, function (o) {
    return !o.active;
});

console.log({ res1 });       //{ res1: [ { user: 'pebbles', active: true } ] }


console.log(_.dropWhile(users_, { 'user': 'barney', 'active': false }));

//[ { user: 'fred', active: false }, { user: 'pebbles', active: true } ]



console.log(_.dropWhile(users_, ['active', false]));         //[ { user: 'pebbles', active: true } ]


console.log(_.dropWhile(users, 'active'));

//[
//     { user: 'Sam', active: false },
//     { user: 'Ted', active: true },
//     { user: 'Julie', active: false }
//   ]

