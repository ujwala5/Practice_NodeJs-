const express = require('express');
const app = express();
const colors = require("colors");
const { CronJob } = require('cron');

require('dotenv').config();
const Port = process.env.PORT;
// console.log({ Port });

//ROUTE DECLARATION

const userRouter = require('./routes/user_router.js');
app.use(userRouter);

const { emailCronJob_controller } = require('./controllers/cron.controller.js');
const { ErrorMiddleware } = require('./middleware/ErrorMiddleware.js');
const { fetch_single_user_details_service } = require('./service/user.service.js');

//CRON JOB
const job = new CronJob(
    '*/5 * * * * *', // cronTime
    async function () {
        console.log('You will see this message in every 5 second'.yellow);
        await emailCronJob_controller();
    }, // onTick
    null, // onComplete
    true, // start
    'America/Los_Angeles' // timeZone
);

app.listen(Port, () => {
    console.log(`App running on port : ${Port}`.bgBlue);
});