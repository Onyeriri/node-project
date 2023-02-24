const express = require('express');

const app = express();

const PORT = 3000;

const friends = [{
  id: 0,
  name: 'Victor',
  age: 31
},
{
  id: 1,
  name: 'Chinonso',
  age: 31
}
]

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next();

  console.log('Status code ' + res.statusCode);
})

app.use(express.json())


app.get('/', (req, res) => {
  res.send('<h1>Node home </h1>')
  res.end()
})

app.get('/message', (req, res) => {
  res.send('<h1>Hello from Node </h1>')
  res.end()
})

app.get('/friends', (req, res) => {

  if (friends) {
    res.status(200).send(friends)
  }

  res.end()
})

app.get('/friends/:id', (req, res) => {
  const friendId = +req.params.id

  const friend = friends[friendId];

  if (friend) {
    res.status(200).send(friend)
  }

  res.end()
})

app.post('/friends', (req, res) => {

  if (!req.body.name) {
    return res.status(400).json({
      'Error': 'Missing name'
    });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length
  };
  friends.unshift(newFriend);

  res.json(newFriend)
})

app.listen(PORT, () => console.log(`Server started at ${PORT} from node express app`))