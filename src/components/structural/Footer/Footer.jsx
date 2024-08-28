import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section>
        Created by {' '}
        
        <a
          href="https://www.linkedin.com/in/shrutithakur20/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
           Shruti Thakur
 
        </a>
        <span className="Footer__Heart"></span> and{' '}
        <a
          href="https://www.linkedin.com/in/singh-ujjwal45/"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Ujjwal Kumar Singh
        </a>
      </section>

     
    </footer>
  );
};

export default Footer;
