import React from 'react';

import './recent-projects.styles.css';
import Project from '../project/project.component';
import pic from './eberhard-grossgasteiger-Z1avi5FQdQI-unsplash.jpg';

const RecentProjectsSection = () => (
  <section className="recent-projects">
    <div className="container">
      <h2 className="heading-2">recent projects</h2>
      <svg
        width="1300"
        height="188"
        viewBox="0 0 1351 188"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1338.37 1.00012C1368.86 30.2906 1358.04 100.223 1070.79 145.629C711.725 202.386 511.834 42.0295 360.064 39.6362C208.295 37.2428 132.675 68.3567 1.00006 187"
          stroke="black"
          strokeDasharray="8 8"
        />
      </svg>
      <div className="projects">
        <Project pic={pic} />
        <Project pic={pic} />
        <Project pic={pic} />
        <Project pic={pic} />
        <Project pic={pic} />
        <Project pic={pic} />
        <Project pic={pic} />
        <Project pic={pic} />
      </div>
      <a href="#" className="see-more">
        SEE More
      </a>
    </div>
  </section>
);

export default RecentProjectsSection;
