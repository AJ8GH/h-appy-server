const express = require('express');
const activityModel = require('../models/activity');
const app = express();

app.get('/activities', async (request, response) => {
  const activities = await activityModel.find({});
  try {
    response.send(activities);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post('/activities', async (request, response) => {
  const activities = await activityModel.find(request.body);
  try {
    response.send(activities);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
