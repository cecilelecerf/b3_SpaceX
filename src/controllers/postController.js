const Post = require('../models/postModel');

exports.listenAllPosts = async (req,res) => {
    //ES6
    // Post
    //     .find({})
    //     .then(posts => {
    //        res.status(200);
    //        res.json(posts); 
    //     })
    //     .catch(error => {
    //         res.status(500);
    //         console.log(error);
    //         res.json({message : "Erreur serveur."});
    //     })

    try{
        const posts = await Post.find({});
        res.status(200);
        res.json(posts);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message : "Erreur serveur."});
    }
}