const asyncHandler = require('express-async-handler');

const Post = require('../models/postModel');

const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find();
  res.status(200).json(posts);
});

const setPost = asyncHandler(async (req, res) => {
  console.log(req.body);

  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add text');
  }

  const post = await Post.create({ text: req.body.text });
  res.status(200).json(post);
});

module.exports = {
  getPosts,
  setPost
};