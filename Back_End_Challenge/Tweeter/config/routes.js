const express = require("express");
const routes = express.Router();

const tweetController = require("../controller/tweetController");
const userController = require("../controller/userController");

const userAuth = require("../auth/auth"); //middelware


// USER routes
routes.get('/', userAuth.isRegisterLoginEn,userController.renderLoginRegisterPage);
routes.post('/', userController.register);
routes.post('/login', userController.login);
routes.get('/logout', userController.logout);


//TWEET routes
routes.get("/tweet", userAuth.isLoggedIn, tweetController.tweetHomePage);
routes.get('/addTweet', userAuth.isLoggedIn, tweetController.addTweet);
routes.post('/addTweet', userAuth.isLoggedIn, tweetController.createNewTweet);
routes.get('/tweet/:id', userAuth.isLoggedIn,tweetController.formatTweet);
routes.get('/tweet/edit/:id',userAuth.isLoggedIn, tweetController.editTweet);
routes.get('/tweet/delete/:id', userAuth.isLoggedIn,tweetController.deleteTweet);
routes.post('/tweet/edit/:id',userAuth.isLoggedIn, tweetController.updateTweet);

//404 not found
routes.get('/{*splat}', tweetController.notFoundPage);

//Export all routes to be used in app.js
module.exports = routes;