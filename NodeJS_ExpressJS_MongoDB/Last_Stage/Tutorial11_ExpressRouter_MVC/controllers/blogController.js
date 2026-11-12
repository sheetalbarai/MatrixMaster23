
const Blog = require('../models/blog');

//blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (req, res) => {
   Blog.find().sort({createdAt: -1}) //sort based on when its created.
        .then((result) =>{ 
            res.render('index', {ttl: 'All Blogs', blogs: result}); 
        })
        .catch((err) => {
            console.log(err);
        })   
}

const blog_details = (req, res) =>{
    Blog.findById(req.params.id)
    .then((result) => {
        res.render('details',{blog: result, ttl: 'Blog Details'});
    })
    .catch((err) => {
        console.log(err);
    })
}

const blog_create_get = (req, res) => {
    res.render('create', {ttl: 'Create a new blog'});
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body);
        blog.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        })  
}

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) =>{
            res.json({redirect: '/blogs'});
        })
        .catch((err) => {
            console.log(err);
    })
        
}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}