const express = require('express');
const router = express.Router();
const { getPosts, setPost } = require('../controllers/postController');

router.get('/', getPosts);

router.post('/', setPost);

module.exports = router;