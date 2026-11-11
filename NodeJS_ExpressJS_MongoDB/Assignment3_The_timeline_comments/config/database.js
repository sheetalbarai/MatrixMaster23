
//Database connection
const mongoose = require('mongoose');

// get the mongodb link from the .env file
require('dotenv').config();
const dbURI = process.env.MONGODB_URI;

if(!dbURI){
     throw new Error('MONGODB_URI is not set. Add it your .env file');
}

module.exports = mongoose.connect(dbURI);