const { allCustomerDetails, customerData, Customer_detailsById, customerDetail_modified, delCustomerDetail } = require("../Services/customer_details_service");

const fetchAllCustomerDetails = async (req, res) => {
    try {
        let bodydata = req.body;
        let fetchAllCustomerDetailsRes = await allCustomerDetails(bodydata);
        res.json({
            'status': 'Success',
            'message': bodydata
        });
    } catch (error) {
        console.log(error);
    }
};

const fetchAllData = async (req, res) => {
    try {

        let AllcustomerDataRes = await customerData();
        res.json({
            "status": "Success",
            "message": AllcustomerDataRes
        });

    } catch (error) {
        console.log("error", error.message);
    }
};

const CustomerDetailById = async (req, res) => {
    try {
        let bodydata = req.body;

        let fetchCustomerdetailByID = await Customer_detailsById(bodydata);
        res.json({
            "status": "Success",
            "message": fetchCustomerdetailByID
        });

    } catch (error) {
        console.log("error", error.message);
    }
};

const customerDetailsUpdate = async (req, res) => {
    try {

        let bodydata = req.body;
        let modufyCustomerDetail = await customerDetail_modified(bodydata);
        res.send({
            "status": "Success",
            "message": modufyCustomerDetail
        });

    } catch (err) {
        console.log("error", err.message);
    }
};

const del_customerDetailById = async (req, res) => {
    try {
        let bodydata = req.body;
        let delCustomerdetailRes = await delCustomerDetail(bodydata);
        res.send({
            "status": "Success",
            "message": delCustomerdetailRes
        });
    } catch (error) {
        console.log("error", error.message);
    }
};

module.exports = {
    fetchAllCustomerDetails,
    fetchAllData,
    CustomerDetailById,
    customerDetailsUpdate,
    del_customerDetailById
};