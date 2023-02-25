const express = require('express');

const homeRoute = express.Router();
const {home} = require('../controllers/home.controller')


homeRoute.get('/', home);

module.exports = homeRoute;