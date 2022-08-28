import React, { useEffect } from 'react';
import './content.styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Content = ({ heading, headingNext, description }) => {
  useEffect(() => {
    AOS.init({ duration: 1900 });
  }, []);
  return (
    <div className="content" data-aos="fade-up">
      <h2 className="heading-2">{heading}</h2>
      <p className="normal-description">{description}</p>
      <div className="line">&nbsp;</div>
      <h2 className="heading-2-edited heading-2">{headingNext}</h2>
    </div>
  );
};
