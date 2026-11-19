
// get the express package
const express = require('express');
const app = express();

//importing routes
const apiRoutes = require('./config/apiRoutes');
const routes = require('./config/routes');

//Port number
const port = 3000;

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



//EJS engine setup
app.set('view engine','ejs');

//static files css images are stored in public folder and 
//we are telling express to use public folder as static folder
app.use(express.static('public'));

//form inputs to be encoded /express 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//using 'routes

app.use('/api',apiRoutes);
app.use('/',routes);

