const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
  },
  cost: {
    type: Number,
  },
  accessibility: {
    type: Number,
  },
  categories: {
    type: Array,
  },
  size: {
    type: String,
  },
});

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;
