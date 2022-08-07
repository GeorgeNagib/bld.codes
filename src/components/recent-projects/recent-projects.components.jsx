import React from 'react';
import { useState } from 'react';

import './recent-projects.styles.css';
import Project from '../project/project.component';
import project1Pic from './726ce797885501.5ecfa0d512cac.png'
import project2Pic from './1a11f479941667.5cd2a63411ff1.png'
import project3Pic from './8bfe7970348063.5ba0cf2e025d7.png'
import project4Pic from './31da4270347723.5ba0ccf15f0b4.jpg'
import project5Pic from './MacBook Pro 14_ - 2.png'
import project6Pic from './Section.png'

const RecentProjectsSection = () => {
  
  const projects = [
    {
      pic: project6Pic,
      link: "https://www.figma.com/file/T0cd2gvk9rKUKDRpog9Kj9/Untitled?node-id=457%3A14062",
    },
    {
    
    pic: project1Pic,
    link: "https://www.behance.net/gallery/97885501/Arabic-ERP",
  },
  {
    pic: project2Pic,
    link: "https://www.behance.net/gallery/79941667/Roteec-V01",
  },
  {
    pic: project5Pic,
    link: "#",
  },
  {
    pic: project3Pic,
    link: "https://www.behance.net/gallery/70348063/-website-for-SUA",
  },
  {
    pic: project4Pic,
    link: "https://www.behance.net/gallery/70347723/UIUX-for-MuskLive-app-%28c%29",
  },
  ,
  
  ];
  const [visibleProjects, setVisibleProjects] = useState(4);
  const handleClick = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
  };

  const projectComponent = projects
    .slice(0, visibleProjects)
    .map((project, i) => {
      return <Project key={i} pic={project.pic} link={project.link}/>;
    });

  return (
    <section className="recent-projects" id="recent-projects">
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
        <div className="projects">{projectComponent}</div>
        {visibleProjects ===
        projects.length + Math.abs(visibleProjects - projects.length)  ? (
          ''
        ) : (
          <button className="see-more" onClick={handleClick}>
            see more
          </button>
        )}
      </div>
    </section>
  );
};

export default RecentProjectsSection;
