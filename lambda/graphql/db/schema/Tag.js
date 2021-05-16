const mongoose = require('mongoose');

const Tag = new mongoose.Schema({
  tag: {
    type: String,
    required: true,
    unique: true
  },
  words: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word'
  }]
}, { timestamps: true })