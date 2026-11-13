const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required:[true,'Password is a must']
    },
    firstName: {
        type: String,
        required:[true,'First Name is a required']
    },
    lastName: {
        type: String,
        required:[true,'Last Name is a required']
    },
}, {timestamps: true});

module.exports = mongoose.model('User',userSchema);