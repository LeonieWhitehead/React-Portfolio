import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import ContactForm from './ContactForm';

  const Contact = () => {
    return (
      <div className="contact">
        <ContactForm />
      </div>
    );
  };

  export default Contact;