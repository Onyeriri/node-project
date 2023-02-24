// message controller
function message(req, res) {
  res.send('<h1>Hello from Node </h1>')
  res.end()
}

module.exports = {
  message
}