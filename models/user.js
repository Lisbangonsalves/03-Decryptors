const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String
  }

});
const User = mongoose.model('user', UserSchema);

module.exports = User;