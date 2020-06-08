const express = require('express');
const path = require('path');

const app = express();
app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/hobbies', (req, res) => {
    res.render('hobbies');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));