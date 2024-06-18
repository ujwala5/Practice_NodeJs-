const express = require('express');
const { fetchAllCustomerDetails, fetchAllData, CustomerDetailById, customerDetailsUpdate, del_customerDetailById } = require('../controller/customer_details_controller');
const router = express.Router();

router.post('/cutomerDetails', fetchAllCustomerDetails);
router.get('/getAllData',fetchAllData);
router.get('/getCustomerDetailById', CustomerDetailById);
router.patch('/modifyCustomerDetails', customerDetailsUpdate);
router.delete('/delCustomerDetail',del_customerDetailById);

module.exports = router;