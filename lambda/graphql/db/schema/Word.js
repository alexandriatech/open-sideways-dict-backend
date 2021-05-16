const mongoose = require('mongoose');

const Word = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    unique: true
  },
  isPublish: {
    type: Boolean,
    default: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  relateWords: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word'
  }]
}, { timestamps: true })

module.exports = {
  Word
}