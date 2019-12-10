var mongoose = require('mongoose');

var postsSchema = new mongoose.Schema({
    title: String,
    content: String,
    slug: String,
});

var Posts = mongoose.model('Posts', postsSchema, 'posts');

module.exports = Posts;