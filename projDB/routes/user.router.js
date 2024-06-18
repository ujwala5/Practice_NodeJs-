
const express = require('express');
const router = express.Router();

const { get_users_controller, get_users_controller_by_id, get_detail_by_accountIsAndEmpID, get_detail_by_Id, insertUserdata } = require('../controller/user.controller.js');

router.get('/users', get_users_controller);
router.get('/users/:id', get_users_controller_by_id);
router.get('/users/:accountId/:EmpID', get_detail_by_accountIsAndEmpID);
router.post('/userDetailbyIds', get_detail_by_Id);
router.post('/userDetailbyIdParams/:id1/:id2', get_detail_by_Id);
router.post('/insertUserData', insertUserdata);

// router.get('/', (req, res) => {
//     console.log("Hello world");
//     res.send("Hello world");
// });

module.exports = router;