const express = require('express');
const activityModel = require('../models/activity');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/activities', async (request, response) => {
  const nibbles = await activityModel.find({ size: 'nibble' });
  const appetisers = await activityModel.find({ size: 'appetiser' });
  const mains = await activityModel.find({ size: 'main' });
  const desserts = await activityModel.find({ size: 'dessert' });
  const activities = {
    'nibbles': nibbles,
    'appetisers': appetisers,
    'mains': mains,
    'desserts': desserts
  }

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
