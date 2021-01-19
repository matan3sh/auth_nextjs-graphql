import React from 'react';

import { DevicesIcon, DeveloperModeIcon, HelpIcon } from 'components/icons';

const Services = () => {
  return (
    <section className='services section bd-container' id='Services'>
      <span className='section-subtitle'>What I Offer</span>
      <h2 className='section-title'>Services</h2>

      <div className='services__container bd-grid'>
        <div className='services__data'>
          <DevicesIcon className='services__icon' />
          <h3 className='services__title'>Responsive</h3>
          <p className='services__description'>
            Full responsiveness support for all different device sizes.
          </p>
          {/* <a href='#/' className='button'></a> */}
        </div>
        <div className='services__data'>
          <DeveloperModeIcon className='services__icon' />
          <h3 className='services__title'>Web Apps</h3>
          <p className='services__description'>
            Characterization, development and adaptation of the product to the
            web application.
          </p>
          {/* <a href='#/' className='button'></a> */}
        </div>
        <div className='services__data'>
          <HelpIcon className='services__icon' />
          <h3 className='services__title'>Support</h3>
          <p className='services__description'>
            Personal support and assistance to the customer all the way.
          </p>
          {/* <a href='#/' className='button'></a> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
