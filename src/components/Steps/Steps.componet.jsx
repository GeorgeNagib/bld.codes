import React, { useEffect } from 'react';
import './Steps.styles.css';
import { Logo } from '../logo/logo.component';
import { Content } from '../content/content.component';
import Navbar from '../navbar/navbar.component';

export const Steps = ({ heading, headingNext, description, bg }) => {
  return (
    <section className={`${bg} steps`}>
      <div className="container">
        {/* <Logo /> */}
        <div className="steps-container">
          <Content
            heading={heading}
            headingNext={headingNext}
            description={description}
          />
        </div>
      </div>
      {/* <Navbar /> */}
    </section>
  );
};
