import React, { useState } from 'react';
import axios from 'axios';
import './RegisterLogIn.css';

function RegisterLogIn() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Login request
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email: formData.email,
          password: formData.password,
        });
        localStorage.setItem('token', response.data.token); // Save JWT
        setMessage('Login successful!');
      } else {
        // Register request
        const response = await axios.post('http://localhost:5000/api/auth/register', {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
        setMessage('Registration successful! Please log in.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <div className="combined-container">
      <div className="toggle-buttons">
        <button
          className={`toggle-button ${isLogin ? 'active' : ''}`}
          onClick={() => {
            setIsLogin(true);
            setError('');
            setMessage('');
          }}
        >
          Login
        </button>
        <button
          className={`toggle-button ${!isLogin ? 'active' : ''}`}
          onClick={() => {
            setIsLogin(false);
            setError('');
            setMessage('');
          }}
        >
          Register
        </button>
      </div>

      <form className="combined-form" onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required={!isLogin}
            className="combined-input"
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="combined-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="combined-input"
        />
        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
        <button type="submit" className="submit-button">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
}

export default RegisterLogIn;
