const express = require('express');
const router = express.Router();
const { fetch_single_user_detail_controller } = require('../controllers/user.controller.js');

router.get('/fetch_single_user_detail', fetch_single_user_detail_controller);
router.get ('/')

module.exports = router;