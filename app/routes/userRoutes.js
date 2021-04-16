const express = require('express');
const User = require('../models/user');
const userModel = require('../models/user');
const userApp = express();

userApp.post('/user', async (request, response) => {
  try {
    const user = new userModel(request.body);
    await user.save();
    const token = await user.generateAuthToken();
    response.status(201).send({ user, token });
  } catch (error) {
    response.status(400).send(error);
  }
});

userApp.post('/user/login', async (request, response) => {
  try {
    const { email, password } = request.body
    const user = await User.findByCredentials(email, password)
    if (!user) {
      return response.status(401).send({error: 'Login failed! Check authentication credentials'})
    }
    const token = await user.generateAuthToken()
    response.send({ user, token })
  } catch (error) {
    response.status(400).send(error)
  }
})

module.exports = userApp;