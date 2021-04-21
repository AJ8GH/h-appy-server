const express = require('express');
const activityModel = require('../models/activity');
const app = express();

app.get('/activities', async (request, response) => {
  const sampleNumber = parseInt(request.query.limit) || 99;

  const nibbles = await activityModel
    .aggregate([{ $match: { size: 'nibble' } }])
    .sample(sampleNumber);
  const appetisers = await activityModel
    .aggregate([{ $match: { size: 'appetiser' } }])
    .sample(sampleNumber);
  const mains = await activityModel
    .aggregate([{ $match: { size: 'main' } }])
    .sample(sampleNumber);
  const desserts = await activityModel
    .aggregate([{ $match: { size: 'dessert' } }])
    .sample(sampleNumber);
  const activities = {
    nibbles: nibbles,
    appetisers: appetisers,
    mains: mains,
    desserts: desserts,
  };

  try {
    response.send(activities);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post('/activities', async (request, response) => {
  console.log(request.body);
  const activity = new activityModel(request.body);

  try {
    await activity.save();
    response.status(201).send(activity);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/categories', async (request, response) => {
  const categories = await activityModel.find({}).select('categories -_id');
  let unique = [];
  categories.map((i) => unique.push(i.categories));
  unique = [...new Set(unique.flat())].sort();
  try {
    response.send(unique);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/search', async (request, response) => {
  if (request.query.cost) {
    request.query.cost = { $lte: request.query.cost };
  }
  if (request.query.accessibility) {
    request.query.accessibility = { $gte: request.query.accessibility };
  }
  if (request.query.categories == 'all') {
    delete request.query.categories;
  }

  const results = await activityModel.find(request.query);
  try {
    response.send(results);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = app;
