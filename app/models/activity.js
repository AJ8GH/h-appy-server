const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
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

// name
// cost
// accessibility
// categories
// size
