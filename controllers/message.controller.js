const path = require('path')

console.log(__dirname);

// message controller
function message(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'skimountain.jpg'))
  // res.send('<h1>Hello from Node </h1>')
  // res.end()
}

module.exports = {
  message
}