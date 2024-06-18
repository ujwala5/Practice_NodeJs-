const db = require('../database/db.js');

const companyLocation = async (bodyData) => {
    try {

        let branch = bodyData.branch;
        let company_name = bodyData.company_name;
        let email = bodyData.email;
        let state = bodyData.state;
        let city = bodyData.city;
        let company_address = bodyData.company_address;
        let contact_number_1 = bodyData.contact_number_1;
        let contact_number_2 = bodyData.contact_number_2;
        let pincode = bodyData.pincode;
        let created_by = bodyData.created_by;
        let updated_by = bodyData.updated_by;

        let query = "INSERT INTO tbl_company_location(branch,company_name,email,state,city,company_address,contact_number_1,contact_number_2,pincode,created_by,updated_by) VALUES(' " + branch + " ',' " + company_name + " ','" + email + " ',' " + state + " ',' " + city + "',' " + company_address + "',' " + contact_number_1 + " ',' " + contact_number_2 + "',' " + pincode + " ',' " + created_by + "',' " + updated_by + "')";


        let result = await db.query(query)
            .then((rows, field) => {
                return rows;
            });

        return result;

    } catch (error) {
        console.log("error =>", error);
    }
};

const locationdata = async (bodyData) => {
    let Id = bodyData.id;
    try {
        let query = "Select * from tbl_company_location where Id = '" + Id + "'";
        let result = await db.query(query)
            .then(([rows, field]) => {
                return rows;
            });

        console.log({ result });
        return result;

    } catch (error) {
        console.log("error =>", error);
    }
};

const locationDataUpdate = async (bodydata) => {
    try {

        let Id = bodydata.id;
        let branch = bodydata.branch;
        let company_name = bodydata.company_name;
        let state = bodydata.state;
        let city = bodydata.city;

        let query = "UPDATE tbl_company_location SET branch='" + branch + "',company_name='" + company_name + "',state = '"
            + state + "',city='" + city + "' WHERE id = '" + Id + "'";

        let result = await db.query(query)
            .then(([rows, field]) => {
                return rows;
            });

        console.log({ result });
        return result;

    } catch (error) {

        console.log("error =>", error);
    }
};

const delComLocation = async (bodydata) => {
    let Id = bodydata.id;
    try {
        let query = "DELETE FROM tbl_company_location WHERE id = '" + Id + "'";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        return result;
    } catch (error) {
        console.log("error =>", error);
    }
};

module.exports = {
    companyLocation,
    locationdata,
    locationDataUpdate,
    delComLocation
};