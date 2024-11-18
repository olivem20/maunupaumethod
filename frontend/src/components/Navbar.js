import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for Navbar styles

function Navbar() {
  return (
    <nav className="navbar">
      <div className='navbar-logo'>
        <img src="/whitelogo5.png" alt='Website Logo' className='logo' />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/our-story">Our Story</Link></li>
        
        <li className="dropdown">
          <Link to="/programs" className="dropdown-link">
            Programs<span className="dropdown-arrow">▼</span> {/* Unicode arrow */}
          </Link>
          <ul className="dropdown-menu">
            <li><Link to="/programs/adult-clinics">Adult Clinics</Link></li>
            <li><Link to="/programs/junior-clinics">Junior Clinics</Link></li>
            <li><Link to="/programs/camps">Camps</Link></li>
            <li><Link to="/programs/private-lessons">Private Lessons</Link></li>
          </ul>
        </li>
        <li><Link to="/coaches">Coaches</Link></li>
        <li><Link to="/book-lesson">Book a Lesson!</Link></li>
        <li><Link to="/auth">Register/Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
