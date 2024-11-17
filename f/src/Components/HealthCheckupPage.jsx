// src/Components/HealthCheckupPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import '../App.css';

function HealthCheckupPage() {
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category) {
      // Navigate to HealthCheckupListPage with the selected category as a URL parameter
      navigate(`/health-checkup-list/${category}`);
    }
  };

  return (
    <div className="form-container">
      <h2>Book a Health Checkup</h2>
      <form onSubmit={handleSubmit}>
        <label>Category</label>
        <select value={category} onChange={handleCategoryChange} required>
          <option value="">Select Category</option>
          <option value="general">General Checkup</option>
          <option value="cardiac">Cardiac Checkup</option>
          <option value="diabetes">Diabetes Checkup</option>
          {/* Add more categories as needed */}
        </select>
        <button type="submit">Find</button>
      </form>
    </div>
  );
}

export default HealthCheckupPage;
