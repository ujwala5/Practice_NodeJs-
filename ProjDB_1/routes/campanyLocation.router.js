const express = require('express');
const { addCompanyLocation, getLocationData, modifyComLocation, delCompLocation } = require('../controller/CompanyLocation_controller');
const router = express.Router();

router.post('/addCompanyLocation', addCompanyLocation);
router.get('/getcompanyLocation', getLocationData);
router.patch('/modifyLocation',modifyComLocation)
router.delete('/deleteCompLocation', delCompLocation);

module.exports = router;