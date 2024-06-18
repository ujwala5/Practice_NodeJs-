const express = require('express');
const { userRoleMapData_Controller, getUserRoleMap_controller, getUserRoleMapById_controller, userRoleMapUpdate_Controller, userRoleMapDel_controller } = require('../controller/user_map_role_controller');

const router = express.Router();

router.post('/userRoleMap', userRoleMapData_Controller);
router.get('/getAllUserMapRole', getUserRoleMap_controller);
router.get('/getAllUserMapRoleById', getUserRoleMapById_controller);
router.put('/userRoleMapUpdate', userRoleMapUpdate_Controller);
router.delete('/deleteUserMapRole', userRoleMapDel_controller);

module.exports = router;