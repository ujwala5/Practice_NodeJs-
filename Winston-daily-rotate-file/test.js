const { createLogger, format, transports } = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

// Define the log format
const logFormat = format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => {
        return `${timestamp} ${level}: ${message}`;
    })
);

// Create a logger
const logger = createLogger({
    level: 'error',
    format: logFormat,
    transports: [
        // Console transport for logging to the console
        new transports.Console(),

        // Daily Rotate File transport for rotating log files daily
        new DailyRotateFile({
            dirname: 'logs', // Directory to store log files
            filename: 'application-%DATE%.log', // File name pattern with date placeholders
            datePattern: 'YYYY-MM-DD', // Date format for rotation
            zippedArchive: true, // Compress old log files
            maxSize: '20m', // Max size of a log file
            maxFiles: '14d', // Keep log files for 14 days
        }),
    ],
});

// Example log messages
logger.log('info', 'This is an informational message.');
logger.log('warn', 'This is a warning message.');
logger.log('error', 'This is an error message.');

// You can also log using different log levels: info, warn, error, etc.
// logger.info('This is another info message.');
// logger.warn('This is another warning message.');
// logger.error('This is another error message.');