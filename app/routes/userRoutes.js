const express = require('express');
const userModel = require('../models/user');
const userApp = express();
const auth = require('../middleware/auth');

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
    const user = await userModel.findByCredentials(email, password)
    if (!user) {
      return response.status(401).send({error: 'Login failed! Check authentication credentials'})
    }
    const token = await user.generateAuthToken()
    response.send({ user, token })
  } catch (error) {
    response.status(400).send(error)
  }
});

userApp.get('/user/profile', auth, async(request, response) => {
  response.send(request.user)
})

module.exports = userApp;