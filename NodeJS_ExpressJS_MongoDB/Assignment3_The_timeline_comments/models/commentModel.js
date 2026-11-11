const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name.']
    },
    comment: {
        type: String,
        required:[true,'Comment should be minimum 15 characters'],
        minlength:[15,"Comment should be minimum 15 characters"]
    },
    linkedPost: {
        type: Schema.Types.ObjectId,
        ref: 'post'
    }
}, {timestamps: true});

module.exports = mongoose.model('comment',commentSchema);