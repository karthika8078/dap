import React, { useState } from 'react';
import axios from 'axios';

function AppointmentPage() {
  const [formData, setFormData] = useState({


    
    patientName: '',
    phoneNumber: '',
    email: '',
    password: '',
    gender: '',
    dateOfBirth: '',
    hospital: '',
    department: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    tokenNumber: '',
  });

  const hospitals = [
    'SUT Hospital', 'KIMS Hospital', 'GG Hospital', 'ANANTHAPURI Hospital',
    'SP FORT Hospital', 'PRS Hospital', 'AJ Hospital', 'JUBILEE MEMORIAL Hospital',
    'SK Hospital', 'GENERAL Hospital', 'MEDICAL COLLEGE Hospital', 'DR GOVINDANS Hospital',
    'GOWREESHA Hospital', 'CHAITHANYA EYE Hospital', 'SREE RAMAKRISHNA MISSION Hospital',
    'NIMS Hospital', 'GOVT. FORT Hospital', 'GOVT. AYURVEDA Hospital', 'WOMEN AND CHILD Hospital',
    'DISTRICT HOSPITAL NEDUMANGAD', 'AL ARIF Hospital', 'NEYYATINKARA GENERAL Hospital',
    'REGIONAL CANCER CENTER TVM'
  ];

  const departments = ['Cardiology', 'Dermatology', 'Neurology'];
  const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to generate a unique token
  const generateToken = () => {
    return `TOKEN-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate a unique token number
    const uniqueToken = generateToken();
    const updatedFormData = { ...formData, tokenNumber: uniqueToken };

    try {
      // Make a POST request to the backend API
      const response = await axios.post('http://localhost:5000/api/appointments', updatedFormData);

      // Handle success response
      if (response.status === 201) {
        alert('Appointment is successfully booked');
        console.log('Server Response:', response.data);

        // Reset form after successful submission
        setFormData({
          patientName: '',
          phoneNumber: '',
          email: '',
          password: '',
          gender: '',
          dateOfBirth: '',
          hospital: '',
          department: '',
          doctor: '',
          appointmentDate: '',
          appointmentTime: '',
          tokenNumber: '',
        });
      }
    } catch (error) {
      // Handle errors
      console.error('Error during form submission:', error.response?.data || error.message);
      alert('Failed to submit appointment. Please try again.');
    }
  };

  return (
    <div className="appointment-page">
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input type="text" name="patientName" value={formData.patientName} onChange={handleChange} required />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>

        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
        </label>

        <label>
          Hospital:
          <select name="hospital" value={formData.hospital} onChange={handleChange} required>
            <option value="">Select</option>
            {hospitals.map((hospital, index) => (
              <option key={index} value={hospital}>{hospital}</option>
            ))}
          </select>
        </label>

        <label>
          Department:
          <select name="department" value={formData.department} onChange={handleChange} required>
            <option value="">Select</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>{dept}</option>
            ))}
          </select>
        </label>

        <label>
          Doctor:
          <select name="doctor" value={formData.doctor} onChange={handleChange} required>
            <option value="">Select</option>
            {doctors.map((doc, index) => (
              <option key={index} value={doc}>{doc}</option>
            ))}
          </select>
        </label>

        <label>
          Appointment Date:
          <input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required />
        </label>

        <label>
          Appointment Time:
          <input type="time" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} required />
        </label>

        <label>
          Token Number:
          <input type="text" name="tokenNumber" value={formData.tokenNumber} readOnly placeholder="Auto-generated after submit" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AppointmentPage;
