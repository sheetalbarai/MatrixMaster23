
const express = require("express");
const routes = express.Router();
const userController = require("../controller/userController");

//comments from the users from controller
// Home page route
routes.get("/", userController.homePosts);

routes.get("/showAPost/:id", userController.showAPost);

routes.post("/createNewPost", userController.createNewPost);


routes.get('/404', userController.notFoundPage);

//Export all routes to be used in app.js
module.exports = routes;