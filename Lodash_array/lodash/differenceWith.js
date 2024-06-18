let _ = require('lodash');

let objects = [{ 'x': 1, 'y': 2 }, { 'x': 3 }];

let res = _.differenceWith(objects, [{ 'x': 3 }], _.isEqual);

console.log(res);