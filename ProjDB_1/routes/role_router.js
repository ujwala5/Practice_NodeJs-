const express = require("express");
const { fetchRoleController, fetchUpdateRoleService, deleteRoleController, getAllRoleData_controller, getAllRoleDataById_controller } = require("../controller/fetchRoleController");
const router = express.Router();

router.post('/roles', fetchRoleController);
router.get('/getAllRoleData', getAllRoleData_controller);
router.get('/getAllRoleDataById', getAllRoleDataById_controller);
router.patch('/updateRoles', fetchUpdateRoleService);
router.delete('/deleteRole', deleteRoleController);

module.exports = router;