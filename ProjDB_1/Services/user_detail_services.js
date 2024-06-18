
const db = require('../database/db.js');
const bcrypt = require("bcrypt");

const userDetailInsertInDB = async (bodyData) => {
    try {

        let name = bodyData.userName;
        if (!name) {
            throw {
                "status": "Failed",
                "message": "User name is required"
            };
        }
        let emailId = bodyData.emailid;
        if (!emailId) {
            throw {
                "status": "Failed",
                "message": "emailId is required"
            };
        }

        let mobileNo = bodyData.mobileNo;
        if (!mobileNo) {
            throw {
                "status": "Failed",
                "message": "mobileNo is required"
            };
        }

        let password = bodyData.password;
        if (!password) {
            throw {
                "status": "Failed",
                "message": "password is required"
            };
        }
        let created_by = bodyData.createdBy;
        if (!created_by) {
            throw {
                "status": "Failed",
                "message": "created_by field is required"
            };
        }

        let modifiedBy = bodyData.modifiedBy;
        if (!modifiedBy) {
            throw {
                "status": "Failed",
                "message": "modifiedBy field is required"
            };
        }

        let bcryptPasswordRes = await bcryptPassword(password);
        console.log("bcryptPasswordRes ===>> ", bcryptPasswordRes);

        console.log(bcryptPasswordRes.length);

        // let query = "INSERT INTO tbl_user_details(user_name, emailid, password, is_active, created_by, created_at, modified_at) VALUES (name" + name + ", emailId" + emailId + ", password" + password + ", is_active" + is_active + ", created_by" + created_by + ", created_at" + created_at + ", modified_at" + modified_at + ", emailId) ";

        let query = "INSERT INTO tb_user (userName, emailid, mobileNo, password, createdBy, modifiedBy) VALUES('" + name + "', '" + emailId + "', '" + mobileNo + "','" + bcryptPasswordRes + "','" + created_by + "','" + modifiedBy + "')";
        const result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        return result;


    } catch (error) {
        console.log("error ==>> ", error);
        return error;
    }
};

const bcryptPassword = async (password) => {
    try {
        const saltRound = 10;
        return await bcrypt.genSalt(saltRound)
            .then((salt) => {
                console.log("salt ==>> ", salt);
                return bcrypt.hash(password, salt);
            })
            .then((hash) => {
                console.log("hash ==>>", hash);
                return hash;
            })
            .catch((error) => {
                console.log("error ==>> ", error.message);
            });
    } catch (error) {
        console.log("error ==>> ", JSON.stringify(error.message));
    }
};

const userDetailservice = async (bodyData) => {
    try {

        let userName = bodyData.user_name;
        let emailId = bodyData.emailid;
        let password = bodyData.password;
        let Id = bodyData.id;

        let query = " UPDATE tb_user SET userName = ' " + userName + " ',  emailid = '" + emailId + "', password = '" + password + "' WHERE id = '" + Id + "'";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;

    } catch (error) {
        console.log("Error  =>>", error.message);
    }
};

const getAllData_service = async () => {
    try {
        let query = " SELECT * FROM tb_user ";
        const result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;

    } catch (err) {
        console.log("error ==>", err.message);
    }
};

const userDetailserviceByID = async (body) => {
    try {
        let Id = body.id;
        let query = "SELECT * FROM tb_user WHERE id = '" + Id + "'";
        let result = await db.query(query)
            .then(([rows, fileds]) => {
                return rows;
            });
        console.log({ result });
        return result;

    } catch (err) {

    }
};

const deleteUserDetailById = async (bodyData) => {
    try {
        let Id = bodyData.id;
        let query = " DELETE FROM tb_user WHERE id = '" + Id + "' ";
        const result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        console.log({ result });
        return result;

    } catch (error) {
        console.log("error ==>>", error.message);
    }
};

module.exports = {
    userDetailInsertInDB,
    userDetailservice,
    getAllData_service,
    userDetailserviceByID,
    deleteUserDetailById
};
