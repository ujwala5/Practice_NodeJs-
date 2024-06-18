// Recurrence Rule Scheduling

const schedule = require('node-schedule');

const rule = new schedule.RecurrenceRule();
rule.minute = 1;

schedule.scheduleJob(rule, function () {
    console.log(rule, 'The answer to life, the universe, and everything!');
});



//Set StartTime and EndTime

//It will run after 5 seconds and stop after 10 seconds in this example. The ruledat supports the above.


let startTime = new Date(Date.now() + 5000);
console.log({ startTime });
let endTime = new Date(startTime.getTime() + 5000);
console.log({ endTime });

schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function () {
    console.log('Time for tea!');
});