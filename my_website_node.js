const http = require('http');
const fs = require('fs');
const path = require('path');

//creating server
//  //let filepath = path.join(__dirname, req.url === '/' ? "\\html\\home.html" : req.url);
//   let filepath = path.join(__dirname,  "\\html\\home.html");
http.createServer(function (req, res) {
    let filepath = path.join(__dirname, req.url === '/' ? "\\html\\home.html" : req.url);
    switch(req.url){
        case '/custom.css':
            filepath = path.join(__dirname, "\\css\\custom.css");
        break;

        case '/home.html':
            filepath = path.join(__dirname, "\\html\\home.html");
        break;

        case '/certifications_info_page.html':
            filepath = path.join(__dirname, "\\html\\certifications_info_page.html");
        break;

        case '/hobbies.html':
            filepath = path.join(__dirname, "\\html\\hobbies.html");
        break;

        // case '/css/custom.css':
        //     filepath = path.join(__dirname, "\\css\\custom.css");
        // break;
    }

    //let filepath = path.join(__dirname, req.url === '/' ? "\\html\\home.html" : req.url);
    fs.readFile(filepath, fileReadCallback)
    console.log(req.url + '->' + filepath);
    let extname = path.extname(filepath);

    switch(extname){
        case '.html':
            contentType = 'text/html';
        break;

        case '.css':
            contentType = 'text/css';
        break;

        case '.jpg':
            contentType = 'image/jpg'
        break;

        case '.pdf':
            contentType = 'application/pdf'
        break;
    }

    function fileReadCallback(err, content) {
        if (err) return;
        // res.write(data);
        // res.end();
        res.writeHead(200, {'Content-type': contentType});
        res.end(content);
    }

    // fs.readFile(filepath, fileReadCallback)
    // console.log(req.url + '->' + filepath);
}).listen(8080);