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
          title={'1.Design'}
          description={`We design not just to impress, we design to have client's attention, full attention and desire to use the product endlessly, to use it with comfort, to use it with joy. `}
        />
        <Service
          title={'2.Code'}
          description={`Our code is clean, dry, high performance, maintainable, we code with passion, we code with our souls, we are not just typing words on the keyboards, we feel our code and we make it alive.`}
        />
        <Service
          title={'3.Analysis'}
          description={`After your product is online, what's can be better than using data to understand your clients better, to make the product better for them, to use the data for your advantage, what can be better.`}
        />
      </div>
    </div>
  </section>
);

export default PhilosophySection;
