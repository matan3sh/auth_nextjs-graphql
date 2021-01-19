import { motion } from 'framer-motion';

import { fadeInUp, slidLeft, fadeInDown } from 'services/animation';
import { LinkedInIcon, FacebookIcon, GitHubIcon } from 'components/icons';

const Showcase = () => {
  return (
    <section className='showcase' id='Home'>
      <div className='showcase__container bd-container bd-grid'>
        <motion.div variants={slidLeft} className='showcase__data'>
          <span className='showcase__greeting'>Helo, My name is</span>
          <h1 className='showcase__name'>Matan Shaviro</h1>
          <span className='showcase_role'>Full Stack Developer </span>
          <br />
          <a
            download=''
            href='CV/Matan.Shaviro.CV.pdf'
            className='button button-light'
          >
            Download CV
          </a>
        </motion.div>

        <motion.div variants={fadeInDown} className='showcase__social'>
          <a href='#/' className='showcase__social-icon'>
            <LinkedInIcon />
          </a>
          <a href='#/' className='showcase__social-icon'>
            <FacebookIcon />
          </a>
          <a href='#/' className='showcase__social-icon'>
            <GitHubIcon />
          </a>
        </motion.div>

        <motion.div variants={fadeInUp} className='showcase__img'>
          <img
            src='https://res.cloudinary.com/dwymjj6rm/image/upload/v1608232983/showcase.svg'
            alt='Matan Shaviro'
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
