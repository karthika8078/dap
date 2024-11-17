// src/Components/HealthCheckupDetailPage.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//import '../App.css';

const healthCheckupData = {
  general: [
    {
      id: 1,
      name: 'Routine Health Check Up',
      description: 'A comprehensive routine health check-up...',
      details: 'No of Tests: 8, No. of Consultations: 2',
      price: 5000,
    },
  ],
  cardiac: [
    {
      id: 2,
      name: 'Executive Health Check Up',
      description: 'An executive health check-up focused on cardiac health...',
      details: 'No of Tests: 11, No. of Consultations: 3',
      price: 5200,
    },
  ],
};

function HealthCheckupDetailPage() {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const checkup = healthCheckupData[category]?.find((item) => item.id === parseInt(id));

  if (!checkup) {
    return <p>Health checkup not found.</p>;
  }

  const handleTakeSlot = () => {
    navigate(`/health-checkups/${category}/${id}/slot-booking`);
  };

  return (
    <div className="detail-page-container">
      <h2>{checkup.name}</h2>
      <p>{checkup.description}</p>
      <p>{checkup.details}</p>
      <p className="price">INR {checkup.price}</p>
      <button onClick={handleTakeSlot} className="take-slot-button">Take Slot</button>
    </div>
  );
}

export default HealthCheckupDetailPage;
