const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.get('/', async (req, res) => {
    const users = await User.findAll();
    // console.log(users);
    res.render('users', {
        users
    });
});

router.get('/new', (req, res) => {
    res.render('users_new'); // renders HTML, not full http request
});

router.post('/', async (req, res) => {
    const {username, email, age} = req.body;
    const user = await User.create({username, email, age});
    res.redirect('/users'); // new get request to /users
});

module.exports = router;