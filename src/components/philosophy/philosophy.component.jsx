import React from 'react';
import './philosophy.styles.css';
import Service from '../service/service.component';
import Navbar from '../navbar/navbar.component';
import { Logo } from '../logo/logo.component';

const PhilosophySection = ({ num, title, text }) => (
  <section className="philosophy" id="philosophy">
    <div className="container">
      <Logo />
      <div className="services">
        <Service num={num} title={title} description={text} />
      </div>
    </div>
    <Navbar />
  </section>
);

export default PhilosophySection;
