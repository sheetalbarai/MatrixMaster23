
const express = require("express");
const routes = express.Router();
const userController = require("../controller/userController");

//comments from the users from controller
// Home page route
routes.get("/", userController.homePosts);

routes.get("/showAPost/:id", userController.showAPost);

routes.get("/deletePost/:id", userController.deletePost);

routes.get("/editPost/:id", userController.editPost);

routes.post("/updatePost/:id", userController.updatePost);

routes.post("/createNewPost", userController.createNewPost);

routes.get('/{*splat}', userController.notFoundPage);

//Export all routes to be used in app.js
module.exports = routes;