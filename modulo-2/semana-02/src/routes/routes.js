const express = require("express");
const routes = express.Router();
const controller = require("../controllers/controllers");

routes.patch("/names", controller.positions);

module.exports = routes;
