const express = require('express');
const router = express.Router();
const { User } = require('../models');
const asyncHandler = require('../util/asyncHandler');


router.get('/', asyncHandler(async (req, res, next) => {
        const users = await Use.findAll();
        res.render('users', {
            users
        });
}));

router.get('/new', (req, res) => {
    res.render('users_new'); // renders HTML, not full http request
});

router.post('/', async (req, res) => {
    const {username, email, age} = req.body;
    const user = await User.create({username, email, age});
    res.redirect('/users'); // new get request to /users
});

module.exports = router;