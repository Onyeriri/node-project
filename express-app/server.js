const express = require('express');
const { message} = require('../controllers/message.controller');
const { home } = require('../controllers/home.controller');
const friendsRoutes = require('../routes/friends.routes');
const messageRoute = require('../routes/messages.routes');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next();

  console.log('Status code ' + res.statusCode);
})

app.use(express.json())
app.use('/friends', friendsRoutes)
app.use('/message', messageRoute);

friendsRoutes.use((req, res) => {
  console.log(`Current ip address: ${req.ip}`)
})
// app.get('/', home)

app.listen(PORT, () => console.log(`Server started at ${PORT} from node express app`))