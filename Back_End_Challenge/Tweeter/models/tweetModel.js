const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        minlength: [20, 'Title should be longer than 20 characters']
    },
    tweet: {
        type: String,
        required:[true,'Tweet Message is a must'],
        maxlength:[50, 'Tweet message should be maximum 50 characters']
    }
}, {timestamps: true});

module.exports = mongoose.model('Tweet',tweetSchema);