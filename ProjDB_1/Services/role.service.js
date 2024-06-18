const db = require('../database/db.js');
const role_service = async (bodyData) => {
    try {

        let roleName = bodyData.role_name;
        if (!roleName) {
            throw {
                status: "Failed",
                message: "roleName is required"
            };
        }
        let createdBy = bodyData.created_by;
        if (!createdBy) {
            throw {
                status: 'Failed',
                message: 'createdBy is required'
            };
        }
        let modifiedBy = bodyData.modified_by;
        if (!modifiedBy) {
            throw {
                status: 'Failed',
                message: 'modifiedBy is required'
            };
        }

        let query = "INSERT INTO tb_role (role_name, created_by, modified_by) VALUES ('" + roleName + "','" + createdBy + "','" + modifiedBy + "')";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;

    } catch (error) {
        console.log("Error ==>>", error.message);
    }
};

const getAllRoleData_Service = async () => {
    try {
        let query = "SELECT * FROM tb_role";
        let result = await db.query(query)
            .then(([rows, fileds]) => {
                return rows;
            });
        console.log({ result });
        return result;
    } catch (err) {
        console.log("err =>>", err.message);
    }
};

const getAllRoleDataById_Service = async (body) => {
    try {
        let Id = body.id;
        if (!Id) {
            throw {
                status: "Failed",
                message: 'Id is required'
            };
        }
        let query = "SELECT * FROM tb_role WHERE id = '" + Id + "'";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;
    } catch (err) {
        console.log("err =>>", err.message);
    }
};

const role_service_update = async (bodyData1) => {
    try {

        let roleName = bodyData1.roleName;
        console.log({ roleName });
        if (!roleName) {
            throw {
                status: "Failed",
                message: "roleName is required"
            };
        }
        let created_by = bodyData1.createdBy;
        console.log({ created_by });
        if (!created_by) {
            throw {
                status: "Failed",
                message: "createdBy is required"
            };
        }
        let Id = bodyData1.id;
        if (!Id) {
            throw {
                status: "Failed",
                Message: "Id is required"
            };
        }

        let query = " UPDATE tb_role SET roleName = '" + roleName + "', createdBy = '" + created_by + "' WHERE id = '" + Id + "' ";
        let result = await db.query(query, values)
            .then(([rows, fields]) => {
                return rows;
            });
        // console.log({ result });
        return result;

    } catch (error) {
        console.log("error ==>", error.message);
    }
};

let deleteRoleService = async (bodyData) => {
    try {
        let Id = bodyData.id;
        if (!Id) {
            throw {
                status: 'Failed',
                message: 'id is required'
            };
        }

        let query = "DELETE FROM tb_role WHERE id = '" + Id + "'";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });

    } catch (error) {
        console.log("error ", error);
    }
};

module.exports = { role_service, getAllRoleData_Service, getAllRoleDataById_Service, role_service_update, deleteRoleService };