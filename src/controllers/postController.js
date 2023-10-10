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
        res.json({message : "Error server."});
    }
};
exports.deleteAllPosts = async(req, res) => {
    try{
        const post = await Post.deleteMany();
        res.status(200);
        res.json(post);
    } catch(error){
        res.status(500);
        console.log(error);
        res.json({message : "Error server."})
    }
}

exports.createAPost =  async(req, res) => {
    const newPost = new Post(req.body);
    try{
        const post = await newPost.save();
        res.status(200);
        res.json(post);
    } catch(error) {
        res.status(500);
        console.log(error);
        res.json({message : `Error server.`});
    }
}





// req.params.id_params

exports.listenPost = async (req,res) => {
    try{
        const post = await Post.findById(req.params.id_post);
        res.status(200);
        res.json(post);
    } catch(error){
        res.status(500);
        console.log(error);
        res.json({message : "Error server."})
    }
}

exports.updateAPost = async(req, res) => {
    const updatePost = new Post(req.body);
    try{
        const post = await Post.findByIdAndUpdate(req.params.id_post, {title : updatePost.title, content : updatePost.content});
        res.status(200);
        res.json(updatePost);
    } catch(error){
        res.status(500);
        console.log(error);
        res.json({message : "Error server."})
    }   
}

exports.deleteAPost = async(req, res) => {
    try{
        await Post.findByIdAndDelete(req.params.id_post);
        res.status(200);
        res.json({message : 'Article supprimé'});
    } catch(error){
        res.status(500);
        console.log(error);
        res.json({message : "Error server."})
    }
}


