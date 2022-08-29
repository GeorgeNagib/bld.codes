import React from 'react';
import './footer.styles.css';

export const Footer = () => {
  return (
    <footer id="contact">
      <div className="container footer-container">
        <h2 className="heading-2">GOT AN IDEA?</h2>
        <p>
          placerat ac laoreet odio tempor Vestibulum eu ac In ipsum lobortis,
          tincidunt porta eget malesuada facilisis tincidunt felis, nisl. elit
          efficitur. tortor. ex maximus vel libero, scelerisque placerat non.
          porta tincidunt tincidunt amet, efficitur. Praesent faucibus Donec In
          Sed hendrerit nec gravida Ut convallis. id
        </p>
        <h3 className="heading-3" data-aos="fade-right">
          LETS TALK!
        </h3>
        <div className="emails-container" data-aos="fade-up">
          <a href="mailto:Bld.codes@proton.me">Bld.codes@proton.me</a>
          <a href="#">@bld.codes</a>
        </div>
      </div>
    </footer>
  );
};
