// src/components/Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import './Sidebar.css';

function Sidebar() {
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate('/appointment');
  };

  const handleHealthCheckupClick = () => {
    navigate('/health-checkup');
  };

  return (
    <div className="sidebar">
      <button className="sidebar-btn">Find a Doctor</button>
      <button className="sidebar-button" onClick={handleAppointmentClick}>
        Book an Appointment
      </button>
      <button className="sidebar-btn" onClick={handleHealthCheckupClick}>
        Book a Health Checkup
      </button>
    </div>
  );
}

export default Sidebar;
