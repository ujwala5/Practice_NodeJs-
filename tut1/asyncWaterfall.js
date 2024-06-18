const waterfall = require('async-waterfall');

const main = () => {
    console.log('Main function');

    // waterfall([],function(){})

    waterfall([
        function (callback) {
            fun_one((err, res) => {
                if (err) {
                    callback(err, null);
                }
                console.log({ res });
                callback(null, res);
            });
        },

        function (callback) {
            fun_two((err, res) => {
                if (err) {
                    callback(err, null);
                }
                console.log(res);
                callback(null, res);
            });
        },

        function (callback) {
            fun_three((err, res) => {
                if (err) {
                    callback(err, null);
                }
                callback(null, res);
            });
        }

    ], function (err, result) {
        if (err) {
            console.log("main err", err);
        } else {
            console.log("main result", result);
        }
    });
};

const fun_one = (callback) => {
    try {
        callback(null, "This is fun_one");

    } catch (error) {
        callback(error.message, null);
    }
};

const fun_two = (callback) => {
    // console.log('fun_two_function');
    let result = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve('fun_two_function');
        }, 2000);
    });

    return result;
};

const fun_three = (callback) => {
    try {
        callback(null, 'fun_three function');
    } catch (error) {
        callback(error.message, null);
    }

};

main();