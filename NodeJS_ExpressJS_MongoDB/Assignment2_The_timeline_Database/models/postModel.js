const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    message: {
        type: String,
        required:[true,'Message should be minimum 25 characters'],
        minlength:[25,"Post should be minimum 25 characters"]
    }
}, {timestamps: true});

module.exports = mongoose.model('Post',postSchema);