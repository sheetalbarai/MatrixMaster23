
const express = require("express");
const routes = express.Router();
const postController = require("../controller/postController");
const commentController = require("../controller/commentController");

//comments from the posts from controller
// Post routes
routes.get("/", postController.homePosts);
routes.get("/showAPost/:id", postController.showAPost);
routes.get("/deletePost/:id", postController.deletePost);
routes.get("/editPost/:id", postController.editPost);


routes.post("/updatePost/:id", postController.updatePost);
routes.post("/createNewPost", postController.createNewPost);
//comment route
routes.get("/deleteAComment/:commentID/:postID", commentController.deleteComment);
routes.post("/createNewComment/:postID", commentController.createNewComment);

routes.get('/{*splat}', postController.notFoundPage);

//Export all routes to be used in app.js
module.exports = routes;