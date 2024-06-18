const httpexception = require('../httpexception/httpexception.js');

const fetch_single_user_details_service = async (data) => {
    if (!data) {
        throw new httpexception(409, 'fetch_single_user_details_service data is null', false);
    }
    return data;
};
module.exports = { fetch_single_user_details_service };