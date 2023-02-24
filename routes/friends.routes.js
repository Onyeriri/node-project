const express = require('express');

const friendsRoutes = express.Router();

const { getFriends, getOneFriend, addFriend} = require('../controllers/friends.controllers')

friendsRoutes.get('/', getFriends)
friendsRoutes.get('/:id', getOneFriend)
friendsRoutes.post('/', addFriend);


module.exports = friendsRoutes