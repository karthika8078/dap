// src/Components/BookNowPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const healthCheckupData = {
  1: 'eCARE Routine Health Check Up',
  2: 'eCARE Executive Health Check Up',
  3: 'eCARE Master Health Check Up',
  4: 'eCARE Diabetic Health Check Up',
  5: 'eCARE Basic Diabetes Check Up',
  6: 'eCARE Advanced Diabetes Panel',
  7: 'eCARE Bone Health Check Up',
  8: 'eCARE Joint Health Check Up',
};

function BookNowPage() {
  const { checkupId } = useParams();
  const testName = healthCheckupData[checkupId] || 'Selected Health Checkup';
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    date: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment successfully booked!');
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="book-now-page">
      <h2>Book Appointment for: {testName}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>
        <br />
        <label>
          Test Name:
          <input type="text" name="testName" value={testName} readOnly />
        </label>
        <br />
        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookNowPage;
