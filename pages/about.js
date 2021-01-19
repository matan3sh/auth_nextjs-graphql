import { motion } from 'framer-motion';
import { fadeInUp } from 'services/animation';

import { PageLayout } from '@/components/layout';
import { PageTransition } from '@/components/shared';

const About = () => {
  return (
    <PageLayout>
      <PageTransition>
        <section className='about section bd-container' id='About'>
          <span className='section-subtitle'>My History</span>
          <h2 className='section-title'>About Me</h2>

          <motion.div variants={fadeInUp} className='about__container bd-grid'>
            <div className='about__data bd-grid'>
              <p className='about__description'>
                <span>
                  Software Engineer (B.Sc)
                  <br />
                </span>
                Throughout my working experience, I've always been on the
                technical side and I really love it. <br />I can testify about
                to myself that I have a passion for high tech, an analytical
                mindset, and creative ability to pay attention to detail. <br />
                When given the opportunity I would learn quickly and efficiently
                and will contribute a lot to success. <br />
                Experienced in creating Single Page Applications using the
                latest Web Technology such as React, Vue and Node. <br />I had a
                passion for programming since being 14 years old. Spend my spare
                time watching online courses, read and learning the newest
                frameworks released in order to expand my knowledge.
              </p>
            </div>

            <img
              src='https://res.cloudinary.com/dwymjj6rm/image/upload/v1608232934/portrait.png'
              alt='about'
              className='about__img'
            />
          </motion.div>
        </section>
      </PageTransition>
    </PageLayout>
  );
};

export default About;
