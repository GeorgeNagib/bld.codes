import Header from '../components/header/header.component';
import PhilosophySection from '../components/philosophy/philosophy.component';
import RecentProjectsSection from '../components/recent-projects/recent-projects.components';

import { Steps } from '../components/Steps/Steps.componet';
import Project from '../components/project/project.component';
import pic from '../images/FireShot Capture 015 - ▶ Latest - Untitled - www.figma.com.png';
import { Footer } from '../components/footer/footer.component';
import './home-page.styles.css';

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

const steps = [
  {
    heading: 'DESIGN.🎨',
    headingNext: '1.Sketching',
    description: ` placerat ac laoreet odio tempor Vestibulum eu ac In ipsum lobortis, tincidunt porta eget malesuada facilisis tincidunt felis, nisl. elit efficitur. tortor. ex 
      maximus vel libero, scelerisque placerat non. porta tincidunt tincidunt amet, efficitur. Praesent faucibus Donec In Sed hendrerit nec gravida Ut convallis. id `,
    background: 'bg1',
  },
  {
    heading: '1.Sketching.',
    headingNext: '2.UX/UI',
    description: ` placerat ac laoreet odio tempor Vestibulum eu ac In ipsum lobortis, tincidunt porta eget malesuada facilisis tincidunt felis, nisl. elit efficitur. tortor. ex 
      maximus vel libero, scelerisque placerat non. porta tincidunt tincidunt amet, efficitur. Praesent faucibus Donec In Sed hendrerit nec gravida Ut convallis. id `,
    background: 'bg1',
  },
  {
    heading: 'CODING.👨‍💻',
    headingNext: '1.PROJECT STRUCTURE',
    description: ` placerat ac laoreet odio tempor Vestibulum eu ac In ipsum lobortis, tincidunt porta eget malesuada facilisis tincidunt felis, nisl. elit efficitur. tortor. ex 
      maximus vel libero, scelerisque placerat non. porta tincidunt tincidunt amet, efficitur. Praesent faucibus Donec In Sed hendrerit nec gravida Ut convallis. id `,
    background: 'bg2',
  },
  {
    heading: 'DATA SCIENCE.🧑‍🔬💻',
    headingNext: '1.DATA ANALYSIS',
    description: ` placerat ac laoreet odio tempor Vestibulum eu ac In ipsum lobortis, tincidunt porta eget malesuada facilisis tincidunt felis, nisl. elit efficitur. tortor. ex 
      maximus vel libero, scelerisque placerat non. porta tincidunt tincidunt amet, efficitur. Praesent faucibus Donec In Sed hendrerit nec gravida Ut convallis. id `,
    background: 'bg3',
  },
];

const projects = [
  {
    heading: '1.SEAY NEWS',
    headingNext: '2.KSA EDU',
    projectDescription: ` placerat ac laoreet odio tempor Vestibulum eu ac In ipsum lobortis, tincidunt porta eget malesuada facilisis tincidunt felis, nisl. elit efficitur. tortor. ex 
      maximus vel libero, scelerisque placerat non. porta tincidunt tincidunt amet, efficitur. Praesent faucibus Donec In Sed hendrerit nec gravida Ut convallis. id `,
    img: pic,
  },
];

const HomePage = () => {
  return (
    <div className="home">
      <Header />

      {services.map((service) => (
        <PhilosophySection
          num={service.num}
          key={service.num}
          title={service.title}
          text={service.description}
        />
      ))}

      {steps.map((step, i) => (
        <Steps
          key={i}
          description={step.description}
          heading={step.heading}
          headingNext={step.headingNext}
          bg={step.background}
        />
      ))}

      <RecentProjectsSection />

      {projects.map((project, i) => (
        <Project
          key={i}
          img={project.img}
          projectDescription={project.projectDescription}
          heading={project.heading}
          headingNext={project.headingNext}
        />
      ))}

      <Footer />
    </div>
  );
};

export default HomePage;
