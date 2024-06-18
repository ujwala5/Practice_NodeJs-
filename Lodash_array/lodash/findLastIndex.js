//This method is like _.findIndex except that it iterates over elements of collection from right to left.
//_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])


let _ = require('lodash');
var users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];

let res = _.findLastIndex(users, function (o) {
    return !o.active;
});

console.log({ res });    //2

let res1 = _.findLastIndex(users, function (o) {
    return o.user == 'fred';
});

console.log({ res1 });      //1

let res2 = _.findLastIndex(users,
    {
        'user': 'fred', 'active': false
    });

console.log({ res2 });   //1


let res3 = _.findLastIndex(users, ['active', false]);
console.log({ res3 });      //2

let res4 = _.findLastIndex(users, 'active');

console.log({ res4 });