const db = require('../database/index.js');

const get_all_users_details = async () => {
    try {

        const query = "select * from tb_user";

        const result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });

        return result;

    } catch (error) {
        throw error;
    }
};

const get_user_detail_by_id = async (id) => {
    try {
        console.log("comes here");
        const query = "SELECT * FROM tb_user WHERE ID = ?";
        const result = await db.query(query, [id])
            .then(([rows, fields]) => {
                console.log({ rows });
                return rows;
            });

        return result;
    } catch (error) {
        throw error;
    }
};

const get_detail_by_accountIdAndEmpID = async (accountId, EmpID) => {
    try {
        const query = "SELECT * FROM tb_user WHERE account_id = ? and EMP_ID = ?";
        const result = await db.query(query, [accountId, EmpID])
            .then(([rows, fields]) => {
                console.log({ rows });
                return rows;
            });

        return result;
    } catch (error) {
        throw error;
    }
};

let userDetailByID = async (id1, id2) => {
    try {
        console.log(id1, id2);
        let query = "SELECT * FROM tb_user WHERE Id IN (?,?)";
        const result = await db.query(query, [id1, id2])
            .then(([rows, fields]) => {
                return rows;
            });
        return result;
    } catch (error) {
        throw error;
    }

};

let userDataInsertionInDB = async () => {
    try {

        let query = "INSERT INTO tb_user(Id, userName, contactNo, emailID, created_date, created_by, modified_date, modified_by, account_id, EMP_ID) VALUES('7','shrikant','9764389022','shrikant_kuralkar@gmail.com','2023-11-27','4','2023-11-21','4','506','56')";
        const result = await db.query(query, [])
            .then(([rows, fields]) => {
                console.log(rows);
                return rows;
            });
        console.log(result);
        return result;

    } catch (error) {
        throw error;
    }
};

module.exports = {
    get_all_users_details,
    get_user_detail_by_id,
    get_detail_by_accountIdAndEmpID,
    userDetailByID,
    userDataInsertionInDB
};