const express = require('express');
const app = express();
app.set('view engine', 'pug'); //

app.get('/', (req, res) => {
    res.render('layout', {
        username: 'Carlos',
        email: 'carlos@gmail.com',
        colors: ['blue', 'red', 'yellow'],
        userLoggedIn: false
    });
});

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));

