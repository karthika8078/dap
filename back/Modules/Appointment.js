const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  phoneNumber: { type: String, required: true }, // Changed from `phone` to `phoneNumber`
  email: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: Date, required: true }, // Changed from `dob` to `dateOfBirth`
  hospital: { type: String, required: true },
  department: { type: String, required: true },
  doctor: { type: String, required: true },
  appointmentDate: { type: Date, required: true },
  appointmentTime: { type: String, required: true },
  tokenNumber: { type: String, unique: true, required: true },
});

module.exports = mongoose.model('appointment', AppointmentSchema);

