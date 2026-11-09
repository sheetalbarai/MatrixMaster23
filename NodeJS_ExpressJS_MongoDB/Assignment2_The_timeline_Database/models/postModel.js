const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is require']
    },
    message: {
        type: String,
        required:[true,'Post a message is required'],
        min:[25,"Post should be minimum 25 characters"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Post',postSchema);