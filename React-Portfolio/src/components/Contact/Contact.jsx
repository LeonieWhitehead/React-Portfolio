import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact-form');
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      {/* Add contact information and form */}
      <button onClick={handleContactClick}>Go to Contact Form</button>
      </div>
  );
};

export default Contact;