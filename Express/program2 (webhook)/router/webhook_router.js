const express = require('express');
const router = express.Router();

const { my_webhook_controller } = require("../controller/my_webhook_controller.js");

router.post('/my-webhook', my_webhook_controller);

module.exports = router;

