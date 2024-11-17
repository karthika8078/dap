// models/HealthCheckup.js
const mongoose = require('mongoose');

const HealthCheckupSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  category: { type: String, required: true },
});

module.exports = mongoose.model('healthcheckup', HealthCheckupSchema);
