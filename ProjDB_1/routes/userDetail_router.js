const express = require('express');
const { user_Detail_Controller, userDetailUpdate_controller, userDetail_controller, getUserDetailByIDController, deleteUserDetail_controller, getAlluserDetail_controller } = require('../controller/user_Detail_Controller');
const router = express.Router();

router.post('/userDetail', user_Detail_Controller);
router.patch('/userDetailUpdate', userDetailUpdate_controller);
router.get('/getAllUserDetail', getAlluserDetail_controller);
router.get('/getUserDetaileById', getUserDetailByIDController);
router.delete('/deleteUserDetail', deleteUserDetail_controller);

module.exports = router;