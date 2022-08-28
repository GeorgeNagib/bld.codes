import React, { useEffect } from 'react';
import './service.styles.css';

const Service = ({ num, title, description }) => {
  return (
    <div className="service" data-aos="zoom-in">
      <h2 className="heading-2">PHILOSOPHY</h2>
      <span>{num}.</span>
      <h3 className="heading-3">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default Service;
