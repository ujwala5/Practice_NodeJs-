const express = require("express");
const { accountUserMapDataInsert_controller, fetchAllAccountUserMapData, getAccountUserMapData, accountUpdate_Controller, deleteAccountUser_Controller } = require("../controller/account_user_map_controller");
const router = express.Router();

router.post('/accountUserMapInsert', accountUserMapDataInsert_controller);
router.get('/fetachAllAccountUserMap', fetchAllAccountUserMapData);
router.get('/fetchAccountDataById', getAccountUserMapData);
router.patch('/updateAccountUserData', accountUpdate_Controller);
router.delete('/deleteAccountUserData', deleteAccountUser_Controller);

module.exports = router;