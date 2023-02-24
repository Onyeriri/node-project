const express = require('express');
const { message } = require('../controllers/message.controller');

const messageRoute = express.Router();

messageRoute.get('/', message);

module.exports = messageRoute;