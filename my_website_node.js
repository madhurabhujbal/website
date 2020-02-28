const http = require('http');
const fs = require('fs');
const path = require('path');

//creating server
http.createServer(function (req, res) {
    // res.write('Hello world');
    //    let filepath = path.join(__dirname, 'index.js');
    //    res.write(filepath);
function fileReadCallback(err, data) {
    if (err) throw err
    res.write(data);
    res.end();
    //console.log(data);
}
// fs.readFile(path.relative("C:\\my_website\\html\\home.html"), utf8, fileReadCallback)
// fs.readFile(path.join(__dirname, 'css', 'custom.css'), 'utf8', fileReadCallback)
fs.readFile(path.join(__dirname, 'html', 'home.html'), 'utf8', fileReadCallback)
}).listen(8080);