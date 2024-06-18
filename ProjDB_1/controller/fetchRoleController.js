const { role_service, role_service_update, deleteRoleService, getAllRoleData_Service, getAllRoleDataById_Service } = require("../Services/role.service");

const fetchRoleController = async (req, res) => {
    try {

        let bodyData = req.body;
        console.log({ bodyData });

        let role_serviceRes = await role_service(bodyData);
        console.log("role_serviceRes ==>>", role_serviceRes);
        res.send({
            status: "Success",
            message: bodyData
        });

    } catch (error) {
        console.log("error ==>", error.message);
    }
};

const getAllRoleData_controller = async (req, res) => {
    try {
        let getAllRoleData_ServiceRes = await getAllRoleData_Service();
        getAllRoleData_ServiceRes = JSON.parse(JSON.stringify(getAllRoleData_ServiceRes));

        res.json({
            status: 'SUCCESS',
            message: getAllRoleData_ServiceRes
        });

    } catch (err) {
        console.log("error ==>", err.message);
    }
};


const getAllRoleDataById_controller = async (req, res) => {
    try {

        let bodydata = req.body;
        let getAllRoleDataById_ServiceRes = await getAllRoleDataById_Service(bodydata);
        getAllRoleDataById_ServiceRes = JSON.parse(JSON.stringify(getAllRoleDataById_ServiceRes[0]));

        res.json({
            status: 'SUCCESS',
            message: getAllRoleDataById_ServiceRes
        });

    } catch (err) {
        console.log("error ==>", err.message);
    }
};
const fetchUpdateRoleService = async (req, res) => {
    try {
        let bodyData1 = req.body;
        console.log({ bodyData1 });

        let role_service_updateRes = await role_service_update(bodyData1);
        console.log({ role_service_updateRes });
        res.json({
            status: 'SUCCESS',
            message: bodyData1
        });


    } catch (error) {
        console.log("error ==>", error.message);
    }
};

const deleteRoleController = async (req, res) => {
    try {

        let bodydata = req.body;
        console.log({ bodydata });

        let deleteRoleServiceRes = await deleteRoleService(bodydata);
        console.log({ deleteRoleServiceRes });
        res.send({
            status: 'SUCCESS',
            message: bodydata
        });

    } catch (error) {
        console.log("error ==>", error.message);
    }
};
module.exports = { fetchRoleController, getAllRoleData_controller, getAllRoleDataById_controller, fetchUpdateRoleService, deleteRoleController };