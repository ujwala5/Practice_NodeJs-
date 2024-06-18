const db = require('../database/db.js');

const accountUserMapDataInsert = async (bodyData) => {
    try {
        let accountId = bodyData.account_id;
        if (!accountId) {
            throw {
                status: 'Failed',
                message: 'accountId is required'
            };
        }
        let userId = bodyData.user_id;
        if (!userId) {
            throw {
                status: 'Failed',
                message: 'userId is required'
            };
        }
        let createdBy = bodyData.created_by;
        if (!createdBy) {
            throw {
                status: "Failed",
                message: "createdBy is required"
            };
        }

        let modifiedBy = bodyData.modified_by;
        if (!modifiedBy) {
            throw {
                status: "Failed",
                message: "modifiedBy is required"
            };
        }

        let query = "INSERT INTO tb_account_user_map (account_id, user_id, created_by, modified_by) VALUES ('" + accountId + "', '" + userId + "', '" + createdBy + "', '" + modifiedBy + "')";
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

let fetchAccountUserMapData = async () => {
    try {
        let query = "select * from tb_account_user_map ";
        let result = db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;
    } catch (error) {
        console.log("error", error.message);
    }
};

let fetchAccountUserMapDataById = async (bodyData) => {
    try {
        Id = bodyData.id;
        if (!Id) {
            throw {
                status: "Failed",
                message: "Id is required"
            };
        }
        let query = "select * from tb_account_user_map where id = '" + Id + "'";
        let result = db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;
    } catch (error) {
        console.log("error", error.message);
    }
};

let updateAccountDataService = async (bodyData) => {
    try {
        let accountId = bodyData.account_id;
        if (!accountId) {
            throw {
                status: "Failed",
                message: "accountId is required"
            };
        }

        let userId = bodyData.user_id;
        if (!userId) {
            throw {
                status: "Failed",
                message: "userId is required"
            };
        }

        let modifiedBy = bodyData.modified_by;
        if (!modifiedBy) {
            throw {
                status: "Failed",
                message: "modifiedBy is required"
            };
        }

        let Id = bodyData.id;
        if (!Id) {
            throw {
                status: "Failed",
                message: "Id is required"
            };
        }

        let query = "UPDATE tb_account_user_map SET account_id = '" + accountId + "', user_id = '" + userId + "', modified_by = '" + modifiedBy + "' where id = '" + Id + "'";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;
    } catch (error) {
        console.log("error", error.message);
    }
};

const deleteAccUserData = async (bodyData) => {
    try {
        let id = bodyData.id;
        console.log({ id });
        if (!id) {
            throw {
                status: "Failed",
                message: "id is required"
            };
        }

        let query = "DELETE FROM tb_account_user_map WHERE id = '" + id + "'";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;

    } catch (error) {
        console.log("error", error.message);

    }
};

module.exports = {
    accountUserMapDataInsert,
    fetchAccountUserMapData,
    fetchAccountUserMapDataById,
    updateAccountDataService,
    deleteAccUserData
};