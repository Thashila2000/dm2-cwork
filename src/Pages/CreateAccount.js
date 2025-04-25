
import React, { useState } from 'react';
import './Register.css';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Placeholder: connect this with Spring Boot later
    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Account created successfully!");
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
      } else {
        alert("Failed to register. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Please try later.");
    }
  };

  return (
    <div className="register-container">
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Create Account</h2>

      <div className="input-group">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="input-group">
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>

      <div className="input-group">
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
      </div>

      <button type="submit">Register</button>
      <p className="login-text">Already have an account? <a href="http://localhost:3000/Login">Login</a></p>
    </form>
  </div>
  )
}

export default CreateAccount
