import React from 'react';
import './service.styles.css';

const Service = ({ num, title, description }) => (
  <div className="service">
    <h2 className="heading-2">philosophy</h2>
    <span>{num}.</span>
    <h3 className="heading-3">{title}</h3>
    <p className="description">{description}</p>
  </div>
);

export default Service;
