const express = require("express");
const app = express();
const coolor = require("colors");
var morgan = require('morgan');
const { CronJob } = require("cron");

const { PORT, LOG_FORMAT } = require("./config");
const { logger, stream } = require("./utils/logger.js");

const Port = PORT || 3331;
app.use(morgan(LOG_FORMAT, const express = require("express");
const app = express();
const coolor = require("colors");
var morgan = require('morgan');
const { CronJob } = require("cron");

const { PORT, LOG_FORMAT } = require("./config");
const { logger, stream } = require("./utils/logger.js");

const Port = PORT || 3331;
app.use(morgan(LOG_FORMAT, { stream }));

// routes declare
const userRoute = require("./router/users.router.js");
const { emailCronJob_controller } = require("./controller/cron.controller.js");
const { ErrorMiddleware } = require("./middleware/ErrorMiddleware.js");
// routes use
app.use(userRoute);

// cron job
// const job = new CronJob(
// 	'*/5 * * * * *', // cronTime
// 	async function () {
// 		console.log('You will see this message every second'.yellow);
// 		await emailCronJob_controller();

// 	}, // onTick
// 	null, // onComplete
// 	true, // start
// 	'America/Los_Angeles' // timeZone
// );


app.use(ErrorMiddleware);
// app.listen(Port, () => { console.log(`App running on port ${Port}`.magenta); })
app.listen(Port, () => {
    logger.info(`=====================================================`);
    logger.info(`======= ENV: ${LOG_FORMAT} ====================================`);
    logger.info(`⚙️ Demo server runnig on port ${Port}`);
    logger.info(`=====================================================`);
});
