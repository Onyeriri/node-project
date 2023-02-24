const express = require('express');
const { getFriends, getOneFriend, addFriend } = require('../controllers/friends.controllers');
const { message} = require('../controllers/message.controller');
const { home } = require('../controllers/home.controller');
const friendsRoutes = require('../routes/friends.routes');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next();

  console.log('Status code ' + res.statusCode);
})

app.use(express.json())
app.use('/friends', friendsRoutes)


app.get('/', home)
app.get('/message', message)



app.listen(PORT, () => console.log(`Server started at ${PORT} from node express app`))