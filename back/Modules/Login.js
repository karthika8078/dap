const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create and export the User Model
const User = mongoose.model('login', userSchema);
module.exports = User;
