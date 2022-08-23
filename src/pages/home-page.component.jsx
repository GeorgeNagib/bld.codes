import React from 'react';

import Header from '../components/header/header.component';
import PhilosophySection from '../components/philosophy/philosophy.component';
import RecentProjectsSection from '../components/recent-projects/recent-projects.components';
import Contact from '../components/contact/contact.component';

const services = [
  {
    title: 'we only build whats matter',
    num: 1,
    description:
      'placerat ac laoreet odio tempor Vestibulum eu ac In ipsum lobortis, tincidunt porta eget malesuada facilisis tincidunt felis, nisl. elit efficitur. tortor. ex maximus vel libero, scelerisque placerat non. porta tincidunt tincidunt amet, efficitur. Praesent faucibus Donec In Sed hendrerit nec gravida Ut convallis. id',
  },
  {
    title: 'we are not just a development ferm',
    num: 2,
    description:
      'placerat ac laoreet odio tempor Vestibulum eu ac In ipsum lobortis, tincidunt porta eget malesuada facilisis tincidunt felis, nisl. elit efficitur. tortor. ex maximus vel libero, scelerisque placerat non. porta tincidunt tincidunt amet, efficitur. Praesent faucibus Donec In Sed hendrerit nec gravida Ut convallis. id',
  },
  {
    title: 'we create business art',
    num: 3,
    description:
      'placerat ac laoreet odio tempor Vestibulum eu ac In ipsum lobortis, tincidunt porta eget malesuada facilisis tincidunt felis, nisl. elit efficitur. tortor. ex maximus vel libero, scelerisque placerat non. porta tincidunt tincidunt amet, efficitur. Praesent faucibus Donec In Sed hendrerit nec gravida Ut convallis. id',
  },
];

const HomePage = () => (
  <div className="home">
    <Header />
    {services.map((service) => (
      <PhilosophySection
        num={service.num}
        title={service.title}
        text={service.description}
      />
    ))}
  </div>
);

export default HomePage;
