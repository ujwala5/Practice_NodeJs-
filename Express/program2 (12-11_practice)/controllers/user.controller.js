const httpexception = require("../httpexception/httpexception.js");
const { fetch_single_user_details_service } = require('../service/user.service.js');

const fetch_single_user_detail_controller = async (req, res, next) => {
    try {
        console.log("I am here");
        const data = '';

        await fetch_single_user_details_service(data);

        // if (!data) {
        //     throw new httpexception(409, 'data is null');
        // }
        res.json({ data: 'Ujwala', status: "Success" });

    } catch (error) {
        console.log("Error : fetch_single_user_detail_controller " + error.message);
        next(error);
    }
};

module.exports = { fetch_single_user_detail_controller };