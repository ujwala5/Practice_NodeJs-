const express = require("express");
const { fetchAllAccountDetails_controller, updateAccounts_controller, deleteAccount_controller, getAllAccountController, getAllAccountControllerById } = require("../controller/fetchAllAccountDetails.controller");
const router = express.Router();

router.post('/accounts', fetchAllAccountDetails_controller);
router.get('/getAllaccount', getAllAccountController);
router.get('/getAllaccountById', getAllAccountControllerById);
router.patch('/updateAccounts', updateAccounts_controller);
router.delete('/accountDelete', deleteAccount_controller);

module.exports = router;