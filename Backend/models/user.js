// user.js (model)
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true
  },
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);
