const express = require('express');
const userModel = require('../models/user');
const userApp = express();

app.post('/user', async (request, response) => {
  try {
    const user = new userModel(request.body);
    await user.save();
    const token = await user.generateAuthToken();
    response.status(201).send({ user, token });
  } catch (error) {
    response.status(400).send(error);
  }
});

module.exports = userApp;