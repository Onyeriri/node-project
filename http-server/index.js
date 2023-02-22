const http = require('http');

const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.write('<h1>Hello node server</h1>');
    res.end();
  } else if (req.url === '/message') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.write('<h1>message from node server</h1>');
    res.end();
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 400;
    res.write('<h6>Page not found from node server</h6>');
    res.end();
  }
})


server.listen(PORT, () => {
  console.log(`Server started and listening to ${PORT}`)
});

