const express = require('express');
const { addParts_controller, getAllPartData_controller, getPartsData_controller, modifyParts_controller, delPartsById_controller } = require('../controller/Parts_controller');
const router = express.Router();

router.post('/addParts', addParts_controller);
router.get('/getAllPartsData', getAllPartData_controller);
router.get('/getPartsDataById', getPartsData_controller);
router.put('/modifyParts', modifyParts_controller);
router.delete('/deletePartsById', delPartsById_controller);
module.exports = router;