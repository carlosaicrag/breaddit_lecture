const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    const users = await User.findAll();
    console.log(users);
    res.render('users', {
        users
    });
});

module.exports = router;