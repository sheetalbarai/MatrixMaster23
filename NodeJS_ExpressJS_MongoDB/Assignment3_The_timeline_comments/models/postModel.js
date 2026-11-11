const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    message: {
        type: String,
        required:[true,'Message should be minimum 25 characters'],
        minlength:[25,"Post should be minimum 25 characters"]
    },
    linkedComments:[
        {
        type: Schema.Types.ObjectId,
        ref: 'comment'
        }
    ]
}, {timestamps: true});

module.exports = mongoose.model('post',postSchema);