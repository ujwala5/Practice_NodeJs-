const db = require('../database/db.js');
const user_map_role_service = async (bodydata) => {
    try {

        let role_id = bodydata.role_id;
        if (!role_id) {
            throw {
                status: "Failed",
                message: "role_id is required"
            };
        }
        let user_id = bodydata.user_id;
        if (!user_id) {
            throw {
                status: "Failed",
                message: "user_id is required"
            };
        }
        let createdBy = bodydata.created_by;
        if (!createdBy) {
            throw {
                status: "Failed",
                message: "createdBy is required"
            };
        }
        let modifiedBy = bodydata.modified_by;
        if (!role_id) {
            throw {
                status: "Failed",
                message: "modifiedBy is required"
            };
        }

        let query = " INSERT INTO tb_user_roll_map (role_id, user_id,created_by, modified_by) VALUES('" + role_id + "','" + user_id + "','" + createdBy + "','" + modifiedBy + "')";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;


    } catch (error) {
        console.log("error =>", error.message);
    }
};

let get_user_map_role = async () => {
    try {
        let query = "SELECT * FROM tb_user_roll_map ";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;

    } catch (error) {
        console.log("error =>", error.message);
    }
};

let get_user_map_roleById = async (bodyData) => {

    try {

        let id = bodyData.id;
        if (!id) {
            throw {
                status: "Failed",
                message: "id is required"
            };
        }
        let query = "SELECT * FROM tb_user_roll_map WHERE id='" + id + "'";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;
    }
    catch (err) {
        console.log("error =>", err.message);
    }
};

const user_map_role_update = async (bodydata) => {
    try {

        let roleId = bodydata.role_id;
        if (!roleId) {
            throw {
                status: "Failed",
                message: "roleId is required"
            };
        }
        let userId = bodydata.user_id;
        if (!userId) {
            throw {
                status: "Failed",
                message: "userId is required"
            };
        }

        let Id = bodydata.id;
        console.log({ Id });
        if (!Id) {
            throw {
                status: "Failed",
                message: "Id is required"
            };
        }

        let query = "UPDATE tb_user_roll_map SET role_id = '" + roleId + "', user_id = '" + userId + "' WHERE id = '" + Id + "'";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;
    }
    catch (err) {
        console.log("error =>", err.message);
    }
};

const deleteUserRoleMapService = async (BodyData) => {
    try {
        let id = BodyData.id;
        if (!id) {
            throw {
                status: "Failed",
                message: "id is required"
            };
        }
        let query = "DELETE FROM tb_user_roll_map WHERE id='" + id + "'";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;
    }
    catch (err) {
        console.log("error =>", error.message);
    }
};

module.exports = {
    user_map_role_service,
    get_user_map_role,
    get_user_map_roleById,
    user_map_role_update,
    deleteUserRoleMapService
};