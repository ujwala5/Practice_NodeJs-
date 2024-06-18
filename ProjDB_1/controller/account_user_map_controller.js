const { accountUserMapDataInsert, fetchAccountUserMapData, fetchAccountUserMapDataById, updateAccountDataService, deleteAccUserData } = require("../Services/account_user_map_service");

const accountUserMapDataInsert_controller = async (req, res) => {
    try {
        let bodyData = req.body;
        console.log({ bodyData });

        let accountUserMapServiceRes = await accountUserMapDataInsert(bodyData);
        console.log({ accountUserMapServiceRes });
        res.json({
            status: 'SUCCESS',
            message: bodyData
        });

    } catch (err) {
        console.log("error", err.message);
    }
};

const fetchAllAccountUserMapData = async (req, res) => {
    try {
        let fetchAccountUserMapDataRes = await fetchAccountUserMapData();
        console.log({ fetchAccountUserMapDataRes });
        res.send({
            status: 'SUCCESS',
            message: fetchAccountUserMapDataRes
        });
    } catch (err) {
        console.log("error", err.message);

    }
};


const getAccountUserMapData = async (req, res) => {
    try {
        let bodyData = req.body;

        let fetchAccountUserMapDataRes = await fetchAccountUserMapDataById(bodyData);
        console.log({ fetchAccountUserMapDataRes });
        res.send({
            status: 'SUCCESS',
            message: fetchAccountUserMapDataRes[0]
        });
    } catch (err) {
        console.log("error", err.message);

    }
};

const accountUpdate_Controller = async (req, res) => {
    try {
        let bodydata = req.body;
        console.log({ bodydata });
        let updateAccountDataServiceRes = await updateAccountDataService(bodydata);
        console.log({ updateAccountDataServiceRes });
        res.json({
            status: 'SUCCESS',
            message: bodydata
        });

    } catch (error) {
        console.log("error", error.message);
    }
};

const deleteAccountUser_Controller = async (req, res) => {
    try {

        let bodyData = req.body;
        console.log({ bodyData });

        let deleteAccUserDataRes = await deleteAccUserData(bodyData);
        res.json({
            status: "SUCCESS",
            message: bodyData
        });

    } catch (error) {
        console.log("error", error.message);
    }
};

module.exports = {
    accountUserMapDataInsert_controller,
    fetchAllAccountUserMapData,
    getAccountUserMapData,
    accountUpdate_Controller,
    deleteAccountUser_Controller
};