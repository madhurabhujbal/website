const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
app.set('views', __dirname + '/views/');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '/public/')));

app.get('/', (req, res) => {
    res.render('home');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));