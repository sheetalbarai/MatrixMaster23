//get the schema of the tweetModel from models/ folder 
const tweetModel = require ('../models/tweetModel'); 
const userModel = require ('../models/userModel');

const tweetHomePage = async (req, res) => {
    tweetModel.find().sort({createdAt: -1})
        .then((result) =>{
            res.render("tweetHomePage", {
                ttl: 'All posts',
                error: null,
                tweets: result});
        })
        .catch((err) =>{ // work on error
            console.log(err);
        });
}

const addTweet = (req, res)=> {
    res.render('addTweet', {ttl: 'Add New Tweet', error: null});
}

const createNewTweet = async(req, res) => {
    //creating a new tweet
    let newTweet = new tweetModel(req.body);
        console.log(newTweet);
        newTweet.save()
            .then(() => {
                console.log('New Tweet added');
                res.redirect('/tweet');
            })
            .catch((err) => {
                const status = err.name === "ValidationError"? 400: 500;
                res.status(status).render('/tweet', {
                    ttl: 'Error in posting tweet',
                    error:err,
                    tweets: []});
            });
    }

//editing/deleting = formating Tweet
const formatTweet = async(req, res) =>{
    tweetModel.findById(req.params.id)
        .then((result) => {
            res.render("formatTweet", {ttl: 'Format Tweet', tweet:result});
        })
        .catch((err) =>{
            console.log(err)
        })
}

//Delete the post 
const deleteTweet = async (req, res) => {
    try {
        await tweetModel.findByIdAndDelete(req.params.id);
        res.redirect('/tweet');
    } catch (err) {
        console.error(err);
        res.status(500).send('Unable to delete Tweet');
    }
};

//Edit tweet
const editTweet = (req, res) => {
    tweetModel.findById(req.params.id)
        .then((result) =>{
            res.render('editTweet', {ttl: 'Edit Tweet', tweet: result});
        })
        .catch((err) => {
           console.log(err);
        })
}
//update the post in database and see the new post on homepage
const updateTweet = (req, res) => {
     tweetModel.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            console.log('Tweet updated');
            res.redirect('/tweet');
        })
        .catch((err) => {
            console.log(err);
        })
}


const notFoundPage = (req, res) => {
    res.status(404).render("404",{ttl: '404 error'});
}

module.exports = {
    tweetHomePage,
    createNewTweet,
    addTweet,
    formatTweet,
    editTweet,
    deleteTweet,
    updateTweet,
    notFoundPage
}