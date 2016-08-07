'use strict';

var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    name: { type: String, required: true },
    topic: {type: String, required: true},
    text: { type: String, required: true },
    date: {type : Date, default : Date.now}
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
