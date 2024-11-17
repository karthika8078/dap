const express = require('express');
const router = express.Router();
const Appointment = require('../Modules/Appointment');

// Generate a unique token number
const generateToken = () => {
  return 'TKN-' + Math.floor(100000 + Math.random() * 900000).toString();
};

// Route to create a new appointment (POST)
router.post('/', async (req, res) => {
  const { patientName, phone, email, gender, dob, hospital, department, doctor, appointmentDate, appointmentTime } = req.body;

  try {
    const tokenNumber = generateToken();

    const newAppointment = new Appointment({
      patientName,
      phone,
      email,
      gender,
      dob,
      hospital,
      department,
      doctor,
      appointmentDate,
      appointmentTime,
      tokenNumber,
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully', tokenNumber });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to get all appointments (GET)
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to get a single appointment by ID (GET)
router.get('/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.status(200).json(appointment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to update an appointment by ID (PUT)
router.put('/:id', async (req, res) => {
  const { patientName, phone, email, gender, dob, hospital, department, doctor, appointmentDate, appointmentTime } = req.body;

  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { patientName, phone, email, gender, dob, hospital, department, doctor, appointmentDate, appointmentTime },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Appointment updated successfully', updatedAppointment });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route to delete an appointment by ID (DELETE)
router.delete('/:id', async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);

    if (!deletedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
