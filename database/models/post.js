const mongoose = require('mongoose');

/*
└───database
    ├───collection
    │   ├───document
    │   ├───document
    │   └───document
    └───collection
        └───document
            ├───File
            └───File
*/

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;