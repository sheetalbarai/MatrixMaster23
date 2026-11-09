
//get the schema of the post model from models/ folder 
const postModel = require ('../models/postModel'); 

const homePosts = (req, res) => {
    postModel.find().sort({createdAt: -1})
        .then((result) =>{
             res.render("index", {ttl: 'All posts', comments: result});
        })
        .catch((err) =>{
            console.log(err);
        });
}
const showAPost = (req, res) => {
    
    postModel.findById(req.params.id)
        .then((result) => {
            console.log(result);
            res.render("showAPost", {ttl: 'Show A Post', comment: result});
        })
        .catch((err) =>{
            console.log(err)
        })
}

const createNewPost = (req, res) => {
    let newPost = new postModel(req.body);
    newPost.save()
        .then((result) => {
            console.log('New post added');
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        })
}

const notFoundPage = (req, res) => {
    res.status(404).render("404",{ttl: '404 error'});
}

//export the controller to be used in routes.js
module.exports = {
    homePosts,
    showAPost,
    createNewPost,
    notFoundPage
};