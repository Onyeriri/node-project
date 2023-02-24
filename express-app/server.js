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

app.listen(PORT, () => console.log(`Server started at ${PORT} from node express app`))