import React from 'react';
import { LinkedInIcon, FacebookIcon, GitHubIcon } from 'components/icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__description bd-container'>
        <div className='footer__social'>
          <a href='/#' className='footer__link'>
            <LinkedInIcon />
          </a>
          <a href='/#' className='footer__link'>
            <FacebookIcon />
          </a>
          <a href='/#' className='footer__link'>
            <GitHubIcon />
          </a>
        </div>

        <p className='footer__copy'>
          &#169; 2021 Matan Shaviro. all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
