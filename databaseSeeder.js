require('dotenv').config();
const fs = require('fs');
const activityModel = require('./app/models/activity');
const mongoose = require('mongoose');
const mongoDB = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@happyhaddock.e6r3s.mongodb.net/development?retryWrites=true&w=majority`;

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

function getSeeds() {
  let DATA = [];
  fs.readFileSync('./activitySeeds.tsv', 'utf8')
    .split('\n')
    .slice(1)
    .forEach((row) => {
      items = row.split('\t');
      DATA.push({
        name: items[0].replace('"', '').trim(),
        description: items[1].replace('"', '').trim(),
        cost: parseInt(items[2]),
        accessibility: parseInt(items[3]),
        size: items[4],
        categories: items.slice(5).filter(function (e) {
          return e !== '';
        }),
      });
    });
  return DATA;
}

function run() {
  let activityArray = getSeeds();

  activityArray.forEach((activityDocument) => {
    let activityInstance = new activityModel(activityDocument);
    activityInstance.save(function (err) {
      if (err) {
        // console.log(err);
        return;
      }
    });
  });
}

run();
