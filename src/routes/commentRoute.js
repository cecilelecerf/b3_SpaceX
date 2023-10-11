const express = require("express");
const router = express.Router();
const commentController = require('../controllers/commentController');

router
    .route("/")
        .get(commentController.listenAllComments)
        .post(commentController.createAComment)

    .route("/:id_comment")
        .get(commentController.listenAComment)
        .put(commentController.updateAComment)
        .delete(commentController.deleteAComment)