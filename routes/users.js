const express = require('express');
const router = express.Router();
const { User } = require('../models');
const asyncHandler = require('../util/asyncHandler');
const bcrypt = require('bcrypt'); 
const {getUserToken} = require("../auth")

router.get('/', asyncHandler(async (req, res, next) => {
        const users = await User.findAll();
        res.render('users', {
            users
        });
}));

router.get('/signup', (req, res) => {
    res.render('users_signup'); // renders HTML, not full http request
});

router.post('/signup', async (req, res) => {
    const {username, email, age, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 8); // does hashing and salting for us
    const user = await User.create({ username, email, age, hashedPassword });

    const token = getUserToken(user);

    res.status(201).json({
      user: { id: user.id },
      token,
    });
});

router.get('/login', (req, res) => {
    res.render('users_login'); // renders HTML, not full http request
});

router.post('/login', asyncHandler( async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    const isPassword = await bcrypt.compare(password, user.hashedPassword);
    if (isPassword) {
        req.session.user = { id: user.id, email: user.email, username: user.username }
        res.redirect('/users');
    } else {
        res.render('login');
    }

}));

module.exports = router;