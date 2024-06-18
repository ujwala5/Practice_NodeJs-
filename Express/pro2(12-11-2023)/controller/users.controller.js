const httpexception = require("../httpexception/httpexception.js");
const { fetch_single_user_details_service } = require("../service/user.service.js");
const fetch_single_user_details_controller = async (req, res, next) => {

    try {
        console.log("i am here");
        const data = '';
        await fetch_single_user_details_service(data);
        res.json({ data: "sunit", status: "success" });

    } catch (error) {
        console.log("Error: fetch_single_user_details_controller " + error.message);
        next(error);
    }
};

module.exports = { fetch_single_user_details_controller };

// errorMiddleware