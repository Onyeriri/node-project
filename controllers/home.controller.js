
// Home page
function home(req, res) {
  res.send('<h1>Welcome to our official node application website</h1>')
  res.end()
}

module.exports = {
  home
}