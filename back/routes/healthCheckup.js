const express = require('express');
const router = express.Router();
const HealthCheckup = require('../Modules/HealthCheckup');

// Route to create a new health checkup (POST)
router.post('/', async (req, res) => {
  const { patientName, phone, email, category } = req.body;

  try {
    const newHealthCheckup = new HealthCheckup({
      patientName,
      phone,
      email,
      category,
    });

    await newHealthCheckup.save();
    res.status(201).json({ message: 'Health checkup booked successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to get all health checkups (GET)
router.get('/', async (req, res) => {
  try {
    const healthCheckups = await HealthCheckup.find();
    res.status(200).json(healthCheckups);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to get a single health checkup by ID (GET)
router.get('/:id', async (req, res) => {
  try {
    const healthCheckup = await HealthCheckup.findById(req.params.id);
    if (!healthCheckup) {
      return res.status(404).json({ message: 'Health checkup not found' });
    }
    res.status(200).json(healthCheckup);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to update a health checkup by ID (PUT)
router.put('/:id', async (req, res) => {
  const { patientName, phone, email, category } = req.body;

  try {
    const updatedHealthCheckup = await HealthCheckup.findByIdAndUpdate(
      req.params.id,
      { patientName, phone, email, category },
      { new: true }
    );

    if (!updatedHealthCheckup) {
      return res.status(404).json({ message: 'Health checkup not found' });
    }

    res.status(200).json({ message: 'Health checkup updated successfully', updatedHealthCheckup });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to delete a health checkup by ID (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const deletedHealthCheckup = await HealthCheckup.findByIdAndDelete(req.params.id);

    if (!deletedHealthCheckup) {
      return res.status(404).json({ message: 'Health checkup not found' });
    }

    res.status(200).json({ message: 'Health checkup deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
