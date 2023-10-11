const Comment = require("../models/commentModel");
const Post = require("../models/postModel");
const nullifiable = () => {
        res.status(404);
        res.json({message: "Not found a comment with this id"})
}

exports.listenAllComments = async (req,res) => {
    try{
        const comments = await Comment.find({post_id: req.params.id_post});
        res.status(200);
        res.json(comments);
    } catch (error) {
        res.status(500);
        res.json({message : "Error server"});
        console.log(error);
    }
}

exports.createAComment = async (req,res) => {
    try{
        await Post.findById(req.params.id_post);
        const newComment = new Comment({...req.body, post_id : req.params.id_post});
        try{
            const comment = await newComment.save();
            res.status(201);
            res.json(comment);
        } catch (error) {
            res.status(500);
            res.json({message : "Error server (db)"});
            console.log(error);
        }
    } catch (error){
        res.status(500);
        res.json({message : "Error server (post_id)"});
        console.log(error);
    }
}

exports.listenAComment = async (req,res) => {
    try{
        const comment = await Comment.findById(req.params.id_comment);
        if(!comment)
            nullifiable();
        else{
            // console.log(comment.post_id);
            // comment = comment + Post.findById(comment.post_id);
            res.status(200);
            res.json(Post.findById(comment.post_id));
        }
    } catch (error) {
        res.status(500);
        res.json({message : "Error server"});
        console.log(error);
    }
}

exports.updateAComment = async (req,res) => {
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id_comment, req.body, {new : true});
        if(!comment)
            nullifiable();
        else{
            res.status(200);
            res.json(comment);
        }
    } catch (error) {
        res.status(500);
        res.json({message : "Error server"});
        console.log(error);
    }
}

exports.deleteAComment = async (req,res) => {
    try{
        const comment = await Comment.findByIdAndDelete(req.params.id_comment);
        if(!comment)
            nullifiable();
        else{
        res.status(200);
        res.json(comment);
        }
    } catch (error) {
        res.status(500);
        res.json({message : "Error server"});
        console.log(error);
    }
}

