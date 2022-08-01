import React from 'react';

import Header from '../components/header/header.component';
import PhilosophySection from '../components/philosophy/philosophy.component';
import RecentProjectsSection from '../components/recent-projects/recent-projects.components';
import Contact from '../components/contact/contact.component';

const HomePage = () => (
  <div className="home">
    <Header />
    <PhilosophySection />
    <RecentProjectsSection />
    <Contact />
  </div>
);

export default HomePage;
