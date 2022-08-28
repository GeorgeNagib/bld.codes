import React, { useEffect } from 'react';
import './philosophy.styles.css';
import Service from '../service/service.component';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

const PhilosophySection = ({ num, title, text }) => {
  // useEffect(() => {
  //   AOS.init({ duration: 1900 });
  // }, []);
  return (
    <section className="philosophy  section" id="philosophy">
      <div className="container">
        {/* <Logo /> */}
        <div className="services">
          <Service num={num} title={title} description={text} />
        </div>
      </div>
      {/* <Navbar /> */}
    </section>
  );
};

export default PhilosophySection;
