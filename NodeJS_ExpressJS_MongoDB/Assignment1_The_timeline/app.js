const express = require('express');
const app = express();
const path = require('path');
//importing routes
const routes = require('./config/routes');

//Port number
const port = 3000;

//EJS engine setup
app.set('view engine','ejs');

//listen to the port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//static files css images are stored in public folder and 
//we are telling express to use public folder as static folder
app.use(express.static(path.join(__dirname, "public")));

//using 'routes
app.use('/',routes);

