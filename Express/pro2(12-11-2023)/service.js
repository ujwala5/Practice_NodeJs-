const express = require("express");
const app = express();
require('dotenv').config();
const coolor = require("colors");
const { CronJob } = require("cron");

const Port = process.env.PORT || 3331;

// routes declare
const userRoute = require("./router/users.router.js");
const { emailCronJob_controller } = require("./controller/cron.controller.js");
const { ErrorMiddleware } = require("./middleware/ErrorMiddleware.js");
// routes use
app.use(userRoute);

// cron job
const job = new CronJob(
	'*/5 * * * * *', // cronTime
	async function () {
		console.log('You will see this message every second'.yellow);
		await emailCronJob_controller();

	}, // onTick
	null, // onComplete
	true, // start
	'America/Los_Angeles' // timeZone
);


app.use(ErrorMiddleware);
app.listen(Port, () => { console.log(`App running on port ${Port}`.magenta); });