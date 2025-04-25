import React, { useState } from 'react';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message.');
    }
  };

  return (
    <div className="contact-page">
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-description">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write your message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="contact-button">Send Message</button>
      </form>

      <div className="contact-info">
        <h3>Visit Us</h3>
        <p>123 Elegance Street, Colombo 07, Sri Lanka</p>
        <p>Email: support@GoldenGlitz.com</p>
        <p>Phone: +94 77 123 4567</p>
      </div>
    </div>
  </div>
  )
}

export default ContactPage
