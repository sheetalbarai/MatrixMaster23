// app.js is the primary file for this Tweeter application

// get the express package
const express = require('express');
const app = express();

//for the session cookies
const cookieParser = require('cookie-parser');

//log every user activity
const morgan = require('morgan');
app.use(morgan('dev'));

//Port number
const port = 7000;

//importing routes
const routes = require('./config/routes');

//EJS engine setup
app.set('view engine','ejs');

//cookie parser
app.use(cookieParser());

//static files css images are stored in public folder and 
//we are telling express to use public folder for all static files.
app.use(express.static('public'));

//form inputs to be encoded /express 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//using 'routes
app.use('/',routes);

//Connect to the database and then start listening to app/server after that 
async function startApp() {
    try {
        await require('./config/database');
        console.log('Database is connected');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (err) {
        console.error('Failed to connect to the database; app was not started.', err);
        process.exitCode = 1;
    }
}
startApp();

