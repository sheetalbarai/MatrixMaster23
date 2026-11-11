//get the schema of the post model from models/ folder 
const postModel = require ('../models/postModel'); 
const commentModel = require ('../models/commentModel');

//creating a new comment
const createNewComment = (req, res) => {
    let postID = req.params.postID;
    let commentData = {
        ...req.body,
        linkedPost: postID
    }
    let newComment = new commentModel(commentData);
     newComment.save()
        .then(() => {
            console.log('New Comment added');
            //update the post with the comments id
            postModel.findById(postID)
                .then((postInfo) =>{
                    postInfo.linkedComments.push(newComment); //push the comments
                    postInfo.save() //save into model 
                        .then((result) => {
                            res.redirect('/');
                        })
                        .catch((err) => {
                            console.log(err);
                        }) 
                })
                .catch((err) => {
                    console.log(err);
                })      
        })
        .catch((err) => {
            postModel.find().sort({createdAt: -1}) //just to render page again with error 
                .populate("linkedComments")
                .then((result) =>{
                    const status = err.name === "ValidationError"? 400: 500;
                    res.status(status).render('index', {ttl: 'Error in posting comments', error:null, errorComment: err, posts:result});
                })
                .catch((err1) =>{
                    console.log(err1);
                });
        });
}

//creating a new comment
const deleteComment = (req, res) => {
    console.log(req.params);
   
    commentModel.findByIdAndDelete(req.params.commentID)
        .then((result) => {
            console.log( "Comment is deleted ");
            postModel.findById(req.params.postID)
                .then((postInfo) => {
                    postInfo.linkedComments.pull(req.params.commentID);
                    postInfo.save() //save into model 
                        .then((result) => {
                            res.redirect('/');
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                })
                .catch((err)=>{
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    createNewComment,
    deleteComment
}