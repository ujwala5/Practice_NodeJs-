const { userDetailInsertInDB, userDetailservice, getAllData_service, userDetailserviceByID, deleteUserDetailById } = require("../Services/user_detail_services");


const user_Detail_Controller = async (req, res) => {
    try {

        let bodyData = req.body;
        console.log({ bodyData });

        if (bodyData.password.trim() == bodyData.confirm_password.trim()) {
            const result = await userDetailInsertInDB(bodyData);

            res.json({
                "status": "Success",
                "Message": bodyData
            });

        } else {
            res.json({
                "status": "Failed",
                "Message": "Password and confirm password does not match"
            });
        }

        // console.log("bodyData ==>> ", bodyData);
        // const result = await userDetailInsertInDB(bodyData);

        // res.json({
        //     "status": "Success",
        //     "Message": bodyData
        // });

    } catch (error) {
        return error;
    }
};

const userDetailUpdate_controller = async (req, res) => {
    try {

        let bodydata = req.body;
        console.log({ bodydata });

        let userDetailUpdate_serviceRes = await userDetailservice(bodydata);
        console.log({ userDetailUpdate_serviceRes });

        res.json({
            status: 'SUCCESS',
            message: bodydata
        });

    } catch (error) {
        console.log("error ==>", error.message);
    }
};

const getAlluserDetail_controller = async (req, res) => {
    try {
        let getAllData_serviceRes = await getAllData_service();
        console.log({ getAllData_serviceRes });
        res.json({
            status: "SUCCESS",
            message: getAllData_serviceRes
        });

    } catch (error) {
        console.log("error =>>", error.message);
    }
};

const getUserDetailByIDController = async (req, res) => {
    try {
        let bodyData = req.body;
        console.log({ bodyData });

        let userDetailServiceRes = await userDetailserviceByID(bodyData);
        console.log({ userDetailServiceRes });

        res.json({
            status: "SUCCESS",
            message: userDetailServiceRes[0]
        });


    } catch (error) {
        console.log("error ==>", error.message);
    }
};

const deleteUserDetail_controller = async (req, res) => {
    try {
        let bodyData = req.body;
        console.log({ bodyData });

        let deleteUserDetailByIdRes = await deleteUserDetailById(bodyData);
        console.log({ deleteUserDetailByIdRes });

        res.json({
            status: "SUCCESS",
            message: bodyData

        });

    } catch (error) {
        console.log("error =>", error.message);
    }
};

module.exports = {
    user_Detail_Controller,
    userDetailUpdate_controller,
    getAlluserDetail_controller,
    getUserDetailByIDController,
    deleteUserDetail_controller
};