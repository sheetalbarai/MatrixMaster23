const express = require('express');

//Express app invoking the function 
const app = express(); 
const port = 3000;

//Register view Engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//Routing 
app.get('/',(req, res) => {
    //res.send('<h1>Home Page</h1>');
    //res.sendFile('./views/index.html', {root: __dirname});
    res.render('index');
});

app.get('/about',(req, res) => {
    //res.send('<h1>About Page</h1>');
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about');
});

//redirect
app.get('/about-us',(req, res) => {
    res.redirect('/about');
});

//default route - 404 not found 
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404');
});