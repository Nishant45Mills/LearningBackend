const express = require('express');
const { authController } = require('../controllers');
const app = express();

app.post('/register', authController.registerUser);

module.exports = app;