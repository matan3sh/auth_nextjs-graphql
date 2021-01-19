import React from 'react';

import {
  BusinessCenterIcon,
  DateRangeIcon,
  MenuBookIcon,
  WorkIcon,
} from 'components/icons';

const experience = [
  {
    role: 'Full Stack Developer',
    company: 'GKI Group, Kfar-Saba ISR',
    period: 'Nov 2020 - Present',
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Freelance',
    period: 'Jan 2019 - Present',
  },
];

const education = [
  {
    main: 'Full Stack Developer Bootcamp',
    academy: 'Coding Academy, ISR',
    period: 'March 2020 - June 2020',
  },
  {
    main: 'Software Engineering (B.Sc)',
    academy: 'SCE - College of Engineering',
    period: 'March 2015 - July 2019',
  },
];

const Qualification = () => {
  return (
    <section className='qualification section bd-container' id='Qualification'>
      <span className='section-subtitle'>Experience and Education</span>
      <h2 className='section-title'>Qualification</h2>

      <div className='qualification__container bd-grid'>
        <div className='qualification__content'>
          <h2 className='qualification__title'>
            <WorkIcon className='qualification__title-icon' />
            Work Experience
          </h2>

          <div className='bd-grid'>
            {experience.map((item, index) => (
              <div className='qualification__data' key={index}>
                <h3 className='qualification__area'>{item.role}</h3>
                <div className='qualification__box'>
                  <span className='qualification__work'>
                    <BusinessCenterIcon className='qualification__icon' />
                    {item.company}
                  </span>
                  <span className='qualification__work'>
                    <DateRangeIcon className='qualification__icon' />
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='qualification__content'>
          <h2 className='qualification__title'>
            <MenuBookIcon className='qualification__title-icon' />
            Education
          </h2>

          <div className='bd-grid'>
            {education.map((item, index) => (
              <div className='qualification__data' key={index}>
                <h3 className='qualification__area'>{item.main}</h3>
                <div className='qualification__box'>
                  <span className='qualification__work'>
                    <BusinessCenterIcon className='qualification__icon' />
                    {item.academy}
                  </span>
                  <span className='qualification__work'>
                    <DateRangeIcon className='qualification__icon' />
                    {item.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
