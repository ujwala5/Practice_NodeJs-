
let waterfall = require('async-waterfall');

const { funOne, funTwo, funThree } = require('./otherFunction/opFunction');

// waterfall([
//     function (callback) {
//         callback(null, 'one', 'two');
//     },
//     function (arg1, arg2, callback) {
//         console.log("====>>>>", arg1, arg2,);
//         callback(null, 'Three');
//     },
//     function (arg, callback) {
//         console.log(arg);
//         callback(null, 'done');
//     }
// ], function (err, result) {
//     console.log({ result });
//     if (err) {
//         console.log('Main error', err);
//     }
//     console.log('Main result', result);
//     return 0;
// });


waterfall([
    function (callback) {
        funOne((err, res) => {

            if (err) {
                // console.log({ err });
                callback(err, null);
            }
            else {
                console.log({ res });

                callback(null, res);
            }
        });
    },

    function (arg1, callback) {
        console.log({ arg1 });
        funTwo((err, res) => {
            if (err) {
                // console.log({ err });
                callback(err, null);
            }
            else {
                console.log({ res });
                callback(null, res);
            }
        });
    },

    function (arg2, callback) {
        console.log({ arg2 });
        funThree((err, res) => {
            if (err) {
                callback(err, null);
            }
            console.log({ res });
            callback(null, res);
        });
    }
],
    function (err, result) {
        if (err) {
            console.log('Main error', err);
            return 0;
        }
        console.log('Main result', result);
        return 0;
    });
