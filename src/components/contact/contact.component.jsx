import React from 'react';
import ContactCard from '../contact-card/contact-card.component';

import './contact.styles.css';

const Contact = () => (
  <section className="contact-us">
    <div className="container">
      <h2 className="heading-2">CONTACT US</h2>
      <svg
        width="1250"
        height="191"
        viewBox="0 0 1309 191"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.74969 1C-24.0891 33.1889 114.196 101.416 392.826 119.36C707.886 139.65 917.21 91.1564 1059.45 76.5249C1143.47 67.8827 1241.49 60.7435 1308 190"
          stroke="black"
          strokeDasharray="8 8"
        />
      </svg>

      <div className="contact-card-container">
        <ContactCard title={'MAIL@MAIL.COM'} />
        <ContactCard title={'@BLD.CODES'} />
      </div>
    </div>
  </section>
);
export default Contact;
