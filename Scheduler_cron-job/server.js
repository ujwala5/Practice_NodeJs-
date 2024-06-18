const schedule = require('node-schedule');
const { main, main_1 } = require('./functions/mainFunction');

//5 star with value(*/1 * * * *) = (1) minute

schedule.scheduleJob('* * * * * *', function () {
    main();

});

//6 star with value(*/6 * * * *) = (6) second
schedule.scheduleJob('*/2 * * * * *', function () {
    main_1();

});

schedule.scheduleJob({ hour: 1, minute: 1, dayOfWeek: 0 }, function () {
    console.log('Time for tea!');
});

