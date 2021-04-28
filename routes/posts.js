const express = require('express');
const router = express.Router();
const { Post } = require('../models');
const asyncHandler = require('../util/asyncHandler');

router.get('/', async (req, res) => {
    const posts = await Post.findAll();
    // res.send('Hello, we made it!');
    res.render("post_index.pug", { posts });
});

router.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const post = await Post.findByPk(id);
    if (post) {
        await post.destroy();
        res.json({success: "success"});
    } else {
        res.status(500);
        res.json({success: "failure"});
    }
});

router.post('/:id/delete', async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    await post.destroy();
    res.redirect('/posts'); 
});

module.exports = router;