
const express = require("express");
const routes = express.Router();
const userController = require("../controller/userController");

//comments from the users from controller
// Home page route
routes.get("/", userController.comments);


//Export all routes to be used in app.js
module.exports = routes;