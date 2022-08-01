import React from 'react';
import './contact-card.styles.css';

const ContactCard = ({ title, link = '#' }) => (
  <div className="contact-card">
    <a href={link}>{title}</a>
  </div>
);

export default ContactCard;
