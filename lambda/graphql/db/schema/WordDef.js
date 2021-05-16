const mongoose = require('mongoose');

const WordDev = new mongoose.Schema({
  definition: {
    type: String,
    required: true
  },
  isPublish: {
    type: Boolean,
    required: true,
    default: true,
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  word: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  votes:  [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vote'
  }]
}, { timestamps: true })