import React from 'react';

import { ChatIcon } from 'components/icons';

const Project = () => {
  return (
    <section className='project section bd-container' id='Project'>
      <div className='project__container bd-grid'>
        <div className='project__data'>
          <ChatIcon className='project__icon' />

          <div>
            <h2 className='project__title'>You have an idea?</h2>
            {/* <p className='project__description'>
              Contact me to carry out the following projects.
            </p> */}
          </div>

          <div>
            <a href='/#' className='button button-white'>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
