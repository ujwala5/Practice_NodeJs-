let waterfall = require('async-waterfall');

waterfall([
    function (callback) {
        callback(null, 'one', 'two');
    },
    function (arg1, arg2, callback) {
        callback(null, 'three');
    },
    function (arg1, callback) {
        // arg1 now equals 'three'
        callback(null, 'done');
    }
    
], function (err, result) {
    // result now equals 'done'
    console.log(result);
    if (err) {
        console.log("Main error", err);
        return 0;
    }
    console.log("Main result", result);
    return 0;
});