const express = require('express');
const mongoose = require('mongoose');
const activityRouter = require('./routes/activityRoutes.js');

const app = express();

app.use(express.json());

mongoose.connect(
  `mongodb+srv://${username}:${password}@happyhaddock.e6r3s.mongodb.net/HappyHaddock?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(activityRouter);

app.listen(3000, () => {
  console.log('Server is running...');
});