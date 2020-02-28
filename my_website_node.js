const http = require('http');
const fs = require('fs');
const path = require('path');

//creating server
http.createServer(function (req, res) {
    let filepath = path.join(__dirname, req.url === '/' ? "\\html\\home.html" : req.url);
    let contentType = 'text/html';
function fileReadCallback(err, content) {
    if (err) return;
    // res.write(data);
    // res.end();
    res.writeHead(200, {'Content-type': contentType});
    res.end(content, 'utf8');
}
fs.readFile(filepath, 'utf8', fileReadCallback)
console.log(req.url + '->' + filepath);
}).listen(8080);