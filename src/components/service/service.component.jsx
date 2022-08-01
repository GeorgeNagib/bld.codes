import React from 'react';
import './service.styles.css';

const Service = ({ title, description }) => (
  <div className="service">
    <h3 className="heading-3">{title}</h3>
    <p className="description">{description}</p>
  </div>
);

export default Service;
