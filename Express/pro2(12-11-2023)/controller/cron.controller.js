const httpexception = require("../httpexception/httpexception");
const { ErrorMiddleware } = require("../middleware/ErrorMiddleware");


const emailCronJob_controller = async () => {
    console.log("i am cron".bgBlue);

    try {
        const data = '';
        if (!data) {
            throw new httpexception(409, ' emailCronJob_controller data is null', true);
        }
    } catch (error) {
        ErrorMiddleware(error);
    }
};

module.exports = { emailCronJob_controller };
