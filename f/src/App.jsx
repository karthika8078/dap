import React from 'react';
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './Components/Homepage';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import Register from './Components/Register';
import AppointmentPage from './Components/AppointmentPage';
import HealthCheckupPage from './Components/HealthCheckupPage';
import HealthCheckupListPage from './Components/HealthCheckupListPage';
import BookNowPage from './Components/BookNowPage';
import HealthCheckupDetailPage from './Components/HealthCheckupDetailPage';
import './App.css';


function App() {
  return (
    <>
  
      <Routes>
      <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/health-checkup" element={<HealthCheckupPage />} />
        
        <Route path="/health-checkup-list/:category" element={<HealthCheckupListPage />} />
        
      
        <Route path="/appointment/:checkupId" element={<BookNowPage />} />
      </Routes>
        
      
    
    </>
  );
}

export default App;

