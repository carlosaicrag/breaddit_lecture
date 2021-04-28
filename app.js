const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const path = require('path');
const homesRouter = require("./routes/homes")

app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'pug'); // let's use pug

app.use("/",homesRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);


const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));

