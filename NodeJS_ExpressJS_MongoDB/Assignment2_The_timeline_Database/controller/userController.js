
//get the schema of the post model from models/ folder 
const postModel = require ('../models/postModel'); 

const homePosts = (req, res) => {
    postModel.find().sort({createdAt: -1})
        .then((result) =>{
             res.render("index", {ttl: 'All posts', error: null, comments: result});
        })
        .catch((err) =>{
            console.log(err);
        });
}
// See more on 1 post from user
const showAPost = (req, res) => {
    postModel.findById(req.params.id)
        .then((result) => {
            res.render("showAPost", {ttl: 'Show A Post', comment: result});
        })
        .catch((err) =>{
            console.log(err)
        })
}

//Delete the post 
const deletePost = (req, res) => {
    postModel.findByIdAndDelete(req.params.id)
        .then((result) => {
            console.log( "Post is deleted ");
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        })
}

//Edit the post
const editPost = (req, res) => {
    postModel.findById(req.params.id)
        .then((result) =>{
            res.render('updatePost', {ttl: 'Update A Post', comment: result});
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

//creating a new Post
const createNewPost = (req, res) => {
    let newPost = new postModel(req.body);
    newPost.save()
        .then(() => {
            console.log('New post added');
            res.redirect('/');
        })
        .catch((err) => {
            const status = err.name === "ValidationError"? 400: 500;
            res.status(status).render('index', {ttl: 'Error in posting', error:err, comments: []});
        });
}

// const createNewPost = async (req, res) => {
//     try{
//     let newPost = new postModel(req.body);
//     newPost.save()
//       .then(() => {
//             console.log('New post added');
//             res.redirect('/');
//         })
//     }
//     catch(err) {
//         const comments = await postModel.find().sort({ createdAt: -1 });
//         const error = err.name === 'ValidationError'
//             ? Object.values(err.errors).map(item => item.message).join(' ')
//             : 'Post could not be saved. Please try again.';

//         res.status(err.name === 'ValidationError' ? 400 : 500).render('index', {ttl: 'All posts', error, comments });
//     }
// };


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