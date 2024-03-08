import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css'; 
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    submissions.push(formData);
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));

    setFormData({
      name: '',
      email: '',
      message: '',
    });
    alert('Form submitted successfully!');
  };

  return (
    <div className="container contact-form">
    <h2 className="mb-4">Contact</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" />
      </div>
      <button type="submit" className="btn">Submit</button>
    </form>
  </div>
);
};

export default ContactForm;
