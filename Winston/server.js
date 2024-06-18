const winston = require('winston');
const express = require('express');
const app = express();


// GET endpoint with name query
app.get('/', (req, res) => {
    const name = req.query.name;
    res.send(`Hello, ${name}!`);
    logger.info(`hello ${name}`);
    logger.log('error', 'hello', { message: 'world' });


});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}



// logger.log('error', 'hello', { message: 'world' });
// logger.info('hello', { message: 'world' });



