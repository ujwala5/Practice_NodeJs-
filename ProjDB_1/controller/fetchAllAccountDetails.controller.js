const { accountDetails, updateAccountData, deleteAccountByID, getAccountDetailRes, getAccountDetailbyId } = require("../Services/account.service");

const fetchAllAccountDetails_controller = async (req, res) => {
    try {

        let bodyData = req.body;
        console.log({ bodyData });

        let accountDetailsRes = await accountDetails(bodyData);
        console.log("accountDetailsRes ==>>", { accountDetailsRes });
        res.json({
            "status": "Success",
            "message": bodyData
        });

    } catch (error) {
        console.log("error ==2 >>", error.message);
    }
};

const getAllAccountController = async (req, res) => {
    try {
        let getAccountDetailResult = await getAccountDetailRes();
        getAccountDetailResult = JSON.parse(JSON.stringify(getAccountDetailResult));
        res.send({
            status: 'SUCCESS',
            message: getAccountDetailResult
        });

    } catch (error) {
        console.log("error ==>", error.message);
    }
};

const getAllAccountControllerById = async (req, res) => {
    try {

        let id = req.body.id;
        console.log({ id });
        let getAccountDetailResult = await getAccountDetailbyId(id);
        getAccountDetailResult = JSON.parse(JSON.stringify(getAccountDetailResult[0]));
        res.send({
            status: 'SUCCESS',
            message: getAccountDetailResult
        });

    } catch (error) {
        console.log("error ==>", error.message);
    }
};

const updateAccounts_controller = async (req, res) => {
    try {

        let bodyData = req.body;
        console.log({ bodyData });
        let updateAccountDetail = await updateAccountData(bodyData);
        console.log(updateAccountDetail);
        res.json({
            "status": "Success",
            "message": bodyData
        });

    } catch (error) {
        console.log("error ==>", error.message);
    }
};

const deleteAccount_controller = async (req, res) => {
    try {

        let bodyData = req.body;
        console.log({ bodyData });
        let deleteAccountByIDRes = await deleteAccountByID(bodyData);
        console.log({ deleteAccountByIDRes });
        res.json({
            status: 'SUCCESS',
            message: bodyData
        });

    } catch (error) {
        console.log('error ==>>', error.message);
    }
};
module.exports = {
    fetchAllAccountDetails_controller,
    updateAccounts_controller,
    deleteAccount_controller,
    getAllAccountController,
    getAllAccountControllerById
};