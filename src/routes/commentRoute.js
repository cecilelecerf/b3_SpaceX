const express = require("express");
const router = express.Router();
const commentController = require('../controllers/commentController');

router
    .route("/posts/:id_post/comments")
        .get(commentController.listenAllComments)
        .post(commentController.createAComment);

router
    .route("/comments/:id_comment")
        .get(commentController.listenAComment)
        .put(commentController.updateAComment)
        .delete(commentController.deleteAComment);

module.exports = router;