const db = require('../database/db.js');
const allCustomerDetails = async (bodyData) => {
    try {
        let locationId = bodyData.location_id;
        let customer_name = bodyData.CustomerName;
        let cAddress = bodyData.CAddress;
        let contact_no = bodyData.ContactNo;
        let contact_no2 = bodyData.ContactNo_2;
        let emailId = bodyData.EmailID;
        let createdBy = bodyData.created_by;
        let updatedBy = bodyData.updated_by;

        let query = "INSERT INTO tb_CustomerDetails(location_id, CustomerName, CAddress, ContactNo, ContactNo_2, EmailID, created_by, updated_by)VALUES('" + locationId + "','" + customer_name + "','" + cAddress + "','" + contact_no + "','" + contact_no2 + "','" + emailId + "','" + createdBy + "','" + updatedBy + "')";
        let result = db.query(query)
            .then(([rows, field]) => {
                return rows;
            });

        return result;

    } catch (error) {
        console.log("error", error.message);
    }
};

let customerData = async () => {
    try {
        let query = "SELECT * FROM tb_CustomerDetails";
        let result = db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });

        return result;
    } catch (error) {
        console.log("error", error.message);
    }
};

const Customer_detailsById = async (bodyData) => {
    try {
        let Id = bodyData.id;
        let query = "SELECT * FROM tb_CustomerDetails WHERE id = '" + Id + "'";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                console.log({ fields });
                return rows;
            });
        return result;
    } catch (error) {
        console.log("error", error.message);
    }
};

const customerDetail_modified = async (bodyData) => {
    try {

        let Id = bodyData.id;
        let location_id = bodyData.location_id;
        let CAddress = bodyData.CAddress;
        let ContactNo = bodyData.ContactNo;

        let query = "UPDATE tb_CustomerDetails SET location_id='" + location_id + "', CAddress='" + CAddress + "', ContactNo='" + ContactNo + "' WHERE id = '" + Id + "'";
        let result = await db.query(query)
            .then(([rows, result]) => {
                return rows;
            });
        return result;
    } catch (err) {
        console.log("error", err.message);
    }
};

const delCustomerDetail = async (bodyData) => {
    try {
        let Id = bodyData.id;
        let query = "DELETE FROM tb_CustomerDetails WHERE id = '" + Id + "' ";
        let result = await db.query(query)
            .then(([rows, fields]) => {
                return rows;
            });
        return result;

    } catch (error) {
        console.log("error", error);
    }
};

module.exports = {
    allCustomerDetails,
    customerData,
    Customer_detailsById,
    customerDetail_modified,
    delCustomerDetail
};