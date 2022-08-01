import React from 'react';
import './philosophy.styles.css';
import pic from './image 1.png';
import Service from '../service/service.component';

const PhilosophySection = () => (
  <section className="philosophy" id="philosophy">
    <div className="container">
      <div className="philosophy-title-content">
        <h2 className="heading-2">our philosophy</h2>
        <img src={pic} alt="our philosophy img" className="img-fluid" />
      </div>
      <svg
        width="1277"
        height="187"
        viewBox="0 0 1277 187"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9928 1C-16.8293 30.133 -6.59994 99.6893 264.894 144.851C604.262 201.303 793.188 41.8088 936.632 39.4283C1080.08 37.0478 1151.55 67.9945 1276 186"
          stroke="black"
          strokeDasharray="8 8"
        />
      </svg>
      <div className="service-container">
        <Service
          title={'1.OUR APPROACH'}
          description={`placerat ac laoreet odio tempor Vestibulum eu ac In ipsum lobortis, tincidunt porta eget malesuada facilisis tincidunt felis, nisl. elit efficitur. tortor. ex 
            maximus vel libero, scelerisque placerat non. porta tincidunt tincidunt amet, efficitur. Praesent faucibus Donec In Sed hendrerit nec gravida Ut convallis. id `}
        />
        <Service
          title={'2. OUR PHILOSOPHY'}
          description={`placerat ac laoreet odio tempor Vestibulum eu ac In ipsum lobortis, tincidunt porta eget malesuada facilisis tincidunt felis, nisl. elit efficitur. tortor. ex 
            maximus vel libero, scelerisque placerat non. porta tincidunt tincidunt amet, efficitur. Praesent faucibus Donec In Sed hendrerit nec gravida Ut convallis. id `}
        />
        <Service
          title={'3.OUR message'}
          description={`placerat ac laoreet odio tempor Vestibulum eu ac In ipsum lobortis, tincidunt porta eget malesuada facilisis tincidunt felis, nisl. elit efficitur. tortor. ex 
            maximus vel libero, scelerisque placerat non. porta tincidunt tincidunt amet, efficitur. Praesent faucibus Donec In Sed hendrerit nec gravida Ut convallis. id `}
        />
      </div>
    </div>
  </section>
);

export default PhilosophySection;
