// Creates a slice of array excluding elements dropped from the end.

let _ = require('lodash');

let users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];

let res = _.dropRightWhile(users, function (user) {
    return !user.active;
});

console.log({ res });                       //{ user: 'barney', active: true }


let res_1 = _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
console.log({ res_1 });                             //[ { user: 'barney', active: true }, { user: 'fred', active: false } ]


let res_2 = _.dropRightWhile(users, ['active', false]);
console.log({ res_2 });                             //[ { user: 'barney', active: true } ] }


let res_3 = _.dropRightWhile(users, 'active');
console.log({ res_3 });                              // [
                                                        //     { user: 'barney', active: true },
                                                        //     { user: 'fred', active: false },
                                                        //     { user: 'pebbles', active: false }
                                                     //   ]



