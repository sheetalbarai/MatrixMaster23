const express = require('express');
const router = express.Router();

const blogController = require('../controllers/blogController');

//blog routes
router.get('/blogs',blogController.blog_index);
router.post('/blogs', blogController.blog_create_post);
//Create page route
router.get('/blogs/create', blogController.blog_create_get);
router.get('/blogs/:id', blogController.blog_details);  
//fetch api (AJAX)
router.delete('/blogs/:id',blogController.blog_delete);

module.exports = router;