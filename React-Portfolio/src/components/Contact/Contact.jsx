import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact-form');
  };

  const Contact = () => {
    return (
      <div className="contact">
        <h2>Contact</h2>
        <ContactForm />
      </div>
    );
  };
}
  export default Contact;