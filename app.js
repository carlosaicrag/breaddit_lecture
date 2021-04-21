const express = require('express');
const app = express();
const { User } = require('./models/index');
const usersRouter = require('./routes/users');
const path = require('path');

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug'); // let's use pug

const middle = (req, res, next) => {
    console.log('banana');
    next();
};

app.use((req, res, next) => {
    req.isFunny = true;
    next();
});

app.get('/', middle, (req, res) => { // first route
    // res.render('layout', {
    //     username: 'Carlos',
    //     email: 'carlos@gmail.com',
    //     colors: ['blue', 'red', 'yellow'],
    //     userLoggedIn: false
    // });
    res.render('layout');
});


// app.get('/users', async (req, res) => {
//     const users = await User.findAll();
//     console.log(users);
//     res.render('users', {
//         users
//     });
// });

app.use('/users', usersRouter);

app.get('/product/:id(\\d+)', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    res.send(`product ID: ${productId}`);
});

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));

