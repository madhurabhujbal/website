const http = require('http');
const fs = require('fs');
const path = require('path');

//creating server
const server = http.createServer(function (req, res) {
    let filepath = path.join(__dirname, req.url === '/' ? "\\html\\home.html" : req.url);

    //let filepath = path.join(__dirname, req.url === '/' ? "\\html\\home.html" : req.url);
    let extname = path.extname(filepath);
    console.log(req.url + ' -> ' + filepath + ' Ext:' + extname);

    let contentType = 'text/html';
    // if contentType is not declared and initialised here, data race condition will rise. It means
    //that when extname is checked in switch case, as this is asynchronous process,
    //till the time .css file is checked,
    //control moves to next case. If image with .jpg extention is found, the content type is set to image/jpg
    //even for the css file. Hence, css will not render in the requested url.
    switch(extname){
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

    fs.readFile(filepath, fileReadCallback)
    // console.log(req.url + '->' + filepath);
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));