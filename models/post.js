'use strict';

var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    names: { type: String, required: true },
    chapter: { type: String, required: true },
    topic: {type: String, required: true },
    text: { type: String, required: true },
    likes: {type: Number, default: 0 },
  	dislikes: {type: Number, default: 0 },
    date: {type : Date, default : Date.now}
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
