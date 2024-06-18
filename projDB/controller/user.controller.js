const { get_all_users_details, get_user_detail_by_id, get_detail_by_accountIdAndEmpID, userDetailByID, userDataInsertionInDB } = require('../Services/get_user_services.js');


const get_users_controller = async (req, res) => {
    try {
        const result = await get_all_users_details();
        console.log({ result });
        res.status(200).json({ "data": result, message: "success" });
    } catch (error) {
        console.log("Error :", error.message);
    }
};

const get_users_controller_by_id = async (req, res) => {
    try {
        console.log("comes here in controller");
        let id = req.params.id;
        console.log({ id });
        const result = await get_user_detail_by_id(id);
        console.log({ result });
        res.status(200).json({ "data": result, message: "success" });
    } catch (error) {
        console.log("Error :", error.message);
    }
};


const get_detail_by_accountIsAndEmpID = async (req, res) => {
    try {

        const accountId = req.params.accountId;
        console.log({ accountId });
        const EmpID = req.params.EmpID;
        console.log({ EmpID });

        const result = await get_detail_by_accountIdAndEmpID(accountId, EmpID);
        console.log({ result });

        res.status(200).json({ "data": result, message: "success" });


    } catch (error) {
        console.log("Error :", error.message);
    }
};


const get_detail_by_Id = async (req, res) => {
    try {
        console.log("req.query = ", req.query);
        console.log("req.params = ", req.params);
        // console.log(Object.keys(req.params).length === 0);
        if (Object.keys(req.params).length) {
            const { id1, id2, userName } = req.params;
            console.log('PARAMS : ', id1, id2, userName);
            let result = await userDetailByID(id1, id2);
            console.log({ result });
            res.send(result);
        }
        else {
            const { id1, id2 } = req.query;
            console.log('QUERY PARAMS : ', id1, id2);
            let result = await userDetailByID(id1, id2);
            console.log({ result });
            res.send(result);
        }

        // // console.log("req.params = ", req.params.id2);
        // let userId = req.params.userId;
        // console.log({ userId });
        // // // let user_Id = req.params.user_Id;
        // // console.log({ user_Id });



    } catch (error) {
        console.log("Error :", error.message);
    }
};

const insertUserdata = async (req, res) => {
    try {

        let result = await userDataInsertionInDB();
        console.log({ result });

    } catch (error) {
        console.log("error :", error.message);
    }

};

module.exports = {
    get_users_controller,
    get_users_controller_by_id,
    get_detail_by_accountIsAndEmpID,
    get_detail_by_Id,
    insertUserdata
};