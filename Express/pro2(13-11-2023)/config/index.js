PORT=3330
LOG_DIR = '../logs'
LOG_FORMAT = 'dev'require('dotenv').config();
// console.log("process.env == ", process.env);
const { PORT, LOG_DIR, LOG_FORMAT } = process.env;

module.exports = { PORT, LOG_DIR, LOG_FORMAT }