import { useState } from 'react';
import { motion } from 'framer-motion';

import { ArrowForwardIcon, ArrowBackIcon } from 'components/icons';

const ProjectImages = ({ images }) => {
  const [current, setCurrent] = useState(1);
  const length = images.length;

  const onPrev = () => {
    if (current === 0) setCurrent(2);
    else setCurrent((prev) => prev - 1);
  };
  const onNext = () => {
    if (current === length - 1) setCurrent(0);
    else setCurrent((prev) => prev + 1);
  };

  return (
    <div className='projectDetail__images'>
      <motion.img
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className='project-image'
        src={images[current === 0 ? length - 1 : current - 1]}
        alt=''
      />
      <motion.img
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className='main-image'
        src={images[current]}
        alt=''
      />
      <motion.img
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className='project-image'
        src={images[current === length - 1 ? 0 : current + 1]}
        alt=''
      />
      <div className='projectDetail__images-arrows'>
        <ArrowBackIcon className='left-arrow' onClick={onPrev} />
        <ArrowForwardIcon className='right-arrow' onClick={onNext} />
      </div>
    </div>
  );
};

export default ProjectImages;
