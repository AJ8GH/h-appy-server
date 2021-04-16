require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const activityRouter = require('./app/routes/activityRoutes.js');
const userRouter = require('./app/routes/userRoutes.js');

const app = express();
let dbName;

app.use(express.json());

if (process.env.NODE_ENV === 'test') {
  dbName = 'test';
} else {
  dbName = 'development';
}

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@happyhaddock.e6r3s.mongodb.net/${dbName}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

app.use(activityRouter);
app.use(userRouter);

app.listen(3000, () => {
  console.log('Server is running...');
});

module.exports = app;
