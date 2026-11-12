const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const morgan = require('morgan');


//Express app invoking the function 
const app = express(); 
const port = 3000;

//Register view Engine
app.set('view engine', 'ejs');

//middelware
app.use(express.urlencoded({extended:true}));
// Use morgan middleware for logging requests
/*---------------------------------------------*/
app.use(morgan('dev'));

//connect to mongoDB
/* listen to the server only when the database is connected.
so the app listen call is moved to then block after the database is connected*/
//.env contains the connection string to MongoDB
require('dotenv').config();
const dbURI = process.env.MONGODB_URI;

if(!dbURI){
    throw new Error('MONGODB_URI is not set. Add it your .env file');
}

mongoose.connect(dbURI)
    .then(() =>{
        console.log('DB is connected.');
        //listen for requests
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) =>{console.log(err)})

//mongoose and mongo, sandbox handler
app.get('/add-blog', (req,res) =>{
    const blogNew = new Blog({
        title: 'new blog3',
        snippet: 'testing addition of new blog',
        body: 'Everyday is a new day'
    });

    blogNew.save()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {console.log(err)})
});

//fetch all written blogs 
// app.get('/all-blogs',(req,res) => {
//     Blog.find()
//         .then((result) =>{ 
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })

// });
// find a single blog
app.get('/single-blog', (req, res) => {
    Blog.findById('6aef13192394d3c12ddfb376')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
})



//Routing 
app.get('/',(req, res) => {
    //const blogs = [
    //    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'}
    //];
    //res.send('<h1>Home Page</h1>');
    //res.sendFile('./views/index.html', {root: __dirname});
    //res.render('index', {ttl: 'Home', blogs});
    res.redirect('/blogs');
});

//About page route
app.get('/about',(req, res) => {
    //res.send('<h1>About Page</h1>');
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {ttl: 'About'});
});

//blog routes
app.get('/blogs',(req, res) =>{
      Blog.find().sort({createdAt: -1}) //sort based on when its created.
        .then((result) =>{ 
            res.render('index', {ttl: 'All Blogs', blogs: result}); 
        })
        .catch((err) => {
            console.log(err);
        })
})

app.post('/blogs',(req,res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then((result) => {
        res.redirect('/');
    })
    .catch((err) => {
        console.log(err);
    })
})

//Create page route
app.get('/blogs/create',(req, res) => {
    res.render('create', {ttl: 'Create a new blog'});
});


app.get('/blogs/:id',(req, res) => {
    Blog.findById(req.params.id)
    .then((result) => {
        res.render('details',{blog: result, ttl: 'Blog Details'});
    })
    .catch((err) => {
        console.log(err);
    })
})

//fetch api (AJAX)
app.delete('/blogs/:id', (req,res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) =>{
            res.json({redirect: '/blogs'});
        })
        .catch((err) => {
            console.log(err);
    })
        
})


//default route - 404 not found 
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.render('create');
    res.status(404).render('404', {ttl: '404'});
});