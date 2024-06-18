let waterfall = require('async-waterfall');

const { funOne, funTwo, funThree } = require('./otherFunction/opFunction_1');


waterfall([
    function (callback) {
        funOne(10, 20, (err, res) => {

            if (err) {
                // console.log({ err });
                callback(err, null);
            }
            else {
                console.log(`10 + 20 =`, res);

                callback(null, res);
            }
        });
    },

    function (arg1, callback) {
        // console.log({ arg1 });
        funTwo(arg1, 5, (err, res) => {
            if (err) {
                // console.log({ err });
                callback(err, null);
            }
            else {
                console.log(`${arg1} - 5 =`, res);
                callback(null, res);
            }
        });
    },

    function (arg2, callback) {
        // console.log({ arg2 });
        funThree(arg2, 3, (err, res) => {
            if (err) {
                callback(err, null);
            }
            console.log(`${arg2} * 3 = `, res);
            callback(null, res);
        });
    }
],
    function (err, result) {
        if (err) {
            console.log('Main error :', err);
            return 0;
        }
        console.log('Main result :', result);
        return 0;
    });