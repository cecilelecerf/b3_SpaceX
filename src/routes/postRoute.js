const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router 
    .route('/')
        .get(postController.listenAllPosts)
        // .delete(postController.deleteAllPosts)
        .post(postController.createAPost);

router  
    .route('/:id_post')
        .delete(postController.deleteAPost)
        .patch(postController.patchAPost)
        .put(postController.putAPost)
        .get(postController.listenPost);

module.exports = router;