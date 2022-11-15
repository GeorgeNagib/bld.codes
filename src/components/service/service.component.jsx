import React from 'react';
import './service.styles.css';

const Service = ({ title, description }) => (
  <div className="service">
    <h3 className="heading-3" data-aos='fade-right'>{title}</h3>
    <p className="description" data-aos='fade-up'>{description}</p>
  </div>
);

export default Service;
