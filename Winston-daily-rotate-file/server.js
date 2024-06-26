
let winston = require('winston');
require('winston-daily-rotate-file');

let transport = new winston.transports.DailyRotateFile({
    filename: 'application_11-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});

transport.on('rotate', function (oldFilename, newFilename) {
    // do something fun
});

let logger = winston.createLogger({
    transports: [
        transport
    ]
});

logger.info('Hello World!');

// *********************************************************
