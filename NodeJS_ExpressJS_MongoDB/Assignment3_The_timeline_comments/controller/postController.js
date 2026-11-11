
//get the schema of the post model from models/ folder 
const postModel = require ('../models/postModel'); 
const commentModel = require ('../models/commentModel');

const homePosts = (req, res) => {
    postModel.find().sort({createdAt: -1})
        .populate("linkedComments")
        .then((result) =>{
            res.render("index", {ttl: 'All posts', error: null, errorComment: null, posts: result});
        })
        .catch((err) =>{
            console.log(err);
        });
}
//creating a new Post
const createNewPost = (req, res) => {
    let newPost = new postModel(req.body);
    console.log(newPost);
    newPost.save()
        .then(() => {
            console.log('New post added');
            res.redirect('/');
        })
        .catch((err) => {
            const status = err.name === "ValidationError"? 400: 500;
            res.status(status).render('index', {ttl: 'Error in posting', error:err, errorComment: null, posts: []});
        });
}

// See more on 1 post from user
const showAPost = (req, res) => {
    postModel.findById(req.params.id)
        .then((result) => {
            res.render("showAPost", {ttl: 'Show A Post', post: result});
        })
        .catch((err) =>{
            console.log(err)
        })
}

//Delete the post 
const deletePost = async (req, res) => {
    try {
        // find the comments associated with posts to delete from comment model 
        const postInfo = await postModel.findById(req.params.id);
        if (!postInfo) {
            return res.status(404).send('Post not found');
        }
        for (const commentID of postInfo.linkedComments) {
            await commentModel.findByIdAndDelete(commentID);
        }
        //delete now the post 
        await postModel.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Unable to delete post');
    }
};

//Edit the post
const editPost = (req, res) => {
    postModel.findById(req.params.id)
        .then((result) =>{
            res.render('updatePost', {ttl: 'Update A Post', post: result});
        })
        .catch((err) => {
           console.log(err);
        })
}

//update the post in database and see the new post on homepage
const updatePost = (req, res) => {
    console.log(req.body, req.params);
    postModel.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            console.log('Post updated');
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
    editPost,
    updatePost,
    deletePost,
    notFoundPage
};