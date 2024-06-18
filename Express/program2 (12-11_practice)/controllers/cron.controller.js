const httpexception = require("../httpexception/httpexception");
const { ErrorMiddleware } = require('../middleware/ErrorMiddleware.js');

const emailCronJob_controller = async () => {
    console.log("I am cron".blue);
    try {

        const data = '';
        if (!data) {
            throw new httpexception(409, 'fetch_single_user_details_service data is null', true);
        }


    } catch (error) {
        // next(error);
        ErrorMiddleware();
    }
};

module.exports = { emailCronJob_controller };