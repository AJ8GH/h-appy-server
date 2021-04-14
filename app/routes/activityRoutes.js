const express = require('express');
const activityModel = require('../models/activity');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/activities', async (request, response) => {
  const activities = await activityModel.find(request.query);
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
