const model = require('../model/friends.model');

// console.log(Array.from(model))

// Get all friends
function getFriends(req, res) {

  if (model) {
    res.status(200).send(model)
  }

  res.end()
}


// Get a single friend
function getOneFriend(req, res) {
  const friendId = +req.params.id

  const model = model[friendId];

  if (model) {
    res.status(200).send(model)
  }

  res.end()
}


// Create or add a friend
function addFriend(req, res) {

  if (!req.body.name) {
    return res.status(400).json({
      'Error': 'Missing name'
    });
  }
  const newFriend = {
    name: req.body.name,
    id: model.length
  };

  model.unshift(newFriend);

  res.json(newFriend)
}

module.exports = {
  getFriends,
  getOneFriend,
  addFriend
}