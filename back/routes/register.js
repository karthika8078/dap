const express = require('express');
const router = express.Router();
const User = require('../Modules/Register');

// Register a New User
router.post('/users/register', async (req, res) => {
  try {
    const { name, email, password, dateOfBirth, phoneNumber } = req.body;

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const newUser = new User({ name, email, password, dateOfBirth, phoneNumber });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
