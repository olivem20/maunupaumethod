import React from 'react';
import './Coaches.css'; // Import the CSS file for Home page styles

function Coaches() {
  return (
    <div className="coaches-container">
      <h1 className="coaches-title">Meet the Coaches</h1>
      <div className="coaches-grid">
        <div className="coach-card">
            <h1>Lou Maunupau</h1>
            <p> BIO </p>
        </div>
        <div className='coach-card'>
            <img src="/olivebio.jpg" alt="Olive Profile" className="coach-image" />
            <h1>Olive Maunupau</h1>
            <p> BIO </p>
        </div>
        <div className='coach-card'>
            <img src="/daisybio.jpg" alt="Olive Profile" className="coach-image" />
            <h1>Daisy Maunupau</h1>
            <p> BIO </p>
        </div>
      </div>
    </div>
  );
}

export default Coaches;
