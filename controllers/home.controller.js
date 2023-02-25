
// Home page
function home(req, res) {
  res.render('index', {
    title: 'Skiing',
    caption: 'Nigeria my favorite country'
  })
}

module.exports = {
  home
}