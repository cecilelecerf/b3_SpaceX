const Comment = require("../models/commentModel");

exports.listenAllComments = async (req,res) => {
    try{
        const comments = await Comment.find({});
        res.status(200);
        res.json(comments);
    } catch (error) {
        res.status(500);
        res.json({message : "Error server"});
        console.log(error);
    }
}

exports.createAComment = async (req,res) => {
    const newComment = new Comment(req.body);
    try{
        const comment = await newComment.save();
        res.status(200);
        res.json(comment);
    } catch (error) {
        res.status(500);
        res.json({message : "Error server"});
        console.log(error);
    }
}

exports.listenAComment = async (req,res) => {
    try{
        const comment = await Comment.findById(req.params.id_comment);
        if(comment===null){
            res.status(404);
            res.json({message: "Not found a comment with this id"})
        }
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

exports.updateAComment = async (req,res) => {
    try{
        const comment = await Comment.findByIdAndUpdate(req.params.id_comment, req.body, {new : true});
        res.status(200);
        res.json(comment);
    } catch (error) {
        res.status(500);
        res.json({message : "Error server"});
        console.log(error);
    }
}

exports.deleteAComment = async (req,res) => {
    try{
        const comment = await Comment.findByIdAndDelete(req.params.id_comment);
        res.status(200);
        res.json(comment);
    } catch (error) {
        res.status(500);
        res.json({message : "Error server"});
        console.log(error);
    }
}

