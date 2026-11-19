
//get the schema of the post model from models/ folder 
const postModel = require ('../models/postModel'); 
const commentModel = require ('../models/commentModel');
const userModel = require ('../models/userModel');


const getAllPosts = async(req, res) => {
    try{
        const posts = await postModel.find().sort({createdAt: -1})
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

//creating a new Post
const postOnePost = async (req, res) => {
    try{
        let newPost = await postModel.create(req.body);
        console.log('New post added');
        res.status(201).json(newPost);
    }
    catch(err){
        const status = err.name === "ValidationError"? 400: 500;
        res.status(status).json({error:err.message});
    };
}
//Delete the post 
const deletePost = async (req, res) => {
    try {
        // find the comments associated with posts to delete from comment model 
        const postInfo = await postModel.findById(req.params.id);
        if (!postInfo) {
            return res.status(404).json({message: 'Post not found'});
        }
        for (const commentID of postInfo.linkedComments) {
            await commentModel.findByIdAndDelete(commentID);
        }
        //delete now the post 
        await postModel.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Post deleted'});
    } catch (err) {
        res.status(500).json({error:err.message});
    }
};

//update the post in database and see the new post on homepage
const updateOnePost = async (req, res) => {
    try{
        const post = await postModel.findByIdAndUpdate(req.params.id, req.body)
       
        if (!post) {
            return res.status(404).json({message: 'Post not found'});
        }
         res.status(200).json({message: 'Post Updated'});
    } 
    catch (err) {
        res.status(500).json({error:err.message});
    }
    
}

//Get all comments
const getAllCommentsPost = async(req, res) => {
    try{
        const post = await postModel.findById(req.params.id).populate("linkedComments");

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json(post.linkedComments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//creating a new comment
const postOneComment = async (req, res) => {
    try{
        const post = await postModel.findById(req.params.id);
        if (!post) {
            return res.status(404).json({message: "Post not found"});
        }

        const commentData = {
            ...req.body,
            linkedPost: post._id
        }
        const newComment = await commentModel.create(commentData);

        post.linkedComments.push(newComment._id);
        await post.save();

        res.status(201).json(newComment);                     
    } 
    catch (err) {
        res.status(500).json({ error: err.message });
    } 
}

//export the controller to be used in routes.js
module.exports = {
    getAllPosts,
    postOnePost,
    updateOnePost,
    deletePost,
    getAllCommentsPost,
    postOneComment
};