const mongoose = require('mongoose');

const User = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  words: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Word'
  }],
  votes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vote'
  }]
}, { timestamps: true });

const UserModel = (db) => {
  db.model('User', User)

  return db.model('User')
}

module.exports = UserModel;