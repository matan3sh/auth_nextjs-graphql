import Link from 'next/link';

import { motion } from 'framer-motion';
import { fadeInUp } from 'services/animation';

const ProjectCard = ({
  portfolio,
  getTechIcon,
  updatePortfolio,
  deletePortfolio,
}) => {
  return (
    <motion.div variants={fadeInUp} className='portfolio__content'>
      <img
        src={portfolio?.image}
        alt={portfolio?.title}
        className='portfolio__img'
      />
      <div className='portfolio__data'>
        <span className='portfolio__subtitle'>{portfolio?.subtitle}</span>
        <a href='/#'>
          <h2 className='portfolio__title'>{portfolio?.title}</h2>
        </a>
        <p className='portfolio__description'>
          {portfolio?.description.length > 100
            ? portfolio?.description.substr(0, 100) + '...'
            : portfolio?.description}
        </p>
        <div className='portfolio__tech'>
          {portfolio?.tech?.map((item, index) => getTechIcon(item, index))}
        </div>
      </div>
      <button
        onClick={() => updatePortfolio({ variables: { id: portfolio._id } })}
      >
        Update
      </button>
      <button
        onClick={() => deletePortfolio({ variables: { id: portfolio._id } })}
      >
        Delete
      </button>
    </motion.div>
  );
};

export default ProjectCard;
