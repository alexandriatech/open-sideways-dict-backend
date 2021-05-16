const mongoose = require('mongoose');

const Vote = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
    default: 1,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  word: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word',
    required: true
  }
}, { timestamps: true })