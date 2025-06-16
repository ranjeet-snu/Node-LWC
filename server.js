// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath = '';
  let contentType = 'text/html';

  if (req.url === '/' || req.url === '/index.html') {
    filePath = path.join(__dirname, 'index.html');
  } else if (req.url === '/style.css') {
    filePath = path.join(__dirname, 'style.css');
    contentType = 'text/css';
  } else {
    res.writeHead(404);
    return res.end('404 Not Found');
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`🌐 Website running at http://localhost:${PORT}`);
});
