//_.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.

let _ = require('lodash');

let users = [
    { 'user': 'barney', 'active': false },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': true }
];

let res = _.findIndex(users, function (o) {
    // return o.user == 'pebbles';
    return !o.active;
});

console.log({ res });       //2

let res_1 = _.findIndex(users, { 'user': 'fred', 'active': false });
console.log({ res_1 });     //1


let res_3 = _.findIndex(users, ['active', false]);

console.log({ res_3 });         //3

let res_4 = _.findIndex(users, 'active');
console.log({ res_4 });