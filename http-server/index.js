const http = require('http');

const PORT = 3000;

const server = http.createServer();

const friends = [
  {
  id: 0,
  name: 'Victor',
  age: 31
  },
  {
    id: 1,
    name: 'Chinonso',
    age: 22
  }
]

server.on('request', (req, res) => {
  const items = req.url.split('/');

  items.length > 0 ? console.log(Number(items[2])) : null
  if (items[1] === 'friends') {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.write(JSON.stringify(friends[Number(items[2])]));
    res.end();
  } else if (items[1] === '/message') {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.write(JSON.stringify(friends[items[2]]));
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

