const db = require('../database/db.js');


const accountDetails = async (bodyData) => {
    try {
        let name = bodyData.name;
        console.log({ name });

        let Location = bodyData.location;
        console.log({ Location });

        let createdBy = bodyData.createdBy;
        console.log({ createdBy });

        let modifiedBy = bodyData.modifiedBy;
        console.log({ modifiedBy });

        // let query = "insert into tb_user_account (name, location, createdBy, modifiedBy) VALUES(" + name + "," + Location + "," + createdBy + "," + modifiedBy + " ) ";

        let query = "insert into tb_account ( name, location, createdBy, modifiedBy) VALUES('" + name + "','" + Location + "','" + createdBy + "','" + modifiedBy + "') ";
        const result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        // console.log({ result });
        return result;

    } catch (error) {
        console.log("error ==1 >>", error);
    }
};

const getAccountDetailRes = async () => {
    try {
        let query = " SELECT * FROM tb_account ";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        // console.log({ result });
        return result;
    } catch (error) {

        console.log("error ==>", error);
    }
};

const getAccountDetailbyId = async (id) => {
    try {

        if (!id) {
            throw {
                status: "Failed",
                message: "id is required"
            };
        }
        let query = " SELECT * FROM tb_account WHERE id = '" + id + "' ";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;
    } catch (error) {

        console.log("error ==>", error);
    }
};
const updateAccountData = async (bodyData) => {
    try {

        let name = bodyData.name;
        console.log({ name });
        if (!name) {
            throw {
                status: "Failed",
                message: "name is required"
            };
        }
        let location = bodyData.location;
        console.log({ location });
        if (!location) {
            throw {
                status: "Failed",
                message: "location is required"
            };
        }

        let Id = bodyData.id;
        if (!Id) {
            throw {
                status: "Failed",
                message: "Id is required"
            };
        }
        let query = " UPDATE tb_account SET location = '" + location + "', name = '" + name + "' WHERE id = '" + Id + "' ";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;

    } catch (error) {
        console.log("error ==>", error.message);
    }
};

const deleteAccountByID = async (bodyData) => {
    try {
        let Id = bodyData.id;
        console.log({ Id });
        if (!Id) {
            throw {
                status: "Failed",
                message: "Id is required"
            };
        }

        let query = "DELETE FROM tb_account WHERE id ='" + Id + "'";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;

    } catch (error) {

    }
};
module.exports = { accountDetails, getAccountDetailRes, getAccountDetailbyId, updateAccountData, deleteAccountByID };