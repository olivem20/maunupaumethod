import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if (userLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/LogoFinalWhite.png" alt="Website Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/our-story">Our Story</Link></li>
        <li className="dropdown">
          <Link to="/programs" className="dropdown-link">
            Programs<span className="dropdown-arrow">▼</span>
          </Link>
          <ul className="dropdown-menu">
            <li><a href="#adult-clinics">Adult Clinics</a></li>
            <li><a href="#junior-clinics">Junior Clinics</a></li>
            <li><a href="#camps">Camps</a></li>
            <li><a href="#private-lessons">Private Lessons</a></li>
          </ul>
        </li>
        <li><Link to="/coaches">Coaches</Link></li>
        <li><Link to="/book-lesson">Book a Lesson!</Link></li>

        {isLoggedIn ? (
          <li className="dropdown">
            <span className="navbar-button dropdown-link">My Account ▼</span>
            <ul className="dropdown-menu">
              <li><Link to="/account">View Account</Link></li>
              <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
            </ul>
          </li>
        ) : (
          <li><Link to="/auth" className="navbar-button">Register/Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
