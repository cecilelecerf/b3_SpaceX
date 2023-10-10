const Post = require('../models/postModel');

exports.listenAllPosts = (req,res) => {
    postMessage.find({}, (error, post) =>{
        if(error){
            res.status(500);
            console.log(error);
            res.json({message : "Erreur serveur."});
        }
        else{
            res.status(200);
            res.json(posts);
        }
    })
}