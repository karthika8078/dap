// src/Components/HealthCheckupListPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//import './HealthCheckupListPage.css';

const healthCheckupData = {
  general: [
    { id: 1, name: 'eCARE Routine Health Check Up', tests: 8, consultations: 2, price: 5000, discount: 0.2, image: 'routine.jpg' },
    { id: 2, name: 'eCARE  Executive Health Check Up', tests: 11, consultations: 3, price: 6500, discount: 0.2, image: 'executive.jpg' },
  ],
  cardiac: [
    { id: 3, name: 'eCARE  Master Health Check Up', tests: 8, consultations: 6, price: 15500, discount: 0.2, image: 'master.jpg' },
    { id: 4, name: 'eCARE  Diabetic Health Check Up', tests: 13, consultations: 5, price: 6500, discount: 0.2, image: 'diabetic.jpg' },
  ],
  diabetes: [
    { id: 5, name: 'eCARE  Basic Diabetes Check Up', tests: 5, consultations: 2, price: 4000, discount: 0.15, image: 'basic-diabetes.jpg' },
    { id: 6, name: 'eCARE  Advanced Diabetes Panel', tests: 10, consultations: 4, price: 7500, discount: 0.2, image: 'advanced-diabetes.jpg' },
  ],
  orthopedic: [
    { id: 7, name: 'eCARE  Bone Health Check Up', tests: 7, consultations: 3, price: 5500, discount: 0.1, image: 'bone-health.jpg' },
    { id: 8, name: 'eCARE  Joint Health Check Up', tests: 9, consultations: 3, price: 7200, discount: 0.15, image: 'joint-health.jpg' },
  ],
};

function HealthCheckupListPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const healthCheckups = healthCheckupData[category] || [];
  
  const handleAppointmentClick = (checkupId) => {
    navigate(`/appointment/${checkupId}`);
  };
  return (
    <div className="checkup-list-container">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Health Checkups</h2>
      <div className="card-container">
        {healthCheckups.map((checkup) => (
          <div key={checkup.id} className="card">
            <img src={checkup.image} alt={checkup.name} className="checkup-image" />
            <h3>{checkup.name}</h3>
            <p className="details">No of Tests: {checkup.tests}</p>
            <p className="details">No of Consultations: {checkup.consultations}</p>
            <p className="price">
              <span className="original-price">INR {checkup.price}</span>
              <span className="discounted-price">INR {checkup.price - checkup.price * checkup.discount}</span>
              <span className="discount-label">{checkup.discount * 100}% Off</span>
            </p>
            <button className="book-button" onClick={() => handleAppointmentClick(checkup.id)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthCheckupListPage;
