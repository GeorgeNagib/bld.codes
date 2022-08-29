import React, { useEffect } from 'react';
import './project.styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Project = ({
  img,
  link = '#',
  heading,
  headingNext,
  projectDescription,
}) => {
  useEffect(() => {
    AOS.init({ duration: 1800 });
  }, []);
  return (
    <section className="project content">
      <div className="container" data-aos="fade-right">
        <h2 className="heading-2 heading-2-project">{heading}</h2>

        <div className="img-description">
          <p className="project-description">{projectDescription}</p>
          <a href={link} data-aos="fade-up">
            <img src={img} alt="project image" />
          </a>
        </div>

        <div className="line">&nbsp;</div>
        <h2 className="heading-2-edited heading-2">{headingNext}</h2>
      </div>
    </section>
  );
};

export default Project;
