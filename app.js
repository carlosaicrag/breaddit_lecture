const express = require('express');
const app = express();
const { Post } = require('./models/index');
const usersRouter = require('./routes/users');
const path = require('path');
const session = require('express-session');
app.use(session({ secret: 'superSecret', saveUninitialized: false, resave: false }));

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: false }));

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

    res.render('layout');
});

app.get('/posts', async (req,res) => {
    const posts = await Post.findAll();
    console.log(posts)
    res.render("post_index.pug", {posts:posts});
})

app.post("/posts/:id/delete", async (req,res) => {
    console.log(req.params)
    const post = await Post.findByPk(req.params.id)
    await post.destroy()
    res.redirect('/posts')
})


app.delete('/posts/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const post = await Post.findByPk(id);
  if (post) {
    await post.destroy();
    res.json({ success: 'success' })
  } else {
    res.status(500)
    res.json({ success: 'failure!' })
  }
})

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

