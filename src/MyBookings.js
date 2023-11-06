import React, { useState } from 'react';
import './MyBookings.css';

const MyBookings = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleCancelBooking = () => {
    // Add your cancel booking logic here
    alert('Booking has been canceled.');
  };

  return (
    <div className="my-bookings-container">
      <div className="top-panel">
        <h1>My Bookings</h1>
      </div>
      <div className="profile-tab" onClick={toggleProfileMenu}>
        <span className="profile-icon">👤</span>
      </div>
      {isProfileMenuOpen && (
        <div className="profile-menu">
          <ul>
            <li>
              <span className="menu-icon">📅</span> My Bookings
            </li>
            <li>
              <span className="menu-icon">👤</span> My Account
            </li>
            <li>
              <span className="menu-icon">💳</span> Payments
            </li>
            <li>
              <span className="menu-icon">⚙️</span> Settings
            </li>
          </ul>
        </div>
      )}
      <div className="booking-card">
        <div className="booking-image">
          <img
            src="https://qph.cf2.quoracdn.net/main-qimg-4f5f40e46ba4ef893b74bd8564e0a028-lq"
            alt="Luxury Sedan"
          />
        </div>
        <div className="booking-details">
          <h2>Swift Dzire</h2>
          <p>From: 2023-11-10</p>
          <p>To: 2023-11-10</p>
          <p>Total Hours: 2</p>
          <p>Rent per Hour: ₹750</p>
          <p>Booking Date: 2023-11-05</p>
          <p>Transaction ID: 23718999</p>
          <button className="cancel-booking-button" onClick={handleCancelBooking}>
            Cancel Booking
          </button>
        </div>
        <div className="booking-price">
          <p>Total Amount: ₹1500</p>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;



