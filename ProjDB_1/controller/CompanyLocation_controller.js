const { companyLocation, locationdata, locationDataUpdate, delComLocation } = require("../Services/company_location_service");

const addCompanyLocation = async (req, res) => {
    try {
        let bodydata = req.body;
        console.log({ bodydata });

        let companyLocationRes = await companyLocation(bodydata);
        console.log("===>>", companyLocationRes);

        res.json({
            "status": "Success",
            "message": bodydata
        });

    } catch (error) {
        console.log("error =>", error);
    }
};

const getLocationData = async (req, res) => {
    try {
        let bodydata = req.body;
        let locationDataRes = await locationdata(bodydata);
        console.log({ locationDataRes });
        res.send({
            "status": "SUCCESS",
            "message": locationDataRes
        });
    } catch (error) {
        console.log("error =>", error);
    }
};

const modifyComLocation = async (req, res) => {
    try {

        let bodyData = req.body;
        console.log({ bodyData });

        let locationDataUpdateRes = await locationDataUpdate(bodyData);
        res.json({
            "status": "SUCCESS",
            "message": bodyData
        });


    } catch (error) {
        console.log("error =>", error);
    }
};

const delCompLocation = async (req, res) => {
    try {
        let bodyData = req.body;

        let delComLocationdata = await delComLocation(bodyData);
        res.send({
            "status": "SUCCESS",
            "message": bodyData
        });
    } catch (error) {
        console.log("error =>", error);
    }
};

module.exports = {
    addCompanyLocation,
    getLocationData,
    modifyComLocation,
    delCompLocation
};