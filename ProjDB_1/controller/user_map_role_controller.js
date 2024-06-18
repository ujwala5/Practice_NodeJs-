const { user_map_role_service, get_user_map_role, get_user_map_roleById, user_map_role_update, deleteUserRoleMapService } = require("../Services/user_map_role_service");


const userRoleMapData_Controller = async (req, res) => {
    try {

        let bodyData = req.body;
        console.log({ bodyData });
        let user_map_role_serviceRes = await user_map_role_service(bodyData);
        console.log({ user_map_role_serviceRes });

        res.json({
            status: "SUCCESS",
            message: bodyData
        });

    } catch (error) {
        console.log("error = >", error.message);
    }
};

const getUserRoleMap_controller = async (req, res) => {
    try {

        let get_user_map_roleRes = await get_user_map_role();

        get_user_map_roleRes = JSON.parse(JSON.stringify(get_user_map_roleRes));

        res.send({
            status: "SUCCESS",
            message: get_user_map_roleRes
        });

    } catch (error) {
        console.log("Error ==>", error.message);
    }
};


const getUserRoleMapById_controller = async (req, res) => {
    try {

        let bodyData = req.body;
        console.log({ bodyData });

        let get_user_map_roleRes = await get_user_map_roleById(bodyData);

        res.send({
            status: "SUCCESS",
            message: get_user_map_roleRes[0]
        });

    } catch (error) {
        console.log("Error ==>", error.message);
    }
};

const userRoleMapUpdate_Controller = async (req, res) => {
    try {
        let bodyData = req.body;
        console.log({ bodyData });

        let user_map_role_updateRes = await user_map_role_update(bodyData);
        console.log({ user_map_role_updateRes });
        res.json({
            status: "SUCCESS",
            message: bodyData
        });

    } catch (error) {
        console.log("error ==>", error.message);
    }
};

const userRoleMapDel_controller = async (req, res) => {
    try {
        let bodydata = req.body;
        console.log({ bodydata });

        let deleteUserRoleMapServiceRes = await deleteUserRoleMapService(bodydata);
        console.log({ deleteUserRoleMapServiceRes });
        res.send({
            status: 'SUCCESS',
            message: bodydata
        });

    } catch (error) {
        console.log("error ==>", error.message);

    }
};

module.exports = {
    userRoleMapData_Controller,
    getUserRoleMap_controller,
    getUserRoleMapById_controller,
    userRoleMapUpdate_Controller,
    userRoleMapDel_controller
};