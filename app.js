const express = require('express');
const app = express();
const { User } = require('./models/index');
const usersRouter = require('./routes/users');

app.use(express.static(path.join(__dirname, 'assets')));


app.set('view engine', 'pug'); // let's use pug

app.get('/', async (req, res) => { // first route
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

