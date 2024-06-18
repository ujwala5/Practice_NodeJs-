const my_webhook_controller = async (req, res) => {
    try {
        const bodyData = req.body;
        console.log("bodyData == ", bodyData);
        res.send(bodyData);

    } catch (error) {
        console.log("Error : fetch_single_user_details_controller " + error.message);
        next(error);
    }

};

module.exports = { my_webhook_controller };