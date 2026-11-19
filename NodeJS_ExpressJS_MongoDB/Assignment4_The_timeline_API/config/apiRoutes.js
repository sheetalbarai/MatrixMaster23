const express = require("express");
const apiRoutes = express.Router();
const apiController = require("../controller/apiController");
const postController = require("../controller/postController");

//comments from the posts from controller
// Post API
apiRoutes.get("/get-posts", apiController.getAllPosts);
apiRoutes.post("/create-post", apiController.postOnePost);
apiRoutes.put("/edit-post/:id", apiController.updateOnePost);
apiRoutes.delete("/delete-post/:id", apiController.deletePost);
//Comment POST API
apiRoutes.get("/get-post-comments/:id", apiController.getAllCommentsPost);
apiRoutes.post("/post-post-comment/:id", apiController.postOneComment);

apiRoutes.get('/{*splat}', postController.notFoundPage);

//Export all apiRoutes to be used in app.js
module.exports = apiRoutes;