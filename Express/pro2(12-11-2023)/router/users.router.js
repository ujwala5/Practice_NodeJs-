const express = require("express");
const { fetch_single_user_details_controller } = require("../controller/users.controller");
const routes = express.Router();

routes.get("/fetch_single_user_details", fetch_single_user_details_controller);

module.exports = routes;                                                                                                       const express = require("express");
const { fetch_single_user_details_controller } = require("../controller/users.controller");
const routes = express.Router();

routes.get("/fetch_single_user_details", fetch_single_user_details_controller);

module.exports = routes;