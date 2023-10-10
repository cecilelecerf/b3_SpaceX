const mongose = require("mongoose");
const Schema = mongose.Schema;

let postSchema = new Schema({
    title: {
        type: String,
        required : "Le titre est requis"
    },
    content: {
        type: String,
        required : "Le contenu est requis"
    },
    created_at: {
        type : Date,
        default : Date.now
    }
})