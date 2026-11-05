const express = require('express');
const morgan = require('morgan'); // third party middleware for logging requests

//Express app invoking the function 
const app = express(); 
const port = 3000;

//middleware & static files
app.use(express.static('public')); // built-in middleware to serve static files

// Use morgan middleware for logging requests
/*---------------------------------------------*/
app.use(morgan('dev'));

//Register view Engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//middelware & static files
// app.use((req, res, next) => {
//     console.log('New request made:');
//     console.log('Host:', req.hostname);
//     console.log('Path:', req.path);
//     console.log('Method:', req.method);
//     next();

// })

//Routing 
app.get('/',(req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'}
    ];
    //res.send('<h1>Home Page</h1>');
    //res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', {title: 'Home', blogs});
});

//About page route
app.get('/about',(req, res) => {
    //res.send('<h1>About Page</h1>');
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: 'About'});
});

//Create page route
app.get('/blogs/create',(req, res) => {
    res.render('create', {title: 'Create a new blog'});
});

//default route - 404 not found 
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.render('create');
    res.status(404).render('404', {title: '404'});
});