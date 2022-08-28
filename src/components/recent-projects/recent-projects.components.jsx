import React, { useEffect } from 'react';

import './recent-projects.styles.css';

import { Content } from '../content/content.component';

const RecentProjectsSection = () => {
  return (
    <section className="recent-projects section" id="recent-projects">
      <div className="container">
        <Content
          heading={'Recent projects'}
          headingNext={'1.SEAY NEWS'}
          description={`placerat ac laoreet odio tempor Vestibulum eu ac In ipsum lobortis, tincidunt porta eget malesuada facilisis tincidunt felis, nisl. elit efficitur. tortor. ex 
    maximus vel libero, scelerisque placerat non. porta tincidunt tincidunt amet, efficitur. Praesent faucibus Donec In Sed hendrerit nec gravida Ut convallis. id`}
        />
      </div>
    </section>
  );
};

export default RecentProjectsSection;
