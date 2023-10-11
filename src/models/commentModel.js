const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let commentSchema = new Schema({
    name:{
        type: String,
        required: "Le titre est obligatoire"
    },
    message:{
        type: String,
        required: "Le message est obligatoir"
    },
    created_at:{
        type: Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Comment", commentSchema);