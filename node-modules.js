const http = require('http');

const request = http.request('http://www.google.com', (res) => {
  res.on('data', (chunk) => console.log(chunk));
  res.on('end', () => console.log('No more data'))
});

request.end();