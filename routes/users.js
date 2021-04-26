const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require("bcrypt")

router.get('/', async (req, res) => {
    const users = await User.findAll();

    res.render('users', {
        users
    });
});

router.get('/signup', (req, res) => {
    res.render('users_new'); // renders HTML, not full http request
});

router.get('/login', (req, res) => {
    res.render('users_login'); // renders HTML, not full http request
});

router.post('/signup', async (req, res) => {
    const {username, email, age, password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    const user = await User.create({username, email, age, hashedPassword});
    console.log("banana");
    req.session.user = {id: user.id, email: user.email, username: user.username};
    res.redirect('/users'); // new get request to /users
});

router.post('/login', async (req, res) => {
    const {username,password } = req.body;

    try {
        const user = await User.findOne({where: {username}});
        const isPassword = await bcrypt.compare(password, user.hashedPassword);
        console.log("banana1")
        if (isPassword) {
            req.session.user = {id: user.id, username: user.username};
            res.redirect("/users")
        }else{ 
            res.render("users_login");
        }

    } catch (e) {
        console.log("papaya")
        res.render("login");
    }

})

module.exports = router;