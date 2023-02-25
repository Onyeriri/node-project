const express = require('express');
// const { message} = require('../controllers/message.controller');
// const { home } = require('../controllers/home.controller');
const friendsRoutes = require('../routes/friends.routes');
const messageRoute = require('../routes/messages.routes');
const path = require('path');
const homeRoute = require('../routes/home.route');

const app = express();

const PORT = 3000;

// console.log(__dirname)

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next();

  console.log('Status code ' + res.statusCode);
})

// console.log(__dirname)

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '..', 'views') )

app.use('/site', express.static(path.join(__dirname,'..', 'public')))
app.use(express.json())
app.use('/friends', friendsRoutes)
app.use('/message', messageRoute);
app.use('/home', homeRoute)

friendsRoutes.use((req, res, next) => {
  console.log(`Current ip address: ${req.ip}`)
  next()
})

app.listen(PORT, () => console.log(`Server started at ${PORT} from node express app`))